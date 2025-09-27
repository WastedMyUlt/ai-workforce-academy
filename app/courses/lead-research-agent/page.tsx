'use client'

import { useState } from 'react';
import Link from 'next/link';

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

  const markLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const currentLessonData = lessons.find(lesson => lesson.id === currentLesson);
  const progress = (completedLessons.length / lessons.length) * 100;

  return (
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
                  className="bg-[#2F80ED] h-2 rounded-full transition-all duration-300"
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
                    onClick={() => setCurrentLesson(lesson.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentLesson === lesson.id
                        ? 'bg-[#2F80ED] text-white'
                        : completedLessons.includes(lesson.id)
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
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
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-[#2F80ED] hover:underline">
                    📄 Make.com Workflow Template
                  </a>
                  <a href="#" className="block text-sm text-[#2F80ED] hover:underline">
                    📊 Google Sheets Template
                  </a>
                  <a href="#" className="block text-sm text-[#2F80ED] hover:underline">
                    🤖 ChatGPT Prompt Library
                  </a>
                  <a href="#" className="block text-sm text-[#2F80ED] hover:underline">
                    📋 Setup Checklist
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Video Player Area */}
              <div className="bg-gray-900 aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-[#2F80ED] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{currentLessonData?.title}</h3>
                  <p className="text-gray-300 mb-4">{currentLessonData?.duration}</p>
                  <button className="bg-[#2F80ED] text-white px-6 py-3 rounded-lg hover:bg-[#2967c7] transition-colors">
                    ▶ Play Lesson
                  </button>
                </div>
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
                  <div className="prose max-w-none">
                    <h3>Welcome to the AI Lead Research Agent Course!</h3>
                    <p>In this course, you'll learn to build an AI agent that automatically finds and qualifies leads for your business. By the end, you'll have a system that:</p>
                    <ul>
                      <li>Finds 25-100+ qualified leads per day</li>
                      <li>Researches each company automatically</li>
                      <li>Scores leads based on buying signals</li>
                      <li>Delivers results to your preferred tools</li>
                    </ul>
                    
                    <h4>What You'll Need:</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li><strong>Apollo.io account</strong> - Lead database ($49/month)</li>
                        <li><strong>Make.com account</strong> - Automation platform ($9/month)</li>
                        <li><strong>OpenAI API key</strong> - AI processing ($5-10/month)</li>
                        <li><strong>Google account</strong> - For sheets and storage (free)</li>
                      </ul>
                    </div>

                    <h4>Expected Results:</h4>
                    <p>Students typically see results within 24 hours of setup and achieve ROI within the first week. The average student saves 15-20 hours per week on lead research.</p>
                  </div>
                )}

                {currentLesson === 2 && (
                  <div className="prose max-w-none">
                    <h3>Setting Up Apollo.io for Lead Generation</h3>
                    <p>Apollo.io will be your lead database. We'll configure it to find your ideal customers automatically.</p>
                    
                    <h4>Step 1: Define Your Ideal Customer Profile</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p><strong>Example ICP:</strong></p>
                      <ul>
                        <li>Industry: SaaS, E-commerce, Marketing Agencies</li>
                        <li>Company Size: 10-500 employees</li>
                        <li>Job Titles: CEO, Marketing Director, Operations Manager</li>
                        <li>Location: United States, Canada, UK</li>
                        <li>Technology: Uses Salesforce, HubSpot, or similar CRM</li>
                      </ul>
                    </div>

                    <h4>Step 2: Create Your Search Template</h4>
                    <p>We'll save this search as a template so your automation can use it repeatedly.</p>
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
  );
}
