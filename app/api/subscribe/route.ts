import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '../../../lib/db-connection';
import { EmailService } from '../../../lib/email-service';

// Email validation utility
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Initialize services
const db = getDatabase();
const emailService = new EmailService(
  process.env.RESEND_API_KEY || 'demo-key',
  'hello@ai-workforce-academy.com'
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, businessType, source, timestamp } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Store subscriber in database
    const subscriber = await db.addSubscriber(email, source || 'unknown', {
      name: name || null,
      businessType: businessType || null,
      timestamp: timestamp || new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      referrer: request.headers.get('referer')
    });

    if (!subscriber) {
      return NextResponse.json(
        { success: false, message: 'Failed to save subscriber' },
        { status: 500 }
      );
    }

    // Send welcome email (only for new subscribers)
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'demo-key') {
      try {
        await emailService.sendWelcomeSequence(email, name);
        console.log('Welcome email sent to:', email);
      } catch (error) {
        console.error('Failed to send welcome email:', error);
        // Don't fail the request if email fails
      }
    }

    // Log for analytics
    console.log('New subscriber added:', {
      id: subscriber.id,
      email: subscriber.email,
      source: subscriber.source,
      timestamp: subscriber.subscribed_at
    });

    // Get current subscriber count for response
    const totalSubscribers = await db.getSubscriberCount();

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for subscribing! Check your email for next steps.',
        data: { email, source }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
