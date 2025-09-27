# AI Lead Research Agent - Complete Setup Guide

## Overview
This guide will walk you through setting up your AI Lead Research Agent using the provided Make.com workflow template. By the end, you'll have an automated system that finds and qualifies 25-100+ leads per day.

## Prerequisites
Before starting, ensure you have accounts for:
- [Make.com](https://make.com) (formerly Integromat) - $9/month minimum
- [Apollo.io](https://apollo.io) - $49/month for API access
- [OpenAI](https://openai.com) - $5-10/month typical usage
- Google Account (free) - for Google Sheets
- Slack (optional) - for notifications

## Step 1: Import the Workflow Template

1. **Download the Template**
   - Download `make-workflow-template.json` from the course resources
   - Save it to your computer

2. **Import into Make.com**
   - Log into your Make.com account
   - Click "Create a new scenario"
   - Click the "..." menu and select "Import Blueprint"
   - Upload the `make-workflow-template.json` file
   - Click "Save"

## Step 2: Configure Apollo.io Connection

1. **Get Apollo API Key**
   - Log into Apollo.io
   - Go to Settings → Integrations → API
   - Copy your API key

2. **Connect in Make.com**
   - Click on the "Apollo - Search Companies" module
   - Click "Add" next to Connection
   - Enter your Apollo API key
   - Test the connection

3. **Customize Search Criteria**
   ```json
   {
     "person_titles": ["CEO", "Founder", "Marketing Director", "VP Marketing"],
     "organization_num_employees_ranges": ["11,50", "51,200", "201,500"],
     "person_locations": ["United States", "Canada", "United Kingdom"],
     "organization_industries": ["Computer Software", "Marketing and Advertising"]
   }
   ```
   - Modify these to match your Ideal Customer Profile (ICP)
   - Start with 25 results per run, increase later

## Step 3: Configure OpenAI Connection

1. **Get OpenAI API Key**
   - Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
   - Create a new API key
   - Copy the key (you won't see it again!)

2. **Connect in Make.com**
   - Click on the "OpenAI - Qualify Lead" module
   - Add your OpenAI connection
   - Enter your API key

3. **Customize the Qualification Prompt**
   ```
   You are a lead qualification expert. Analyze the provided company information and score the lead from 0-100 based on fit for [YOUR SERVICE]. 
   
   Consider:
   - Company size (ideal: 10-500 employees)
   - Industry relevance to [YOUR INDUSTRY]
   - Growth indicators (funding, hiring, expansion)
   - Technology adoption level
   - Budget indicators
   
   Provide a numerical score and 2-sentence justification.
   ```
   - Replace [YOUR SERVICE] with your actual offering
   - Replace [YOUR INDUSTRY] with your target industry

## Step 4: Set Up Google Sheets Tracking

1. **Create Your Tracking Spreadsheet**
   - Create a new Google Sheet
   - Name it "AI Lead Research Results"
   - Create these columns in Row 1:
     ```
     Date | Name | Title | Email | Phone | Company | Industry | Employees | Website | LinkedIn | Score | AI Analysis | Priority
     ```

2. **Create Hot Prospects Sheet**
   - Add a second sheet called "Hot Prospects"
   - Use these columns:
     ```
     Date | Name | Title | Email | Phone | Company | Industry | Employees | Website | Score | Status
     ```

3. **Get Spreadsheet ID**
   - Copy the spreadsheet ID from the URL
   - Example: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
   - ID is: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

4. **Configure Google Sheets Modules**
   - Click on both Google Sheets modules
   - Connect your Google account
   - Replace "YOUR_SPREADSHEET_ID" with your actual ID
   - Select the correct sheet names

## Step 5: Configure Slack Notifications (Optional)

1. **Connect Slack**
   - Click on the Slack module
   - Connect your Slack workspace
   - Choose the channel for notifications (e.g., #leads)

2. **Customize Notification Message**
   ```
   🔥 New Hot Lead Found!

   *{{4.first_name}} {{4.last_name}}* - {{4.title}}
   *Company:* {{4.organization.name}} ({{4.organization.estimated_num_employees}} employees)
   *Score:* {{6.match}}/100
   *Email:* {{4.email}}
   *Website:* {{4.organization.website_url}}

   *AI Analysis:* {{5.choices[].message.content}}
   ```

## Step 6: Test Your Workflow

1. **Run Initial Test**
   - Click "Run once" in Make.com
   - Check for any errors in the execution log
   - Verify data appears in your Google Sheet

2. **Validate Results**
   - Check that leads match your ICP
   - Verify AI scoring makes sense
   - Ensure all data fields are populated

3. **Troubleshoot Common Issues**
   - **No results from Apollo**: Check your search criteria aren't too restrictive
   - **OpenAI errors**: Verify your API key and check usage limits
   - **Google Sheets errors**: Confirm spreadsheet ID and sheet names are correct

## Step 7: Optimize and Scale

1. **Week 1: Testing Phase (10-25 leads/day)**
   - Run manually 2-3 times per day
   - Monitor data quality
   - Refine search criteria and prompts

2. **Week 2: Optimization (25-50 leads/day)**
   - Set up automatic scheduling (every 4-6 hours)
   - Analyze which lead sources perform best
   - Adjust scoring thresholds

3. **Week 3: Scaling (50-100 leads/day)**
   - Increase per_page to 50-100 results
   - Add multiple industry searches
   - Monitor API usage and costs

4. **Week 4+: Full Production (100+ leads/day)**
   - Run every 2-4 hours automatically
   - Set up error monitoring and alerts
   - Regular weekly optimization reviews

## Advanced Customizations

### Multi-Industry Searches
Create separate scenarios for different industries:
- SaaS companies
- E-commerce businesses  
- Marketing agencies
- Professional services

### CRM Integration
Add modules to push qualified leads directly to:
- HubSpot
- Salesforce
- Pipedrive
- Monday.com

### Email Verification
Add email verification services:
- Hunter.io
- ZeroBounce
- NeverBounce

### Lead Nurturing
Trigger follow-up sequences for qualified leads:
- Add to email marketing lists
- Create tasks in project management tools
- Send to sales team via CRM

## Monitoring and Maintenance

### Daily Checks
- Review execution logs for errors
- Check lead quality in Google Sheets
- Monitor API usage and costs

### Weekly Reviews
- Analyze lead conversion rates
- Update search criteria based on results
- Optimize AI prompts for better scoring
- Review and update ICP criteria

### Monthly Optimization
- Analyze ROI and cost per lead
- A/B test different prompts and criteria
- Scale successful configurations
- Add new data sources or integrations

## Cost Breakdown

**Monthly Costs (estimated for 100 leads/day):**
- Make.com: $9-29/month
- Apollo.io: $49-99/month  
- OpenAI: $10-20/month
- Google Sheets: Free
- Slack: Free (or existing plan)

**Total: $68-148/month for 3,000 qualified leads**
**Cost per lead: $0.02-0.05**

Compare this to manual research at $5-15 per lead!

## Support and Troubleshooting

### Common Error Messages

**"Apollo API rate limit exceeded"**
- Solution: Reduce frequency or upgrade Apollo plan
- Add delays between API calls

**"OpenAI token limit exceeded"**  
- Solution: Shorten prompts or upgrade OpenAI plan
- Monitor token usage in OpenAI dashboard

**"Google Sheets quota exceeded"**
- Solution: Reduce write frequency or use batch operations
- Consider upgrading to Google Workspace

### Getting Help
- Make.com Community Forum
- Apollo.io Support Documentation  
- OpenAI API Documentation
- Course community (Academy members)

## Success Metrics to Track

### Volume Metrics
- Total leads processed per day
- Qualified leads (score >70) per day
- Hot prospects (score >80) per day

### Quality Metrics  
- Lead-to-opportunity conversion rate
- Average deal size from AI-sourced leads
- Time from lead to first contact

### Efficiency Metrics
- Cost per qualified lead
- Time saved vs manual research
- ROI on automation investment

---

**Congratulations!** You now have a complete AI Lead Research Agent that can find and qualify 100+ prospects per day automatically. Remember to start small, test thoroughly, and scale gradually for best results.
