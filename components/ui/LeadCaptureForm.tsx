'use client'

import { useState } from 'react'

export default function LeadCaptureForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, businessType }),
      })

      const result = await response.json()
      
      if (result.success) {
        setIsSuccess(true)
        setName('')
        setEmail('')
        setBusinessType('')
      } else {
        throw new Error(result.message || 'Something went wrong')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit your information.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-[#00B8D4]">
      {isSuccess ? (
        <div className="p-8 text-center">
          <svg className="mx-auto h-12 w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-3 text-lg font-medium text-[#00B8D4]">Thanks for joining!</h3>
          <p className="mt-2 text-gray-500">Check your email for next steps.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-8">
          {error && (
            <div className="mb-4 bg-red-50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="shadow-sm focus:ring-[#00B8D4] focus:border-[#00B8D4] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="shadow-sm focus:ring-[#00B8D4] focus:border-[#00B8D4] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                Business Type
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="businessType"
                  id="businessType"
                  placeholder="e.g., Consultant, Agency, E-commerce"
                  className="shadow-sm focus:ring-[#00B8D4] focus:border-[#00B8D4] block w-full sm:text-sm border-gray-300 rounded-md"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF5722] hover:bg-[#CC461B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5722] disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
              </button>
            </div>
            <p className="text-xs text-center text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </form>
      )}
    </div>
  )
}
