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
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="text-blue-800">🔍 Apollo.io Setup Guide for Beginners</h3>
                      <p className="text-blue-700">Don't worry if you're new to this! Follow these steps based on where Apollo takes you after signup.</p>
                      
                      <div className="mt-4 p-3 bg-white border border-blue-200 rounded-lg">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h2a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-blue-800">Where Are You in Apollo?</h4>
                            <div className="mt-1 text-sm text-blue-700 space-y-2">
                              <p>Apollo's signup flow can vary. Choose the option that matches what you see:</p>
                              
                              <div className="bg-blue-50 p-3 rounded">
                                <p className="font-medium">🔹 <strong>If you see a dashboard with search options</strong>:</p>
                                <p className="ml-5">Great! Start with <strong>Step 1</strong> below.</p>
                              </div>
                              
                              <div className="bg-blue-50 p-3 rounded">
                                <p className="font-medium">🔹 <strong>If you see a screen asking to select companies or who to reach out to</strong>:</p>
                                <p className="mt-1 ml-5">Apollo has taken you directly to company selection. <strong>Skip to Step 3 below</strong> to continue with the course.</p>
                              </div>
                              
                              <p className="text-xs text-blue-600">💡 Don't worry about getting it perfect—you can always adjust these settings later!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-gray-900">Step 1: Log in to Apollo.io</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">First, go to <a href="https://www.apollo.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Apollo.io</a> and sign up if you haven't already.</p>
                      <div className="bg-gray-50 p-3 rounded text-sm text-gray-600 mb-3">
                        <p className="font-medium">💡 Pro Tip:</p>
                        <p>Use the free trial to follow along with this course. You won't be charged until the trial period ends.</p>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>This should take about 2-3 minutes to complete</span>
                      </div>
                    </div>
                    
                    <h3 className="text-gray-900">Step 2: Start a New Search</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">After logging in, look for a button that says "Find Leads" or "New Search" and click it.</p>
                      <div className="bg-blue-50 p-3 rounded text-sm text-blue-700 mb-3">
                        <p className="font-medium">📌 What you'll see:</p>
                        <p>You should now be on a page with multiple filter options on the left side of your screen.</p>
                      </div>
                      <img 
                        src="/images/apollo-search-interface.png" 
                        alt="Apollo.io search interface" 
                        className="border border-gray-200 rounded-lg w-full max-w-2xl mb-3"
                      />
                      <p className="text-sm text-gray-500">If you don't see the filters, look for a button that says "Add Filter" or "Show Filters" and click it.</p>
                    </div>
                    
                    <h3 className="text-gray-900">Step 3: Define Your Target Audience</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">Now, let's define who your ideal customers are. This is like telling Apollo.io exactly who you want to find.</p>
                      
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                              <strong>Don't worry about being too specific.</strong> You can always adjust these settings later as you learn more about what works best for your business.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="text-gray-900 font-medium mb-3">A. Lookalike Organizations (Optional)</h4>
                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <p className="text-gray-700 mb-2">If you already work with some great clients, you can find similar companies:</p>
                        <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                          <li>Click "Add Companies" or "Select Companies"</li>
                          <li>Type the names of companies similar to your ideal clients</li>
                          <li>Select them from the dropdown list</li>
                        </ol>
                        <div className="mt-3 p-2 bg-white rounded border border-blue-100">
                          <p className="text-xs text-gray-500 flex items-center">
                            <svg className="w-4 h-4 mr-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Not sure? No problem! You can skip this by clicking "Skip" or "Not Now" and we'll help you find leads other ways.</span>
                          </p>
                        </div>
                      </div>

                    </div>

                    <h4 className="text-gray-900">B. Job Titles to Target</h4>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">Who are the decision-makers for your product/service? Examples:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-900">For B2B Sales:</p>
                          <ul className="text-sm text-gray-600 mt-1 space-y-1">
                            <li>CEO/Founder</li>
                            <li>VP/Director of Sales</li>
                            <li>Business Development</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-900">For Marketing:</p>
                          <ul className="text-sm text-gray-600 mt-1 space-y-1">
                            <li>Marketing Director</li>
                            <li>Growth Manager</li>
                            <li>Digital Marketing</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-gray-900">Step 3: Target Locations</h4>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">Where are your ideal customers located? Select countries/regions that match your market.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">United States</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Canada</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">United Kingdom</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Australia</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Select all that apply to your target market</p>
                    </div>

                    <h4 className="text-gray-900">Step 4: Industry Selection</h4>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">Which industries are you focusing on? Examples:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {['Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing', 'Professional Services', 'Real Estate', 'Hospitality'].map(industry => (
                          <span key={industry} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm">
                            {industry}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Choose 3-5 industries that best match your ideal customers</p>
                    </div>

                    <h4 className="text-gray-900">Step 5: Company Size</h4>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">What size companies are you targeting?</p>
                      <div className="space-y-2">
                        {[
                          { range: '1-10', label: 'Startups & Small Businesses' },
                          { range: '11-50', label: 'Growing Businesses' },
                          { range: '51-200', label: 'Mid-Market' },
                          { range: '201-1000', label: 'Large Enterprises' },
                          { range: '1000+', label: 'Enterprise' }
                        ].map(({ range, label }) => (
                          <div key={range} className="flex items-center">
                            <input type="checkbox" id={`size-${range}`} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor={`size-${range}`} className="ml-2 text-gray-700">
                              <span className="font-medium">{range} employees</span>
                              <span className="text-gray-500 text-sm ml-2">{label}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <h4 className="text-gray-900">Step 6: Business Model (Optional)</h4>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">What type of businesses are you targeting?</p>
                      <div className="flex flex-wrap gap-2">
                        {['B2B', 'B2C', 'B2B2C', 'E-commerce', 'SaaS', 'Agency', 'Non-Profit', 'Marketplace'].map(type => (
                          <span key={type} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm">
                            {type}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Select all that apply to your target audience</p>
                    </div>

                    <h4 className="text-gray-900">Step 7: Choose Your Outreach Methods</h4>
                    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                      <p className="text-gray-700 mb-4">How do you want to reach out to leads? Select your preferred methods:</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input 
                              id="email-outreach" 
                              type="checkbox" 
                              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                              defaultChecked
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="email-outreach" className="font-medium text-gray-700">Email Outreach</label>
                            <p className="text-gray-500">Send personalized email sequences to your leads</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input 
                              id="linkedin" 
                              type="checkbox" 
                              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                              defaultChecked
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="linkedin" className="font-medium text-gray-700">LinkedIn Connection</label>
                            <p className="text-gray-500">Connect with leads on LinkedIn</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input 
                              id="phone-call" 
                              type="checkbox" 
                              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="phone-call" className="font-medium text-gray-700">Phone Calls</label>
                            <p className="text-gray-500">Set up phone calls with leads</p>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-gray-200">
                          <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <input 
                                id="research-only" 
                                type="checkbox" 
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="research-only" className="font-medium text-gray-700">Research Only</label>
                              <p className="text-gray-500">I only want to prospect and research leads for now</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-700">
                          <span className="font-medium">Tip:</span> You can change these settings later in your Apollo.io account. 
                          For this course, we recommend starting with email outreach as it's the most scalable method.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {currentLesson === 3 && (
                  <div className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="text-blue-800">🔌 Setting Up Your Automation in Make.com</h3>
                      <p className="text-blue-700">Don't worry if you're new to automation! We'll guide you through each click.</p>
                    </div>

                    <h3 className="text-gray-900">Step 1: Get the Workflow Template</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">First, let's download the pre-made workflow template:</p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <h4 className="font-medium text-blue-800 mb-2">📥 Download the Template</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-sm">
                          <li>Look for the <strong>"Course Resources"</strong> section in the sidebar</li>
                          <li>Find and click on <strong>"Make.com Workflow Template"</strong></li>
                          <li>Click <strong>"Download"</strong> to save the file to your computer</li>
                        </ol>
                        <p className="text-xs text-blue-600 mt-2">💡 The file will be named something like <code>AI_Lead_Research_Workflow.json</code></p>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                              <strong>Don't worry if this looks complicated!</strong> You're just downloading a file - we'll walk through the next steps together.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-gray-900">Step 2: Import the Workflow into Make.com</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">Now, let's add this workflow to your Make.com account:</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold mr-3 mt-0.5">1</div>
                          <div>
                            <h4 className="font-medium text-gray-900">Go to Make.com</h4>
                            <p className="text-sm text-gray-600">Open <a href="https://www.make.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">make.com</a> in your web browser and log in to your account.</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold mr-3 mt-0.5">2</div>
                          <div>
                            <h4 className="font-medium text-gray-900">Click "Create scenario"</h4>
                            <p className="text-sm text-gray-600">Click the <strong>"Create scenario"</strong> button in the top-right corner (the purple button).</p>
                            
                            <div className="mt-3 bg-white border border-gray-200 rounded-lg p-3 mb-3">
                              <p className="text-sm text-gray-700">This will open the scenario builder with a blank canvas and a list of apps on the right side.</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold mr-3 mt-0.5">3</div>
                          <div>
                            <h4 className="font-medium text-gray-900">Find the Three Dots Menu at the Bottom</h4>
                            <p className="text-sm text-gray-600">Look at the <strong>bottom toolbar</strong> of the screen. You'll see several icons - find the <strong>three dots menu (...)</strong> on the right side.</p>
                            
                            <div className="mt-3 bg-white border border-gray-200 rounded-lg p-3 mb-3">
                              <p className="text-sm text-gray-700"><strong>The bottom toolbar shows:</strong></p>
                              <ul className="text-xs text-gray-600 mt-2 space-y-1 list-disc pl-5">
                                <li>"Run once" button (purple)</li>
                                <li>Various tool icons in the middle</li>
                                <li><strong>Three dots (...)</strong> on the right side - click this!</li>
                              </ul>
                            </div>
                            
                            <div className="bg-blue-50 p-3 rounded text-sm">
                              <p className="text-blue-700">💡 The three dots menu contains the <strong>"Import blueprint"</strong> option.</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold mr-3 mt-0.5">4</div>
                          <div>
                            <h4 className="font-medium text-gray-900">Click "Import Blueprint"</h4>
                            <p className="text-sm text-gray-600">From the three dots menu, select <strong>"Import blueprint"</strong>.</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold mr-3 mt-0.5">5</div>
                          <div>
                            <h4 className="font-medium text-gray-900">Upload the Template File</h4>
                            <p className="text-sm text-gray-600">Click <strong>"Choose File"</strong> and select the template file you downloaded earlier.</p>
                            
                            <div className="mt-3 bg-white border border-gray-200 rounded-lg p-3 text-sm">
                              <p className="text-gray-700">📁 Look for: <code className="bg-gray-100 px-1.5 py-0.5 rounded">AI_Lead_Research_Workflow.json</code></p>
                            </div>
                            
                            <div className="mt-3 bg-green-50 p-3 rounded text-sm border-l-4 border-green-400">
                              <p className="text-green-700">✅ <strong>Success!</strong> You should now see the workflow canvas with modules ready to configure.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-gray-900">Step 3: Understanding Your Workflow</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">Great job! You've successfully imported the workflow. Now let's understand what you're looking at:</p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <h4 className="font-medium text-blue-800 mb-2">🎯 Adding Your First Module</h4>
                        <p className="text-sm text-blue-700 mb-3">Let's add the Apollo.io module to start finding leads:</p>
                        
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded text-sm">
                            <p className="font-medium text-gray-900 mb-2">Step 1: Click the "+" Button</p>
                            <p className="text-gray-700">Click the large <strong>"+" button</strong> in the center of the canvas.</p>
                          </div>
                          
                          <div className="bg-white p-3 rounded text-sm">
                            <p className="font-medium text-gray-900 mb-2">Step 2: Search for Apollo</p>
                            <p className="text-gray-700">In the search box, type <strong>"apollo"</strong> and select the Apollo app.</p>
                          </div>
                          
                          <div className="bg-white p-3 rounded text-sm">
                            <p className="font-medium text-gray-900 mb-2">Step 3: Select "List Accounts"</p>
                            <p className="text-gray-700">From the list of Apollo actions, scroll down and click <strong>"List Accounts"</strong> (under the ACCOUNTS section).</p>
                            <div className="mt-2 bg-blue-50 p-2 rounded">
                              <p className="text-xs text-blue-700">💡 "List Accounts" returns a list of companies from Apollo with full data including industry, employee count, and other key details needed for AI scoring.</p>
                            </div>
                            <div className="mt-2 bg-yellow-50 p-2 rounded border-l-4 border-yellow-400">
                              <p className="text-xs text-yellow-700"><strong>Why not "Watch New Accounts"?</strong> "Watch New Accounts" only provides basic info (name, location). "List Accounts" gives you complete company data (industry, size, revenue) needed for accurate AI lead scoring.</p>
                            </div>
                          </div>
                          
                          <div className="bg-white p-3 rounded text-sm">
                            <p className="font-medium text-gray-900 mb-2">Step 4: Configure the Apollo Module</p>
                            <p className="text-gray-700 mb-2">Click on the Apollo module to configure it:</p>
                            
                            <div className="mt-2 space-y-2">
                              <div className="bg-gray-50 p-2 rounded">
                                <p className="text-sm text-gray-700 font-medium mb-1">Connection:</p>
                                <p className="text-xs text-gray-600">Select "My Apollo connection" (or create one with your API key)</p>
                              </div>
                              
                              <div className="bg-gray-50 p-2 rounded">
                                <p className="text-sm text-gray-700 font-medium mb-1">Organization Name (Optional):</p>
                                <p className="text-xs text-gray-600">Leave blank to get all accounts, or type a specific company name to filter</p>
                              </div>
                              
                              <div className="bg-gray-50 p-2 rounded">
                                <p className="text-sm text-gray-700 font-medium mb-1">Account Stage IDs:</p>
                                <p className="text-xs text-gray-600 mb-1">Select which types of accounts to include:</p>
                                <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
                                  <li>Check <strong>"Cold"</strong> - for new prospects</li>
                                  <li>Uncheck "Current Client", "Active Opportunity", etc. (unless you want existing clients)</li>
                                </ul>
                              </div>
                              
                              <div className="bg-gray-50 p-2 rounded">
                                <p className="text-sm text-gray-700 font-medium mb-1">Limit:</p>
                                <p className="text-xs text-gray-600">Set to <strong>10</strong> for testing (you can increase later)</p>
                              </div>
                              
                              <div className="bg-blue-50 p-2 rounded">
                                <p className="text-xs text-blue-700">💡 Click <strong>"Save"</strong> when done. This will return up to 10 cold prospects from your Apollo account.</p>
                              </div>
                              
                              <div className="bg-yellow-50 p-2 rounded border-l-4 border-yellow-400">
                                <p className="text-xs text-yellow-700">⚠️ You'll need to connect your Apollo.io account. Click <strong>"Create a connection"</strong> and enter your Apollo.io API key.</p>
                              </div>
                              
                              <div className="bg-blue-50 p-2 rounded">
                                <p className="text-xs text-blue-700 mb-2">💡 <strong>How to get your Apollo API key:</strong></p>
                                
                                <div className="bg-white p-2 rounded border border-blue-200 mb-2">
                                  <p className="text-xs text-blue-800 font-medium mb-1">🔗 Step 1: Go to Apollo Developer Portal</p>
                                  <a href="https://developer.apollo.io/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 underline hover:text-blue-800 font-medium">Click here to open Apollo Developer Portal →</a>
                                </div>
                                
                                <div className="bg-white p-2 rounded border border-gray-200 mb-2">
                                  <p className="text-xs text-gray-800 font-medium mb-1">📋 Step 2: Create Your API Key</p>
                                  <ol className="text-xs text-gray-700 list-decimal pl-4 space-y-1">
                                    <li>In the left sidebar, click <strong>"API Keys"</strong></li>
                                    <li>Click the yellow <strong>"Create new key"</strong> button</li>
                                    <li>In the popup, enter a name like <strong>"Make.com"</strong></li>
                                    <li>You can leave the Description blank</li>
                                    <li>Click the yellow <strong>"Create API key"</strong> button at the bottom</li>
                                  </ol>
                                </div>
                                
                                <div className="bg-white p-2 rounded border border-gray-200 mb-2">
                                  <p className="text-xs text-gray-800 font-medium mb-1">👁️ Step 3: Copy Your API Key</p>
                                  <ol className="text-xs text-gray-700 list-decimal pl-4 space-y-1">
                                    <li>You'll see your new API key in the list (it will show as <code className="bg-gray-100 px-1">************</code>)</li>
                                    <li>Click the <strong>eye icon (👁️)</strong> to reveal the full key</li>
                                    <li>Click the <strong>copy icon (📋)</strong> to copy it to your clipboard</li>
                                    <li>Keep this key safe - you'll paste it into Make.com next</li>
                                  </ol>
                                </div>
                                
                                <div className="bg-yellow-50 p-2 rounded border-l-4 border-yellow-400">
                                  <p className="text-xs text-yellow-700">⚠️ <strong>Security tip:</strong> Never share your API key publicly. It gives access to your Apollo.io account!</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
                        <h4 className="font-medium text-green-800 mb-2">✅ Step 4: Connect Apollo to Make.com</h4>
                        <p className="text-sm text-green-700 mb-3">Now let's connect your Apollo API key to the Make.com workflow:</p>
                        
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded text-sm">
                            <p className="font-medium text-gray-900 mb-2">1. Go Back to Make.com</p>
                            <p className="text-gray-700">Return to your Make.com browser tab where you have the Apollo module on the canvas.</p>
                          </div>
                          
                          <div className="bg-white p-3 rounded text-sm">
                            <p className="font-medium text-gray-900 mb-2">2. Click on the Apollo Module</p>
                            <p className="text-gray-700">Click on the black Apollo circle (the one with the red "1" badge) to open its settings.</p>
                          </div>
                          
                          <div className="bg-white p-3 rounded text-sm">
                            <p className="font-medium text-gray-900 mb-2">3. Create Connection</p>
                            <p className="text-gray-700 mb-2">In the settings panel that opens:</p>
                            <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
                              <li>Select <strong>"My Apollo connection"</strong> from the dropdown (or click <strong>"Add"</strong> to create new)</li>
                              <li>If creating new: Paste the Apollo API key you copied earlier</li>
                              <li>Click <strong>"Save"</strong> or <strong>"Continue"</strong></li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-3 rounded text-sm">
                            <p className="font-medium text-gray-900 mb-2">4. Set the Limit</p>
                            <p className="text-gray-700 mb-2">You'll see a <strong>"Limit"</strong> field:</p>
                            <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
                              <li>This controls how many leads to process per run</li>
                              <li><strong>Start with 5</strong> for testing</li>
                              <li>You can increase this later once everything works</li>
                              <li>Click <strong>"Save"</strong> to continue</li>
                            </ul>
                            <div className="mt-2 bg-blue-50 p-2 rounded">
                              <p className="text-xs text-blue-700">💡 Lower limits = fewer operations used = lower costs while testing</p>
                            </div>
                          </div>
                          
                          <div className="bg-white p-3 rounded text-sm">
                            <p className="font-medium text-gray-900 mb-2">5. Choose When to Start</p>
                            <p className="text-gray-700 mb-2">A popup will ask "Choose where to start":</p>
                            <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
                              <li>Select <strong>"From now on"</strong> (recommended)</li>
                              <li>This watches for NEW accounts only, not historical data</li>
                              <li>Click <strong>"Save"</strong> to finish configuration</li>
                            </ul>
                            <div className="mt-2 bg-blue-50 p-2 rounded">
                              <p className="text-xs text-blue-700">💡 "From now on" prevents processing old data and keeps costs low</p>
                            </div>
                          </div>
                          
                          <div className="bg-green-50 p-2 rounded border-l-4 border-green-400">
                            <p className="text-xs text-green-700">✅ Once saved, the red "1" badge should disappear from the Apollo module!</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900">📋 What's Next: Understanding Your Workflow</h4>
                        <p className="text-sm text-gray-700 mb-3">You've successfully set up the first module! Here's what the complete workflow will do:</p>
                        <div className="grid gap-3">
                          <div className="flex items-start bg-gray-50 p-3 rounded">
                            <div className="mr-3 text-xl">1️⃣</div>
                            <div>
                              <p className="font-medium text-gray-900">Apollo.io Search</p>
                              <p className="text-xs text-gray-600">Finds companies matching your ideal customer profile</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start bg-gray-50 p-3 rounded">
                            <div className="mr-3 text-xl">2️⃣</div>
                            <div>
                              <p className="font-medium text-gray-900">Data Enrichment</p>
                              <p className="text-xs text-gray-600">Gathers additional company information and contact details</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start bg-gray-50 p-3 rounded">
                            <div className="mr-3 text-xl">3️⃣</div>
                            <div>
                              <p className="font-medium text-gray-900">OpenAI Analysis</p>
                              <p className="text-xs text-gray-600">Scores and qualifies each lead using AI</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start bg-gray-50 p-3 rounded">
                            <div className="mr-3 text-xl">4️⃣</div>
                            <div>
                              <p className="font-medium text-gray-900">Google Sheets</p>
                              <p className="text-xs text-gray-600">Stores qualified leads in your tracking spreadsheet</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            <strong>Don't worry about the details yet!</strong> In the next lesson, we'll walk through configuring each module step-by-step. For now, just familiarize yourself with the Make.com interface.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentLesson === 4 && (
                  <div className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="text-blue-800">🤖 Adding AI-Powered Lead Scoring</h3>
                      <p className="text-blue-700">Now let's add OpenAI to automatically score and qualify your leads!</p>
                    </div>

                    <h3 className="text-gray-900">Step 1: Add the OpenAI Module</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">Let's add AI-powered lead scoring to your workflow:</p>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-900 mb-2">1. Click "Add another module"</p>
                          <p className="text-sm text-gray-700">On your Make.com canvas, you'll see a small <strong>"+" button</strong> or <strong>"Add another module"</strong> link next to your Apollo module. Click it.</p>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-900 mb-2">2. Search for OpenAI</p>
                          <p className="text-sm text-gray-700">In the search box, type <strong>"OpenAI"</strong> and select the OpenAI app.</p>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-900 mb-2">3. Select "Create a Completion"</p>
                          <p className="text-sm text-gray-700">From the list of OpenAI actions, choose <strong>"Create a Completion"</strong> or <strong>"Create a Chat Completion"</strong>.</p>
                          <div className="mt-2 bg-blue-50 p-2 rounded text-sm">
                            <p className="text-blue-700">💡 This will use ChatGPT to analyze each lead and give it a score.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-gray-900">Step 2: Connect & Configure OpenAI</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">You'll need an OpenAI API key (similar to Apollo):</p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <p className="text-sm text-blue-800 font-medium mb-2">🔗 Get Your OpenAI API Key:</p>
                        <ol className="text-sm text-blue-700 list-decimal pl-5 space-y-1">
                          <li>Go to <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline font-medium">platform.openai.com/api-keys</a></li>
                          <li>Click <strong>"Create new secret key"</strong></li>
                          <li>Give it a name like <strong>"Make.com Lead Scoring"</strong></li>
                          <li>Click <strong>"Create secret key"</strong></li>
                          <li>Copy the key immediately (you won't see it again!)</li>
                        </ol>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded mb-4">
                        <p className="font-medium text-gray-900 mb-2">Connect to Make.com:</p>
                        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                          <li>Click on the OpenAI module to open its settings</li>
                          <li>Under <strong>"Connection"</strong>, click <strong>"Add"</strong></li>
                          <li>Paste your OpenAI API key in the popup</li>
                          <li>Click <strong>"Save"</strong> to create the connection</li>
                          <li>Select your connection from the dropdown</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded mb-4">
                        <p className="font-medium text-gray-900 mb-2">Configure Basic Settings:</p>
                        <div className="space-y-2 mt-2">
                          <div className="flex items-start">
                            <div className="mr-3 font-bold text-blue-600 min-w-[120px]">Select Method:</div>
                            <div className="text-sm text-gray-700">Keep <strong>"Create a Chat Completion"</strong> (already selected)</div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="mr-3 font-bold text-blue-600 min-w-[120px]">Model:</div>
                            <div>
                              <p className="text-sm text-gray-700">Select <strong>"gpt-3.5-turbo"</strong></p>
                              <p className="text-xs text-gray-500 mt-1">Start with gpt-3.5-turbo for testing. You can upgrade to gpt-4 later for better accuracy.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="mr-3 font-bold text-blue-600 min-w-[120px]">Max Tokens:</div>
                            <div>
                              <p className="text-sm text-gray-700">Change from 2048 to <strong>200</strong></p>
                              <p className="text-xs text-gray-500 mt-1">This limits the response length to keep costs down.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                        <p className="text-sm text-yellow-700">⚠️ <strong>Don't have an OpenAI account?</strong> You'll need to sign up at <a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" className="underline">platform.openai.com</a> and add billing information to use the API.</p>
                      </div>
                    </div>

                    <h3 className="text-gray-900">Step 3: Add the AI Prompt</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">Now let's add the prompt that tells AI how to score leads:</p>
                      
                      <div className="bg-blue-50 p-3 rounded mb-4">
                        <p className="text-sm text-blue-700 mb-2"><strong>In the Messages section:</strong></p>
                        <ol className="text-sm text-blue-700 list-decimal pl-5 space-y-1">
                          <li>Click the <strong>"+ Add message"</strong> button</li>
                          <li>A "Message 1" section will appear</li>
                          <li>Under <strong>"Role"</strong>, click the dropdown and select <strong>"user"</strong></li>
                          <li>Scroll down to find the <strong>"Content"</strong> field</li>
                          <li>Paste your prompt template in the Content field</li>
                          <li>Leave the "Map" toggles OFF (gray)</li>
                        </ol>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-4">
                        <p className="text-sm text-yellow-800 mb-2"><strong>⚠️ This is the most important step!</strong></p>
                        <p className="text-sm text-yellow-700">The prompt below tells AI exactly how to analyze and score your leads. Copy it and paste it into the "Text Content" field.</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-gray-900">📝 Copy This Prompt:</p>
                          <button 
                            onClick={() => {
                              const prompt = `You are a lead qualification expert. Research and score this company from 0-100 based on fit for [YOUR SERVICE].

Company: {{1.name}}
Website: {{1.website_url}}
Location: {{1.organization_city}}, {{1.organization_country}}

Using your knowledge of this company (or researching based on the name/website), evaluate:
- Industry and relevance to [YOUR SERVICE]
- Likely company size and budget
- Growth potential
- Geographic fit

Provide:
1. Score (0-100)
2. Two-sentence justification including the industry
3. Recommended next action`;
                              navigator.clipboard.writeText(prompt);
                            }}
                            className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                          >
                            Copy to Clipboard
                          </button>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <pre className="text-xs text-gray-800 whitespace-pre-wrap font-mono">
{`You are a lead qualification expert. Research and score this company from 0-100 based on fit for [YOUR SERVICE].

Company: {{1.name}}
Website: {{1.website_url}}
Location: {{1.organization_city}}, {{1.organization_country}}

Using your knowledge of this company (or researching based on the name/website), evaluate:
- Industry and relevance to [YOUR SERVICE]
- Likely company size and budget
- Growth potential
- Geographic fit

Provide:
1. Score (0-100)
2. Two-sentence justification including the industry
3. Recommended next action`}
                          </pre>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mb-3">
                        <p className="text-sm text-blue-800 font-medium mb-2">🎯 How to Use This Prompt:</p>
                        <ol className="text-sm text-blue-700 list-decimal pl-5 space-y-2">
                          <li>Click the <strong>"Copy to Clipboard"</strong> button above</li>
                          <li>Paste it into the <strong>"Text Content"</strong> field in Make.com</li>
                          <li><strong>ONLY change this:</strong> Replace <code className="bg-blue-100 px-1">[YOUR SERVICE]</code> with what you actually offer</li>
                          <li><strong>DON'T change:</strong> The <code className="bg-blue-100 px-1">{'{{1.name}}'}</code>, <code className="bg-blue-100 px-1">{'{{1.industry}}'}</code>, etc. - these automatically pull data from Apollo</li>
                        </ol>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-gray-200 mb-3">
                        <p className="text-sm text-gray-800 font-medium mb-2">✏️ What is [YOUR SERVICE]?</p>
                        <p className="text-sm text-gray-700 mb-3">This is what YOU offer or sell. The AI uses this to determine if each company is a good fit for your business.</p>
                        
                        <p className="text-sm text-gray-800 font-medium mb-2">Examples to replace [YOUR SERVICE] with:</p>
                        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                          <li><strong>"B2B SaaS marketing services"</strong> - if you're a marketing agency targeting SaaS companies</li>
                          <li><strong>"enterprise software consulting"</strong> - if you help large companies with software</li>
                          <li><strong>"AI automation services"</strong> - if you build AI workflows for businesses</li>
                          <li><strong>"HR management software"</strong> - if you sell HR tools</li>
                          <li><strong>"e-commerce development"</strong> - if you build online stores</li>
                        </ul>
                        
                        <div className="mt-3 bg-blue-50 p-2 rounded">
                          <p className="text-xs text-blue-700"><strong>Example:</strong> If you offer "B2B SaaS marketing services", the AI will score SaaS companies high (80-100) and score restaurants low (10-20) because they're not a good fit.</p>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                        <p className="text-sm text-green-700"><strong>💡 Pro Tip:</strong> The more specific you are about your service, the better AI will score leads. Instead of "marketing services", say "SEO and content marketing for B2B SaaS companies".</p>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-sm text-blue-700 mb-2"><strong>Set Temperature (Optional but Recommended):</strong></p>
                        <p className="text-sm text-blue-700">Scroll down to find the <strong>"Temperature"</strong> field and set it to <strong>0.3</strong>. This makes the AI scoring more consistent and predictable.</p>
                      </div>
                    </div>

                    <h3 className="text-gray-900">Step 4: Save Your Configuration</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">Once you've configured everything:</p>
                      
                      <div className="bg-gray-50 p-3 rounded">
                        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                          <li>Double-check your Model is set to <strong>gpt-3.5-turbo</strong></li>
                          <li>Verify Max Tokens is <strong>200</strong></li>
                          <li>Make sure your prompt is pasted in the Messages field</li>
                          <li>Click the <strong>"Save"</strong> button at the bottom</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-green-700">
                            <strong>Great progress!</strong> Your workflow now finds leads with Apollo and scores them with AI. Next, we'll add Google Sheets to store the results!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentLesson === 5 && (
                  <div className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                      <h3 className="text-green-800">📊 Storing Leads in Google Sheets & Testing</h3>
                      <p className="text-green-700">Let's add Google Sheets to store your qualified leads and test the complete workflow!</p>
                    </div>

                    <h3 className="text-gray-900">Step 1: Create Your Google Sheet</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">First, let's set up a spreadsheet to store your leads:</p>
                      
                      <div className="bg-gray-50 p-3 rounded mb-4">
                        <p className="font-medium text-gray-900 mb-2">Create a New Sheet:</p>
                        <ol className="text-sm text-gray-700 list-decimal pl-5 space-y-1">
                          <li>Go to <a href="https://sheets.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">sheets.google.com</a></li>
                          <li>Click <strong>"Blank"</strong> to create a new spreadsheet</li>
                          <li>Name it <strong>"AI Lead Research - Qualified Leads"</strong></li>
                        </ol>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-medium text-blue-800 mb-2">Add Column Headers:</p>
                        <p className="text-sm text-blue-700 mb-2">Copy these headers and paste them into Row 1 of your Google Sheet (they'll automatically fill across columns A-H):</p>
                        
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-blue-700">Click to copy:</p>
                          <button 
                            onClick={() => {
                              const headers = "Company Name\tIndustry\tSize\tLocation\tAI Score\tJustification\tNext Action\tDate Added";
                              navigator.clipboard.writeText(headers);
                            }}
                            className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                          >
                            Copy Headers
                          </button>
                        </div>
                        
                        <div className="bg-white p-2 rounded border border-blue-200">
                          <code className="text-xs text-gray-800">Company Name | Industry | Size | Location | AI Score | Justification | Next Action | Date Added</code>
                        </div>
                        
                        <div className="mt-2 bg-white p-2 rounded text-xs text-blue-600">
                          <p><strong>💡 How it works:</strong> Click "Copy Headers" above, then in Google Sheets, click cell A1 and press Ctrl+V (or Cmd+V on Mac). The headers will automatically spread across columns A through H!</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-gray-900">Step 2: Add Google Sheets Module</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">Now let's connect Google Sheets to your Make.com workflow:</p>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-900 mb-2">1. Add the Module</p>
                          <p className="text-sm text-gray-700">Look for the small <strong>green "+" button</strong> on the connection line coming out of your OpenAI module (it appears when you hover over the line). Click it, search for <strong>"Google Sheets"</strong>, and select it.</p>
                          <div className="mt-2 bg-blue-50 p-2 rounded text-xs">
                            <p className="text-blue-700">💡 The green "+" button appears on the line connecting your modules - hover over the line to see it!</p>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-900 mb-2">2. Select Action</p>
                          <p className="text-sm text-gray-700">Choose <strong>"Add a Row"</strong> or <strong>"Insert a Row"</strong>.</p>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-900 mb-2">3. Connect Your Google Account</p>
                          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                            <li>Click the green <strong>"Create a connection"</strong> button</li>
                            <li>A popup will appear - click <strong>"Sign in with Google"</strong></li>
                            <li>Select your Google account and grant Make.com permission to access Google Sheets</li>
                            <li>Click <strong>"Allow"</strong> to authorize the connection</li>
                          </ul>
                          <div className="mt-2 bg-blue-50 p-2 rounded text-xs">
                            <p className="text-blue-700">💡 Make.com needs permission to read and write to your Google Sheets. This is safe and you can revoke access anytime from your Google account settings.</p>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-900 mb-2">4. Select Your Spreadsheet</p>
                          <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                            <li>Choose your <strong>"AI Lead Research - Qualified Leads"</strong> spreadsheet</li>
                            <li>Select <strong>Sheet1</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-gray-900">Step 3: Map the Data Fields</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">Now map the data from Apollo and OpenAI to your spreadsheet columns:</p>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-4">
                        <p className="text-sm text-yellow-800 mb-2"><strong>How to Map Fields:</strong></p>
                        <ol className="text-sm text-yellow-700 list-decimal pl-5 space-y-1">
                          <li>Click inside each field (e.g., "Company Name (A)")</li>
                          <li>A panel will open on the left showing available data</li>
                          <li>Expand the modules (Apollo or OpenAI) to see their data</li>
                          <li>Click the data field you want to use</li>
                        </ol>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="font-medium text-gray-900 mb-3">Field Mapping Guide:</p>
                        <div className="space-y-3 text-sm">
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex items-start mb-2">
                              <div className="font-bold text-blue-600 min-w-[150px]">Company Name (A):</div>
                            </div>
                            <ol className="text-xs text-gray-600 list-decimal pl-5 space-y-1">
                              <li>Click in the "Company Name" field</li>
                              <li>Expand <strong>"1. Apollo - List Accounts"</strong></li>
                              <li>Look for and click <strong>"Name"</strong></li>
                            </ol>
                          </div>
                          
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex items-start mb-2">
                              <div className="font-bold text-blue-600 min-w-[150px]">Industry (B):</div>
                            </div>
                            <p className="text-xs text-gray-600 mb-2"><strong>Apollo doesn't provide this field.</strong> The AI will identify the industry in its response. You can:</p>
                            <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
                              <li>Leave it empty, or</li>
                              <li>Type "See AI Analysis" as a placeholder</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex items-start mb-2">
                              <div className="font-bold text-blue-600 min-w-[150px]">Size (C):</div>
                            </div>
                            <p className="text-xs text-gray-600 mb-2"><strong>Apollo doesn't provide this field.</strong> The AI will estimate size in its response. You can:</p>
                            <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
                              <li>Leave it empty, or</li>
                              <li>Type "See AI Analysis" as a placeholder</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex items-start mb-2">
                              <div className="font-bold text-blue-600 min-w-[150px]">Location (D):</div>
                            </div>
                            <p className="text-xs text-gray-600 mb-1">From Apollo module → Choose one of:</p>
                            <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1">
                              <li><strong>"Organization City"</strong> (just the city)</li>
                              <li><strong>"Organization Country"</strong> (just the country)</li>
                              <li>Or combine both if you want more detail</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex items-start mb-2">
                              <div className="font-bold text-blue-600 min-w-[150px]">AI Score (E):</div>
                            </div>
                            <ol className="text-xs text-gray-600 list-decimal pl-5 space-y-1">
                              <li>Expand <strong>"2. OpenAI (ChatGPT, Whisper, DALL-E)"</strong></li>
                              <li>Expand <strong>"Choices[]"</strong></li>
                              <li>Expand <strong>"Message"</strong></li>
                              <li>Click <strong>"Content"</strong></li>
                            </ol>
                            <p className="text-xs text-gray-500 mt-1 italic">This contains the full AI response with the score</p>
                          </div>
                          
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex items-start mb-2">
                              <div className="font-bold text-blue-600 min-w-[150px]">Justification (F):</div>
                            </div>
                            <p className="text-xs text-gray-600">Same as AI Score - from OpenAI → Choices[] → Message → <strong>"Content"</strong></p>
                            <p className="text-xs text-gray-500 mt-1 italic">The AI response includes both score and justification</p>
                          </div>
                          
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex items-start mb-2">
                              <div className="font-bold text-blue-600 min-w-[150px]">Next Action (G):</div>
                            </div>
                            <p className="text-xs text-gray-600">Same as AI Score - from OpenAI → Choices[] → Message → <strong>"Content"</strong></p>
                          </div>
                          
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <div className="flex items-start mb-2">
                              <div className="font-bold text-blue-600 min-w-[150px]">Date Added (H):</div>
                            </div>
                            <ol className="text-xs text-gray-600 list-decimal pl-5 space-y-1">
                              <li>In the search box, type <strong>"now"</strong></li>
                              <li>Select the <strong>"now"</strong> function</li>
                              <li>Or manually type: <code className="bg-gray-100 px-1">{'{{now}}'}</code></li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-blue-50 p-3 rounded">
                        <p className="text-sm text-blue-700">💡 Click <strong>"Save"</strong> when you're done mapping all fields.</p>
                      </div>
                    </div>

                    <h3 className="text-gray-900">Step 4: Test Your Workflow</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <p className="text-gray-700 mb-3">Time to test! Let's run the workflow manually to see if everything works:</p>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-900 mb-2">1. Run Once</p>
                          <p className="text-sm text-gray-700">At the bottom of Make.com, click the <strong>"Run once"</strong> button (purple button).</p>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-900 mb-2">2. Watch the Execution</p>
                          <p className="text-sm text-gray-700">You'll see each module light up as it processes. Watch for any errors (red indicators).</p>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="font-medium text-gray-900 mb-2">3. Check Your Google Sheet</p>
                          <p className="text-sm text-gray-700">Open your Google Sheet and verify that new rows were added with lead data!</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-green-50 p-3 rounded border-l-4 border-green-400">
                        <p className="text-sm text-green-700"><strong>✅ Success!</strong> If you see data in your sheet, your workflow is working! If not, check the troubleshooting section below.</p>
                      </div>
                    </div>

                    <h3 className="text-gray-900">Troubleshooting Common Issues</h3>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg mb-6">
                      <div className="space-y-3">
                        <div className="border-l-4 border-red-400 bg-red-50 p-3 rounded">
                          <p className="font-medium text-red-800 mb-1">❌ No data in Google Sheets</p>
                          <p className="text-sm text-red-700">Check that all fields are mapped correctly and Google Sheets connection is active.</p>
                        </div>
                        
                        <div className="border-l-4 border-yellow-400 bg-yellow-50 p-3 rounded">
                          <p className="font-medium text-yellow-800 mb-1">⚠️ Workflow stops at OpenAI</p>
                          <p className="text-sm text-yellow-700">Verify your OpenAI API key is valid and you have credits available.</p>
                        </div>
                        
                        <div className="border-l-4 border-blue-400 bg-blue-50 p-3 rounded">
                          <p className="font-medium text-blue-800 mb-1">ℹ️ Apollo returns no results</p>
                          <p className="text-sm text-blue-700">Check your Apollo search criteria in Lesson 2 - you may need to broaden your filters.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-green-700">
                            <strong>Congratulations!</strong> Your AI Lead Research Agent is now fully operational! In the next lesson, we'll cover scaling and advanced features.
                          </p>
                        </div>
                      </div>
                    </div>
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
