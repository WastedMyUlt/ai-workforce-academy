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

                {currentLesson > 3 && (
                  <div>
                    <h3>Lesson Content Coming Soon</h3>
                    <p>This lesson content is being developed. Please check back soon for detailed instructions.</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4>In the meantime:</h4>
                      <ul>
                        <li>Review the previous lessons to ensure your setup is complete</li>
                        <li>Download and explore the course resources</li>
                        <li>Set up your Zendesk account and API access</li>
                        <li>Join our community for support and updates</li>
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
