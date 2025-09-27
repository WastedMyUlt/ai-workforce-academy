'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Layout from '../../../components/ui/Layout';
import ResourceViewer from '../../../components/ResourceViewer';
import { getCourseConfig, CourseConfig, Task } from '../../../lib/courseConfigs';

interface CourseProgress {
  completedTasks: string[];
  currentPhase: number;
  startDate: string;
  lastActivity: string;
}

export default function CourseDashboard() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  
  const [courseConfig, setCourseConfig] = useState<CourseConfig | null>(null);
  const [progress, setProgress] = useState<CourseProgress>({
    completedTasks: [],
    currentPhase: 1,
    startDate: new Date().toISOString().split('T')[0],
    lastActivity: new Date().toISOString().split('T')[0]
  });
  const [activePhase, setActivePhase] = useState(1);
  const [resourceViewer, setResourceViewer] = useState({
    isOpen: false,
    resourceId: '',
    title: '',
    type: 'md' as 'md' | 'json' | 'csv'
  });

  useEffect(() => {
    const config = getCourseConfig(courseId);
    if (!config) {
      router.push('/dashboard');
      return;
    }
    setCourseConfig(config);

    // Load progress from localStorage
    const savedProgress = localStorage.getItem('course-progress');
    if (savedProgress) {
      const allProgress = JSON.parse(savedProgress);
      if (allProgress[courseId]) {
        setProgress(allProgress[courseId]);
        // Set active phase based on progress
        const currentPhase = getCurrentPhase(allProgress[courseId].completedTasks, config);
        setActivePhase(currentPhase);
      }
    }
  }, [courseId, router]);

  const getCurrentPhase = (completedTasks: string[], config: CourseConfig): number => {
    for (let phase of config.phases) {
      const phaseTasks = phase.tasks;
      const completedInPhase = phaseTasks.filter(task => completedTasks.includes(task.id)).length;
      if (completedInPhase < phaseTasks.length) {
        return phase.id;
      }
    }
    return config.phases.length; // All phases complete
  };

  const saveProgress = (newProgress: CourseProgress) => {
    const savedProgress = localStorage.getItem('course-progress');
    const allProgress = savedProgress ? JSON.parse(savedProgress) : {};
    allProgress[courseId] = newProgress;
    localStorage.setItem('course-progress', JSON.stringify(allProgress));
    setProgress(newProgress);
  };

  const toggleTask = (taskId: string) => {
    if (!courseConfig) return;
    
    const newCompletedTasks = progress.completedTasks.includes(taskId)
      ? progress.completedTasks.filter(id => id !== taskId)
      : [...progress.completedTasks, taskId];

    const newProgress = {
      ...progress,
      completedTasks: newCompletedTasks,
      lastActivity: new Date().toISOString().split('T')[0],
      currentPhase: getCurrentPhase(newCompletedTasks, courseConfig)
    };

    saveProgress(newProgress);
    setActivePhase(newProgress.currentPhase);
  };

  const getProgressPercentage = (): number => {
    if (!courseConfig) return 0;
    const totalTasks = courseConfig.phases.reduce((sum, phase) => sum + phase.tasks.length, 0);
    return Math.round((progress.completedTasks.length / totalTasks) * 100);
  };

  const getPhaseProgress = (phaseId: number): number => {
    if (!courseConfig) return 0;
    const phase = courseConfig.phases.find(p => p.id === phaseId);
    if (!phase) return 0;
    const completedInPhase = phase.tasks.filter(task => progress.completedTasks.includes(task.id)).length;
    return Math.round((completedInPhase / phase.tasks.length) * 100);
  };

  const getNextSteps = (): string => {
    const progressPercent = getProgressPercentage();
    if (progressPercent === 100) return "🎉 Congratulations! You've completed the entire implementation!";
    if (progressPercent >= 80) return "Almost there! Focus on final deployment and scaling.";
    if (progressPercent >= 60) return "Great progress! Time to test and optimize your system.";
    if (progressPercent >= 40) return "You're halfway there! Focus on customization and configuration.";
    if (progressPercent >= 20) return "Good start! Continue with the configuration phase.";
    return "Let's get started! Focus on Phase 1: Foundation setup.";
  };

  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const openResourceViewer = (resource: any) => {
    setResourceViewer({
      isOpen: true,
      resourceId: resource.id,
      title: resource.title,
      type: resource.type
    });
  };

  const closeResourceViewer = () => {
    setResourceViewer({
      isOpen: false,
      resourceId: '',
      title: '',
      type: 'md'
    });
  };

  if (!courseConfig) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2F80ED] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading course dashboard...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/dashboard" className="text-[#2F80ED] hover:underline text-sm mb-2 block">
                  ← Back to All Courses
                </Link>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                  <span className="text-2xl mr-3">{courseConfig.icon}</span>
                  {courseConfig.title} Dashboard
                </h1>
                <p className="text-gray-600 mt-2">{courseConfig.description}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Estimated Timeline</div>
                <div className="text-2xl font-bold text-[#2F80ED]">{courseConfig.estimatedDays} days</div>
              </div>
            </div>
          </div>

          {/* What You'll Build Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">🎯 What You'll Build</h2>
            {courseConfig.id === 'content-creator-ai' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Automated Content System</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI generates blog posts from topics</li>
                    <li>• Auto-creates social media posts</li>
                    <li>• Generates featured images</li>
                    <li>• Publishes to WordPress as drafts</li>
                    <li>• Schedules social media posts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What You'll Save</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>20+ hours/week</strong> on content creation</li>
                    <li>• <strong>$2,000+/month</strong> on content writers</li>
                    <li>• <strong>10+ hours/week</strong> on social media</li>
                    <li>• Consistent publishing schedule</li>
                    <li>• Professional content quality</li>
                  </ul>
                </div>
              </div>
            )}
            {courseConfig.id === 'lead-research-agent' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Automated Lead System</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Finds 25-100+ qualified leads daily</li>
                    <li>• AI scores leads 0-100</li>
                    <li>• Tracks leads in Google Sheets</li>
                    <li>• Sends Slack notifications</li>
                    <li>• Industry-specific qualification</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What You'll Save</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>15+ hours/week</strong> on lead research</li>
                    <li>• <strong>$3,000+/month</strong> on lead gen tools</li>
                    <li>• <strong>50%+ higher</strong> conversion rates</li>
                    <li>• Consistent lead pipeline</li>
                    <li>• Better lead quality</li>
                  </ul>
                </div>
              </div>
            )}
            {courseConfig.id === 'customer-support-ai' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">AI Support System</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI classifies support tickets</li>
                    <li>• Generates professional responses</li>
                    <li>• Routes urgent tickets automatically</li>
                    <li>• Updates Zendesk tickets</li>
                    <li>• Tracks support analytics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What You'll Save</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>30+ hours/week</strong> on support</li>
                    <li>• <strong>$4,000+/month</strong> on support staff</li>
                    <li>• <strong>80%+ faster</strong> response times</li>
                    <li>• 24/7 support coverage</li>
                    <li>• Consistent response quality</li>
                  </ul>
                </div>
              </div>
            )}
            <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>💡 How it works:</strong> Follow the step-by-step tasks below. Each task has detailed instructions. 
                Download the resources to get templates and workflows. Use the external tools to set up your accounts.
              </p>
            </div>
          </div>

          {/* Course Lessons Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">📚 Course Lessons</h2>
              <Link 
                href={`/courses/${courseId}`}
                className="text-[#2F80ED] hover:underline text-sm font-medium"
              >
                View All Lessons →
              </Link>
            </div>
            <p className="text-gray-600 mb-4">
              Need detailed instructions? Access the step-by-step course lessons with screenshots, code examples, and troubleshooting guides.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courseConfig.id === 'lead-research-agent' && (
                <>
                  <Link 
                    href="/courses/lead-research-agent#lesson-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#2F80ED] hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lesson 1: Setup & Overview</div>
                    <div className="text-sm text-gray-600 mt-1">Account setup and workflow overview</div>
                  </Link>
                  <Link 
                    href="/courses/lead-research-agent#lesson-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#2F80ED] hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lesson 2: Make.com Configuration</div>
                    <div className="text-sm text-gray-600 mt-1">Import and configure the workflow</div>
                  </Link>
                  <Link 
                    href="/courses/lead-research-agent#lesson-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#2F80ED] hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lesson 3: API Connections</div>
                    <div className="text-sm text-gray-600 mt-1">Connect Apollo.io and OpenAI APIs</div>
                  </Link>
                  <Link 
                    href="/courses/lead-research-agent#lesson-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#2F80ED] hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lesson 4: AI Prompt Customization</div>
                    <div className="text-sm text-gray-600 mt-1">Customize prompts for your industry</div>
                  </Link>
                  <Link 
                    href="/courses/lead-research-agent#lesson-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#2F80ED] hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lesson 5: Testing & Optimization</div>
                    <div className="text-sm text-gray-600 mt-1">Test workflow and optimize results</div>
                  </Link>
                  <Link 
                    href="/courses/lead-research-agent#lesson-6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#2F80ED] hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lesson 6: Scaling & Advanced</div>
                    <div className="text-sm text-gray-600 mt-1">Scale to 100+ leads per day</div>
                  </Link>
                </>
              )}
              {courseConfig.id === 'customer-support-ai' && (
                <>
                  <Link 
                    href={`/courses/${courseId}#lesson-1`}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#2F80ED] hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lesson 1: Support AI Overview</div>
                    <div className="text-sm text-gray-600 mt-1">Understanding AI customer support</div>
                  </Link>
                  <Link 
                    href={`/courses/${courseId}#lesson-2`}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#2F80ED] hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lesson 2: Zendesk Integration</div>
                    <div className="text-sm text-gray-600 mt-1">Connect and configure Zendesk</div>
                  </Link>
                  <Link 
                    href={`/courses/${courseId}#lesson-3`}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#2F80ED] hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lesson 3: AI Classification</div>
                    <div className="text-sm text-gray-600 mt-1">Set up ticket classification</div>
                  </Link>
                </>
              )}
              {courseConfig.id === 'content-creator-ai' && (
                <>
                  <Link 
                    href={`/courses/${courseId}#lesson-1`}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#2F80ED] hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lesson 1: Content Strategy</div>
                    <div className="text-sm text-gray-600 mt-1">Plan your content calendar</div>
                  </Link>
                  <Link 
                    href={`/courses/${courseId}#lesson-2`}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#2F80ED] hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lesson 2: WordPress Setup</div>
                    <div className="text-sm text-gray-600 mt-1">Configure WordPress and Buffer</div>
                  </Link>
                  <Link 
                    href={`/courses/${courseId}#lesson-3`}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-[#2F80ED] hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lesson 3: AI Content Generation</div>
                    <div className="text-sm text-gray-600 mt-1">Set up automated content creation</div>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Progress Overview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Implementation Progress</h2>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#2F80ED]">{getProgressPercentage()}%</div>
                <div className="text-sm text-gray-500">Complete</div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className={`bg-gradient-to-r ${courseConfig.color} h-3 rounded-full transition-all duration-500`}
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Current Phase:</span>
                <span className="ml-2 font-medium text-gray-900">
                  Phase {progress.currentPhase} - {courseConfig.phases.find(p => p.id === progress.currentPhase)?.title || 'Complete'}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Tasks Completed:</span>
                <span className="ml-2 font-medium text-gray-900">
                  {progress.completedTasks.length} / {courseConfig.phases.reduce((sum, phase) => sum + phase.tasks.length, 0)}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Last Activity:</span>
                <span className="ml-2 font-medium text-gray-900">{progress.lastActivity}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Next Steps */}
              <div className="bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] rounded-xl p-6 text-white mb-8">
                <h3 className="text-lg font-semibold mb-2">🎯 Next Steps</h3>
                <p className="opacity-90">{getNextSteps()}</p>
              </div>

              {/* Phase Tabs */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-8 px-6" aria-label="Phases">
                    {courseConfig.phases.map((phase) => (
                      <button
                        key={phase.id}
                        onClick={() => setActivePhase(phase.id)}
                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                          activePhase === phase.id
                            ? 'border-[#2F80ED] text-[#2F80ED]'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="mr-2">Phase {phase.id}</span>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            getPhaseProgress(phase.id) === 100 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {getPhaseProgress(phase.id) === 100 ? '✓' : getPhaseProgress(phase.id) + '%'}
                          </div>
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Phase Content */}
                {courseConfig.phases.map((phase) => (
                  <div
                    key={phase.id}
                    className={`p-6 ${activePhase === phase.id ? 'block' : 'hidden'}`}
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                      <div className="mt-2 flex items-center">
                        <div className="text-sm text-gray-500 mr-4">
                          Progress: {getPhaseProgress(phase.id)}%
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r ${courseConfig.color} h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${getPhaseProgress(phase.id)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {phase.tasks.map((task) => (
                        <div
                          key={task.id}
                          className={`border rounded-lg p-4 transition-all ${
                            progress.completedTasks.includes(task.id)
                              ? 'bg-green-50 border-green-200'
                              : 'bg-white border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-start">
                            <button
                              onClick={() => toggleTask(task.id)}
                              className={`mt-1 mr-4 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                progress.completedTasks.includes(task.id)
                                  ? 'bg-green-500 border-green-500 text-white'
                                  : 'border-gray-300 hover:border-gray-400'
                              }`}
                            >
                              {progress.completedTasks.includes(task.id) && (
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </button>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className={`font-medium ${
                                  progress.completedTasks.includes(task.id) ? 'text-green-800 line-through' : 'text-gray-900'
                                }`}>
                                  {task.title}
                                </h4>
                                <div className="flex items-center space-x-2">
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                                    {task.priority}
                                  </span>
                                  <span className="text-xs text-gray-500">{task.estimatedTime}</span>
                                </div>
                              </div>
                              <p className={`text-sm ${
                                progress.completedTasks.includes(task.id) ? 'text-green-700' : 'text-gray-600'
                              }`}>
                                {task.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Resources */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📁 Course Resources</h3>
                <div className="space-y-3">
                  {courseConfig.resources.map((resource) => (
                    <button
                      key={resource.id}
                      onClick={() => openResourceViewer(resource)}
                      className="w-full flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
                    >
                      <span className="text-lg mr-3">{resource.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">{resource.title}</div>
                        <div className="text-xs text-gray-500">{resource.description}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                          View
                        </span>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* External Tools */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🔗 Quick Access</h3>
                <div className="space-y-3">
                  {courseConfig.externalTools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-lg mr-3">{tool.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">{tool.name}</div>
                        <div className="text-xs text-gray-500">{tool.description}</div>
                      </div>
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                  
                  <Link
                    href={`/courses/${courseId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <span className="text-lg mr-3">📚</span>
                    <div className="flex-1">
                      <div className="font-medium text-blue-900 text-sm">Back to Course</div>
                      <div className="text-xs text-blue-600">View lessons and content</div>
                    </div>
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Progress Stats */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Progress Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Started</span>
                    <span className="text-sm font-medium text-gray-900">{progress.startDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current Phase</span>
                    <span className="text-sm font-medium text-gray-900">Phase {progress.currentPhase}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Tasks Done</span>
                    <span className="text-sm font-medium text-gray-900">
                      {progress.completedTasks.length} / {courseConfig.phases.reduce((sum, phase) => sum + phase.tasks.length, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Estimated Completion</span>
                    <span className="text-sm font-medium text-gray-900">
                      {Math.max(1, Math.ceil((courseConfig.estimatedDays * (100 - getProgressPercentage())) / 100))} days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Resource Viewer Modal */}
      <ResourceViewer
        isOpen={resourceViewer.isOpen}
        onClose={closeResourceViewer}
        resourceId={resourceViewer.resourceId}
        courseId={courseId}
        title={resourceViewer.title}
        type={resourceViewer.type}
      />
    </Layout>
  );
}
