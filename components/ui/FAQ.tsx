'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "Do I need coding skills to build AI agents?",
    answer: "No, our platform is designed for non-technical users. We provide templates and a no-code interface that allows you to build, customize, and deploy AI agents without any programming knowledge."
  },
  {
    question: "How long does it take to deploy my first AI agent?",
    answer: "Most users can deploy their first AI agent within 24-48 hours of joining the Academy. Our step-by-step guides and templates make the process straightforward and efficient."
  },
  {
    question: "Can I customize the AI agents to match my brand?",
    answer: "Yes, all AI agents can be fully customized to match your brand's voice, style, and requirements. The Professional and Enterprise plans offer more advanced customization options."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer email support for all plans, with chat support for Professional plans and dedicated support managers for Enterprise customers. Additionally, all members get access to our community forum where you can get help from other users and our team."
  },
  {
    question: "Can I use the AI agents for my clients' businesses?",
    answer: "Absolutely! Many of our members are agencies and consultants who build AI agents for their clients. The Enterprise plan includes white-label options specifically designed for this use case."
  },
  {
    question: "What if I'm not satisfied with the AI Workforce Academy?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your experience, simply contact our support team within 30 days of purchase for a full refund."
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-[#9B51E0]">FAQ</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-[#2F80ED] sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Everything you need to know about the AI Workforce Academy
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          <dl className="space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt className="text-lg">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-start justify-between text-left text-gray-900 focus:outline-none"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <svg
                        className={`h-6 w-6 transform ${openIndex === index ? '-rotate-180' : 'rotate-0'} transition-transform duration-200 ease-in-out text-[#2F80ED]`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd className={`mt-2 pr-12 transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-500">
            Can't find the answer you're looking for?{' '}
            <a href="#" className="font-medium text-[#2F80ED] hover:text-[#2967c7]">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
