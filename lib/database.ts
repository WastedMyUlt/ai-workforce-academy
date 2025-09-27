// Simple database schema for email subscribers
// This can work with Supabase, PlanetScale, or any PostgreSQL database

export interface Subscriber {
  id: string;
  email: string;
  source: string;
  subscribed_at: string;
  status: 'active' | 'unsubscribed' | 'bounced';
  tags?: string[];
  metadata?: {
    name?: string;
    businessType?: string;
    referrer?: string;
    userAgent?: string;
  };
}

// Database operations (works with any SQL database)
export const subscriberQueries = {
  // Create subscriber
  create: `
    INSERT INTO subscribers (email, source, subscribed_at, status, tags, metadata)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `,
  
  // Check if email exists
  findByEmail: `
    SELECT * FROM subscribers WHERE email = $1;
  `,
  
  // Get all active subscribers
  getActive: `
    SELECT * FROM subscribers WHERE status = 'active' ORDER BY subscribed_at DESC;
  `,
  
  // Unsubscribe
  unsubscribe: `
    UPDATE subscribers SET status = 'unsubscribed' WHERE email = $1;
  `,
  
  // Get subscribers by source
  getBySource: `
    SELECT * FROM subscribers WHERE source = $1 AND status = 'active';
  `,
  
  // Get subscriber count
  getCount: `
    SELECT COUNT(*) as total FROM subscribers WHERE status = 'active';
  `
};

// SQL to create the table
export const createTableSQL = `
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
`;
