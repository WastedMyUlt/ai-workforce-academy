'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../../components/ui/Layout';
import '../../../styles/course-page.css';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  difficulty: string;
  description: string;
  isCompleted: boolean;
}

const lessons = [
  { id: 1, title: 'Content Strategy & Planning', duration: '45 min', difficulty: 'Beginner', description: 'Define your content strategy and target audience' },
  { id: 2, title: 'Publishing Platform Setup', duration: '60 min', difficulty: 'Beginner', description: 'Set up social media accounts and Buffer' },
  { id: 3, title: 'Make.com Content Workflow', duration: '90 min', difficulty: 'Intermediate', description: 'Import and configure automation workflow' },
  { id: 4, title: 'AI Content Templates', duration: '75 min', difficulty: 'Intermediate', description: 'Customize AI prompts for your brand' },
  { id: 5, title: 'Publishing Automation', duration: '60 min', difficulty: 'Intermediate', description: 'Set up automated publishing schedules' },
  { id: 6, title: 'Testing & Optimization', duration: '45 min', difficulty: 'Advanced', description: 'Test and optimize your complete system' }
];

export default function ContentCreatorAICourse() {
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
      const saved = localStorage.getItem('content-creator-progress')
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
        'content-creator-progress',
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
                <h1 className="text-2xl font-bold text-gray-900">AI Content Creator Agent</h1>
                <p className="text-sm text-gray-600">Build an automated content creation and publishing system</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Progress:</span> {Math.round(progress)}%
              </div>
              <div className="flex-1 max-w-xs">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="lesson-progress-bar h-3 rounded-full transition-all duration-500 relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full border-2 border-[#2F80ED] transform translate-x-1"></div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Time Left:</span> ~{Math.max(0, (6 - currentLesson) * 60)} min
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
                        <div className="flex-1">
                          <div className="font-medium text-sm">{lesson.title}</div>
                          <div className={`text-xs ${
                            currentLesson === lesson.id ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {lesson.duration}
                          </div>
                          <div className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${
                            lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                            lesson.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          } ${currentLesson === lesson.id ? 'bg-opacity-20 text-white' : ''}`}>
                            {lesson.difficulty}
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
                    <p className="text-sm text-gray-600 mb-3">Download these professional templates and guides to implement your AI Content Creator Agent:</p>
                    <div className="space-y-2">
                      <a href="/resources/content-workflow-template.json" download className="flex items-center text-sm text-[#2F80ED] hover:underline">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Content Workflow Template (JSON) - Complete automation blueprint
                      </a>
                      <a href="/resources/content-templates.md" download className="flex items-center text-sm text-[#2F80ED] hover:underline">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Content Templates Library - Ready-to-use templates for all content types
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
                    <h3>Content Strategy & Planning</h3>
                    <p>In this lesson, you'll learn how to create a comprehensive content strategy that drives engagement and supports your business goals.</p>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <h4 className="text-red-800 font-semibold mb-3">💰 Course Investment Required</h4>
                      <p className="text-red-700 text-sm mb-4">Before starting, here's what you'll need to invest to complete this course:</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded p-3">
                          <h5 className="font-semibold text-green-800 mb-2">🚀 Budget Option: $94-144/month</h5>
                          <ul className="text-xs space-y-1">
                            <li>• Make.com Core: $29/month</li>
                            <li>• OpenAI API: $20-50/month</li>
                            <li>• Buffer Essentials: $15/month</li>
                            <li>• ConvertKit: $29/month</li>
                            <li>• Medium/LinkedIn: Free</li>
                          </ul>
                          <p className="text-xs text-green-600 mt-2"><strong>Realistic outcome:</strong> Save 10-15 hours/week, typical revenue $200-800/month</p>
                        </div>
                        
                        <div className="bg-white rounded p-3">
                          <h5 className="font-semibold text-blue-800 mb-2">📈 Professional: $188-288/month</h5>
                          <ul className="text-xs space-y-1">
                            <li>• Make.com Pro: $59/month</li>
                            <li>• OpenAI API: $50-100/month</li>
                            <li>• WordPress hosting: $15/month</li>
                            <li>• Buffer Pro: $35/month</li>
                            <li>• ConvertKit Creator: $59/month</li>
                            <li>• SEO tools: $99/month</li>
                          </ul>
                          <p className="text-xs text-blue-600 mt-2"><strong>Realistic outcome:</strong> Save 15-20 hours/week, typical revenue $500-2,000/month</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-yellow-100 rounded">
                        <p className="text-xs text-yellow-800">
                          <strong>⚡ Honest Timeline:</strong> Most students complete setup in 2-4 weeks, see time savings immediately, but meaningful revenue typically takes 3-6 months of consistent content creation.
                        </p>
                      </div>
                      
                      <div className="mt-2 p-3 bg-orange-100 rounded">
                        <p className="text-xs text-orange-800">
                          <strong>⚠️ Prerequisites:</strong> This works best if you already have business expertise, some audience, or existing clients. Complete beginners should focus on time savings first, revenue second.
                        </p>
                      </div>
                    </div>
                    
                    <h4>What You'll Learn:</h4>
                    <ul>
                      <li>How to define your target audience and content pillars</li>
                      <li>Creating a content calendar that scales</li>
                      <li>Setting up content themes and topics</li>
                      <li>Planning for multi-platform distribution</li>
                    </ul>

                    <h4>Step 1: Define Your Content Strategy</h4>
                    <p>Start by downloading the Content Templates resource from the sidebar. This comprehensive library contains templates for:</p>
                    <ul>
                      <li>Blog posts (how-to guides, listicles, case studies)</li>
                      <li>Social media content (LinkedIn, Twitter, Instagram, Facebook)</li>
                      <li>Email marketing campaigns</li>
                      <li>Landing page copy</li>
                    </ul>

                    <h4>Step 2: Set Up Your Content Calendar</h4>
                    <p>Use the Monthly Content Planning template to organize your content:</p>
                    <ul>
                      <li><strong>Week 1:</strong> Educational content (how-to guides, tutorials)</li>
                      <li><strong>Week 2:</strong> Industry insights (trend analysis, news commentary)</li>
                      <li><strong>Week 3:</strong> Customer-focused (case studies, testimonials)</li>
                      <li><strong>Week 4:</strong> Product/service focus (features, behind-the-scenes)</li>
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5>💡 Pro Tip</h5>
                      <p>Start with 2-3 pieces of content per week. You can always scale up once your automation is running smoothly.</p>
                    </div>
                  </div>
                )}

                {currentLesson === 2 && (
                  <div>
                    <h3>Publishing Platform Setup</h3>
                    <p>Choose your content publishing strategy based on your goals and budget. You can generate revenue with any of these options!</p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h4>💰 Realistic Revenue Expectations:</h4>
                      <p className="text-sm text-blue-700 mb-2"><strong>Important:</strong> Revenue depends on your existing business, audience, and marketing skills.</p>
                      <ul className="text-sm space-y-1">
                        <li><strong>LinkedIn Articles:</strong> $200-1,000/month typical, $2,000+ with established expertise</li>
                        <li><strong>Medium + Newsletter:</strong> $50-500/month typical, $1,000+ with large following</li>
                        <li><strong>Social Media Only:</strong> $100-800/month typical, $2,000+ with strong personal brand</li>
                        <li><strong>WordPress Blog:</strong> $300-1,500/month typical, $3,000+ with SEO success</li>
                      </ul>
                      <p className="text-xs text-blue-600 mt-2"><strong>Timeline:</strong> Most users see meaningful results in 3-6 months, not weeks.</p>
                    </div>

                    <h4>Choose Your Publishing Strategy:</h4>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                        <h5 className="font-semibold text-green-800 mb-2">🚀 Recommended: Social-First Strategy</h5>
                        <p className="text-sm text-green-700 mb-3"><strong>Cost: $15-50/month</strong></p>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• LinkedIn Articles (free)</li>
                          <li>• Buffer for scheduling ($15/month)</li>
                          <li>• Medium for long-form (free)</li>
                          <li>• Email newsletter via ConvertKit ($29/month)</li>
                        </ul>
                        <p className="text-xs text-green-600 mt-2">Perfect for consultants, coaches, and service providers</p>
                      </div>
                      
                      <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-800 mb-2">📈 Advanced: WordPress + Social</h5>
                        <p className="text-sm text-blue-700 mb-3"><strong>Cost: $80-150/month</strong></p>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• WordPress hosting ($15/month)</li>
                          <li>• Domain name ($12/year)</li>
                          <li>• Buffer Pro ($15/month)</li>
                          <li>• Email marketing ($29/month)</li>
                          <li>• SEO tools ($99/month)</li>
                        </ul>
                        <p className="text-xs text-blue-600 mt-2">Best for businesses wanting SEO traffic and full control</p>
                      </div>
                    </div>

                    <h4>Step 1: Set Up Your Core Publishing Platform</h4>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5>Option A: Social-First Setup (Recommended for Beginners)</h5>
                      <ol className="text-sm space-y-2 mt-2">
                        <li><strong>LinkedIn:</strong> Optimize your profile for your target audience</li>
                        <li><strong>Medium:</strong> Create account and set up your publication</li>
                        <li><strong>Twitter/X:</strong> Professional profile with clear bio</li>
                        <li><strong>Email Platform:</strong> ConvertKit, Mailchimp, or Substack</li>
                      </ol>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5>Option B: WordPress + Social Setup</h5>
                      <ol className="text-sm space-y-2 mt-2">
                        <li><strong>WordPress:</strong> Set up hosting (Bluehost, SiteGround) + install WordPress</li>
                        <li><strong>Theme:</strong> Choose a professional theme (Astra, GeneratePress)</li>
                        <li><strong>Essential Plugins:</strong> Yoast SEO, social sharing, email opt-ins</li>
                        <li><strong>Social Accounts:</strong> Same as Option A</li>
                      </ol>
                    </div>

                    <h4>Step 2: Buffer.com Account Setup</h4>
                    <ol>
                      <li>Visit <a href="https://buffer.com" target="_blank" rel="noopener noreferrer">Buffer.com</a> and sign up</li>
                      <li>Connect your social media accounts:
                        <ul>
                          <li>LinkedIn (personal and/or company page)</li>
                          <li>Twitter/X account</li>
                          <li>Facebook page (optional)</li>
                          <li>Instagram business account (optional)</li>
                        </ul>
                      </li>
                      <li>Set up posting schedules for each platform</li>
                      <li>Test manual posting to ensure connections work</li>
                    </ol>

                    <h4>Step 3: Revenue Strategy Setup</h4>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5>💡 Monetization Options:</h5>
                      <ul className="text-sm space-y-1">
                        <li><strong>Consulting/Services:</strong> Use content to attract high-value clients</li>
                        <li><strong>Digital Products:</strong> Courses, templates, guides ($50-500 each)</li>
                        <li><strong>Newsletter Sponsorships:</strong> $500-5,000 per sponsor</li>
                        <li><strong>Affiliate Marketing:</strong> 5-30% commission on recommendations</li>
                        <li><strong>Speaking/Workshops:</strong> $1,000-10,000 per event</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5>⚠️ Important</h5>
                      <p>You don't need a website to make money from content! Many successful creators earn 6-figures using just LinkedIn, Medium, and email newsletters.</p>
                    </div>

                    {/* Interactive Checkpoint */}
                    <div className="mt-6 p-4 bg-blue-50 border-l-4 border-[#2F80ED] rounded-r-lg">
                      <h5 className="font-semibold text-[#2F80ED] mb-3">✅ Checkpoint: Verify Your Setup</h5>
                      <p className="text-sm text-gray-700 mb-4">Before moving to the next lesson, confirm you've completed these steps:</p>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 text-[#2F80ED] focus:ring-[#2F80ED]" />
                          <span className="text-sm">Created accounts on your chosen platforms</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 text-[#2F80ED] focus:ring-[#2F80ED]" />
                          <span className="text-sm">Connected social media accounts to Buffer</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 text-[#2F80ED] focus:ring-[#2F80ED]" />
                          <span className="text-sm">Set up posting schedules</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 text-[#2F80ED] focus:ring-[#2F80ED]" />
                          <span className="text-sm">Tested manual posting to verify connections</span>
                        </label>
                      </div>
                      <div className="mt-4">
                        <button className="bg-[#2F80ED] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                          Mark Lesson Complete & Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {currentLesson === 3 && (
                  <div>
                    <h3>Make.com Content Workflow</h3>
                    <p>Import and configure the AI content generation workflow that will automate your entire content creation process.</p>
                    
                    <h4>Step 1: Download the Workflow Template</h4>
                    <p>Download the <strong>Content Workflow Template (JSON)</strong> from the course resources in the sidebar.</p>

                    <h4>Step 2: Import into Make.com</h4>
                    <ol>
                      <li>Log into your <a href="https://make.com" target="_blank" rel="noopener noreferrer">Make.com</a> account</li>
                      <li>Click "Create a new scenario"</li>
                      <li>Click the "..." menu and select "Import Blueprint"</li>
                      <li>Upload the JSON file you downloaded</li>
                      <li>Click "Save" to import the workflow</li>
                    </ol>

                    <h4>Step 3: Configure API Connections</h4>
                    <p>You'll need to connect several services:</p>
                    <ul>
                      <li><strong>OpenAI:</strong> For AI content generation</li>
                      <li><strong>WordPress:</strong> For blog publishing</li>
                      <li><strong>Buffer:</strong> For social media scheduling</li>
                      <li><strong>Google Sheets:</strong> For content calendar management</li>
                    </ul>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5>✅ Success Tip</h5>
                      <p>Test each connection individually before running the full workflow to identify any issues early.</p>
                    </div>

                    {/* Interactive Workflow Tester */}
                    <div className="mt-6 p-4 bg-purple-50 border-l-4 border-[#9B51E0] rounded-r-lg">
                      <h5 className="font-semibold text-[#9B51E0] mb-3">🔧 Interactive: Test Your Workflow</h5>
                      <p className="text-sm text-gray-700 mb-4">Validate your Make.com setup before proceeding:</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                            <span className="text-sm font-medium">OpenAI Connection</span>
                            <button className="text-xs bg-[#9B51E0] text-white px-3 py-1 rounded hover:bg-purple-600">
                              Test API
                            </button>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                            <span className="text-sm font-medium">Buffer Connection</span>
                            <button className="text-xs bg-[#9B51E0] text-white px-3 py-1 rounded hover:bg-purple-600">
                              Test API
                            </button>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                            <span className="text-sm font-medium">Google Sheets</span>
                            <button className="text-xs bg-[#9B51E0] text-white px-3 py-1 rounded hover:bg-purple-600">
                              Test Access
                            </button>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                            <span className="text-sm font-medium">Full Workflow</span>
                            <button className="text-xs bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                              Run Test
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-gray-100 rounded-lg text-sm text-gray-600">
                        <strong>Status:</strong> Click "Test API" buttons above to validate each connection. All should show green checkmarks before proceeding.
                      </div>
                    </div>
                  </div>
                )}

                {currentLesson === 4 && (
                  <div>
                    <h3>AI Content Templates</h3>
                    <p>Customize AI prompts and content templates to match your brand voice and industry expertise.</p>
                    
                    <h4>What You'll Learn:</h4>
                    <ul>
                      <li>How to customize AI prompts for your specific industry</li>
                      <li>Creating brand-consistent content templates</li>
                      <li>Setting up content variations and A/B testing</li>
                      <li>Quality control and content approval workflows</li>
                    </ul>

                    <h4>Step 1: Download Content Templates Library</h4>
                    <p>Open the <strong>Content Templates Library</strong> resource from the sidebar. This comprehensive library includes:</p>
                    <ul>
                      <li><strong>Blog Post Templates:</strong> How-to guides, listicles, case studies, industry news</li>
                      <li><strong>Social Media Templates:</strong> LinkedIn posts, Twitter threads, Instagram captions</li>
                      <li><strong>Email Templates:</strong> Newsletters, product announcements, nurture sequences</li>
                      <li><strong>Landing Page Copy:</strong> Headlines, feature descriptions, CTAs</li>
                    </ul>

                    <h4>Step 2: Customize for Your Industry</h4>
                    <p>Choose 3-5 templates that align with your content strategy and customize them:</p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5>Example: SaaS Company Blog Post Template</h5>
                      <div className="bg-white p-3 rounded border font-mono text-sm">
                        <p><strong>Original Prompt:</strong> "Write a blog post about [TOPIC]"</p>
                        <p><strong>Customized Prompt:</strong> "Write a 1,500-word blog post for SaaS founders about [TOPIC]. Include practical implementation steps, real-world examples, and ROI metrics. Use a professional but approachable tone. End with a clear CTA to try our software."</p>
                      </div>
                    </div>

                    <h4>Step 3: Set Up Brand Voice Guidelines</h4>
                    <p>Add these elements to every AI prompt:</p>
                    <ul>
                      <li><strong>Tone:</strong> Professional, helpful, data-driven (adjust for your brand)</li>
                      <li><strong>Audience:</strong> Your specific target customer (e.g., "small business owners," "marketing managers")</li>
                      <li><strong>Key Messages:</strong> Your unique value propositions</li>
                      <li><strong>Call-to-Actions:</strong> Specific actions you want readers to take</li>
                    </ul>

                    <h4>Step 4: Test and Refine</h4>
                    <ol>
                      <li>Generate 3-5 pieces of content using your customized templates</li>
                      <li>Review for brand consistency and quality</li>
                      <li>Make adjustments to prompts based on output quality</li>
                      <li>Create a "prompt library" document for future reference</li>
                    </ol>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5>✅ Success Tip</h5>
                      <p>Start with one content type (e.g., blog posts) and perfect those templates before expanding to other formats. Quality over quantity!</p>
                    </div>
                  </div>
                )}

                {currentLesson === 5 && (
                  <div>
                    <h3>Publishing Automation</h3>
                    <p>Set up automated publishing schedules and multi-platform distribution to maximize your content reach.</p>
                    
                    <h4>What You'll Learn:</h4>
                    <ul>
                      <li>Creating optimal posting schedules for each platform</li>
                      <li>Setting up automated content distribution</li>
                      <li>Managing content calendars and scheduling</li>
                      <li>Cross-platform content optimization</li>
                    </ul>

                    <h4>Step 1: Configure Publishing Schedule</h4>
                    <p>Set up your content calendar in Google Sheets with these columns:</p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <ul className="text-sm space-y-1">
                        <li><strong>Date:</strong> Publication date</li>
                        <li><strong>Content Type:</strong> Blog post, social media, email</li>
                        <li><strong>Topic:</strong> Main subject/keyword</li>
                        <li><strong>Platform:</strong> Where to publish (WordPress, LinkedIn, Twitter, etc.)</li>
                        <li><strong>Status:</strong> Draft, Scheduled, Published</li>
                        <li><strong>Performance:</strong> Views, engagement, conversions</li>
                      </ul>
                    </div>

                    <h4>Step 2: Optimal Posting Times</h4>
                    <p>Configure Buffer with these recommended posting schedules:</p>
                    <ul>
                      <li><strong>LinkedIn:</strong> Tuesday-Thursday, 9 AM - 10 AM</li>
                      <li><strong>Twitter:</strong> Monday-Friday, 9 AM, 1 PM, 3 PM</li>
                      <li><strong>Facebook:</strong> Tuesday-Thursday, 1 PM - 3 PM</li>
                      <li><strong>Instagram:</strong> Monday, Wednesday, Friday, 11 AM - 1 PM</li>
                    </ul>

                    <h4>Step 3: Make.com Scheduling Setup</h4>
                    <ol>
                      <li>In your Make.com workflow, add a "Schedule" trigger</li>
                      <li>Set it to run daily at 6 AM (before business hours)</li>
                      <li>Configure it to check your Google Sheets for today's content</li>
                      <li>Add conditional logic to publish only if content is marked "Ready"</li>
                    </ol>

                    <h4>Step 4: Content Adaptation for Each Platform</h4>
                    <p>Set up your AI to automatically adapt content for different platforms:</p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5>Example: Blog Post → Social Media Adaptation</h5>
                      <div className="bg-white p-3 rounded border text-sm">
                        <p><strong>LinkedIn:</strong> "Here's what I learned about [topic] (thread below) 👇"</p>
                        <p><strong>Twitter:</strong> "Quick tip: [main point] - Full details: [blog link]"</p>
                        <p><strong>Instagram:</strong> Visual quote + "Link in bio for full article"</p>
                      </div>
                    </div>

                    <h4>Step 5: Quality Control Workflow</h4>
                    <ul>
                      <li>All content publishes to WordPress as <strong>drafts</strong> first</li>
                      <li>Social media posts are <strong>scheduled</strong> in Buffer (not published immediately)</li>
                      <li>You receive a <strong>Slack notification</strong> to review before going live</li>
                      <li>Set up a 2-hour delay between generation and publishing for review time</li>
                    </ul>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5>⚠️ Important</h5>
                      <p>Always review AI-generated content before publishing. While the AI is sophisticated, human oversight ensures brand consistency and quality.</p>
                    </div>
                  </div>
                )}

                {currentLesson === 6 && (
                  <div>
                    <h3>Testing & Optimization</h3>
                    <p>Test your complete content workflow and optimize for better quality, engagement, and business results.</p>
                    
                    <h4>What You'll Learn:</h4>
                    <ul>
                      <li>Running end-to-end workflow tests</li>
                      <li>Measuring content performance and ROI</li>
                      <li>Optimizing AI prompts based on results</li>
                      <li>Scaling your content production</li>
                    </ul>

                    <h4>Step 1: Complete Workflow Test</h4>
                    <p>Run a full test of your content creation system:</p>
                    <ol>
                      <li><strong>Add test topic</strong> to your Google Sheets content calendar</li>
                      <li><strong>Trigger Make.com workflow</strong> manually to generate content</li>
                      <li><strong>Verify all outputs:</strong>
                        <ul className="ml-4 mt-2">
                          <li>Blog post appears as draft in WordPress</li>
                          <li>Social media posts are scheduled in Buffer</li>
                          <li>Featured image is generated and uploaded</li>
                          <li>Slack notification is sent</li>
                        </ul>
                      </li>
                      <li><strong>Review and publish</strong> manually for this test</li>
                    </ol>

                    <h4>Step 2: Performance Tracking Setup</h4>
                    <p>Set up tracking to measure your content's success:</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5>Key Metrics to Track:</h5>
                      <ul className="text-sm space-y-1">
                        <li><strong>Content Volume:</strong> Posts per week, time saved</li>
                        <li><strong>Engagement:</strong> Likes, shares, comments, click-through rates</li>
                        <li><strong>Traffic:</strong> Website visitors from content</li>
                        <li><strong>Leads:</strong> Email signups, demo requests</li>
                        <li><strong>Revenue:</strong> Sales attributed to content marketing</li>
                      </ul>
                    </div>

                    <h4>Step 3: A/B Testing Your AI Prompts</h4>
                    <p>Optimize your AI prompts based on performance data:</p>
                    <ol>
                      <li><strong>Create variations</strong> of your best-performing content types</li>
                      <li><strong>Test different approaches:</strong>
                        <ul className="ml-4 mt-2">
                          <li>Formal vs. conversational tone</li>
                          <li>Short vs. long-form content</li>
                          <li>Different headline styles</li>
                          <li>Various CTA approaches</li>
                        </ul>
                      </li>
                      <li><strong>Measure results</strong> after 2 weeks</li>
                      <li><strong>Update your templates</strong> with winning variations</li>
                    </ol>

                    <h4>Step 4: Scaling Your Content Production</h4>
                    <p>Once your system is optimized, scale up production:</p>
                    
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h5>Scaling Roadmap:</h5>
                      <ul className="text-sm space-y-2">
                        <li><strong>Week 1-2:</strong> 2-3 pieces per week, manual review</li>
                        <li><strong>Week 3-4:</strong> 5-7 pieces per week, streamlined review</li>
                        <li><strong>Month 2:</strong> 10+ pieces per week, automated publishing for proven templates</li>
                        <li><strong>Month 3+:</strong> Multiple content types, repurposing workflows</li>
                      </ul>
                    </div>

                    <h4>Step 5: Advanced Optimizations</h4>
                    <ul>
                      <li><strong>Content Repurposing:</strong> Turn blog posts into video scripts, podcasts, infographics</li>
                      <li><strong>SEO Integration:</strong> Add keyword research and optimization to your workflow</li>
                      <li><strong>Personalization:</strong> Create content variations for different audience segments</li>
                      <li><strong>Seasonal Content:</strong> Set up automated holiday and event-based content</li>
                    </ul>

                    <h4>Step 6: ROI Calculation</h4>
                    <p>Calculate the return on investment of your AI content system:</p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5>💰 Realistic ROI Example:</h5>
                      <div className="bg-white p-3 rounded border text-sm">
                        <p><strong>Monthly Costs:</strong></p>
                        <ul className="ml-4">
                          <li>Make.com: $29</li>
                          <li>OpenAI: $50</li>
                          <li>Buffer: $15</li>
                          <li>Total: $94/month</li>
                        </ul>
                        <p className="mt-2"><strong>Realistic Value:</strong></p>
                        <ul className="ml-4">
                          <li>Time saved: 10-15 hours/week</li>
                          <li>Hourly value: $25-50/hour</li>
                          <li>Monthly time value: $1,000-3,000</li>
                          <li>Typical revenue increase: $200-800/month</li>
                        </ul>
                        <p className="mt-2 font-bold">Net Value: $1,106-3,706/month (depends on your hourly rate and execution)</p>
                        <p className="text-xs text-gray-600 mt-1">*Results vary significantly based on your business, audience, and consistency</p>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5>🎉 Congratulations!</h5>
                      <p>You've built a complete AI content creation system that can produce professional content at scale. Your business now has a 24/7 content team that never takes a break!</p>
                    </div>
                  </div>
                )}

                {currentLesson > 6 && (
                  <div>
                    <h3>Course Complete!</h3>
                    <p>Congratulations! You've completed the AI Content Creator Agent course.</p>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4>What's Next?</h4>
                      <ul>
                        <li>Implement your content automation system</li>
                        <li>Join our community to share your results</li>
                        <li>Explore other AI agent courses</li>
                        <li>Consider our advanced automation workshops</li>
                      </ul>
                    </div>
                  </div>
                )}

              {/* Lesson Feedback */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
                <h4 className="font-semibold text-gray-900 mb-3">📝 How was this lesson?</h4>
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-sm text-gray-600">Rate this lesson:</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className="text-yellow-400 hover:text-yellow-500 text-lg"
                        onClick={() => console.log(`Rated ${star} stars`)}
                      >
                        ⭐
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4 text-sm">
                  <button className="text-[#2F80ED] hover:underline">
                    👍 This was helpful
                  </button>
                  <button className="text-[#2F80ED] hover:underline">
                    🤔 I need more help
                  </button>
                  <button className="text-[#2F80ED] hover:underline">
                    💡 Suggest improvement
                  </button>
                </div>
              </div>
            </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => navigateToLesson(Math.max(1, currentLesson - 1))}
                  disabled={currentLesson === 1}
                  className="flex items-center px-6 py-3 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous Lesson
                </button>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">
                    Lesson {currentLesson} of 6
                  </div>
                  <div className="text-xs text-gray-400">
                    {Math.round((currentLesson / 6) * 100)}% Complete
                  </div>
                </div>
                <button
                  onClick={() => navigateToLesson(Math.min(6, currentLesson + 1))}
                  disabled={currentLesson === 6}
                  className="flex items-center px-6 py-3 text-sm font-medium text-white bg-[#2F80ED] border border-transparent rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
