'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../components/ui/Layout';

interface ChecklistItem {
  id: string;
  phase: string;
  category: string;
  task: string;
  description: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

interface ProgressStats {
  totalTasks: number;
  completedTasks: number;
  currentPhase: string;
  estimatedCompletion: string;
}

const initialChecklist: ChecklistItem[] = [
  // Phase 1: Basic Setup
  { id: '1-1', phase: 'Phase 1', category: 'Account Setup', task: 'Create Make.com Account', description: 'Sign up for Make.com Core plan ($9/month minimum)', completed: false, priority: 'high' },
  { id: '1-2', phase: 'Phase 1', category: 'Account Setup', task: 'Create Apollo.io Account', description: 'Sign up for Apollo.io with API access ($49/month minimum)', completed: false, priority: 'high' },
  { id: '1-3', phase: 'Phase 1', category: 'Account Setup', task: 'Create OpenAI Account', description: 'Set up OpenAI account with API key and billing', completed: false, priority: 'high' },
  { id: '1-4', phase: 'Phase 1', category: 'Workflow Setup', task: 'Import Make.com Template', description: 'Download and import the workflow JSON template', completed: false, priority: 'high' },
  { id: '1-5', phase: 'Phase 1', category: 'Workflow Setup', task: 'Connect Apollo.io API', description: 'Add Apollo API key to Make.com workflow', completed: false, priority: 'high' },
  { id: '1-6', phase: 'Phase 1', category: 'Workflow Setup', task: 'Connect OpenAI API', description: 'Add OpenAI API key to Make.com workflow', completed: false, priority: 'high' },
  
  // Phase 2: Configuration
  { id: '2-1', phase: 'Phase 2', category: 'Google Sheets', task: 'Create Tracking Spreadsheet', description: 'Set up Google Sheets with proper columns', completed: false, priority: 'high' },
  { id: '2-2', phase: 'Phase 2', category: 'Google Sheets', task: 'Connect Google Sheets', description: 'Link spreadsheet to Make.com workflow', completed: false, priority: 'high' },
  { id: '2-3', phase: 'Phase 2', category: 'Customization', task: 'Define Your ICP', description: 'Customize search criteria for your ideal customers', completed: false, priority: 'medium' },
  { id: '2-4', phase: 'Phase 2', category: 'Customization', task: 'Customize AI Prompts', description: 'Select and customize prompts for your industry', completed: false, priority: 'medium' },
  
  // Phase 3: Testing
  { id: '3-1', phase: 'Phase 3', category: 'Testing', task: 'Run Initial Test', description: 'Test workflow with 10 sample leads', completed: false, priority: 'high' },
  { id: '3-2', phase: 'Phase 3', category: 'Testing', task: 'Validate Data Quality', description: 'Check lead relevance and scoring accuracy', completed: false, priority: 'high' },
  { id: '3-3', phase: 'Phase 3', category: 'Testing', task: 'Fix Any Errors', description: 'Troubleshoot and resolve workflow issues', completed: false, priority: 'high' },
  
  // Phase 4: Optimization
  { id: '4-1', phase: 'Phase 4', category: 'Optimization', task: 'Analyze First Results', description: 'Review first 50 leads for quality and patterns', completed: false, priority: 'medium' },
  { id: '4-2', phase: 'Phase 4', category: 'Optimization', task: 'Refine Search Criteria', description: 'Adjust Apollo search based on results', completed: false, priority: 'medium' },
  { id: '4-3', phase: 'Phase 4', category: 'Optimization', task: 'Optimize AI Prompts', description: 'Improve prompts based on scoring accuracy', completed: false, priority: 'medium' },
  
  // Phase 5: Scaling
  { id: '5-1', phase: 'Phase 5', category: 'Scaling', task: 'Increase Lead Volume', description: 'Scale from 25 to 50+ leads per day', completed: false, priority: 'low' },
  { id: '5-2', phase: 'Phase 5', category: 'Scaling', task: 'Set Up Automation Schedule', description: 'Configure automatic execution every 4-6 hours', completed: false, priority: 'low' },
  { id: '5-3', phase: 'Phase 5', category: 'Scaling', task: 'Monitor API Costs', description: 'Track usage and optimize for cost efficiency', completed: false, priority: 'medium' },
  
  // Phase 6: Production
  { id: '6-1', phase: 'Phase 6', category: 'Production', task: 'Scale to 100+ Leads/Day', description: 'Achieve full production volume', completed: false, priority: 'low' },
  { id: '6-2', phase: 'Phase 6', category: 'Production', task: 'Set Up Monitoring', description: 'Configure error alerts and performance tracking', completed: false, priority: 'medium' },
  { id: '6-3', phase: 'Phase 6', category: 'Production', task: 'Create Maintenance Schedule', description: 'Set up weekly reviews and optimization', completed: false, priority: 'low' },
];

const resourceLinks = [
  {
    title: 'Make.com Workflow Template',
    description: 'Complete automation blueprint ready to import',
    file: '/resources/make-workflow-template.json',
    type: 'JSON',
    icon: '⚙️'
  },
  {
    title: 'Complete Setup Guide',
    description: 'Step-by-step implementation instructions',
    file: '/resources/workflow-setup-guide.md',
    type: 'Guide',
    icon: '📖'
  },
  {
    title: 'ChatGPT Prompt Library',
    description: 'Industry-specific qualification prompts',
    file: '/resources/chatgpt-prompt-library.md',
    type: 'Prompts',
    icon: '🤖'
  },
  {
    title: 'Google Sheets Template',
    description: 'Ready-to-use tracking spreadsheet',
    file: '/resources/lead-tracking-template.csv',
    type: 'CSV',
    icon: '📊'
  },
  {
    title: 'Setup Checklist',
    description: 'Phase-by-phase implementation checklist',
    file: '/resources/setup-checklist.md',
    type: 'Checklist',
    icon: '✅'
  }
];

export default function Dashboard() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist);
  const [activePhase, setActivePhase] = useState('Phase 1');
  const [stats, setStats] = useState<ProgressStats>({
    totalTasks: 0,
    completedTasks: 0,
    currentPhase: 'Phase 1',
    estimatedCompletion: '4 weeks'
  });

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ai-agent-progress');
    if (saved) {
      try {
        const savedChecklist = JSON.parse(saved);
        setChecklist(savedChecklist);
      } catch (error) {
        console.error('Error loading saved progress:', error);
      }
    }
  }, []);

  // Save progress and update stats
  useEffect(() => {
    localStorage.setItem('ai-agent-progress', JSON.stringify(checklist));
    
    const totalTasks = checklist.length;
    const completedTasks = checklist.filter(item => item.completed).length;
    const completionRate = completedTasks / totalTasks;
    
    let currentPhase = 'Phase 1';
    let estimatedCompletion = '4 weeks';
    
    if (completionRate >= 0.8) {
      currentPhase = 'Phase 6';
      estimatedCompletion = 'Complete!';
    } else if (completionRate >= 0.6) {
      currentPhase = 'Phase 5';
      estimatedCompletion = '1 week';
    } else if (completionRate >= 0.4) {
      currentPhase = 'Phase 4';
      estimatedCompletion = '2 weeks';
    } else if (completionRate >= 0.2) {
      currentPhase = 'Phase 3';
      estimatedCompletion = '3 weeks';
    } else if (completionRate > 0) {
      currentPhase = 'Phase 2';
      estimatedCompletion = '3-4 weeks';
    }
    
    setStats({
      totalTasks,
      completedTasks,
      currentPhase,
      estimatedCompletion
    });
  }, [checklist]);

  const toggleTask = (taskId: string) => {
    setChecklist(prev => prev.map(item => 
      item.id === taskId ? { ...item, completed: !item.completed } : item
    ));
  };

  const resetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setChecklist(initialChecklist);
      localStorage.removeItem('ai-agent-progress');
    }
  };

  const getPhaseProgress = (phase: string) => {
    const phaseTasks = checklist.filter(item => item.phase === phase);
    const completedPhaseTasks = phaseTasks.filter(item => item.completed);
    return phaseTasks.length > 0 ? (completedPhaseTasks.length / phaseTasks.length) * 100 : 0;
  };

  const phases = ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5', 'Phase 6'];
  const filteredTasks = checklist.filter(item => item.phase === activePhase);

  const progressPercentage = (stats.completedTasks / stats.totalTasks) * 100;

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">AI Lead Research Agent Dashboard</h1>
            <p className="text-gray-600 mt-2">Track your implementation progress and access all resources</p>
          </div>

          {/* Progress Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Overall Progress</p>
                  <p className="text-2xl font-bold text-gray-900">{Math.round(progressPercentage)}%</p>
                </div>
                <div className="w-12 h-12 bg-[#2F80ED]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#2F80ED] text-xl">📊</span>
                </div>
              </div>
              <div className="mt-4 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-[#2F80ED] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Tasks Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.completedTasks}/{stats.totalTasks}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">✅</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Current Phase</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.currentPhase}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-xl">🚀</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Est. Completion</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.estimatedCompletion}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xl">⏰</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Implementation Checklist */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Implementation Checklist</h2>
                    <button
                      onClick={resetProgress}
                      className="text-sm text-gray-500 hover:text-red-600 transition-colors"
                    >
                      Reset Progress
                    </button>
                  </div>
                  
                  {/* Phase Tabs */}
                  <div className="flex space-x-1 mt-4 bg-gray-100 rounded-lg p-1">
                    {phases.map((phase) => (
                      <button
                        key={phase}
                        onClick={() => setActivePhase(phase)}
                        className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          activePhase === phase
                            ? 'bg-white text-[#2F80ED] shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {phase}
                        <div className="text-xs mt-1">
                          {Math.round(getPhaseProgress(phase))}%
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {filteredTasks.map((task) => (
                      <div
                        key={task.id}
                        className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all ${
                          task.completed
                            ? 'bg-green-50 border-green-200'
                            : 'bg-white border-gray-200 hover:border-[#2F80ED]/30'
                        }`}
                      >
                        <button
                          onClick={() => toggleTask(task.id)}
                          className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            task.completed
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'border-gray-300 hover:border-[#2F80ED]'
                          }`}
                        >
                          {task.completed && <span className="text-xs">✓</span>}
                        </button>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className={`font-medium ${
                              task.completed ? 'text-green-800 line-through' : 'text-gray-900'
                            }`}>
                              {task.task}
                            </h3>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              task.priority === 'high' ? 'bg-red-100 text-red-800' :
                              task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {task.priority}
                            </span>
                          </div>
                          <p className={`text-sm mt-1 ${
                            task.completed ? 'text-green-600' : 'text-gray-600'
                          }`}>
                            {task.description}
                          </p>
                          <div className="text-xs text-gray-500 mt-1">
                            {task.category}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Resources & Tools */}
            <div className="space-y-6">
              {/* Quick Resources */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementation Resources</h3>
                <div className="space-y-3">
                  {resourceLinks.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.file}
                      download
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#2F80ED]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2F80ED]/20 transition-colors">
                        <span className="text-lg">{resource.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{resource.title}</h4>
                        <p className="text-xs text-gray-600">{resource.description}</p>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {resource.type}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="https://make.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <span className="font-medium text-blue-900">Open Make.com</span>
                    <span className="text-blue-600">→</span>
                  </a>
                  <a
                    href="https://apollo.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <span className="font-medium text-green-900">Open Apollo.io</span>
                    <span className="text-green-600">→</span>
                  </a>
                  <a
                    href="https://platform.openai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <span className="font-medium text-purple-900">Open OpenAI</span>
                    <span className="text-purple-600">→</span>
                  </a>
                  <Link
                    href="/courses/lead-research-agent"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-900">Back to Course</span>
                    <span className="text-gray-600">→</span>
                  </Link>
                </div>
              </div>

              {/* Progress Insights */}
              <div className="bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">🎯 Next Steps</h3>
                {progressPercentage < 25 && (
                  <p className="text-sm opacity-90">
                    Focus on Phase 1: Set up your accounts and import the workflow template. This foundation is crucial for success.
                  </p>
                )}
                {progressPercentage >= 25 && progressPercentage < 50 && (
                  <p className="text-sm opacity-90">
                    Great progress! Now customize your ICP and AI prompts in Phase 2. This will determine your lead quality.
                  </p>
                )}
                {progressPercentage >= 50 && progressPercentage < 75 && (
                  <p className="text-sm opacity-90">
                    You're halfway there! Focus on testing and optimization. Quality over quantity at this stage.
                  </p>
                )}
                {progressPercentage >= 75 && progressPercentage < 100 && (
                  <p className="text-sm opacity-90">
                    Almost done! Time to scale up and set up monitoring. You're ready for production volume.
                  </p>
                )}
                {progressPercentage === 100 && (
                  <p className="text-sm opacity-90">
                    🎉 Congratulations! Your AI Lead Research Agent is fully operational. Monitor and optimize for best results.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
