'use client'

import { useState } from 'react'

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  const toggleBilling = () => {
    setAnnual(!annual)
  }

  const tiers = [
    {
      name: 'Starter',
      id: 'tier-starter',
      href: '#',
      price: { monthly: '$99', annually: '$79' },
      description: 'Perfect for individuals and small businesses just getting started with AI.',
      features: [
        '3 AI agent templates',
        'Basic customization',
        'Email support',
        'Community access',
        '5 deployments per month',
      ],
      mostPopular: false,
    },
    {
      name: 'Professional',
      id: 'tier-professional',
      href: '#',
      price: { monthly: '$199', annually: '$159' },
      description: 'For growing businesses ready to scale their AI workforce.',
      features: [
        '10 AI agent templates',
        'Advanced customization',
        'Priority email & chat support',
        'Community access',
        'Unlimited deployments',
        'Analytics dashboard',
      ],
      mostPopular: true,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '#',
      price: { monthly: '$399', annually: '$319' },
      description: 'For organizations seeking to transform with AI at scale.',
      features: [
        'Unlimited AI agent templates',
        'Full customization capabilities',
        'Dedicated support manager',
        'Private community channel',
        'Unlimited deployments',
        'Advanced analytics',
        'White-label options',
        'Custom integrations',
      ],
      mostPopular: false,
    },
  ]

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-[#9B51E0]/10 text-[#9B51E0] text-sm font-semibold uppercase tracking-wide rounded-full mb-4">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2F80ED] mb-6">
            The right price for your AI journey
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that works best for your business needs
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="relative flex rounded-lg bg-white p-1 shadow-sm">
            <button
              type="button"
              className={`relative w-1/2 whitespace-nowrap rounded-md py-2 text-sm font-medium ${
                !annual ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-gray-700'
              } focus:z-10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]`}
              onClick={toggleBilling}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className={`relative ml-0.5 w-1/2 whitespace-nowrap rounded-md py-2 text-sm font-medium ${
                annual ? 'bg-[var(--accent)] text-white shadow-sm' : 'text-gray-700'
              } focus:z-10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]`}
              onClick={toggleBilling}
            >
              Annual billing
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier) => (
            <div key={tier.id} className={`relative rounded-2xl border shadow-lg hover-card ${tier.mostPopular ? 'border-[var(--primary)] shadow-xl scale-105' : 'border-gray-200'} bg-white overflow-hidden`}>
              {tier.mostPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 transform rounded-full bg-[var(--accent)] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tier.name}</h3>
                <p className="text-gray-600 mb-8">{tier.description}</p>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">{annual ? tier.price.annually : tier.price.monthly}</span>
                  <span className="text-lg font-medium text-gray-500">/month</span>
                </div>
                <a
                  href={tier.href}
                  className={`mt-8 block w-full rounded-md border border-transparent px-6 py-3 text-center text-sm font-medium ${
                    tier.mostPopular
                      ? 'btn-primary'
                      : 'btn-accent'
                  }`}
                >
                  Get started with {tier.name}
                </a>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900">What's included</h4>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <svg className="h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
