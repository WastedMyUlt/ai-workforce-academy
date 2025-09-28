'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../../components/ui/Layout';
import '../../../styles/course-page.css';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  description: string;
  isCompleted: boolean;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: 'AI Support Overview & Strategy',
    duration: '10 min',
    description: 'Understanding AI customer support and planning your implementation',
    isCompleted: false
  },
  {
    id: 2,
    title: 'Zendesk Integration Setup',
    duration: '15 min',
    description: 'Connect and configure Zendesk for AI-powered ticket management',
    isCompleted: false
  },
  {
    id: 3,
    title: 'AI Ticket Classification',
    duration: '18 min',
    description: 'Set up intelligent ticket routing and priority classification',
    isCompleted: false
  },
  {
    id: 4,
    title: 'Response Generation',
    duration: '16 min',
    description: 'Configure AI to generate professional customer responses',
    isCompleted: false
  },
  {
    id: 5,
    title: 'Knowledge Base Integration',
    duration: '14 min',
    description: 'Connect your knowledge base for accurate AI responses',
    isCompleted: false
  },
  {
    id: 6,
    title: 'Testing & Optimization',
    duration: '12 min',
    description: 'Test your AI support system and optimize for better results',
    isCompleted: false
  }
];

export default function CustomerSupportAICourse() {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  // Handle URL hash navigation (e.g., #lesson-1, #lesson-2)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#lesson-')) {
        const lessonNumber = parseInt(hash.replace('#lesson-', ''));
        if (lessonNumber >= 1 && lessonNumber <= lessons.length) {
          setCurrentLesson(lessonNumber);
        }
      }
    };

    // Check hash on initial load
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Load/save progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('customer-support-progress')
      if (saved) {
        const { current, completed } = JSON.parse(saved)
        if (typeof current === 'number') {
          // Only set from localStorage if there's no hash in URL
          if (!window.location.hash.startsWith('#lesson-')) {
            setCurrentLesson(current)
          }
        }
        if (Array.isArray(completed)) setCompletedLessons(completed)
      }
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(
        'customer-support-progress',
        JSON.stringify({ current: currentLesson, completed: completedLessons })
      )
    } catch {}
  }, [currentLesson, completedLessons])

  const markLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const navigateToLesson = (lessonId: number) => {
    setCurrentLesson(lessonId);
    // Update URL hash without triggering page reload
    window.history.pushState(null, '', `#lesson-${lessonId}`);
  };

  const currentLessonData = lessons.find(lesson => lesson.id === currentLesson);
  const progress = (completedLessons.length / lessons.length) * 100;

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/courses" className="text-gray-600 hover:text-[#2F80ED]">
                ← Back to Courses
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Customer Support Agent</h1>
                <p className="text-sm text-gray-600">Build an intelligent customer support automation system</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Progress: {Math.round(progress)}%
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="lesson-progress-bar h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Lesson List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Lessons</h3>
              <div className="space-y-3">
                {lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => navigateToLesson(lesson.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#2F80ED] focus:ring-offset-2 ${
                      currentLesson === lesson.id
                        ? 'bg-[#2F80ED] text-white'
                        : completedLessons.includes(lesson.id)
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                    aria-pressed={currentLesson === lesson.id}
                    aria-describedby={`lesson-${lesson.id}-description`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                          completedLessons.includes(lesson.id)
                            ? 'bg-green-500 text-white'
                            : currentLesson === lesson.id
                            ? 'bg-white text-[#2F80ED]'
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {completedLessons.includes(lesson.id) ? '✓' : lesson.id}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{lesson.title}</div>
                          <div className={`text-xs ${
                            currentLesson === lesson.id ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {lesson.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Course Resources */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Course Resources</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-3">Download these professional templates and guides to implement your AI Customer Support Agent:</p>
                    <div className="space-y-2">
                      <a href="/resources/support-workflow-template.json" download className="flex items-center text-sm text-[#2F80ED] hover:underline">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Support Workflow Template (JSON) - Complete automation blueprint
                      </a>
                      <a href="/resources/knowledge-base-template.md" download className="flex items-center text-sm text-[#2F80ED] hover:underline">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Knowledge Base Template - Structured FAQ and documentation template
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Lesson Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#2F80ED] text-white rounded-full flex items-center justify-center font-semibold">
                      {currentLesson}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{currentLessonData?.title}</h2>
                      <p className="text-gray-600">{currentLessonData?.duration} • {currentLessonData?.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => markLessonComplete(currentLesson)}
                    disabled={completedLessons.includes(currentLesson)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      completedLessons.includes(currentLesson)
                        ? 'bg-green-100 text-green-800 cursor-not-allowed'
                        : 'bg-[#2F80ED] text-white hover:bg-blue-600'
                    }`}
                  >
                    {completedLessons.includes(currentLesson) ? '✓ Completed' : 'Mark Complete'}
                  </button>
                </div>
              </div>

              {/* Lesson Content */}
              <div className="prose prose-lg max-w-none">
                {currentLesson === 1 && (
                  <div>
                    <h3>AI Support Overview & Strategy</h3>
                    <p>Learn how AI can transform your customer support operations and plan your implementation strategy.</p>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <h4 className="text-red-800 font-semibold mb-3">💰 Course Investment Required</h4>
                      <p className="text-red-700 text-sm mb-4">Here's what you'll need to invest to build your AI support system:</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded p-3">
                          <h5 className="font-semibold text-green-800 mb-2">🚀 Starter Setup: $153-203/month</h5>
                          <ul className="text-xs space-y-1">
                            <li>• Make.com Core: $29/month</li>
                            <li>• OpenAI API: $75-125/month</li>
                            <li>• Zendesk Suite: $49/month</li>
                            <li>• Google Workspace: Free-$6/month</li>
                          </ul>
                          <p className="text-xs text-green-600 mt-2"><strong>Realistic outcome:</strong> Handle 30-50% of tickets automatically, save 10-20 hours/week</p>
                        </div>
                        
                        <div className="bg-white rounded p-3">
                          <h5 className="font-semibold text-blue-800 mb-2">📈 Enterprise: $278-428/month</h5>
                          <ul className="text-xs space-y-1">
                            <li>• Make.com Pro: $59/month</li>
                            <li>• OpenAI API: $150-300/month</li>
                            <li>• Zendesk Professional: $99/month</li>
                            <li>• Advanced integrations: $20/month</li>
                            <li>• Analytics tools: $49/month</li>
                          </ul>
                          <p className="text-xs text-blue-600 mt-2"><strong>Realistic outcome:</strong> Handle 60-80% of tickets automatically, save 20-40 hours/week</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-yellow-100 rounded">
                        <p className="text-xs text-yellow-800">
                          <strong>⚡ Honest Timeline:</strong> Setup takes 2-4 weeks. You'll see immediate time savings, but it takes 2-3 months to optimize AI responses and achieve 60%+ automation rates.
                        </p>
                      </div>
                      
                      <div className="mt-2 p-3 bg-orange-100 rounded">
                        <p className="text-xs text-orange-800">
                          <strong>⚠️ Prerequisites:</strong> You need existing customer support volume (50+ tickets/month) to justify the investment. Works best for businesses with established support processes.
                        </p>
                      </div>
                    </div>
                    
                    <h4>What You'll Learn:</h4>
                    <ul>
                      <li>How AI can improve response times and consistency</li>
                      <li>Setting up ticket classification and routing</li>
                      <li>Planning your knowledge base structure</li>
                      <li>Defining escalation procedures</li>
                    </ul>

                    <h4>Benefits of AI Customer Support</h4>
                    <ul>
                      <li><strong>24/7 Availability:</strong> Never miss a customer inquiry</li>
                      <li><strong>Instant Responses:</strong> Reduce response time from hours to seconds</li>
                      <li><strong>Consistent Quality:</strong> Every response follows your brand guidelines</li>
                      <li><strong>Scalability:</strong> Handle 10x more tickets without hiring more staff</li>
                      <li><strong>Cost Savings:</strong> Reduce support costs by 60-80%</li>
                    </ul>

                    <h4>Planning Your Implementation</h4>
                    <p>Before setting up your AI support system, consider:</p>
                    <ol>
                      <li><strong>Current Support Volume:</strong> How many tickets do you receive daily?</li>
                      <li><strong>Common Issues:</strong> What are the top 10 most frequent questions?</li>
                      <li><strong>Response Time Goals:</strong> What's your target response time?</li>
                      <li><strong>Escalation Criteria:</strong> When should tickets go to human agents?</li>
                    </ol>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5>💡 Pro Tip</h5>
                      <p>Start by automating responses to your top 5 most common questions. This alone can reduce your support workload by 40-60%.</p>
                    </div>
                  </div>
                )}

                {currentLesson === 2 && (
                  <div>
                    <h3>Zendesk Integration Setup</h3>
                    <p>Connect and configure Zendesk to work seamlessly with your AI support system.</p>
                    
                    <h4>Step 1: Zendesk Account Setup</h4>
                    <ol>
                      <li>Go to <a href="https://zendesk.com" target="_blank" rel="noopener noreferrer">Zendesk.com</a> and create an account</li>
                      <li>Choose the Support plan that fits your needs</li>
                      <li>Complete the initial setup wizard</li>
                      <li>Configure your support email address</li>
                    </ol>

                    <h4>Step 2: API Configuration</h4>
                    <ol>
                      <li>In Zendesk, go to Admin → Channels → API</li>
                      <li>Enable "Token access"</li>
                      <li>Generate a new API token</li>
                      <li>Copy and save the token securely</li>
                    </ol>

                    <h4>Step 3: Webhook Setup</h4>
                    <ol>
                      <li>Navigate to Admin → Extensions → Webhooks</li>
                      <li>Create a new webhook</li>
                      <li>Set the endpoint URL (you'll get this from Make.com)</li>
                      <li>Configure triggers for new tickets</li>
                    </ol>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5>⚠️ Important</h5>
                      <p>Keep your API token secure and never share it publicly. You'll need it to connect Make.com to Zendesk.</p>
                    </div>
                  </div>
                )}

                {currentLesson === 3 && (
                  <div>
                    <h3>AI Ticket Classification</h3>
                    <p>Set up intelligent systems to automatically classify and route support tickets.</p>
                    
                    <h4>Classification Categories</h4>
                    <p>Your AI will classify tickets into these categories:</p>
                    <ul>
                      <li><strong>TECHNICAL:</strong> Bug reports, feature issues, integration problems</li>
                      <li><strong>BILLING:</strong> Payment issues, subscription changes, invoicing</li>
                      <li><strong>GENERAL:</strong> General questions, how-to requests</li>
                      <li><strong>URGENT:</strong> Service outages, security issues, critical problems</li>
                      <li><strong>REFUND:</strong> Refund requests, cancellations</li>
                    </ul>

                    <h4>Priority Levels</h4>
                    <ul>
                      <li><strong>HIGH:</strong> Urgent issues, paying customers, service outages</li>
                      <li><strong>MEDIUM:</strong> Standard support requests, feature questions</li>
                      <li><strong>LOW:</strong> General inquiries, documentation requests</li>
                    </ul>

                    <h4>Routing Rules</h4>
                    <p>Based on classification, tickets are automatically routed:</p>
                    <ul>
                      <li><strong>HIGH + URGENT:</strong> Immediate human escalation + Slack notification</li>
                      <li><strong>BILLING:</strong> AI response + billing team notification</li>
                      <li><strong>TECHNICAL:</strong> AI response + technical team assignment</li>
                      <li><strong>GENERAL:</strong> AI response + standard queue</li>
                    </ul>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5>✅ Success Tip</h5>
                      <p>Review and refine your classification rules weekly based on actual ticket data to improve accuracy.</p>
                    </div>
                  </div>
                )}

                {currentLesson === 4 && (
                  <div>
                    <h3>Response Generation</h3>
                    <p>Configure AI to generate professional, helpful customer responses that match your brand voice and resolve issues effectively.</p>
                    
                    <h4>What You'll Learn:</h4>
                    <ul>
                      <li>Setting up AI response generation workflows</li>
                      <li>Creating brand-consistent response templates</li>
                      <li>Handling different types of customer inquiries</li>
                      <li>Quality control and escalation procedures</li>
                    </ul>

                    <h4>Step 1: Response Template Setup</h4>
                    <p>Create AI prompts for different types of customer inquiries:</p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5>Technical Support Response Template</h5>
                      <div className="bg-white p-3 rounded border font-mono text-sm">
                        <p><strong>Prompt:</strong> "You are a helpful technical support agent for [COMPANY NAME]. A customer has submitted this ticket: [TICKET_CONTENT]. 
                        
                        Respond professionally with:
                        1. Acknowledge their issue with empathy
                        2. Provide clear, step-by-step solution
                        3. Offer additional help if needed
                        4. Use friendly but professional tone
                        
                        If you cannot solve the issue, escalate to human support with a summary."</p>
                      </div>
                    </div>

                    <h4>Step 2: Response Categories</h4>
                    <p>Set up different response approaches for each ticket category:</p>
                    <ul>
                      <li><strong>TECHNICAL:</strong> Step-by-step troubleshooting, screenshots, video links</li>
                      <li><strong>BILLING:</strong> Account verification, payment processing, refund procedures</li>
                      <li><strong>GENERAL:</strong> Product information, feature explanations, how-to guides</li>
                      <li><strong>URGENT:</strong> Immediate acknowledgment, escalation to human agent</li>
                      <li><strong>REFUND:</strong> Policy explanation, refund process, retention offers</li>
                    </ul>

                    <h4>Step 3: Brand Voice Configuration</h4>
                    <p>Customize your AI responses to match your company's communication style:</p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5>Brand Voice Elements:</h5>
                      <ul className="text-sm space-y-1">
                        <li><strong>Tone:</strong> Professional, empathetic, solution-focused</li>
                        <li><strong>Language:</strong> Clear, jargon-free, appropriate for your audience</li>
                        <li><strong>Personality:</strong> Helpful, patient, knowledgeable</li>
                        <li><strong>Sign-off:</strong> Consistent closing and signature</li>
                      </ul>
                    </div>

                    <h4>Step 4: Response Quality Checks</h4>
                    <p>Implement quality control measures for AI-generated responses:</p>
                    <ol>
                      <li><strong>Length Check:</strong> Responses should be 50-300 words</li>
                      <li><strong>Sentiment Analysis:</strong> Ensure positive, helpful tone</li>
                      <li><strong>Solution Verification:</strong> Check if response addresses the issue</li>
                      <li><strong>Escalation Triggers:</strong> Flag complex issues for human review</li>
                    </ol>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5>✅ Success Tip</h5>
                      <p>Start with simple, common inquiries and gradually expand to more complex issues as your AI responses improve.</p>
                    </div>
                  </div>
                )}

                {currentLesson === 5 && (
                  <div>
                    <h3>Knowledge Base Integration</h3>
                    <p>Connect your knowledge base to the AI system so it can provide accurate, up-to-date information from your documentation.</p>
                    
                    <h4>What You'll Learn:</h4>
                    <ul>
                      <li>Setting up a searchable knowledge base</li>
                      <li>Integrating knowledge base with AI responses</li>
                      <li>Maintaining and updating your knowledge base</li>
                      <li>Creating self-service customer portals</li>
                    </ul>

                    <h4>Step 1: Knowledge Base Structure</h4>
                    <p>Download the <strong>Knowledge Base Template</strong> from the course resources. Organize your content into these sections:</p>
                    <ul>
                      <li><strong>Product Information:</strong> Features, specifications, pricing</li>
                      <li><strong>Getting Started:</strong> Setup guides, tutorials, first steps</li>
                      <li><strong>Troubleshooting:</strong> Common issues and solutions</li>
                      <li><strong>Account Management:</strong> Billing, subscriptions, profile settings</li>
                      <li><strong>Policies:</strong> Terms of service, privacy, refund policies</li>
                    </ul>

                    <h4>Step 2: Make.com Knowledge Base Integration</h4>
                    <p>Set up your workflow to search the knowledge base before generating responses:</p>
                    <ol>
                      <li><strong>Add Google Sheets module</strong> containing your knowledge base</li>
                      <li><strong>Create search function</strong> that matches ticket keywords to KB articles</li>
                      <li><strong>Pass relevant articles</strong> to the AI response generator</li>
                      <li><strong>Include KB links</strong> in the final response</li>
                    </ol>

                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5>Example: KB-Enhanced Response</h5>
                      <div className="bg-white p-3 rounded border text-sm">
                        <p><strong>Customer Question:</strong> "How do I reset my password?"</p>
                        <p><strong>AI Response:</strong> "I'd be happy to help you reset your password! Here's how:</p>
                        <p>1. Go to the login page and click 'Forgot Password'<br/>
                        2. Enter your email address<br/>
                        3. Check your email for the reset link<br/>
                        4. Follow the instructions in the email</p>
                        <p>For more detailed instructions with screenshots, please see our help article: [Link to KB article]</p>
                        <p>If you continue to have trouble, please let me know!"</p>
                      </div>
                    </div>

                    <h4>Step 3: Dynamic Knowledge Base Updates</h4>
                    <p>Keep your knowledge base current and comprehensive:</p>
                    <ul>
                      <li><strong>Regular Reviews:</strong> Update articles monthly based on new features</li>
                      <li><strong>Ticket Analysis:</strong> Create new articles for frequently asked questions</li>
                      <li><strong>Customer Feedback:</strong> Improve articles based on user suggestions</li>
                      <li><strong>Search Analytics:</strong> Track which articles are most/least helpful</li>
                    </ul>

                    <h4>Step 4: Self-Service Portal</h4>
                    <p>Create a customer-facing knowledge base for self-service support:</p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5>Portal Features:</h5>
                      <ul className="text-sm space-y-1">
                        <li><strong>Search Function:</strong> Let customers find answers quickly</li>
                        <li><strong>Categories:</strong> Organize content by topic</li>
                        <li><strong>Popular Articles:</strong> Highlight most-viewed content</li>
                        <li><strong>Contact Options:</strong> Easy escalation to human support</li>
                        <li><strong>Feedback System:</strong> Rate article helpfulness</li>
                      </ul>
                    </div>

                    <h4>Step 5: AI Learning from KB</h4>
                    <p>Configure your AI to continuously learn from your knowledge base:</p>
                    <ol>
                      <li><strong>Regular KB Sync:</strong> Update AI training data weekly</li>
                      <li><strong>Article Scoring:</strong> Prioritize high-quality, recent articles</li>
                      <li><strong>Context Awareness:</strong> AI considers customer's product/plan</li>
                      <li><strong>Multi-article Responses:</strong> Combine information from multiple sources</li>
                    </ol>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5>⚠️ Important</h5>
                      <p>Always verify that your knowledge base information is accurate and up-to-date. Outdated information can frustrate customers and damage trust.</p>
                    </div>
                  </div>
                )}

                {currentLesson === 6 && (
                  <div>
                    <h3>Testing & Optimization</h3>
                    <p>Test your complete AI support system and optimize for better customer satisfaction, faster resolution times, and improved efficiency.</p>
                    
                    <h4>What You'll Learn:</h4>
                    <ul>
                      <li>Running comprehensive system tests</li>
                      <li>Measuring support performance metrics</li>
                      <li>Optimizing AI responses based on feedback</li>
                      <li>Scaling your support operations</li>
                    </ul>

                    <h4>Step 1: End-to-End Testing</h4>
                    <p>Test your complete support workflow with real scenarios:</p>
                    <ol>
                      <li><strong>Create test tickets</strong> for each category (technical, billing, general, urgent)</li>
                      <li><strong>Verify classification</strong> accuracy and routing</li>
                      <li><strong>Check response quality</strong> and relevance</li>
                      <li><strong>Test escalation triggers</strong> for complex issues</li>
                      <li><strong>Validate knowledge base</strong> integration and links</li>
                    </ol>

                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5>Test Scenarios to Try:</h5>
                      <ul className="text-sm space-y-1">
                        <li><strong>Simple:</strong> "How do I change my email address?"</li>
                        <li><strong>Technical:</strong> "The app crashes when I try to export data"</li>
                        <li><strong>Billing:</strong> "I was charged twice this month"</li>
                        <li><strong>Urgent:</strong> "My account was hacked, please help immediately"</li>
                        <li><strong>Complex:</strong> "I need to integrate your API with our custom system"</li>
                      </ul>
                    </div>

                    <h4>Step 2: Performance Metrics Setup</h4>
                    <p>Track key metrics to measure your AI support system's success:</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5>Essential Support Metrics:</h5>
                      <ul className="text-sm space-y-1">
                        <li><strong>Response Time:</strong> Average time to first response</li>
                        <li><strong>Resolution Time:</strong> Average time to resolve tickets</li>
                        <li><strong>Customer Satisfaction:</strong> CSAT scores and feedback</li>
                        <li><strong>First Contact Resolution:</strong> % of tickets resolved without escalation</li>
                        <li><strong>Automation Rate:</strong> % of tickets handled by AI vs humans</li>
                        <li><strong>Escalation Rate:</strong> % of tickets requiring human intervention</li>
                      </ul>
                    </div>

                    <h4>Step 3: Response Quality Optimization</h4>
                    <p>Continuously improve your AI responses based on customer feedback:</p>
                    <ol>
                      <li><strong>Collect Feedback:</strong> Add rating system to AI responses</li>
                      <li><strong>Analyze Patterns:</strong> Identify common issues or complaints</li>
                      <li><strong>Update Prompts:</strong> Refine AI instructions based on feedback</li>
                      <li><strong>Expand Knowledge Base:</strong> Add missing information</li>
                      <li><strong>A/B Testing:</strong> Test different response approaches</li>
                    </ol>

                    <h4>Step 4: Scaling Your Support Operations</h4>
                    <p>As your AI system improves, scale up your support capabilities:</p>
                    
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5>Scaling Roadmap:</h5>
                      <ul className="text-sm space-y-2">
                        <li><strong>Week 1-2:</strong> Handle 30-50% of tickets automatically</li>
                        <li><strong>Month 1:</strong> Achieve 60-70% automation rate</li>
                        <li><strong>Month 2:</strong> Expand to multiple languages</li>
                        <li><strong>Month 3+:</strong> Add proactive support and chat integration</li>
                      </ul>
                    </div>

                    <h4>Step 5: Advanced Features</h4>
                    <ul>
                      <li><strong>Sentiment Analysis:</strong> Detect frustrated customers for priority handling</li>
                      <li><strong>Proactive Support:</strong> Reach out before customers report issues</li>
                      <li><strong>Multi-channel Integration:</strong> Support via email, chat, social media</li>
                      <li><strong>Predictive Analytics:</strong> Anticipate support volume and staffing needs</li>
                    </ul>

                    <h4>Step 6: ROI Analysis</h4>
                    <p>Calculate the return on investment of your AI support system:</p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5>💰 Typical ROI Example:</h5>
                      <div className="bg-white p-3 rounded border text-sm">
                        <p><strong>Monthly Costs:</strong></p>
                        <ul className="ml-4">
                          <li>Make.com: $29</li>
                          <li>OpenAI: $75</li>
                          <li>Zendesk: $49</li>
                          <li>Total: $153/month</li>
                        </ul>
                        <p className="mt-2"><strong>Monthly Savings:</strong></p>
                        <ul className="ml-4">
                          <li>Support agent (40 hours): $2,000</li>
                          <li>Faster resolution (customer retention): $1,500</li>
                          <li>24/7 availability (increased satisfaction): $800</li>
                          <li>Total value: $4,300/month</li>
                        </ul>
                        <p className="mt-2 font-bold">Net ROI: $4,147/month (2,710% return)</p>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5>🎉 Congratulations!</h5>
                      <p>You've built an intelligent customer support system that provides 24/7 assistance, reduces response times, and improves customer satisfaction while cutting support costs significantly!</p>
                    </div>
                  </div>
                )}

                {currentLesson > 6 && (
                  <div>
                    <h3>Course Complete!</h3>
                    <p>Congratulations! You've completed the AI Customer Support Agent course.</p>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4>What's Next?</h4>
                      <ul>
                        <li>Deploy your AI support system</li>
                        <li>Monitor performance and gather feedback</li>
                        <li>Explore other AI agent courses</li>
                        <li>Join our community to share your success</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => navigateToLesson(Math.max(1, currentLesson - 1))}
                  disabled={currentLesson === 1}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentLesson === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-[#2F80ED] hover:bg-blue-50'
                  }`}
                >
                  ← Previous Lesson
                </button>
                <button
                  onClick={() => navigateToLesson(Math.min(lessons.length, currentLesson + 1))}
                  disabled={currentLesson === lessons.length}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentLesson === lessons.length
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'bg-[#2F80ED] text-white hover:bg-blue-600'
                  }`}
                >
                  Next Lesson →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}
