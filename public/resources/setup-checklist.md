# AI Lead Research Agent - Complete Setup Checklist

## Pre-Setup Requirements ✅

### Account Creation
- [ ] **Make.com Account** - Sign up at [make.com](https://make.com)
  - Choose Core plan ($9/month minimum) or higher
  - Verify email and complete onboarding
  
- [ ] **Apollo.io Account** - Sign up at [apollo.io](https://apollo.io)
  - Choose plan with API access ($49/month minimum)
  - Complete profile setup and email verification
  
- [ ] **OpenAI Account** - Sign up at [platform.openai.com](https://platform.openai.com)
  - Add payment method for API usage
  - Generate API key (keep secure!)
  
- [ ] **Google Account** - Ensure you have access to Google Sheets
  - No additional cost required

### Resource Downloads
- [ ] Download `make-workflow-template.json` from course resources
- [ ] Download `workflow-setup-guide.md` for detailed instructions
- [ ] Download `chatgpt-prompt-library.md` for customization options
- [ ] Download `lead-tracking-template.csv` for Google Sheets setup

---

## Phase 1: Basic Setup (Day 1) 🚀

### Make.com Workflow Import
- [ ] Log into Make.com dashboard
- [ ] Create new scenario
- [ ] Import the `make-workflow-template.json` blueprint
- [ ] Save the imported scenario
- [ ] Rename scenario to "AI Lead Research Agent v1.0"

### Apollo.io Configuration
- [ ] Navigate to Apollo.io Settings → API
- [ ] Copy your API key
- [ ] Return to Make.com scenario
- [ ] Click on "Apollo - Search Companies" module
- [ ] Add new connection using your API key
- [ ] Test connection (should show green checkmark)

### OpenAI Configuration  
- [ ] Go to OpenAI Platform → API Keys
- [ ] Create new API key (copy immediately!)
- [ ] Return to Make.com scenario
- [ ] Click on "OpenAI - Qualify Lead" module
- [ ] Add new connection using your API key
- [ ] Test connection

### Google Sheets Setup
- [ ] Create new Google Sheet named "AI Lead Research Results"
- [ ] Add column headers from template:
  ```
  Date | Name | Title | Email | Phone | Company | Industry | Employees | Website | LinkedIn | Score | AI Analysis | Priority
  ```
- [ ] Create second sheet named "Hot Prospects" with columns:
  ```
  Date | Name | Title | Email | Phone | Company | Industry | Employees | Website | Score | Status
  ```
- [ ] Copy spreadsheet ID from URL
- [ ] Update both Google Sheets modules in Make.com with your spreadsheet ID
- [ ] Connect Google account in Make.com
- [ ] Test both Google Sheets connections

---

## Phase 2: Customization (Day 2) ⚙️

### Define Your Ideal Customer Profile (ICP)
- [ ] **Industry Selection** - Choose 2-3 primary industries:
  - [ ] Computer Software
  - [ ] Marketing and Advertising  
  - [ ] E-commerce
  - [ ] Professional Services
  - [ ] Healthcare
  - [ ] Financial Services
  - [ ] Other: ________________

- [ ] **Company Size** - Select employee ranges:
  - [ ] 1-10 (Startups)
  - [ ] 11-50 (Small Business)
  - [ ] 51-200 (Mid-Market)
  - [ ] 201-500 (Enterprise)
  - [ ] 500+ (Large Enterprise)

- [ ] **Geographic Focus** - Choose locations:
  - [ ] United States
  - [ ] Canada
  - [ ] United Kingdom
  - [ ] Australia
  - [ ] European Union
  - [ ] Other: ________________

- [ ] **Job Titles** - Select decision makers:
  - [ ] CEO/Founder
  - [ ] Marketing Director/VP
  - [ ] Operations Manager/VP
  - [ ] CTO/Technical Director
  - [ ] Business Development
  - [ ] Other: ________________

### Apollo Search Customization
- [ ] Open Apollo module in Make.com
- [ ] Update `person_titles` array with your target roles
- [ ] Update `organization_industries` with your target industries
- [ ] Update `person_locations` with your geographic focus
- [ ] Update `organization_num_employees_ranges` with your size preferences
- [ ] Set `per_page` to 25 for initial testing
- [ ] Save changes

### AI Prompt Customization
- [ ] Choose appropriate prompt from ChatGPT Prompt Library
- [ ] Replace [YOUR SERVICE] with your actual offering
- [ ] Replace [YOUR INDUSTRY] with your specialization
- [ ] Update scoring criteria to match your priorities
- [ ] Test prompt with sample company data
- [ ] Refine based on initial results

---

## Phase 3: Testing (Day 3) 🧪

### Initial Test Run
- [ ] Run scenario manually ("Run once" button)
- [ ] Monitor execution log for errors
- [ ] Check Google Sheets for populated data
- [ ] Verify all modules executed successfully
- [ ] Review AI scoring quality and relevance

### Data Quality Check
- [ ] **Lead Relevance**: Do results match your ICP?
  - [ ] Yes - Proceed to next step
  - [ ] No - Refine Apollo search criteria
  
- [ ] **AI Scoring Accuracy**: Do scores make sense?
  - [ ] Yes - Proceed to next step  
  - [ ] No - Adjust OpenAI prompt
  
- [ ] **Data Completeness**: Are all fields populated?
  - [ ] Yes - Proceed to next step
  - [ ] No - Check API connections and field mappings

### Error Resolution
- [ ] **Apollo API Errors**:
  - [ ] Check API key validity
  - [ ] Verify search criteria aren't too restrictive
  - [ ] Confirm API usage limits
  
- [ ] **OpenAI API Errors**:
  - [ ] Verify API key and billing setup
  - [ ] Check token limits and usage
  - [ ] Test prompt with simpler data
  
- [ ] **Google Sheets Errors**:
  - [ ] Confirm spreadsheet ID is correct
  - [ ] Verify sheet names match exactly
  - [ ] Check Google account permissions

---

## Phase 4: Optimization (Week 1) 📈

### Performance Monitoring
- [ ] Track daily lead volume
- [ ] Monitor lead quality scores
- [ ] Measure API costs and usage
- [ ] Document any recurring errors

### Scoring Calibration
- [ ] Review first 50 leads manually
- [ ] Identify scoring patterns and accuracy
- [ ] Adjust prompt criteria if needed
- [ ] Test different scoring thresholds

### Search Refinement
- [ ] Analyze which industries produce best leads
- [ ] Identify most responsive job titles
- [ ] Refine geographic targeting based on results
- [ ] Adjust company size ranges if needed

### Automation Schedule
- [ ] Set up automatic execution schedule
- [ ] Start with 2-3 runs per day
- [ ] Monitor for rate limiting issues
- [ ] Adjust frequency based on results

---

## Phase 5: Scaling (Week 2-3) 🚀

### Volume Increase
- [ ] Increase `per_page` from 25 to 50
- [ ] Add additional industry searches
- [ ] Create multiple scenarios for different ICPs
- [ ] Monitor API usage and costs

### Advanced Features
- [ ] **Slack Integration** (Optional):
  - [ ] Connect Slack workspace
  - [ ] Configure notification channel
  - [ ] Test hot lead alerts
  
- [ ] **Email Verification** (Optional):
  - [ ] Add Hunter.io or similar service
  - [ ] Insert email verification module
  - [ ] Update workflow connections
  
- [ ] **CRM Integration** (Optional):
  - [ ] Connect HubSpot, Salesforce, or Pipedrive
  - [ ] Map lead fields to CRM properties
  - [ ] Test lead creation in CRM

### Quality Assurance
- [ ] Set up weekly data quality reviews
- [ ] Create lead scoring accuracy reports
- [ ] Monitor conversion rates from leads to opportunities
- [ ] Document optimization opportunities

---

## Phase 6: Production (Week 4+) 🎯

### Full Production Setup
- [ ] Scale to 100+ leads per day
- [ ] Run every 2-4 hours automatically
- [ ] Set up error monitoring and alerts
- [ ] Create backup scenarios for redundancy

### Maintenance Schedule
- [ ] **Daily**: Check execution logs and error rates
- [ ] **Weekly**: Review lead quality and conversion data
- [ ] **Monthly**: Optimize prompts and search criteria
- [ ] **Quarterly**: Analyze ROI and cost effectiveness

### Success Metrics Tracking
- [ ] **Volume Metrics**:
  - [ ] Total leads processed per day: _______
  - [ ] Qualified leads (score >70) per day: _______
  - [ ] Hot prospects (score >80) per day: _______

- [ ] **Quality Metrics**:
  - [ ] Lead-to-opportunity conversion rate: _______%
  - [ ] Average deal size from AI leads: $_______
  - [ ] Time from lead to first contact: _______ hours

- [ ] **Efficiency Metrics**:
  - [ ] Cost per qualified lead: $_______
  - [ ] Time saved vs manual research: _______ hours/week
  - [ ] ROI on automation investment: _______%

---

## Troubleshooting Quick Reference 🔧

### Common Issues and Solutions

**"No leads returned from Apollo"**
- [ ] Check if search criteria are too restrictive
- [ ] Verify API key is valid and has credits
- [ ] Test with broader search parameters

**"OpenAI API errors"**
- [ ] Check API key and billing setup
- [ ] Verify you have sufficient credits
- [ ] Test with shorter, simpler prompts

**"Google Sheets not updating"**
- [ ] Confirm spreadsheet ID is correct
- [ ] Check sheet names match exactly (case-sensitive)
- [ ] Verify Google account has edit permissions

**"Low-quality lead scores"**
- [ ] Review and refine your AI prompt
- [ ] Adjust scoring criteria for your market
- [ ] Test with known good/bad examples

**"High API costs"**
- [ ] Reduce execution frequency
- [ ] Optimize prompts to use fewer tokens
- [ ] Consider upgrading to volume pricing tiers

---

## Success Checklist ✅

By completion, you should have:
- [ ] Automated lead research running 24/7
- [ ] 25-100+ qualified leads per day
- [ ] Leads scored and prioritized automatically
- [ ] Data organized in trackable spreadsheets
- [ ] Cost per lead under $0.10
- [ ] Time savings of 15-20 hours per week
- [ ] Clear process for lead follow-up and conversion

**Congratulations!** You now have a fully operational AI Lead Research Agent. Remember to continuously optimize based on your results and market feedback.

---

## Support Resources 📚

- **Make.com Documentation**: [docs.make.com](https://docs.make.com)
- **Apollo.io API Docs**: [apolloapi.com](https://apolloapi.com)
- **OpenAI API Reference**: [platform.openai.com/docs](https://platform.openai.com/docs)
- **Course Community**: Access through Academy membership
- **Video Tutorials**: Available in course lessons 1-6

**Need Help?** Join our Academy community for support from instructors and fellow students.
