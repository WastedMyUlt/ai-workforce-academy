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
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-[#8F00FF]">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-[#3137fd] sm:text-4xl">
            The right price for your AI journey
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Choose the plan that works best for your business needs
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="relative flex rounded-lg bg-white p-1 shadow-sm">
            <button
              type="button"
              className={`relative w-1/2 whitespace-nowrap rounded-md py-2 text-sm font-medium ${
                !annual ? 'bg-[#3137fd] text-white shadow-sm' : 'text-gray-700'
              } focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#3137fd]`}
              onClick={toggleBilling}
            >
              Monthly billing
            </button>
            <button
              type="button"
              className={`relative ml-0.5 w-1/2 whitespace-nowrap rounded-md py-2 text-sm font-medium ${
                annual ? 'bg-[#00B8D4] text-white shadow-sm' : 'text-gray-700'
              } focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#3137fd]`}
              onClick={toggleBilling}
            >
              Annual billing
            </button>
          </div>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none">
          {tiers.map((tier) => (
            <div key={tier.id} className={`divide-y divide-gray-200 rounded-lg border shadow-sm ${tier.mostPopular ? 'border-[#3137fd] shadow-md' : 'border-gray-200'}`}>
              {tier.mostPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 transform rounded-full bg-[#00B8D4] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{annual ? tier.price.annually : tier.price.monthly}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <a
                  href={tier.href}
                  className={`mt-8 block w-full rounded-md border border-transparent px-6 py-3 text-center text-sm font-medium ${
                    tier.mostPopular
                      ? 'bg-[#3137fd] text-white hover:bg-[#2a30e3]'
                      : 'bg-[#00B8D4] text-white hover:bg-[#0093A8]'
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
    </div>
  )
}
