'use client'

import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Store Automates 90% of Customer Support",
    company: "TechGear Pro",
    industry: "E-commerce",
    challenge: "Overwhelmed customer support team handling 200+ daily inquiries",
    solution: "AI customer support agent with product knowledge base integration",
    results: {
      supportTicketsReduced: "90%",
      responseTime: "2 minutes",
      customerSatisfaction: "4.8/5",
      monthlySavings: "$8,500"
    },
    description: "TechGear Pro implemented our AI customer support agent that handles product inquiries, order status, returns, and technical support. The agent integrates with their inventory system and order management platform.",
    testimonial: "Our support team went from drowning in tickets to focusing on complex issues that actually need human attention. Customer satisfaction has never been higher.",
    author: "Sarah Chen, Customer Success Manager",
    timeToImplement: "2 weeks",
    roi: "340%"
  },
  {
    id: 2,
    title: "Marketing Agency Scales Content Production 5x",
    company: "Digital Growth Partners",
    industry: "Marketing Agency",
    challenge: "Clients demanding more content but limited writing resources",
    solution: "AI content creation agent for blogs, social media, and email campaigns",
    results: {
      contentOutput: "500%",
      clientCapacity: "3x more clients",
      timePerPiece: "75% faster",
      monthlyRevenue: "+$45,000"
    },
    description: "The agency deployed AI agents for content ideation, writing, and optimization across multiple client accounts. Each agent is trained on brand voice and industry expertise.",
    testimonial: "We went from struggling to keep up with 10 clients to confidently serving 30+ clients with the same team size. Our content quality has actually improved.",
    author: "Marcus Rodriguez, Agency Owner",
    timeToImplement: "3 weeks",
    roi: "520%"
  },
  {
    id: 3,
    title: "Real Estate Firm Generates 300% More Qualified Leads",
    company: "Premier Properties Group",
    industry: "Real Estate",
    challenge: "Manual lead qualification consuming 60% of agent time",
    solution: "AI lead research and qualification agent with CRM integration",
    results: {
      leadQuality: "300% increase",
      agentProductivity: "60% more time for closings",
      conversionRate: "2.3x higher",
      monthlyCommissions: "+$120,000"
    },
    description: "Automated lead scoring, property matching, and initial client outreach. The AI agent qualifies leads based on budget, timeline, and preferences before passing to human agents.",
    testimonial: "Our agents now spend their time with pre-qualified, motivated buyers instead of chasing cold leads. It's completely transformed our business model.",
    author: "Jennifer Walsh, Broker Owner",
    timeToImplement: "10 days",
    roi: "680%"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-[#2F80ED]/10 text-[#2F80ED] text-sm font-semibold uppercase tracking-wide rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600">
            See how our students have transformed their operations and grown their revenue with AI agents
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-flex items-center px-3 py-1 bg-[#9B51E0]/10 text-[#9B51E0] text-sm font-medium rounded-full mb-4">
                  {study.industry}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {study.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {study.description}
                </p>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="border-l-4 border-[#2F80ED] pl-4 py-2 mb-6">
                  <p className="text-gray-700 italic">"{study.testimonial}"</p>
                  <cite className="text-sm text-gray-500 mt-2 block">— {study.author}</cite>
                </blockquote>

                {/* Implementation Details */}
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div>
                    <span className="font-medium text-gray-900">Implementation:</span> {study.timeToImplement}
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">ROI:</span> {study.roi}
                  </div>
                </div>
              </div>

              {/* Results Card */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="bg-gradient-to-br from-[#2F80ED] to-[#9B51E0] rounded-2xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-6">Key Results</h4>
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold mb-1">{value}</div>
                        <div className="text-sm opacity-90 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-lg font-semibold">{study.company}</div>
                      <div className="text-sm opacity-90">{study.industry} Industry</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join hundreds of businesses already transforming their operations with AI agents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses" className="btn-primary px-8 py-3">
                Start Free Course
              </Link>
              <Link href="/#pricing" className="btn-accent px-8 py-3">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
