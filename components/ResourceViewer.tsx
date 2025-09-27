'use client';

import { useState, useEffect } from 'react';
// Using built-in SVG icons instead of lucide-react

interface ResourceViewerProps {
  isOpen: boolean;
  onClose: () => void;
  resourceId: string;
  courseId: string;
  title: string;
  type: 'md' | 'json' | 'csv';
}

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  category?: string;
}

export default function ResourceViewer({ isOpen, onClose, resourceId, courseId, title, type }: ResourceViewerProps) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && resourceId) {
      loadResourceContent();
    }
  }, [isOpen, resourceId]);

  const loadResourceContent = async () => {
    setLoading(true);
    try {
      // Map resourceId to actual file paths
      const resourceMap: Record<string, string> = {
        // Lead Research Agent resources
        'make-workflow': '/resources/make-workflow-template.json',
        'setup-guide': '/resources/workflow-setup-guide.md',
        'tracking-template': '/resources/lead-tracking-template.csv',
        'prompt-library': '/resources/chatgpt-prompt-library.md',
        'setup-checklist': '/resources/setup-checklist.md',
        
        // Customer Support AI resources
        'support-workflow': '/resources/support-workflow-template.json',
        'knowledge-base-template': '/resources/knowledge-base-template.md',
        
        // Content Creator AI resources
        'content-workflow': '/resources/content-workflow-template.json',
        'content-templates': '/resources/content-templates.md'
      };

      const filePath = resourceMap[resourceId];
      if (!filePath) {
        throw new Error(`Resource not found: ${resourceId}`);
      }

      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to fetch resource: ${response.statusText}`);
      }

      const fileContent = await response.text();
      setContent(fileContent);
      
      if (resourceId.includes('checklist')) {
        parseChecklistItems(fileContent);
      }
      
      // Load saved progress for checklists
      loadChecklistProgress();
    } catch (error) {
      console.error('Error loading resource:', error);
      setContent('Error loading resource content. Please check that the file exists.');
    } finally {
      setLoading(false);
    }
  };

  const getSimulatedContent = (resourceId: string): string => {
    switch (resourceId) {
      case 'setup-checklist':
        return `# AI Lead Research Agent - Complete Setup Checklist

## Phase 1: Foundation Setup (Days 1-3)

### Account Creation & Setup
- [ ] Create Make.com account (Core plan minimum - $9/month)
- [ ] Create Apollo.io account (Starter plan minimum - $49/month)  
- [ ] Set up OpenAI account with API access ($20+ credit recommended)
- [ ] Create Google Workspace account (if not already available)
- [ ] Set up Slack workspace for notifications

### Initial Configuration
- [ ] Download and import Make.com workflow template
- [ ] Connect Apollo.io API to Make.com
- [ ] Connect OpenAI API to Make.com
- [ ] Test API connections with sample data
- [ ] Set up Google Sheets template for lead tracking

## Phase 2: Customization (Days 4-7)

### Define Your Ideal Customer Profile (ICP)
- [ ] Identify target industries (e.g., SaaS, E-commerce, Agencies)
- [ ] Define company size criteria (employees, revenue)
- [ ] Set geographic targeting preferences
- [ ] Configure job title targeting for decision makers
- [ ] Set up exclusion criteria (competitors, existing customers)

### AI Prompt Customization
- [ ] Select industry-specific qualification prompts
- [ ] Customize scoring criteria for your business
- [ ] Test prompts with sample lead data
- [ ] Refine prompts based on initial results
- [ ] Set up fallback prompts for edge cases

## Phase 3: Testing & Validation (Days 8-12)

### Initial Testing
- [ ] Run workflow with 10 test leads
- [ ] Validate data accuracy and completeness
- [ ] Check lead scoring consistency
- [ ] Test Slack notification delivery
- [ ] Verify Google Sheets data population

### Quality Assurance
- [ ] Review AI qualification accuracy (aim for 80%+ accuracy)
- [ ] Test edge cases and unusual lead profiles
- [ ] Validate contact information accuracy
- [ ] Check for duplicate lead detection
- [ ] Test error handling and recovery

## Phase 4: Optimization (Days 13-17)

### Performance Tuning
- [ ] Analyze first 50 leads for quality patterns
- [ ] Optimize Apollo search criteria based on results
- [ ] Refine AI prompts for better accuracy
- [ ] Adjust scoring thresholds for your needs
- [ ] Set up A/B testing for different approaches

### Monitoring Setup
- [ ] Configure performance tracking dashboards
- [ ] Set up automated quality alerts
- [ ] Create weekly performance reports
- [ ] Establish lead quality benchmarks
- [ ] Document optimization procedures

## Phase 5: Scaling (Days 18-21)

### Volume Increase
- [ ] Scale from 25 to 50+ leads per day
- [ ] Monitor API usage and costs
- [ ] Set up automatic execution scheduling
- [ ] Configure load balancing if needed
- [ ] Test system stability under higher volume

### Team Integration
- [ ] Train team members on the system
- [ ] Set up user access and permissions
- [ ] Create standard operating procedures
- [ ] Establish lead handoff processes
- [ ] Set up performance monitoring for team

## Phase 6: Production & Maintenance

### Go Live
- [ ] Switch from test to production environment
- [ ] Monitor first week of production closely
- [ ] Address any issues immediately
- [ ] Collect feedback from sales team
- [ ] Document lessons learned

### Ongoing Maintenance
- [ ] Set up weekly system health checks
- [ ] Schedule monthly optimization reviews
- [ ] Plan quarterly strategy updates
- [ ] Maintain API key security
- [ ] Keep backup procedures updated

## Success Metrics

### Week 1 Targets:
- ✅ All accounts created and connected
- ✅ Workflow successfully importing leads
- ✅ Basic qualification working

### Week 2 Targets:
- ✅ 80%+ lead qualification accuracy
- ✅ Consistent daily lead flow (25+ leads)
- ✅ Team trained and using system

### Week 3 Targets:
- ✅ 50+ leads per day consistently
- ✅ Optimized for your specific ICP
- ✅ Full production deployment

## Troubleshooting Quick Reference

### Common Issues:
1. **API Connection Failures**: Check API keys and rate limits
2. **Low Lead Quality**: Refine ICP criteria and AI prompts  
3. **Missing Data**: Verify Apollo search parameters
4. **Slow Performance**: Check Make.com execution limits
5. **Duplicate Leads**: Enable duplicate detection in workflow

### Support Resources:
- Make.com Documentation: https://make.com/help
- Apollo.io API Docs: https://apolloio.github.io/apollo-api-docs/
- OpenAI API Reference: https://platform.openai.com/docs/api-reference

---

**🎉 Congratulations!** Once you complete this checklist, you'll have a fully operational AI Lead Research Agent generating qualified leads 24/7 for your business.`;

      case 'workflow-setup-guide':
        return `# Complete Workflow Setup Guide

## Overview
This comprehensive guide walks you through setting up your AI Lead Research Agent from start to finish.

## Prerequisites
- Make.com account (Core plan or higher)
- Apollo.io account with API access
- OpenAI account with API credits
- Google Workspace account
- Basic understanding of automation workflows

## Step 1: Make.com Workflow Import

### 1.1 Download the Template
The workflow template contains 10 pre-configured modules that work together to:
- Search for leads in Apollo.io
- Qualify leads using OpenAI
- Score leads based on your criteria
- Store results in Google Sheets
- Send notifications via Slack

### 1.2 Import Process
1. Log into your Make.com account
2. Click "Create a new scenario"
3. Select "Import Blueprint"
4. Upload the downloaded JSON file
5. Click "Save" to create your scenario

## Step 2: API Configuration

### 2.1 Apollo.io Setup
\`\`\`
API Endpoint: https://api.apollo.io/v1/
Required Scopes: 
- contacts:read
- organizations:read
- searches:write
\`\`\`

### 2.2 OpenAI Configuration
\`\`\`
Model: gpt-4
Max Tokens: 1000
Temperature: 0.3
\`\`\`

## Step 3: Testing Your Setup

Run a test with sample data to ensure everything works correctly.

## Advanced Configuration

### Custom Scoring Logic
You can customize the lead scoring algorithm by modifying the OpenAI prompts...

[Content continues with detailed technical instructions]`;

      case 'chatgpt-prompt-library':
        return `# ChatGPT Prompt Library for Lead Qualification

## SaaS Industry Prompts

### Basic Qualification Prompt
\`\`\`
Analyze this lead and provide a qualification score from 1-10 based on:
- Company size and growth potential
- Technology stack compatibility  
- Budget indicators
- Decision-making authority
- Timing signals

Lead Data: {lead_data}

Provide your analysis in this format:
Score: X/10
Reasoning: [brief explanation]
Next Steps: [recommended action]
\`\`\`

### Advanced SaaS Scoring
\`\`\`
You are a B2B SaaS sales expert. Evaluate this lead for our CRM software:

Company: {company_name}
Industry: {industry}
Size: {employee_count} employees
Revenue: {revenue_range}
Technology: {tech_stack}
Contact: {contact_title} - {contact_name}

Score this lead 1-10 considering:
1. Budget Authority (does contact have buying power?)
2. Need Indicators (current tools, pain points)
3. Timing (growth signals, hiring, funding)
4. Fit (industry, size, tech compatibility)

Format:
SCORE: X/10
BUDGET: High/Medium/Low confidence
NEED: Specific pain points identified
TIMING: Immediate/3-6 months/Future
NEXT ACTION: [specific recommendation]
\`\`\`

## E-commerce Industry Prompts

### E-commerce Lead Scoring
\`\`\`
Evaluate this e-commerce lead for our marketing automation platform:

Store: {store_name}
Platform: {ecommerce_platform}
Monthly Revenue: {revenue_estimate}
Products: {product_categories}
Marketing Channels: {current_marketing}

Rate 1-10 based on:
- Revenue potential and growth trajectory
- Marketing sophistication level
- Platform compatibility
- Expansion opportunities

Provide actionable insights for sales approach.
\`\`\`

## Agency/Consultant Prompts

### Agency Partnership Evaluation
\`\`\`
Assess this agency as a potential partner for our white-label solution:

Agency: {agency_name}
Services: {service_offerings}
Team Size: {team_count}
Clients: {client_types}
Location: {location}

Evaluate for:
1. Partnership Potential (1-10)
2. Revenue Opportunity
3. Strategic Fit
4. Implementation Complexity

Recommend partnership tier: Premium/Standard/Basic
\`\`\`

## Professional Services Prompts

### Consulting Firm Qualification
\`\`\`
Analyze this consulting firm for our enterprise software:

Firm: {firm_name}
Specialization: {practice_areas}
Size: {consultant_count}
Clients: {typical_clients}
Projects: {project_types}

Score based on:
- Enterprise software buying authority
- Implementation capability
- Long-term relationship potential
- Reference value

Provide engagement strategy recommendation.
\`\`\`

## Industry-Agnostic Prompts

### Universal Lead Scorer
\`\`\`
You are an expert sales development representative. Analyze this lead:

{lead_complete_data}

Provide a comprehensive qualification using the BANT framework:
- Budget: Ability to purchase (1-10)
- Authority: Decision-making power (1-10)  
- Need: Pain points and requirements (1-10)
- Timeline: Urgency to buy (1-10)

Overall Score: X/40
Priority: Hot/Warm/Cold
Recommended Action: [specific next step]
Key Talking Points: [3-5 bullet points for sales team]
\`\`\`

### Competitive Intelligence Prompt
\`\`\`
Analyze this lead for competitive threats and opportunities:

Company: {company_data}
Current Solutions: {existing_tools}
Recent Changes: {company_news}

Identify:
1. Current vendor relationships
2. Switching indicators
3. Competitive vulnerabilities
4. Unique value propositions to emphasize

Provide competitive strategy for sales approach.
\`\`\`

## Advanced Scoring Prompts

### Multi-Factor Analysis
\`\`\`
Perform advanced lead scoring using multiple data points:

COMPANY PROFILE:
- Name: {company_name}
- Industry: {industry_vertical}
- Size: {employee_range}
- Revenue: {revenue_bracket}
- Growth: {growth_indicators}

CONTACT PROFILE:
- Name: {contact_name}
- Title: {job_title}
- Department: {department}
- Seniority: {seniority_level}

BEHAVIORAL DATA:
- Website Activity: {web_engagement}
- Content Downloads: {content_interaction}
- Email Engagement: {email_metrics}
- Social Signals: {social_activity}

TECHNOGRAPHIC DATA:
- Current Stack: {technology_stack}
- Recent Implementations: {new_tools}
- Integration Needs: {integration_requirements}

Calculate composite score (1-100) with breakdown:
- Fit Score: X/25 (company-solution alignment)
- Intent Score: X/25 (buying signals)
- Authority Score: X/25 (decision-making power)
- Timing Score: X/25 (urgency indicators)

TOTAL: X/100
TIER: Enterprise/Mid-Market/SMB
ACTION: [specific sales strategy]
\`\`\`

## Prompt Optimization Tips

### Best Practices:
1. **Be Specific**: Include exact scoring criteria
2. **Use Structure**: Format responses consistently
3. **Include Context**: Provide relevant background
4. **Test Variations**: A/B test different approaches
5. **Update Regularly**: Refine based on results

### Common Mistakes to Avoid:
- Vague scoring criteria
- Too many variables at once
- Inconsistent formatting
- Lack of actionable outputs
- Not testing with real data

## Custom Prompt Templates

### Template Structure:
\`\`\`
ROLE: [Define AI's expertise]
CONTEXT: [Provide background]
DATA: [Input variables]
CRITERIA: [Scoring factors]
OUTPUT: [Required format]
\`\`\`

### Example Custom Template:
\`\`\`
ROLE: You are a {industry} sales expert with 10+ years experience
CONTEXT: We sell {product_type} to {target_market}
DATA: {lead_information}
CRITERIA: Score based on {custom_factors}
OUTPUT: Provide score, reasoning, and next steps
\`\`\`

---

**💡 Pro Tips:**
- Start with basic prompts and gradually add complexity
- Test prompts with known good/bad leads first
- Keep a library of your best-performing prompts
- Regular review and optimization improves accuracy over time`;

      default:
        return `# ${title}

This resource contains important information for your AI agent implementation.

Content would be loaded here based on the resource type and ID.`;
    }
  };

  const parseChecklistItems = (content: string) => {
    const lines = content.split('\n');
    const items: ChecklistItem[] = [];
    let currentCategory = '';

    lines.forEach((line, index) => {
      // Detect category headers
      if (line.startsWith('##') && !line.includes('Phase')) {
        currentCategory = line.replace('##', '').trim();
      }
      
      // Detect checklist items
      if (line.trim().startsWith('- [ ]') || line.trim().startsWith('- [x]')) {
        const isCompleted = line.includes('[x]');
        const text = line.replace(/^- \[[ x]\]\s*/, '').trim();
        
        items.push({
          id: `item-${index}`,
          text,
          completed: isCompleted,
          category: currentCategory
        });
      }
    });

    setChecklistItems(items);
  };

  const loadChecklistProgress = () => {
    const saved = localStorage.getItem(`checklist-progress-${courseId}-${resourceId}`);
    if (saved) {
      try {
        const savedProgress = JSON.parse(saved);
        setChecklistItems(prev => prev.map(item => ({
          ...item,
          completed: savedProgress[item.id] || false
        })));
      } catch (error) {
        console.error('Error loading checklist progress:', error);
      }
    }
  };

  const saveChecklistProgress = (items: ChecklistItem[]) => {
    const progress = items.reduce((acc, item) => {
      acc[item.id] = item.completed;
      return acc;
    }, {} as Record<string, boolean>);
    
    localStorage.setItem(`checklist-progress-${courseId}-${resourceId}`, JSON.stringify(progress));
  };

  const toggleChecklistItem = (itemId: string) => {
    const updatedItems = checklistItems.map(item =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );
    setChecklistItems(updatedItems);
    saveChecklistProgress(updatedItems);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const downloadFile = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resourceId}.${type}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderMarkdownContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeContent = '';
    let codeLanguage = '';

    lines.forEach((line, index) => {
      // Handle code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          // End code block
          elements.push(
            <div key={`code-${index}`} className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto my-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-xs">{codeLanguage || 'code'}</span>
                <button
                  onClick={() => navigator.clipboard.writeText(codeContent)}
                  className="text-gray-400 hover:text-white text-xs flex items-center"
                >
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                  Copy
                </button>
              </div>
              <pre className="whitespace-pre-wrap">{codeContent}</pre>
            </div>
          );
          inCodeBlock = false;
          codeContent = '';
          codeLanguage = '';
        } else {
          // Start code block
          inCodeBlock = true;
          codeLanguage = line.replace('```', '').trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }

      // Handle headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            {line.replace('# ', '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-medium text-gray-700 mb-3 mt-6">
            {line.replace('### ', '')}
          </h3>
        );
      }
      // Handle checklist items (interactive)
      else if (line.trim().startsWith('- [ ]') || line.trim().startsWith('- [x]')) {
        const isCompleted = line.includes('[x]');
        const text = line.replace(/^- \[[ x]\]\s*/, '').trim();
        const itemId = `item-${index}`;
        
        elements.push(
          <div key={index} className="flex items-start space-x-3 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
            <button
              onClick={() => toggleChecklistItem(itemId)}
              className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                isCompleted
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'border-gray-300 hover:border-blue-500'
              }`}
            >
              {isCompleted && (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <span className={`flex-1 ${isCompleted ? 'line-through text-gray-500' : 'text-gray-700'}`}>
              {text}
            </span>
          </div>
        );
      }
      // Handle regular list items
      else if (line.trim().startsWith('- ')) {
        elements.push(
          <div key={index} className="flex items-start space-x-3 py-1">
            <span className="text-blue-500 mt-2">•</span>
            <span className="text-gray-700">{line.replace(/^- /, '')}</span>
          </div>
        );
      }
      // Handle numbered lists
      else if (/^\d+\./.test(line.trim())) {
        elements.push(
          <div key={index} className="flex items-start space-x-3 py-1">
            <span className="text-blue-500 font-medium">{line.match(/^\d+\./)?.[0]}</span>
            <span className="text-gray-700">{line.replace(/^\d+\.\s*/, '')}</span>
          </div>
        );
      }
      // Handle bold text
      else if (line.includes('**')) {
        const parts = line.split('**');
        const formattedLine = parts.map((part, i) => 
          i % 2 === 1 ? <strong key={i} className="font-semibold">{part}</strong> : part
        );
        elements.push(
          <p key={index} className="text-gray-700 mb-3">
            {formattedLine}
          </p>
        );
      }
      // Handle regular paragraphs
      else if (line.trim() && !line.startsWith('---')) {
        elements.push(
          <p key={index} className="text-gray-700 mb-3 leading-relaxed">
            {line}
          </p>
        );
      }
      // Handle horizontal rules
      else if (line.startsWith('---')) {
        elements.push(
          <hr key={index} className="border-gray-200 my-6" />
        );
      }
      // Handle empty lines
      else if (!line.trim()) {
        elements.push(<div key={index} className="mb-2" />);
      }
    });

    return elements;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {type.toUpperCase()} Resource • {courseId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {type === 'md' && (
              <button
                onClick={copyToClipboard}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                title="Copy to clipboard"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              </button>
            )}
            <button
              onClick={downloadFile}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              title="Download file"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              title="Close"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading resource...</span>
            </div>
          ) : (
            <div className="prose prose-gray max-w-none">
              {type === 'md' ? (
                <div className="space-y-2">
                  {renderMarkdownContent(content)}
                </div>
              ) : type === 'json' ? (
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-xs">JSON</span>
                    <button
                      onClick={copyToClipboard}
                      className="text-gray-400 hover:text-white text-xs flex items-center"
                    >
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap">{content}</pre>
                </div>
              ) : (
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-xs">CSV</span>
                    <button
                      onClick={copyToClipboard}
                      className="text-gray-600 hover:text-gray-800 text-xs flex items-center"
                    >
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap text-gray-800">{content}</pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {resourceId.includes('checklist') && checklistItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Progress: {checklistItems.filter(item => item.completed).length} of {checklistItems.length} completed
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(checklistItems.filter(item => item.completed).length / checklistItems.length) * 100}%` 
                    }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {Math.round((checklistItems.filter(item => item.completed).length / checklistItems.length) * 100)}%
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
