'use client'

import { useState } from 'react';
import Link from 'next/link';
import EmailForm from '../../components/ui/EmailForm';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  value: string;
  category: 'Lead Generation' | 'Content Creation' | 'Customer Service' | 'Operations';
  isFree: boolean;
  comingSoon?: boolean;
}

const courses: Course[] = [
  {
    id: 'lead-research-agent',
    title: 'AI Lead Research Agent',
    description: 'Build an AI agent that finds 100+ qualified leads per day automatically. Replace expensive VAs and research tools.',
    duration: '45 min',
    lessons: 6,
    difficulty: 'Beginner',
    value: '$497',
    category: 'Lead Generation',
    isFree: true
  },
  {
    id: 'linkedin-outreach-agent',
    title: 'LinkedIn Outreach Agent',
    description: 'Automate personalized LinkedIn outreach that gets 40%+ response rates. Scale your networking effortlessly.',
    duration: '60 min',
    lessons: 8,
    difficulty: 'Intermediate',
    value: '$397',
    category: 'Lead Generation',
    isFree: false
  },
  {
    id: 'content-creation-agent',
    title: 'Content Creation Agent',
    description: 'Generate blog posts, social media content, and newsletters automatically. Never run out of content ideas.',
    duration: '75 min',
    lessons: 10,
    difficulty: 'Beginner',
    value: '$297',
    category: 'Content Creation',
    isFree: false
  },
  {
    id: 'customer-support-agent',
    title: 'Customer Support Agent',
    description: 'Handle 80% of customer inquiries automatically with intelligent responses and escalation rules.',
    duration: '90 min',
    lessons: 12,
    difficulty: 'Intermediate',
    value: '$397',
    category: 'Customer Service',
    isFree: false
  },
  {
    id: 'email-followup-agent',
    title: 'Email Follow-up Agent',
    description: 'Never miss a follow-up again. Intelligent email sequences that adapt based on recipient behavior.',
    duration: '50 min',
    lessons: 7,
    difficulty: 'Beginner',
    value: '$297',
    category: 'Lead Generation',
    isFree: false
  },
  {
    id: 'social-media-agent',
    title: 'Social Media Agent',
    description: 'Post consistently across all platforms with AI-generated content that matches your brand voice.',
    duration: '65 min',
    lessons: 9,
    difficulty: 'Intermediate',
    value: '$397',
    category: 'Content Creation',
    isFree: false
  },
  {
    id: 'data-analysis-agent',
    title: 'Data Analysis Agent',
    description: 'Transform raw business data into actionable insights with automated reports and trend analysis.',
    duration: '80 min',
    lessons: 11,
    difficulty: 'Advanced',
    value: '$497',
    category: 'Operations',
    isFree: false
  },
  {
    id: 'appointment-booking-agent',
    title: 'Appointment Booking Agent',
    description: 'Qualify leads and book meetings automatically. Integrate with your calendar and CRM seamlessly.',
    duration: '55 min',
    lessons: 8,
    difficulty: 'Intermediate',
    value: '$297',
    category: 'Lead Generation',
    isFree: false
  },
  {
    id: 'review-management-agent',
    title: 'Review Management Agent',
    description: 'Monitor and respond to reviews across all platforms. Protect your reputation 24/7.',
    duration: '40 min',
    lessons: 6,
    difficulty: 'Beginner',
    value: '$197',
    category: 'Customer Service',
    isFree: false
  },
  {
    id: 'invoice-processing-agent',
    title: 'Invoice Processing Agent',
    description: 'Automate invoice creation, sending, and follow-ups. Reduce payment delays by 60%.',
    duration: '45 min',
    lessons: 7,
    difficulty: 'Intermediate',
    value: '$297',
    category: 'Operations',
    isFree: false
  },
  {
    id: 'competitor-monitoring-agent',
    title: 'Competitor Monitoring Agent',
    description: 'Track competitor pricing, content, and strategies automatically. Stay ahead of the competition.',
    duration: '70 min',
    lessons: 9,
    difficulty: 'Advanced',
    value: '$397',
    category: 'Operations',
    isFree: false,
    comingSoon: true
  },
  {
    id: 'recruitment-agent',
    title: 'Recruitment Agent',
    description: 'Source, screen, and qualify job candidates automatically. Build your talent pipeline effortlessly.',
    duration: '85 min',
    lessons: 12,
    difficulty: 'Advanced',
    value: '$497',
    category: 'Operations',
    isFree: false,
    comingSoon: true
  }
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = ['All', 'Lead Generation', 'Content Creation', 'Customer Service', 'Operations'];
  
  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const freeCourse = courses.find(course => course.isFree);
  const paidCourses = courses.filter(course => !course.isFree);
  const totalValue = paidCourses.reduce((sum, course) => sum + parseInt(course.value.replace('$', '')), 0);

  const handleEmailSuccess = () => {
    setIsSubscribed(true);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Lead Generation': return 'bg-blue-100 text-blue-800';
      case 'Content Creation': return 'bg-purple-100 text-purple-800';
      case 'Customer Service': return 'bg-green-100 text-green-800';
      case 'Operations': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              AI Agent <span className="text-[#2F80ED]">Masterclass</span> Library
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Build a complete AI workforce with our step-by-step tutorials. Start with our free course, then unlock the full library.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] rounded-2xl p-8 mb-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Complete AI Workforce Training</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>12 Complete AI Agent Tutorials</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ready-to-Use Templates & Workflows</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Live Q&A Sessions & Community Access</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                  <span>Lifetime Updates & New Agent Releases</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-xl p-6">
                <div className="text-sm opacity-90">Total Library Value</div>
                <div className="text-4xl font-bold">${totalValue.toLocaleString()}</div>
                <div className="text-sm opacity-90 mt-2">Individual Course Prices</div>
                <div className="mt-4">
                  <div className="text-2xl font-semibold">Academy Price: $197/month</div>
                  <div className="text-sm opacity-90">Save 85% with membership</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free Course Highlight */}
        {freeCourse && (
          <div className="bg-white rounded-2xl shadow-lg border-2 border-[#2F80ED] mb-12 overflow-hidden">
            <div className="bg-[#2F80ED] text-white px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">🎁 FREE Starter Course</h3>
                <span className="bg-white text-[#2F80ED] px-3 py-1 rounded-full text-sm font-semibold">
                  {freeCourse.value} Value
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{freeCourse.title}</h4>
                  <p className="text-gray-600 mb-4">{freeCourse.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span>⏱️ {freeCourse.duration}</span>
                    <span>📚 {freeCourse.lessons} lessons</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(freeCourse.difficulty)}`}>
                      {freeCourse.difficulty}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Complete Make.com workflow template
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Proven ChatGPT prompts for lead qualification
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Google Sheets lead tracking template
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  {!isSubscribed ? (
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">
                        Get Instant Access (Free)
                      </h5>
                      <p className="text-sm text-gray-600 mb-4">
                        Enter your email to unlock this course and see the full library.
                      </p>
                      <EmailForm
                        source="courses-free"
                        placeholder="Enter your email"
                        buttonText="Get Free Access"
                        onSuccess={handleEmailSuccess}
                      />
                      <p className="text-xs text-gray-500 mt-3">
                        No spam. Unsubscribe anytime. This course normally sells for $497.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-2">Access Granted!</h5>
                      <p className="text-sm text-gray-600 mb-4">Check your email for the course link.</p>
                      <Link 
                        href="/courses/lead-research-agent"
                        className="btn-primary inline-block"
                      >
                        Start Course Now
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
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

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.filter(course => !course.isFree).map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-card relative">
              {/* Lock Overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {course.comingSoon ? (
                    <div>
                      <p className="font-semibold mb-2">Coming Soon</p>
                      <p className="text-sm opacity-90">Available in Academy</p>
                    </div>
                  ) : (
                    <div>
                      <p className="font-semibold mb-2">Academy Members Only</p>
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        Unlock with Membership
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(course.category)}`}>
                    {course.category}
                  </span>
                  <span className="text-lg font-bold text-[#2F80ED]">{course.value}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <span>⏱️ {course.duration}</span>
                    <span>📚 {course.lessons} lessons</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Your AI Workforce?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the Academy and get access to all courses, templates, live coaching, and our private community.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#2F80ED]">12+</div>
              <div className="text-sm text-gray-600">AI Agent Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#9B51E0]">500+</div>
              <div className="text-sm text-gray-600">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0A0F1C]">24/7</div>
              <div className="text-sm text-gray-600">Community Support</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-primary px-8 py-3">
              Join Academy - $197/month
            </Link>
            <Link href="/pricing" className="btn-accent px-8 py-3">
              View All Plans
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            30-day money-back guarantee • Cancel anytime • Instant access
          </p>
        </div>
      </div>
    </div>
  );
}
