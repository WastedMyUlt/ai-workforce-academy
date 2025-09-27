# ChatGPT Prompt Library for Lead Research Agent

## Table of Contents
1. [Base Lead Qualification Prompts](#base-lead-qualification-prompts)
2. [Industry-Specific Prompts](#industry-specific-prompts)
3. [Service-Specific Prompts](#service-specific-prompts)
4. [Advanced Scoring Prompts](#advanced-scoring-prompts)
5. [Follow-up Research Prompts](#follow-up-research-prompts)

---

## Base Lead Qualification Prompts

### Universal Lead Scorer
```
You are a lead qualification expert. Analyze the provided company information and score the lead from 0-100 based on overall business potential.

Company Information:
- Name: {{company_name}}
- Industry: {{industry}}
- Size: {{employee_count}} employees
- Website: {{website}}
- Funding Stage: {{funding_stage}}
- Technologies: {{tech_stack}}
- Description: {{company_description}}

Scoring Criteria:
- Company size and growth potential (25 points)
- Industry relevance and market position (25 points)
- Technology adoption and innovation (20 points)
- Financial indicators and stability (20 points)
- Decision-making accessibility (10 points)

Provide:
1. Numerical score (0-100)
2. Two-sentence justification
3. Primary opportunity area
4. Recommended next action

Format: Score: [X]/100 | Justification: [text] | Opportunity: [area] | Action: [recommendation]
```

### Budget-Focused Qualifier
```
Analyze this company's budget potential for business services ranging from $5,000-$50,000 annually.

Company: {{company_name}}
Industry: {{industry}}
Size: {{employee_count}} employees
Funding: {{funding_stage}}
Revenue Indicators: {{revenue_signals}}

Score from 0-100 based on:
- Budget availability (40 points)
- Growth trajectory (30 points)
- Pain point severity (20 points)
- Decision timeline (10 points)

Include estimated budget range and confidence level.
```

---

## Industry-Specific Prompts

### SaaS Companies
```
You are a SaaS industry expert. Evaluate this company's fit for AI automation services specifically designed for software companies.

Company Details:
- Name: {{company_name}}
- Product Type: {{product_category}}
- Team Size: {{employee_count}}
- Funding: {{funding_stage}}
- Tech Stack: {{technologies}}
- Growth Metrics: {{growth_indicators}}

SaaS-Specific Evaluation Criteria:
- Product-market fit indicators (25 points)
- Scaling challenges (customer support, onboarding, retention) (25 points)
- Technical sophistication and API readiness (20 points)
- Growth stage and automation readiness (20 points)
- Budget for growth tools and efficiency (10 points)

Focus on: customer support automation, onboarding sequences, churn reduction, lead qualification.

Score: [X]/100
Reasoning: [2-3 sentences about SaaS-specific fit]
Best Use Case: [specific automation opportunity]
Implementation Priority: [High/Medium/Low]
```

### E-commerce Businesses
```
Evaluate this e-commerce company for AI automation solutions focusing on customer experience, inventory, and marketing automation.

Company: {{company_name}}
Platform: {{ecommerce_platform}}
Size: {{employee_count}} employees
Product Categories: {{product_types}}
Monthly Visitors: {{traffic_data}}
Technology: {{tech_stack}}

E-commerce Scoring:
- Transaction volume and complexity (30 points)
- Customer service load (25 points)
- Marketing automation needs (20 points)
- Inventory and operations complexity (15 points)
- Growth trajectory and scaling needs (10 points)

Key automation opportunities: customer support, order management, personalized marketing, inventory alerts, review management.

Provide score, justification, and top 2 automation priorities.
```

### Marketing Agencies
```
Assess this marketing agency's potential for AI automation tools that enhance client delivery and internal operations.

Agency: {{company_name}}
Services: {{service_offerings}}
Team Size: {{employee_count}}
Client Count: {{client_indicators}}
Specialization: {{industry_focus}}

Agency-Specific Criteria:
- Client volume and service complexity (25 points)
- Content creation and campaign management load (25 points)
- Reporting and analytics requirements (20 points)
- Team efficiency and scaling needs (20 points)
- Technology adoption and client sophistication (10 points)

Focus areas: content creation, social media management, client reporting, lead generation for clients, campaign optimization.

Score with emphasis on time-saving and client value enhancement.
```

### Professional Services (Legal, Accounting, Consulting)
```
Evaluate this professional services firm for AI automation that enhances client service while maintaining compliance and quality.

Firm: {{company_name}}
Practice Areas: {{service_areas}}
Size: {{employee_count}} professionals
Client Types: {{client_segments}}
Billing Model: {{billing_structure}}

Professional Services Scoring:
- Client communication and intake volume (30 points)
- Document processing and research needs (25 points)
- Compliance and quality requirements (20 points)
- Billing and administrative efficiency (15 points)
- Technology adoption readiness (10 points)

Automation opportunities: client intake, document review, research assistance, appointment scheduling, billing automation.

Consider regulatory constraints and professional standards in recommendations.
```

---

## Service-Specific Prompts

### AI Automation Services
```
Score this company's fit for comprehensive AI automation services (chatbots, workflow automation, data analysis).

Company: {{company_name}}
Current Pain Points: {{operational_challenges}}
Technology Maturity: {{tech_adoption_level}}
Team Structure: {{organizational_structure}}

Automation Readiness Assessment:
- Repetitive task volume (25 points)
- Data quality and accessibility (25 points)
- Team technical comfort level (20 points)
- Process documentation maturity (15 points)
- Change management capability (15 points)

Identify top 3 automation opportunities and implementation complexity.
```

### Digital Marketing Services
```
Assess this company's need for digital marketing automation and AI-powered marketing tools.

Company: {{company_name}}
Current Marketing Efforts: {{marketing_activities}}
Lead Generation Challenges: {{lead_gen_issues}}
Customer Acquisition Cost: {{cac_indicators}}

Marketing Automation Scoring:
- Lead generation volume and quality needs (30 points)
- Content creation and distribution requirements (25 points)
- Customer journey complexity (20 points)
- Marketing team capacity (15 points)
- Attribution and analytics sophistication (10 points)

Focus on ROI improvement and marketing efficiency gains.
```

### Business Consulting Services
```
Evaluate this company's potential for business consulting services enhanced by AI insights and automation.

Company: {{company_name}}
Business Challenges: {{operational_issues}}
Growth Stage: {{company_maturity}}
Decision-Making Process: {{decision_structure}}

Consulting Opportunity Assessment:
- Strategic planning and optimization needs (30 points)
- Operational efficiency gaps (25 points)
- Data-driven decision-making maturity (20 points)
- Change implementation capability (15 points)
- Investment capacity for improvements (10 points)

Recommend consulting focus areas and AI-enhanced service delivery.
```

---

## Advanced Scoring Prompts

### Multi-Factor Lead Scorer
```
Perform comprehensive lead analysis using multiple qualification frameworks.

Company Data: {{all_company_fields}}

Apply these scoring methods:
1. BANT (Budget, Authority, Need, Timeline) - 25 points
2. MEDDIC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion) - 25 points
3. CHAMP (Challenges, Authority, Money, Prioritization) - 25 points
4. Custom AI Automation Fit - 25 points

Provide:
- Overall composite score (0-100)
- Individual framework scores
- Strongest qualification area
- Biggest concern or risk
- Recommended approach strategy
```

### Competitive Analysis Scorer
```
Analyze this lead considering competitive landscape and differentiation opportunities.

Target Company: {{company_name}}
Industry: {{industry}}
Current Solutions: {{existing_tools}}
Competitors in Space: {{competitor_analysis}}

Competitive Scoring:
- Market saturation and competition level (25 points)
- Differentiation opportunity (25 points)
- Switching cost and effort (20 points)
- Timing and market readiness (20 points)
- Unique value proposition fit (10 points)

Include competitive positioning strategy and key differentiators to emphasize.
```

---

## Follow-up Research Prompts

### Deep Company Research
```
Conduct detailed research analysis on this qualified lead for sales preparation.

Company: {{company_name}}
Initial Score: {{lead_score}}
Key Contact: {{contact_info}}

Research Focus Areas:
1. Recent company news and developments
2. Technology stack and integration possibilities
3. Organizational structure and decision makers
4. Industry trends affecting their business
5. Potential pain points and growth challenges

Provide:
- Executive summary (3-4 sentences)
- Key talking points for initial outreach
- Potential objections and responses
- Recommended meeting agenda topics
- Follow-up research needed
```

### Personalization Research
```
Generate personalized outreach insights for this high-scoring lead.

Lead Details: {{lead_information}}
Contact Person: {{contact_details}}
Company Context: {{company_background}}

Personalization Elements:
- Recent company achievements or news
- Industry-specific challenges they likely face
- Personal background of key contact
- Mutual connections or shared interests
- Relevant case studies or success stories

Create:
1. Personalized email subject line
2. Opening paragraph with specific relevance
3. Value proposition tailored to their situation
4. Specific next step recommendation
```

---

## Usage Instructions

### Customization Guidelines
1. Replace placeholder variables ({{variable_name}}) with actual data from your workflow
2. Adjust scoring weights based on your service priorities
3. Modify industry criteria to match your target market
4. Add company-specific evaluation criteria as needed

### Implementation Tips
1. Test prompts with sample data before full deployment
2. Monitor AI responses for consistency and accuracy
3. Refine prompts based on actual lead conversion data
4. Create prompt variations for A/B testing
5. Update prompts quarterly based on market changes

### Quality Control
- Set up human review for scores above 80
- Flag unusual responses for manual verification
- Track prompt performance metrics
- Maintain prompt version control for optimization

---

**Remember**: These prompts are templates. Customize them based on your specific service offerings, target market, and qualification criteria for best results.
