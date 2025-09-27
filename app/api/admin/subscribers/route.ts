import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '../../../../lib/db-connection';

const db = getDatabase();

export async function GET(request: NextRequest) {
  try {
    // Get all subscribers
    const subscribers = await db.getActiveSubscribers();
    const totalCount = await db.getSubscriberCount();
    
    // Calculate stats
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const todayCount = subscribers.filter(s => 
      new Date(s.subscribed_at) >= today
    ).length;
    
    const weekCount = subscribers.filter(s => 
      new Date(s.subscribed_at) >= weekAgo
    ).length;

    return NextResponse.json({
      success: true,
      subscribers: subscribers.slice(0, 100), // Limit to 100 for performance
      stats: {
        total: totalCount,
        today: todayCount,
        thisWeek: weekCount
      }
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
}
