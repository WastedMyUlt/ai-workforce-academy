'use client'

import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/ui/Layout';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 AI Agents Every Small Business Should Build First",
    excerpt: "Discover the most impactful AI agents that can transform your business operations and save you 20+ hours per week.",
    content: "Starting your AI automation journey can feel overwhelming. With so many possibilities, where do you begin? After working with hundreds of businesses, we've identified the 5 AI agents that deliver the biggest impact for small businesses...",
    author: "AI Workforce Academy Team",
    date: "2024-01-15",
    category: "Getting Started",
    readTime: "8 min read",
    slug: "5-ai-agents-every-small-business-should-build-first"
  },
  {
    id: 2,
    title: "How to Build a Lead Research Agent That Finds 100+ Prospects Daily",
    excerpt: "Step-by-step guide to creating an AI agent that automatically researches, qualifies, and organizes leads using Apollo.io and Make.com.",
    content: "Manual lead research is a time sink. Our students regularly build AI agents that find and qualify 100+ leads per day. Here's exactly how to build one yourself...",
    author: "Sarah Chen",
    date: "2024-01-10",
    category: "Lead Generation",
    readTime: "12 min read",
    slug: "build-lead-research-agent-100-prospects-daily"
  },
  {
    id: 3,
    title: "The ROI of AI Automation: Real Numbers from 50+ Businesses",
    excerpt: "Concrete data on how AI agents impact revenue, costs, and productivity across different industries and business sizes.",
    content: "We analyzed data from 50+ businesses that implemented AI agents through our Academy. The results might surprise you...",
    author: "Marcus Rodriguez",
    date: "2024-01-05",
    category: "Case Studies",
    readTime: "10 min read",
    slug: "roi-ai-automation-real-numbers-50-businesses"
  },
  {
    id: 4,
    title: "ChatGPT vs Claude vs Gemini: Which AI Model is Best for Business Automation?",
    excerpt: "Comprehensive comparison of the top AI models for different business automation tasks, with real-world testing results.",
    content: "Not all AI models are created equal. We tested ChatGPT, Claude, and Gemini across 15 different business tasks to find the best fit for each use case...",
    author: "Jennifer Walsh",
    date: "2024-01-01",
    category: "AI Technology",
    readTime: "15 min read",
    slug: "chatgpt-vs-claude-vs-gemini-best-ai-model-business"
  },
  {
    id: 5,
    title: "Common AI Agent Mistakes That Cost Businesses Thousands",
    excerpt: "Learn from the most expensive mistakes we've seen businesses make when implementing AI agents, and how to avoid them.",
    content: "AI automation can save thousands, but poor implementation can cost even more. Here are the 7 most expensive mistakes we've seen...",
    author: "Michael Patel",
    date: "2023-12-28",
    category: "Best Practices",
    readTime: "7 min read",
    slug: "common-ai-agent-mistakes-cost-businesses-thousands"
  },
  {
    id: 6,
    title: "Building Your First Customer Support AI Agent: Complete Tutorial",
    excerpt: "Transform your customer support with an AI agent that handles 80% of inquiries. Includes templates and setup guide.",
    content: "Customer support AI agents are game-changers. This complete tutorial shows you how to build one that handles common inquiries, escalates complex issues, and maintains your brand voice...",
    author: "AI Workforce Academy Team",
    date: "2023-12-20",
    category: "Customer Support",
    readTime: "18 min read",
    slug: "building-first-customer-support-ai-agent-tutorial"
  }
];

const categories = ["All", "Getting Started", "Lead Generation", "Case Studies", "AI Technology", "Best Practices", "Customer Support"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                AI Workforce <span className="text-[#2F80ED]">Blog</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Latest strategies, tutorials, and insights for building your AI workforce
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#2F80ED] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-card">
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-[#2F80ED]/10 text-[#2F80ED] text-sm font-medium rounded-full mb-4">
                    {post.category}
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#2F80ED] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  {/* Read More Link */}
                  <div className="mt-4">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#2F80ED] hover:text-[#2967c7] font-medium"
                    >
                      Read More
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Never Miss an AI Automation Strategy
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get weekly insights, tutorials, and case studies delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="bg-white text-[#2F80ED] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              Join 5,000+ business owners building their AI workforce
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
