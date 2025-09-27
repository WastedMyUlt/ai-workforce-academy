'use client'

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Layout from '../../../components/ui/Layout';
import '../../../styles/course-page.css';

// This would normally come from a CMS or database
const blogPosts = {
  "5-ai-agents-every-small-business-should-build-first": {
    title: "5 AI Agents Every Small Business Should Build First",
    content: `
      <p>Starting your AI automation journey can feel overwhelming. With so many possibilities, where do you begin?</p>
      
      <p>After working with hundreds of businesses through the AI Workforce Academy, we've identified the 5 AI agents that deliver the biggest impact for small businesses. These agents typically pay for themselves within 30 days and can save you 20+ hours per week.</p>
      
      <h2>1. Customer Support Agent</h2>
      <p>This should be your first AI agent. A well-configured customer support agent can handle 80% of routine inquiries, freeing up your team for complex issues.</p>
      
      <p><strong>What it does:</strong></p>
      <ul>
        <li>Answers frequently asked questions</li>
        <li>Provides order status updates</li>
        <li>Handles returns and exchanges</li>
        <li>Escalates complex issues to humans</li>
      </ul>
      
      <p><strong>Expected ROI:</strong> 300-500% within 3 months</p>
      
      <h2>2. Lead Research Agent</h2>
      <p>Manual lead research is a massive time sink. This agent finds and qualifies prospects automatically.</p>
      
      <p><strong>What it does:</strong></p>
      <ul>
        <li>Searches for prospects matching your ICP</li>
        <li>Enriches contact information</li>
        <li>Scores leads based on qualification criteria</li>
        <li>Updates your CRM automatically</li>
      </ul>
      
      <p><strong>Expected ROI:</strong> 400-600% within 2 months</p>
      
      <h2>3. Content Creation Agent</h2>
      <p>Consistent content creation is crucial but time-consuming. This agent maintains your content calendar.</p>
      
      <p><strong>What it does:</strong></p>
      <ul>
        <li>Generates blog post ideas and outlines</li>
        <li>Creates social media content</li>
        <li>Writes email newsletters</li>
        <li>Maintains brand voice consistency</li>
      </ul>
      
      <p><strong>Expected ROI:</strong> 250-400% within 4 months</p>
      
      <h2>4. Email Follow-up Agent</h2>
      <p>Following up with leads is critical but often forgotten. This agent ensures no lead falls through the cracks.</p>
      
      <p><strong>What it does:</strong></p>
      <ul>
        <li>Sends personalized follow-up sequences</li>
        <li>Tracks engagement and responses</li>
        <li>Adjusts timing based on recipient behavior</li>
        <li>Alerts you when human intervention is needed</li>
      </ul>
      
      <p><strong>Expected ROI:</strong> 300-500% within 2 months</p>
      
      <h2>5. Data Analysis Agent</h2>
      <p>Making data-driven decisions requires analyzing data regularly. This agent provides insights automatically.</p>
      
      <p><strong>What it does:</strong></p>
      <ul>
        <li>Generates weekly performance reports</li>
        <li>Identifies trends and anomalies</li>
        <li>Provides actionable recommendations</li>
        <li>Monitors key business metrics</li>
      </ul>
      
      <p><strong>Expected ROI:</strong> 200-350% within 6 months</p>
      
      <h2>Getting Started</h2>
      <p>We recommend starting with the Customer Support Agent, as it typically has the fastest payback and highest impact on customer satisfaction.</p>
      
      <p>Ready to build your first AI agent? <a href="/courses/lead-research-agent">Start with our free Lead Research Agent course</a> to get hands-on experience.</p>
    `,
    author: "AI Workforce Academy Team",
    date: "2024-01-15",
    category: "Getting Started",
    readTime: "8 min read"
  },
  "build-lead-research-agent-100-prospects-daily": {
    title: "How to Build a Lead Research Agent That Finds 100+ Prospects Daily",
    content: `
      <p>Manual lead research is one of the biggest time sinks in sales and marketing. Our students regularly build AI agents that find and qualify 100+ leads per day. Here's exactly how to build one yourself.</p>
      
      <h2>The Problem with Manual Lead Research</h2>
      <p>Most businesses spend 60-80% of their prospecting time on research:</p>
      <ul>
        <li>Finding companies that match your ICP</li>
        <li>Identifying decision makers</li>
        <li>Gathering contact information</li>
        <li>Qualifying leads based on criteria</li>
        <li>Updating CRM systems</li>
      </ul>
      
      <p>This process typically takes 15-30 minutes per lead. With an AI agent, you can reduce this to under 2 minutes per lead while improving accuracy.</p>
      
      <h2>Tools You'll Need</h2>
      <ul>
        <li><strong>Apollo.io:</strong> For prospect data and contact information</li>
        <li><strong>Make.com:</strong> For workflow automation</li>
        <li><strong>OpenAI API:</strong> For intelligent lead qualification</li>
        <li><strong>Google Sheets:</strong> For lead storage and tracking</li>
      </ul>
      
      <h2>Step 1: Define Your Ideal Customer Profile</h2>
      <p>Before building the agent, clearly define your ICP:</p>
      <ul>
        <li>Industry and sub-industry</li>
        <li>Company size (employees/revenue)</li>
        <li>Geographic location</li>
        <li>Technology stack (if relevant)</li>
        <li>Growth stage and funding</li>
      </ul>
      
      <h2>Step 2: Set Up Apollo.io Integration</h2>
      <p>Configure Apollo.io to search for companies matching your ICP. The key is creating saved searches that you can automate.</p>
      
      <h2>Step 3: Build the Make.com Workflow</h2>
      <p>Your workflow should include these modules:</p>
      <ol>
        <li><strong>Apollo Search:</strong> Find companies matching criteria</li>
        <li><strong>Data Enrichment:</strong> Gather additional company information</li>
        <li><strong>AI Qualification:</strong> Score leads using ChatGPT</li>
        <li><strong>CRM Update:</strong> Add qualified leads to your system</li>
      </ol>
      
      <h2>Step 4: Create Qualification Prompts</h2>
      <p>The AI qualification is crucial. Here's a sample prompt:</p>
      
      <blockquote>
        <p>"Analyze this company and score it from 0-100 based on fit for [your service]. Consider: industry relevance, company size, growth indicators, technology stack, and recent news. Provide score and 2-sentence justification."</p>
      </blockquote>
      
      <h2>Results You Can Expect</h2>
      <p>Our students typically see:</p>
      <ul>
        <li><strong>Volume:</strong> 100-300 leads researched per day</li>
        <li><strong>Quality:</strong> 85%+ accuracy in lead scoring</li>
        <li><strong>Time Savings:</strong> 90% reduction in research time</li>
        <li><strong>Cost:</strong> $0.10-0.30 per lead (vs $5-15 manual)</li>
      </ul>
      
      <h2>Ready to Build?</h2>
      <p>This is exactly what we teach in our <a href="/courses/lead-research-agent">free Lead Research Agent course</a>. You'll get the complete Make.com template, ChatGPT prompts, and step-by-step video tutorials.</p>
    `,
    author: "Sarah Chen",
    date: "2024-01-10",
    category: "Lead Generation",
    readTime: "12 min read"
  }
  // Add more blog posts as needed
};

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-[#2F80ED] hover:text-[#2967c7]">
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Article */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 lg:p-12">
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-[#2F80ED]/10 text-[#2F80ED] text-sm font-medium rounded-full mb-6">
                {post.category}
              </div>
              
              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              
              {/* Meta Info */}
              <div className="flex items-center text-gray-500 mb-8 pb-8 border-b border-gray-200">
                <span className="font-medium">{post.author}</span>
                <span className="mx-2">•</span>
                <span>{formatDate(post.date)}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              
              {/* Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-[#2F80ED] prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] rounded-xl p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-3">Ready to Build Your AI Workforce?</h3>
                  <p className="mb-4 opacity-90">Start with our free Lead Research Agent course</p>
                  <Link href="/courses/lead-research-agent" className="btn-accent">
                    Start Free Course
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Continue Reading</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog" className="bg-white rounded-xl shadow-lg p-6 hover-card">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">More AI Automation Strategies</h4>
                <p className="text-gray-600">Explore our complete library of tutorials and case studies</p>
              </Link>
              <Link href="/courses" className="bg-white rounded-xl shadow-lg p-6 hover-card">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Free AI Agent Course</h4>
                <p className="text-gray-600">Learn to build your first AI agent step-by-step</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
