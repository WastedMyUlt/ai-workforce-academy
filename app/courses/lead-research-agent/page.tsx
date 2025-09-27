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
    title: 'Course Overview & Setup',
    duration: '8 min',
    description: 'Introduction to AI lead research and tool setup (Apollo.io, Make.com, OpenAI)',
    isCompleted: false
  },
  {
    id: 2,
    title: 'Apollo.io Configuration',
    duration: '12 min',
    description: 'Setting up your ideal customer profile and lead search parameters',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Building the Make.com Workflow',
    duration: '18 min',
    description: 'Creating the automation that connects Apollo to ChatGPT and Google Sheets',
    isCompleted: false
  },
  {
    id: 4,
    title: 'AI Prompt Engineering',
    duration: '15 min',
    description: 'Crafting ChatGPT prompts that research and qualify leads effectively',
    isCompleted: false
  },
  {
    id: 5,
    title: 'Testing & Optimization',
    duration: '10 min',
    description: 'Running your first batch and optimizing for better results',
    isCompleted: false
  },
  {
    id: 6,
    title: 'Scaling & Advanced Features',
    duration: '12 min',
    description: 'Scaling to 100+ leads per day and adding advanced qualification logic',
    isCompleted: false
  }
];

export default function LeadResearchAgentCourse() {
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
      const saved = localStorage.getItem('lead-research-progress')
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
        'lead-research-progress',
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
                <h1 className="text-2xl font-bold text-gray-900">AI Lead Research Agent</h1>
                <p className="text-sm text-gray-600">Build an agent that finds 100+ leads per day</p>
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
                    <p className="text-sm text-gray-600 mb-3">Download these professional templates and guides to implement your AI Lead Research Agent:</p>
                    <div className="space-y-2">
                      <a href="/resources/make-workflow-template.json" download className="flex items-center text-sm text-[#2F80ED] hover:underline">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Make.com Workflow Template (JSON) - Complete automation blueprint
                      </a>
                      <a href="/resources/workflow-setup-guide.md" download className="flex items-center text-sm text-[#2F80ED] hover:underline">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Complete Setup Guide - Step-by-step implementation
                      </a>
                      <a href="/resources/lead-tracking-template.csv" download className="flex items-center text-sm text-[#2F80ED] hover:underline">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Google Sheets Template - Ready-to-use tracking spreadsheet
                      </a>
                      <a href="/resources/chatgpt-prompt-library.md" download className="flex items-center text-sm text-[#2F80ED] hover:underline">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        ChatGPT Prompt Library - Industry-specific qualification prompts
                      </a>
                      <a href="/resources/setup-checklist.md" download className="flex items-center text-sm text-[#2F80ED] hover:underline">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Complete Setup Checklist - Phase-by-phase implementation guide
                      </a>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-blue-800">
                      <strong>💡 Pro Tip:</strong> Start with the Setup Checklist, then import the Make.com template. Use the Prompt Library to customize for your industry.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] p-4 rounded-lg">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <h4 className="font-semibold">🚀 Implementation Dashboard</h4>
                        <p className="text-sm opacity-90">Track your progress with our interactive checklist and resource manager</p>
                      </div>
                      <Link href="/dashboard" className="bg-white text-[#2F80ED] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        Open Dashboard
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Video Player Area */}
              <div className="bg-black aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                  title="AI Lead Research Agent Lesson"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Lesson Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{currentLessonData?.title}</h2>
                    <p className="text-gray-600 mt-1">{currentLessonData?.description}</p>
                  </div>
                  <button
                    onClick={() => markLessonComplete(currentLesson)}
                    disabled={completedLessons.includes(currentLesson)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      completedLessons.includes(currentLesson)
                        ? 'bg-green-100 text-green-800 cursor-not-allowed'
                        : 'bg-[#2F80ED] text-white hover:bg-[#2967c7]'
                    }`}
                  >
                    {completedLessons.includes(currentLesson) ? '✓ Completed' : 'Mark Complete'}
                  </button>
                </div>

                {/* Lesson Content Based on Current Lesson */}
                {currentLesson === 1 && (
                  <div className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
                    <h3 className="text-gray-900">Welcome to the AI Lead Research Agent Course!</h3>
                    <p className="text-gray-700">In this course, you'll learn to build an AI agent that automatically finds and qualifies leads for your business. By the end, you'll have a system that:</p>
                    <ul>
                      <li>Finds 25-100+ qualified leads per day</li>
                      <li>Researches each company automatically</li>
                      <li>Scores leads based on buying signals</li>
                      <li>Delivers results to your preferred tools</li>
                    </ul>
                    
                    <h4 className="text-gray-900">What You'll Need:</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-gray-700">
                        <li><strong className="text-gray-900">Apollo.io account</strong> - Lead database ($49/month)</li>
                        <li><strong className="text-gray-900">Make.com account</strong> - Automation platform ($9/month)</li>
                        <li><strong className="text-gray-900">OpenAI API key</strong> - AI processing ($5-10/month)</li>
                        <li><strong className="text-gray-900">Google account</strong> - For sheets and storage (free)</li>
                      </ul>
                    </div>

                    <h4 className="text-gray-900">Expected Results:</h4>
                    <p className="text-gray-700">Students typically see results within 24 hours of setup and achieve ROI within the first week. The average student saves 15-20 hours per week on lead research.</p>
                  </div>
                )}

                {currentLesson === 2 && (
                  <div className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
                    <h3 className="text-gray-900">Setting Up Apollo.io for Lead Generation</h3>
                    <p className="text-gray-700">Apollo.io will be your lead database. We'll configure it to find your ideal customers automatically.</p>
                    
                    <h4 className="text-gray-900">Step 1: Define Your Ideal Customer Profile</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700"><strong className="text-gray-900">Example ICP:</strong></p>
                      <ul className="text-gray-700">
                        <li>Industry: SaaS, E-commerce, Marketing Agencies</li>
                        <li>Company Size: 10-500 employees</li>
                        <li>Job Titles: CEO, Marketing Director, Operations Manager</li>
                        <li>Location: United States, Canada, UK</li>
                        <li>Technology: Uses Salesforce, HubSpot, or similar CRM</li>
                      </ul>
                    </div>

                    <h4 className="text-gray-900">Step 2: Create Your Search Template</h4>
                    <p className="text-gray-700">We'll save this search as a template so your automation can use it repeatedly.</p>
                  </div>
                )}

                {currentLesson === 3 && (
                  <div className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
                    <h3 className="text-gray-900">Building the Make.com Workflow</h3>
                    <p className="text-gray-700">Now we'll create the automation workflow that connects all your tools together.</p>
                    
                    <h4 className="text-gray-900">Step 1: Import the Workflow Template</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700"><strong className="text-gray-900">Download the template:</strong></p>
                      <ul className="text-gray-700">
                        <li>Go to the Course Resources section</li>
                        <li>Download "Make.com Workflow Template"</li>
                        <li>Import it into your Make.com account</li>
                      </ul>
                    </div>

                    <h4 className="text-gray-900">Step 2: Configure the Modules</h4>
                    <p className="text-gray-700">The workflow includes these key modules:</p>
                    <ul className="text-gray-700">
                      <li><strong className="text-gray-900">Apollo Search:</strong> Finds companies matching your ICP</li>
                      <li><strong className="text-gray-900">Data Enrichment:</strong> Gathers additional company information</li>
                      <li><strong className="text-gray-900">OpenAI Analysis:</strong> Scores and qualifies each lead</li>
                      <li><strong className="text-gray-900">Google Sheets:</strong> Stores results in your tracking sheet</li>
                    </ul>

                    <h4 className="text-gray-900">Step 3: Test the Workflow</h4>
                    <p className="text-gray-700">Run a test with 5 leads to ensure everything works correctly before scaling up.</p>
                  </div>
                )}

                {currentLesson === 4 && (
                  <div className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
                    <h3 className="text-gray-900">AI Prompt Engineering for Lead Qualification</h3>
                    <p className="text-gray-700">The key to effective lead qualification is crafting the right prompts for ChatGPT.</p>
                    
                    <h4 className="text-gray-900">Lead Scoring Prompt Template</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700"><strong className="text-gray-900">Example Prompt:</strong></p>
                      <blockquote className="text-gray-600 italic border-l-4 border-[#2F80ED] pl-4">
                        "Analyze this company and score it from 0-100 based on fit for [YOUR SERVICE]. 
                        Consider: industry relevance, company size, growth indicators, technology stack, and recent news. 
                        Provide score and 2-sentence justification."
                      </blockquote>
                    </div>

                    <h4 className="text-gray-900">Customization Guidelines</h4>
                    <ul className="text-gray-700">
                      <li>Replace [YOUR SERVICE] with your specific offering</li>
                      <li>Add industry-specific criteria</li>
                      <li>Include budget indicators if relevant</li>
                      <li>Specify geographic preferences</li>
                    </ul>

                    <h4 className="text-gray-900">Advanced Prompts</h4>
                    <p className="text-gray-700">Use the Prompt Library resource for specialized prompts for different industries and use cases.</p>
                  </div>
                )}

                {currentLesson === 5 && (
                  <div className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
                    <h3 className="text-gray-900">Testing & Optimization</h3>
                    <p className="text-gray-700">Now it's time to test your agent and optimize for better results.</p>
                    
                    <h4 className="text-gray-900">Initial Testing Phase</h4>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-gray-700"><strong className="text-gray-900">Testing Checklist:</strong></p>
                      <ul className="text-gray-700">
                        <li>Run workflow with 10 test leads</li>
                        <li>Check data accuracy in Google Sheets</li>
                        <li>Verify AI scoring makes sense</li>
                        <li>Test error handling and edge cases</li>
                      </ul>
                    </div>

                    <h4 className="text-gray-900">Common Issues & Fixes</h4>
                    <ul className="text-gray-700">
                      <li><strong className="text-gray-900">Low-quality leads:</strong> Refine your Apollo search criteria</li>
                      <li><strong className="text-gray-900">Inconsistent scoring:</strong> Improve your ChatGPT prompts</li>
                      <li><strong className="text-gray-900">Missing data:</strong> Check API connections and rate limits</li>
                      <li><strong className="text-gray-900">Workflow errors:</strong> Review Make.com execution logs</li>
                    </ul>

                    <h4 className="text-gray-900">Performance Metrics</h4>
                    <p className="text-gray-700">Track these KPIs: lead volume, qualification accuracy, time saved, and conversion rates.</p>
                  </div>
                )}

                {currentLesson === 6 && (
                  <div className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
                    <h3 className="text-gray-900">Scaling & Advanced Features</h3>
                    <p className="text-gray-700">Ready to scale to 100+ leads per day? Here's how to do it safely and effectively.</p>
                    
                    <h4 className="text-gray-900">Scaling Strategy</h4>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-gray-700"><strong className="text-gray-900">Scaling Timeline:</strong></p>
                      <ul className="text-gray-700">
                        <li><strong className="text-gray-900">Week 1:</strong> 10-25 leads/day (testing phase)</li>
                        <li><strong className="text-gray-900">Week 2:</strong> 25-50 leads/day (optimization)</li>
                        <li><strong className="text-gray-900">Week 3:</strong> 50-100 leads/day (full scale)</li>
                        <li><strong className="text-gray-900">Week 4+:</strong> 100+ leads/day (maintenance)</li>
                      </ul>
                    </div>

                    <h4 className="text-gray-900">Advanced Features</h4>
                    <ul className="text-gray-700">
                      <li><strong className="text-gray-900">Multi-source research:</strong> Add LinkedIn, company websites</li>
                      <li><strong className="text-gray-900">CRM integration:</strong> Connect to HubSpot, Salesforce</li>
                      <li><strong className="text-gray-900">Email verification:</strong> Add email validation steps</li>
                      <li><strong className="text-gray-900">Lead nurturing:</strong> Trigger follow-up sequences</li>
                    </ul>

                    <h4 className="text-gray-900">Maintenance & Monitoring</h4>
                    <p className="text-gray-700">Set up weekly reviews to monitor performance, update prompts, and maintain data quality.</p>

                    <div className="bg-[#2F80ED]/10 p-4 rounded-lg mt-6">
                      <h4 className="text-[#2F80ED] font-semibold">🎉 Congratulations!</h4>
                      <p className="text-gray-700">You've completed the Lead Research Agent course. Your agent should now be finding and qualifying 100+ leads per day automatically!</p>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setCurrentLesson(Math.max(1, currentLesson - 1))}
                    disabled={currentLesson === 1}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-[#2F80ED] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Previous Lesson</span>
                  </button>

                  <button
                    onClick={() => setCurrentLesson(Math.min(lessons.length, currentLesson + 1))}
                    disabled={currentLesson === lessons.length}
                    className="flex items-center space-x-2 px-4 py-2 bg-[#2F80ED] text-white rounded-lg hover:bg-[#2967c7] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Next Lesson</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Upgrade CTA */}
            <div className="mt-8 bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] rounded-xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for More AI Agents?</h3>
                <p className="text-lg mb-6 opacity-90">
                  This is just one of 12+ agents in the full Academy. Build a complete AI workforce.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/pricing" className="bg-white text-[#2F80ED] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Join Academy - $197/month
                  </Link>
                  <Link href="/courses" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    See All Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
