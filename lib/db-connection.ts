// Database connection utility - works with multiple providers
// Supports: Supabase, PlanetScale, Neon, or any PostgreSQL database

import { Subscriber, subscriberQueries } from './database';

// Simple database interface
interface DatabaseConnection {
  query(sql: string, params?: any[]): Promise<any>;
  close?(): Promise<void>;
}

// Mock database for development (stores in memory)
class MockDatabase implements DatabaseConnection {
  private subscribers: Subscriber[] = [];

  async query(sql: string, params: any[] = []): Promise<any> {
    console.log('Mock DB Query:', sql, params);
    
    if (sql.includes('INSERT INTO subscribers')) {
      const [email, source, subscribed_at, status, tags, metadata] = params;
      const subscriber: Subscriber = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        source,
        subscribed_at,
        status,
        tags,
        metadata
      };
      this.subscribers.push(subscriber);
      return { rows: [subscriber] };
    }
    
    if (sql.includes('SELECT * FROM subscribers WHERE email')) {
      const [email] = params;
      const found = this.subscribers.find(s => s.email === email);
      return { rows: found ? [found] : [] };
    }
    
    if (sql.includes('SELECT COUNT(*)')) {
      return { rows: [{ total: this.subscribers.length }] };
    }
    
    return { rows: [] };
  }
}

// Database service class
export class DatabaseService {
  private db: DatabaseConnection;

  constructor(db?: DatabaseConnection) {
    // Use provided connection or fall back to mock for development
    this.db = db || new MockDatabase();
  }

  // Add a new subscriber
  async addSubscriber(email: string, source: string, metadata?: any): Promise<Subscriber | null> {
    try {
      // Check if subscriber already exists
      const existing = await this.getSubscriberByEmail(email);
      if (existing) {
        console.log('Subscriber already exists:', email);
        return existing;
      }

      // Add new subscriber
      const result = await this.db.query(subscriberQueries.create, [
        email,
        source,
        new Date().toISOString(),
        'active',
        [], // tags
        metadata || {}
      ]);

      return result.rows[0] || null;
    } catch (error) {
      console.error('Error adding subscriber:', error);
      return null;
    }
  }

  // Get subscriber by email
  async getSubscriberByEmail(email: string): Promise<Subscriber | null> {
    try {
      const result = await this.db.query(subscriberQueries.findByEmail, [email]);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error finding subscriber:', error);
      return null;
    }
  }

  // Get all active subscribers
  async getActiveSubscribers(): Promise<Subscriber[]> {
    try {
      const result = await this.db.query(subscriberQueries.getActive);
      return result.rows || [];
    } catch (error) {
      console.error('Error getting subscribers:', error);
      return [];
    }
  }

  // Get subscriber count
  async getSubscriberCount(): Promise<number> {
    try {
      const result = await this.db.query(subscriberQueries.getCount);
      return parseInt(result.rows[0]?.total || '0');
    } catch (error) {
      console.error('Error getting subscriber count:', error);
      return 0;
    }
  }

  // Unsubscribe user
  async unsubscribe(email: string): Promise<boolean> {
    try {
      await this.db.query(subscriberQueries.unsubscribe, [email]);
      return true;
    } catch (error) {
      console.error('Error unsubscribing:', error);
      return false;
    }
  }
}

// Singleton instance
let dbService: DatabaseService | null = null;

export function getDatabase(): DatabaseService {
  if (!dbService) {
    dbService = new DatabaseService();
  }
  return dbService;
}

// Setup instructions for different providers:
/*
SUPABASE SETUP:
1. Create account at supabase.com
2. Create new project
3. Run the SQL from database.ts in the SQL editor
4. Get connection string from Settings > Database
5. Install: npm install @supabase/supabase-js
6. Use: const supabase = createClient(url, key)

PLANETSCALE SETUP:
1. Create account at planetscale.com
2. Create database
3. Install: npm install @planetscale/database
4. Get connection string
5. Run migrations

NEON SETUP:
1. Create account at neon.tech
2. Create database
3. Install: npm install @neondatabase/serverless
4. Get connection string
*/
