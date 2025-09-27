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
    title: 'Content Strategy & Planning',
    duration: '12 min',
    description: 'Define your content strategy, target audience, and content calendar setup',
    isCompleted: false
  },
  {
    id: 2,
    title: 'WordPress & Buffer Setup',
    duration: '15 min',
    description: 'Configure WordPress.com and Buffer.com accounts for automated publishing',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Make.com Content Workflow',
    duration: '20 min',
    description: 'Import and configure the AI content generation workflow in Make.com',
    isCompleted: false
  },
  {
    id: 4,
    title: 'AI Content Templates',
    duration: '18 min',
    description: 'Customize AI prompts and content templates for your brand and industry',
    isCompleted: false
  },
  {
    id: 5,
    title: 'Publishing Automation',
    duration: '16 min',
    description: 'Set up automated publishing schedules and multi-platform distribution',
    isCompleted: false
  },
  {
    id: 6,
    title: 'Testing & Optimization',
    duration: '14 min',
    description: 'Test your content workflow and optimize for quality and engagement',
    isCompleted: false
  }
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
                    <h3>WordPress & Buffer Setup</h3>
                    <p>Set up the foundational platforms for your automated content publishing system.</p>
                    
                    <h4>Step 1: WordPress.com Account Setup</h4>
                    <ol>
                      <li>Go to <a href="https://wordpress.com" target="_blank" rel="noopener noreferrer">WordPress.com</a> and create an account</li>
                      <li>Choose a plan (Personal plan minimum for custom domain)</li>
                      <li>Set up your blog with your brand colors and logo</li>
                      <li>Create basic pages (About, Contact, Privacy Policy)</li>
                    </ol>

                    <h4>Step 2: Buffer.com Account Setup</h4>
                    <ol>
                      <li>Visit <a href="https://buffer.com" target="_blank" rel="noopener noreferrer">Buffer.com</a> and sign up</li>
                      <li>Connect your social media accounts:
                        <ul>
                          <li>LinkedIn (personal and/or company page)</li>
                          <li>Twitter/X account</li>
                          <li>Facebook page</li>
                          <li>Instagram business account</li>
                        </ul>
                      </li>
                      <li>Set up posting schedules for each platform</li>
                      <li>Test manual posting to ensure connections work</li>
                    </ol>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5>⚠️ Important</h5>
                      <p>Make sure to use business accounts for Instagram and Facebook to access Buffer's publishing features.</p>
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
                        <li>Test your current workflow configuration</li>
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
