'use client'

import Link from 'next/link';
import Layout from '../../components/ui/Layout';

const aiAgents = [
  {
    id: 'lead-research-agent',
    title: 'Lead Research Agent',
    description: 'Automatically find and qualify 100+ leads per day using Apollo.io, Make.com, and ChatGPT.',
    benefits: [
      'Finds 25-100+ qualified leads daily',
      'Researches companies automatically', 
      'Scores leads based on buying signals',
      'Integrates with your CRM'
    ],
    difficulty: 'Beginner',
    timeToValue: '24 hours',
    roi: '400-600%',
    tools: ['Apollo.io', 'Make.com', 'OpenAI', 'Google Sheets'],
    status: 'available',
    isFree: true,
    href: '/courses/lead-research-agent'
  },
  {
    id: 'content-creation-agent',
    title: 'Content Creation Agent',
    description: 'Generate blog posts, social media content, and newsletters automatically while maintaining your brand voice.',
    benefits: [
      'Creates 10+ pieces of content daily',
      'Maintains consistent brand voice',
      'Generates ideas and outlines',
      'Optimizes for SEO automatically'
    ],
    difficulty: 'Beginner',
    timeToValue: '48 hours',
    roi: '250-400%',
    tools: ['OpenAI', 'Make.com', 'WordPress', 'Buffer'],
    status: 'coming-soon',
    isFree: false,
    href: '/courses'
  },
  {
    id: 'customer-support-agent',
    title: 'Customer Support Agent',
    description: 'Handle 80% of customer inquiries automatically with intelligent responses and escalation rules.',
    benefits: [
      'Handles 80% of routine inquiries',
      'Provides instant 24/7 support',
      'Escalates complex issues to humans',
      'Maintains customer satisfaction'
    ],
    difficulty: 'Intermediate',
    timeToValue: '3-5 days',
    roi: '300-500%',
    tools: ['OpenAI', 'Zendesk', 'Make.com', 'Slack'],
    status: 'coming-soon',
    isFree: false,
    href: '/courses'
  },
  {
    id: 'email-followup-agent',
    title: 'Email Follow-up Agent',
    description: 'Never miss a follow-up again with intelligent email sequences that adapt based on recipient behavior.',
    benefits: [
      'Sends personalized follow-ups',
      'Tracks engagement automatically',
      'Adjusts timing based on behavior',
      'Increases response rates by 40%'
    ],
    difficulty: 'Beginner',
    timeToValue: '2-3 days',
    roi: '300-500%',
    tools: ['OpenAI', 'Make.com', 'Gmail', 'HubSpot'],
    status: 'coming-soon',
    isFree: false,
    href: '/courses'
  },
  {
    id: 'social-media-agent',
    title: 'Social Media Agent',
    description: 'Post consistently across all platforms with AI-generated content that matches your brand voice.',
    benefits: [
      'Posts 5-10 times daily across platforms',
      'Creates platform-specific content',
      'Schedules optimal posting times',
      'Engages with comments automatically'
    ],
    difficulty: 'Intermediate',
    timeToValue: '3-5 days',
    roi: '200-350%',
    tools: ['OpenAI', 'Buffer', 'Make.com', 'Canva'],
    status: 'coming-soon',
    isFree: false,
    href: '/courses'
  },
  {
    id: 'data-analysis-agent',
    title: 'Data Analysis Agent',
    description: 'Transform raw business data into actionable insights with automated reports and trend analysis.',
    benefits: [
      'Generates weekly performance reports',
      'Identifies trends and anomalies',
      'Provides actionable recommendations',
      'Monitors key business metrics'
    ],
    difficulty: 'Advanced',
    timeToValue: '5-7 days',
    roi: '200-350%',
    tools: ['OpenAI', 'Google Analytics', 'Make.com', 'Tableau'],
    status: 'coming-soon',
    isFree: false,
    href: '/courses'
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'bg-green-100 text-green-800';
    case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
    case 'Advanced': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function AIAgentsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                AI <span className="text-[#2F80ED]">Agents</span> Library
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the AI agents that can transform your business operations. Each agent is designed to automate specific tasks and deliver measurable ROI.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Agent - Lead Research */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
                    🎁 FREE Course Available
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Start with Lead Research Agent</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Perfect for beginners. Build an AI agent that finds 100+ qualified leads per day automatically.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Complete Make.com workflow template
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Proven ChatGPT prompts included
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Google Sheets tracking template
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-xl p-6">
                    <div className="text-sm opacity-90">Typical Results</div>
                    <div className="text-3xl font-bold">100+ Leads/Day</div>
                    <div className="text-sm opacity-90 mt-2">400-600% ROI</div>
                    <div className="mt-4">
                      <Link href="/courses/lead-research-agent" className="bg-white text-[#2F80ED] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Start Free Course
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All AI Agents Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete AI Agents Library</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiAgents.map((agent) => (
                <div key={agent.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-card relative">
                  {/* Status Badge */}
                  {agent.status === 'coming-soon' && (
                    <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      Coming Soon
                    </div>
                  )}
                  {agent.isFree && (
                    <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      FREE
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{agent.title}</h3>
                    <p className="text-gray-600 mb-4">{agent.description}</p>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {agent.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Difficulty:</span>
                        <div className={`inline-block ml-2 px-2 py-1 rounded-full text-xs ${getDifficultyColor(agent.difficulty)}`}>
                          {agent.difficulty}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">ROI:</span>
                        <span className="ml-2 font-semibold text-[#2F80ED]">{agent.roi}</span>
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="mb-4">
                      <span className="text-xs text-gray-500">Tools: </span>
                      <span className="text-xs text-gray-600">{agent.tools.join(', ')}</span>
                    </div>

                    {/* CTA */}
                    <Link 
                      href={agent.href}
                      className={`block text-center py-2 px-4 rounded-lg font-medium transition-colors ${
                        agent.status === 'available' 
                          ? 'bg-[#2F80ED] text-white hover:bg-[#2967c7]'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {agent.status === 'available' 
                        ? (agent.isFree ? 'Start Free Course' : 'Learn More')
                        : 'View in Academy'
                      }
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Build Your AI Workforce?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start with our free Lead Research Agent course, then unlock the full library with Academy membership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses/lead-research-agent" className="btn-primary px-8 py-3">
                Start Free Course
              </Link>
              <Link href="/pricing" className="btn-accent px-8 py-3">
                View Academy Pricing
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Join 500+ businesses already building their AI workforce
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
