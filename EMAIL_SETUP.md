# 📧 Custom Email System Setup

Your custom email system is now ready! Here's how to set it up for production:

## 🚀 Quick Start (Development)

The system works out of the box with mock data for testing:

1. **Test the forms** - Try submitting emails on your site
2. **Check console** - See subscriber data logged
3. **Visit admin** - Go to `/admin` to see subscriber dashboard

## 💰 Production Setup Options

### Option 1: Resend + Supabase (Recommended - $20/month)

**Step 1: Setup Resend (Email Sending)**
```bash
# 1. Sign up at resend.com
# 2. Get API key from dashboard
# 3. Add to your environment:
RESEND_API_KEY=re_your_api_key_here
```

**Step 2: Setup Supabase (Database)**
```bash
# 1. Sign up at supabase.com
# 2. Create new project
# 3. Go to SQL Editor and run:
```

```sql
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  source VARCHAR(100) NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'active',
  tags TEXT[],
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_status ON subscribers(status);
CREATE INDEX IF NOT EXISTS idx_subscribers_source ON subscribers(source);
```

```bash
# 4. Get connection details from Settings > Database
# 5. Add to environment:
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
```

### Option 2: Resend + PlanetScale ($25/month)

```bash
# 1. Sign up at planetscale.com
# 2. Create database
# 3. Install CLI: npm install -g @planetscale/cli
# 4. Connect and run migrations
# 5. Add connection string:
DATABASE_URL=mysql://username:password@host/database
```

### Option 3: Resend + Neon ($20/month)

```bash
# 1. Sign up at neon.tech
# 2. Create database
# 3. Run SQL schema
# 4. Add connection string:
DATABASE_URL=postgresql://username:password@host/database
```

## 🔧 Environment Variables

Create `.env.local` file:

```bash
# Email Service (Required for sending emails)
RESEND_API_KEY=re_your_api_key_here

# Database (Choose one)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here

# OR
DATABASE_URL=postgresql://username:password@host/database

# Optional: Custom domain for emails
FROM_EMAIL=hello@yourdomain.com
```

## 📊 Features Included

✅ **Email Collection** - Forms automatically save to database  
✅ **Welcome Emails** - Automatic welcome sequence  
✅ **Admin Dashboard** - View subscribers at `/admin`  
✅ **Export Data** - Download CSV of all subscribers  
✅ **Source Tracking** - Know where subscribers came from  
✅ **Duplicate Prevention** - Won't add same email twice  
✅ **Email Validation** - Server and client-side validation  

## 💸 Cost Comparison

| Service | Monthly Cost | Subscribers | Emails/Month |
|---------|-------------|-------------|--------------|
| **Custom System** | $20 | Unlimited | 100,000 |
| Mailchimp | $10-300+ | 2,000-50,000 | Limited |
| ConvertKit | $29-79+ | 1,000-5,000 | Unlimited |

**Break-even point**: ~500 subscribers

## 🎯 Next Steps

1. **Choose your stack** (Resend + Supabase recommended)
2. **Set up accounts** and get API keys
3. **Add environment variables** to your project
4. **Test in production** - Submit a real email
5. **Customize email templates** in `lib/email-service.ts`

## 🔄 Email Automation Ideas

- Welcome sequence (Day 1, 3, 7)
- Weekly AI tips newsletter
- Course launch announcements
- Abandoned cart recovery
- Re-engagement campaigns

## 🛠 Advanced Features (Optional)

- **Segments**: Tag subscribers by source/interest
- **A/B Testing**: Test different email templates
- **Analytics**: Track open rates, click rates
- **Webhooks**: Connect to other tools
- **Unsubscribe**: One-click unsubscribe links

Your email system is production-ready and will scale to thousands of subscribers!
