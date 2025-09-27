export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  estimatedTime: string;
  phase: number;
}

export interface Phase {
  id: number;
  title: string;
  description: string;
  tasks: Task[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  filename: string;
  type: 'json' | 'md' | 'csv' | 'pdf';
  icon: string;
}

export interface ExternalTool {
  name: string;
  url: string;
  description: string;
  icon: string;
}

export interface CourseConfig {
  id: string;
  title: string;
  description: string;
  estimatedDays: number;
  phases: Phase[];
  resources: Resource[];
  externalTools: ExternalTool[];
  color: string;
  icon: string;
}

// Lead Research Agent Course Configuration
export const leadResearchAgentConfig: CourseConfig = {
  id: 'lead-research-agent',
  title: 'AI Lead Research Agent',
  description: 'Build an automated lead research and qualification system',
  estimatedDays: 21,
  color: 'from-blue-500 to-purple-600',
  icon: '🎯',
  phases: [
    {
      id: 1,
      title: 'Foundation Setup',
      description: 'Set up accounts and import workflow',
      tasks: [
        {
          id: 'setup-make',
          title: 'Create Make.com Account',
          description: 'Sign up for Make.com and familiarize with the interface',
          priority: 'high',
          estimatedTime: '30 min',
          phase: 1
        },
        {
          id: 'setup-apollo',
          title: 'Set Up Apollo.io Account',
          description: 'Create Apollo account and configure API access',
          priority: 'high',
          estimatedTime: '45 min',
          phase: 1
        },
        {
          id: 'setup-openai',
          title: 'Configure OpenAI API',
          description: 'Set up OpenAI account and generate API key',
          priority: 'high',
          estimatedTime: '20 min',
          phase: 1
        },
        {
          id: 'import-workflow',
          title: 'Import Make.com Workflow',
          description: 'Import the provided JSON template into Make.com',
          priority: 'high',
          estimatedTime: '15 min',
          phase: 1
        }
      ]
    },
    {
      id: 2,
      title: 'Configuration',
      description: 'Configure APIs and connections',
      tasks: [
        {
          id: 'connect-apollo',
          title: 'Connect Apollo.io to Make',
          description: 'Establish API connection between Apollo and Make.com',
          priority: 'high',
          estimatedTime: '30 min',
          phase: 2
        },
        {
          id: 'connect-openai',
          title: 'Connect OpenAI to Make',
          description: 'Configure OpenAI API connection in Make.com',
          priority: 'high',
          estimatedTime: '20 min',
          phase: 2
        },
        {
          id: 'setup-sheets',
          title: 'Set Up Google Sheets',
          description: 'Create and configure lead tracking spreadsheet',
          priority: 'medium',
          estimatedTime: '25 min',
          phase: 2
        },
        {
          id: 'connect-slack',
          title: 'Connect Slack Notifications',
          description: 'Set up Slack integration for lead alerts',
          priority: 'medium',
          estimatedTime: '20 min',
          phase: 2
        }
      ]
    },
    {
      id: 3,
      title: 'Customization',
      description: 'Customize ICP and prompts',
      tasks: [
        {
          id: 'define-icp',
          title: 'Define Ideal Customer Profile',
          description: 'Configure your target customer criteria in Apollo',
          priority: 'high',
          estimatedTime: '45 min',
          phase: 3
        },
        {
          id: 'customize-prompts',
          title: 'Customize ChatGPT Prompts',
          description: 'Adapt qualification prompts for your industry',
          priority: 'high',
          estimatedTime: '60 min',
          phase: 3
        },
        {
          id: 'setup-scoring',
          title: 'Configure Lead Scoring',
          description: 'Set up automated lead scoring criteria',
          priority: 'medium',
          estimatedTime: '30 min',
          phase: 3
        }
      ]
    },
    {
      id: 4,
      title: 'Testing',
      description: 'Test and validate workflow',
      tasks: [
        {
          id: 'test-workflow',
          title: 'Run Test Scenarios',
          description: 'Execute workflow with sample data',
          priority: 'high',
          estimatedTime: '45 min',
          phase: 4
        },
        {
          id: 'validate-outputs',
          title: 'Validate Lead Quality',
          description: 'Review and refine lead qualification accuracy',
          priority: 'high',
          estimatedTime: '30 min',
          phase: 4
        },
        {
          id: 'debug-issues',
          title: 'Debug Any Issues',
          description: 'Troubleshoot and fix workflow problems',
          priority: 'medium',
          estimatedTime: '60 min',
          phase: 4
        }
      ]
    },
    {
      id: 5,
      title: 'Optimization',
      description: 'Optimize performance and accuracy',
      tasks: [
        {
          id: 'optimize-prompts',
          title: 'Optimize AI Prompts',
          description: 'Fine-tune prompts for better accuracy',
          priority: 'medium',
          estimatedTime: '45 min',
          phase: 5
        },
        {
          id: 'setup-monitoring',
          title: 'Set Up Monitoring',
          description: 'Configure performance tracking and alerts',
          priority: 'medium',
          estimatedTime: '30 min',
          phase: 5
        },
        {
          id: 'create-reports',
          title: 'Create Reporting Dashboard',
          description: 'Set up automated reporting in Google Sheets',
          priority: 'low',
          estimatedTime: '40 min',
          phase: 5
        }
      ]
    },
    {
      id: 6,
      title: 'Production & Scale',
      description: 'Deploy and scale your system',
      tasks: [
        {
          id: 'go-live',
          title: 'Go Live with Production',
          description: 'Switch from test to production environment',
          priority: 'high',
          estimatedTime: '20 min',
          phase: 6
        },
        {
          id: 'setup-scaling',
          title: 'Configure Auto-scaling',
          description: 'Set up automatic scaling for high volume',
          priority: 'medium',
          estimatedTime: '35 min',
          phase: 6
        },
        {
          id: 'train-team',
          title: 'Train Your Team',
          description: 'Onboard team members to use the system',
          priority: 'medium',
          estimatedTime: '90 min',
          phase: 6
        },
        {
          id: 'maintenance-plan',
          title: 'Create Maintenance Plan',
          description: 'Establish ongoing maintenance procedures',
          priority: 'low',
          estimatedTime: '30 min',
          phase: 6
        }
      ]
    }
  ],
  resources: [
    {
      id: 'make-workflow',
      title: 'Make.com Workflow Template',
      description: 'Complete automation blueprint with 10 modules',
      filename: 'make-workflow-template.json',
      type: 'json',
      icon: '⚙️'
    },
    {
      id: 'setup-guide',
      title: 'Complete Setup Guide',
      description: 'Step-by-step implementation instructions',
      filename: 'workflow-setup-guide.md',
      type: 'md',
      icon: '📖'
    },
    {
      id: 'tracking-template',
      title: 'Lead Tracking Template',
      description: 'Ready-to-use Google Sheets template',
      filename: 'lead-tracking-template.csv',
      type: 'csv',
      icon: '📊'
    },
    {
      id: 'prompt-library',
      title: 'ChatGPT Prompt Library',
      description: 'Industry-specific qualification prompts',
      filename: 'chatgpt-prompt-library.md',
      type: 'md',
      icon: '🤖'
    },
    {
      id: 'setup-checklist',
      title: 'Setup Checklist',
      description: 'Phase-by-phase implementation guide',
      filename: 'setup-checklist.md',
      type: 'md',
      icon: '✅'
    }
  ],
  externalTools: [
    {
      name: 'Make.com',
      url: 'https://make.com',
      description: 'Automation platform',
      icon: '🔧'
    },
    {
      name: 'Apollo.io',
      url: 'https://apollo.io',
      description: 'Lead database',
      icon: '🎯'
    },
    {
      name: 'OpenAI',
      url: 'https://platform.openai.com',
      description: 'AI API platform',
      icon: '🧠'
    }
  ]
};

// Customer Support AI Course Configuration
export const customerSupportAIConfig: CourseConfig = {
  id: 'customer-support-ai',
  title: 'AI Customer Support Agent',
  description: 'Build an intelligent customer support automation system',
  estimatedDays: 14,
  color: 'from-green-500 to-blue-600',
  icon: '💬',
  phases: [
    {
      id: 1,
      title: 'Foundation Setup',
      description: 'Set up knowledge base and AI platform',
      tasks: [
        {
          id: 'setup-zendesk',
          title: 'Configure Zendesk Account',
          description: 'Set up customer support platform',
          priority: 'high',
          estimatedTime: '45 min',
          phase: 1
        },
        {
          id: 'setup-openai-support',
          title: 'Configure OpenAI for Support',
          description: 'Set up AI model for customer queries',
          priority: 'high',
          estimatedTime: '30 min',
          phase: 1
        },
        {
          id: 'create-knowledge-base',
          title: 'Build Knowledge Base',
          description: 'Create comprehensive FAQ and documentation',
          priority: 'high',
          estimatedTime: '120 min',
          phase: 1
        }
      ]
    },
    {
      id: 2,
      title: 'AI Training',
      description: 'Train AI on your specific support scenarios',
      tasks: [
        {
          id: 'train-common-queries',
          title: 'Train on Common Queries',
          description: 'Feed AI your most frequent customer questions',
          priority: 'high',
          estimatedTime: '90 min',
          phase: 2
        },
        {
          id: 'setup-escalation',
          title: 'Configure Escalation Rules',
          description: 'Set up when to escalate to human agents',
          priority: 'high',
          estimatedTime: '45 min',
          phase: 2
        }
      ]
    },
    {
      id: 3,
      title: 'Testing & Deployment',
      description: 'Test and deploy your AI support agent',
      tasks: [
        {
          id: 'test-scenarios',
          title: 'Test Support Scenarios',
          description: 'Run comprehensive testing with real scenarios',
          priority: 'high',
          estimatedTime: '60 min',
          phase: 3
        },
        {
          id: 'deploy-live',
          title: 'Deploy to Production',
          description: 'Go live with AI customer support',
          priority: 'high',
          estimatedTime: '30 min',
          phase: 3
        }
      ]
    }
  ],
  resources: [
    {
      id: 'support-workflow',
      title: 'Support Automation Workflow',
      description: 'Complete customer support automation setup',
      filename: 'support-workflow-template.json',
      type: 'json',
      icon: '💬'
    },
    {
      id: 'knowledge-base-template',
      title: 'Knowledge Base Template',
      description: 'Structured FAQ and documentation template',
      filename: 'knowledge-base-template.md',
      type: 'md',
      icon: '📚'
    }
  ],
  externalTools: [
    {
      name: 'Zendesk',
      url: 'https://zendesk.com',
      description: 'Customer support platform',
      icon: '🎧'
    },
    {
      name: 'OpenAI',
      url: 'https://platform.openai.com',
      description: 'AI API platform',
      icon: '🧠'
    }
  ]
};

// Content Creator AI Course Configuration  
export const contentCreatorAIConfig: CourseConfig = {
  id: 'content-creator-ai',
  title: 'AI Content Creator Agent',
  description: 'Build an automated content creation and publishing system that generates blog posts, social media content, and marketing materials using AI',
  estimatedDays: 18,
  color: 'from-purple-500 to-pink-600',
  icon: '✍️',
  phases: [
    {
      id: 1,
      title: 'Content Strategy Setup',
      description: 'Define your content strategy, target audience, and publishing platforms',
      tasks: [
        {
          id: 'define-content-strategy',
          title: 'Define Content Strategy & Calendar',
          description: 'STEP 1: Download the Content Templates resource below. STEP 2: Use the Monthly Content Planning template to create your content calendar. STEP 3: Define your target audience, content pillars, and publishing schedule. STEP 4: Set up a Google Sheets content calendar using the provided template.',
          priority: 'high',
          estimatedTime: '90 min',
          phase: 1
        },
        {
          id: 'setup-cms',
          title: 'Set Up WordPress & Publishing Accounts',
          description: 'STEP 1: Create WordPress.com account (or use existing). STEP 2: Create Buffer.com account for social media scheduling. STEP 3: Connect your social media accounts (LinkedIn, Twitter, Facebook, Instagram) to Buffer. STEP 4: Test posting manually to ensure all connections work.',
          priority: 'high',
          estimatedTime: '60 min',
          phase: 1
        }
      ]
    },
    {
      id: 2,
      title: 'AI Content Generation Setup',
      description: 'Configure AI tools and templates for automated content creation',
      tasks: [
        {
          id: 'setup-content-ai',
          title: 'Import Make.com Content Workflow',
          description: 'STEP 1: Download the Content Workflow Template (JSON file) from resources below. STEP 2: Log into Make.com and create new scenario. STEP 3: Import the JSON workflow template. STEP 4: Connect your OpenAI API key. STEP 5: Connect WordPress and Buffer accounts. STEP 6: Test the workflow with sample content.',
          priority: 'high',
          estimatedTime: '75 min',
          phase: 2
        },
        {
          id: 'create-templates',
          title: 'Customize AI Content Templates',
          description: 'STEP 1: Open the Content Templates Library resource. STEP 2: Choose 3-5 templates that match your content strategy. STEP 3: Customize the AI prompts with your brand voice and industry. STEP 4: Test each template by generating sample content. STEP 5: Refine prompts based on output quality.',
          priority: 'medium',
          estimatedTime: '45 min',
          phase: 2
        }
      ]
    },
    {
      id: 3,
      title: 'Publishing Automation',
      description: 'Automate content publishing and distribution across all platforms',
      tasks: [
        {
          id: 'setup-publishing',
          title: 'Configure Automated Publishing Schedule',
          description: 'STEP 1: Set up your content calendar in Google Sheets with publish dates. STEP 2: Configure the Make.com workflow to check your calendar daily. STEP 3: Set up automatic posting schedules in Buffer (e.g., LinkedIn at 9 AM, Twitter at 2 PM). STEP 4: Test the full automation with one piece of content.',
          priority: 'high',
          estimatedTime: '60 min',
          phase: 3
        },
        {
          id: 'test-content-flow',
          title: 'Run Full Content Creation Test',
          description: 'STEP 1: Add a test topic to your content calendar. STEP 2: Trigger the Make.com workflow manually. STEP 3: Verify AI generates blog post, social media posts, and featured image. STEP 4: Check that content publishes to WordPress as draft. STEP 5: Confirm social media posts are scheduled in Buffer. STEP 6: Review and approve content quality.',
          priority: 'high',
          estimatedTime: '45 min',
          phase: 3
        }
      ]
    }
  ],
  resources: [
    {
      id: 'content-workflow',
      title: 'Content Creation Workflow',
      description: 'Automated content generation and publishing',
      filename: 'content-workflow-template.json',
      type: 'json',
      icon: '✍️'
    },
    {
      id: 'content-templates',
      title: 'Content Templates Library',
      description: 'Ready-to-use content templates',
      filename: 'content-templates.md',
      type: 'md',
      icon: '📝'
    }
  ],
  externalTools: [
    {
      name: 'WordPress',
      url: 'https://wordpress.com',
      description: 'Content management system',
      icon: '📝'
    },
    {
      name: 'Buffer',
      url: 'https://buffer.com',
      description: 'Social media scheduling',
      icon: '📱'
    }
  ]
};

// Export all course configurations
export const courseConfigs: Record<string, CourseConfig> = {
  'lead-research-agent': leadResearchAgentConfig,
  'customer-support-ai': customerSupportAIConfig,
  'content-creator-ai': contentCreatorAIConfig,
};

// Helper function to get course config
export function getCourseConfig(courseId: string): CourseConfig | null {
  return courseConfigs[courseId] || null;
}

// Helper function to get all available courses
export function getAllCourses(): CourseConfig[] {
  return Object.values(courseConfigs);
}
