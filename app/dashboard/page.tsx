'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../components/ui/Layout';
import { getAllCourses, CourseConfig } from '../../lib/courseConfigs';

interface CourseProgress {
  completedTasks: string[];
  currentPhase: number;
  startDate: string;
  lastActivity: string;
}

export default function Dashboard() {
  const [courses] = useState<CourseConfig[]>(getAllCourses());
  const [courseProgress, setCourseProgress] = useState<Record<string, CourseProgress>>({});

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('course-progress');
    if (savedProgress) {
      try {
        const allProgress = JSON.parse(savedProgress);
        setCourseProgress(allProgress);
      } catch (error) {
        console.error('Error loading saved progress:', error);
      }
    }
  }, []);

  const getCourseProgressPercentage = (courseId: string): number => {
    const progress = courseProgress[courseId];
    if (!progress) return 0;
    
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    
    const totalTasks = course.phases.reduce((sum, phase) => sum + phase.tasks.length, 0);
    return Math.round((progress.completedTasks.length / totalTasks) * 100);
  };

  const getCourseStatus = (courseId: string): string => {
    const progress = getCourseProgressPercentage(courseId);
    if (progress === 0) return 'Not Started';
    if (progress === 100) return 'Complete';
    return 'In Progress';
  };

  const getOverallStats = () => {
    const totalCourses = courses.length;
    const startedCourses = Object.keys(courseProgress).length;
    const completedCourses = courses.filter(course => getCourseProgressPercentage(course.id) === 100).length;
    
    return {
      totalCourses,
      startedCourses,
      completedCourses,
      overallProgress: totalCourses > 0 ? Math.round((completedCourses / totalCourses) * 100) : 0
    };
  };

  const stats = getOverallStats();

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">🚀 AI Implementation Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage all your AI agent implementations in one place</p>
          </div>

          {/* Overall Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Overall Progress</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.overallProgress}%</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📊</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Available Courses</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalCourses}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">🎓</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.startedCourses}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-xl">🚀</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.completedCourses}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xl">✅</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your AI Agent Implementation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => {
                const progress = getCourseProgressPercentage(course.id);
                const status = getCourseStatus(course.id);
                const courseProgressData = courseProgress[course.id];
                
                return (
                  <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl">{course.icon}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          status === 'Complete' ? 'bg-green-100 text-green-800' :
                          status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {status}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r ${course.color} h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-4">
                        <div>
                          <span className="block">Timeline</span>
                          <span className="font-medium text-gray-900">{course.estimatedDays} days</span>
                        </div>
                        <div>
                          <span className="block">Resources</span>
                          <span className="font-medium text-gray-900">{course.resources.length} files</span>
                        </div>
                      </div>
                      
                      {courseProgressData && (
                        <div className="text-xs text-gray-500 mb-4">
                          <div>Started: {courseProgressData.startDate}</div>
                          <div>Last Activity: {courseProgressData.lastActivity}</div>
                          <div>Current Phase: {courseProgressData.currentPhase}</div>
                        </div>
                      )}
                      
                      <div className="flex space-x-2">
                        <Link
                          href={`/dashboard/${course.id}`}
                          className={`flex-1 text-center py-2 px-4 rounded-lg font-medium transition-colors ${
                            progress > 0 
                              ? 'bg-blue-600 text-white hover:bg-blue-700' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {progress > 0 ? 'Continue' : 'Start Implementation'}
                        </Link>
                        <Link
                          href={`/courses/${course.id}`}
                          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                          title="View Course Content"
                        >
                          📚
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/courses"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <span className="text-2xl mr-3">📚</span>
                <div>
                  <div className="font-medium text-blue-900">Browse All Courses</div>
                  <div className="text-sm text-blue-600">Explore available AI agents</div>
                </div>
              </Link>
              
              <a
                href="https://make.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <span className="text-2xl mr-3">🔧</span>
                <div>
                  <div className="font-medium text-green-900">Open Make.com</div>
                  <div className="text-sm text-green-600">Automation platform</div>
                </div>
              </a>
              
              <a
                href="https://apollo.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <span className="text-2xl mr-3">🎯</span>
                <div>
                  <div className="font-medium text-purple-900">Open Apollo.io</div>
                  <div className="text-sm text-purple-600">Lead database</div>
                </div>
              </a>
              
              <a
                href="https://platform.openai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <span className="text-2xl mr-3">🧠</span>
                <div>
                  <div className="font-medium text-orange-900">Open OpenAI</div>
                  <div className="text-sm text-orange-600">AI API platform</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
