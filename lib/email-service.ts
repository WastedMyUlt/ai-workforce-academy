// Custom email service using Resend (or any SMTP service)
// Much cheaper than Mailchimp and fully customizable

interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

interface SendEmailOptions {
  to: string;
  template: 'welcome' | 'course-intro' | 'weekly-tips';
  data?: Record<string, any>;
}

// Email templates
const templates: Record<string, EmailTemplate> = {
  welcome: {
    subject: 'Welcome to AI Workforce Academy! 🚀',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2F80ED, #9B51E0); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to AI Workforce Academy!</h1>
        </div>
        <div style="padding: 40px 20px; background: white;">
          <h2 style="color: #2F80ED;">You're in! Here's what happens next:</h2>
          <div style="margin: 30px 0;">
            <div style="display: flex; align-items: center; margin: 20px 0;">
              <div style="background: #2F80ED; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">1</div>
              <div>
                <strong>Check your email tomorrow</strong> - We'll send you the first lesson on AI agent fundamentals
              </div>
            </div>
            <div style="display: flex; align-items: center; margin: 20px 0;">
              <div style="background: #9B51E0; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">2</div>
              <div>
                <strong>Join our community</strong> - Connect with other AI implementers
              </div>
            </div>
            <div style="display: flex; align-items: center; margin: 20px 0;">
              <div style="background: #0A0F1C; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">3</div>
              <div>
                <strong>Build your first agent</strong> - Follow our step-by-step guide
              </div>
            </div>
          </div>
          <div style="text-align: center; margin: 40px 0;">
            <a href="https://ai-workforce-academy.com/getting-started" style="background: #2F80ED; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block;">Get Started Now</a>
          </div>
        </div>
        <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666;">
          <p>Questions? Just reply to this email - we read every message!</p>
          <p><a href="{{unsubscribe_url}}" style="color: #666;">Unsubscribe</a></p>
        </div>
      </div>
    `,
    text: `Welcome to AI Workforce Academy!

You're in! Here's what happens next:

1. Check your email tomorrow - We'll send you the first lesson on AI agent fundamentals
2. Join our community - Connect with other AI implementers  
3. Build your first agent - Follow our step-by-step guide

Get started: https://ai-workforce-academy.com/getting-started

Questions? Just reply to this email - we read every message!`
  },

  'course-intro': {
    subject: 'Lesson 1: Your First AI Agent in 24 Hours',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2F80ED;">Lesson 1: Build Your First AI Agent</h1>
        <p>Ready to create an AI agent that works 24/7? Let's start with something simple but powerful...</p>
        <!-- Course content here -->
      </div>
    `,
    text: 'Lesson 1: Build Your First AI Agent\n\nReady to create an AI agent that works 24/7?...'
  },

  'weekly-tips': {
    subject: 'Weekly AI Tips: {{week_topic}}',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2F80ED;">This Week: {{week_topic}}</h1>
        <p>{{content}}</p>
      </div>
    `,
    text: 'This Week: {{week_topic}}\n\n{{content}}'
  }
};

// Email service class
export class EmailService {
  private apiKey: string;
  private fromEmail: string;

  constructor(apiKey: string, fromEmail: string = 'hello@ai-workforce-academy.com') {
    this.apiKey = apiKey;
    this.fromEmail = fromEmail;
  }

  // Send email using Resend API (or any SMTP service)
  async sendEmail({ to, template, data = {} }: SendEmailOptions) {
    const emailTemplate = templates[template];
    if (!emailTemplate) {
      throw new Error(`Template '${template}' not found`);
    }

    // Replace template variables
    const subject = this.replaceVariables(emailTemplate.subject, data);
    const html = this.replaceVariables(emailTemplate.html, data);
    const text = this.replaceVariables(emailTemplate.text, data);

    try {
      // Using Resend API (replace with your preferred service)
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: this.fromEmail,
          to: [to],
          subject,
          html,
          text,
        }),
      });

      if (!response.ok) {
        throw new Error(`Email API error: ${response.status}`);
      }

      const result = await response.json();
      console.log('Email sent successfully:', { to, template, id: result.id });
      return { success: true, id: result.id };
    } catch (error) {
      console.error('Email sending failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  // Replace template variables like {{name}} with actual values
  private replaceVariables(template: string, data: Record<string, any>): string {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return data[key] || match;
    });
  }

  // Send welcome email sequence
  async sendWelcomeSequence(email: string, name?: string) {
    // Send immediate welcome email
    await this.sendEmail({
      to: email,
      template: 'welcome',
      data: { name: name || 'there' }
    });

    // Schedule follow-up emails (you'd use a job queue in production)
    // For now, just log what would be scheduled
    console.log('Scheduled email sequence for:', email);
    console.log('- Day 1: Course intro email');
    console.log('- Day 3: First agent tutorial');
    console.log('- Day 7: Community invitation');
  }
}

// Usage example:
// const emailService = new EmailService(process.env.RESEND_API_KEY!);
// await emailService.sendWelcomeSequence('user@example.com', 'John');
