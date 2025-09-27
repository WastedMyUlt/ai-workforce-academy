'use client'

import { useEffect, useState } from 'react'

const CONSENT_KEY = 'cookie_consent_v1'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const val = localStorage.getItem(CONSENT_KEY)
      if (!val) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'true')
    } catch {}
    setVisible(false)
  }

  const decline = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'false')
    } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-6">
      <div className="mx-auto max-w-4xl rounded-xl shadow-lg bg-white border border-gray-200 p-4 sm:p-5">
        <div className="sm:flex sm:items-start sm:justify-between gap-4">
          <div className="text-sm text-gray-700">
            We use cookies to analyze traffic and improve your experience. By clicking "Accept", you agree to our use of cookies for analytics.
            Read our <a href="#" className="text-[#2F80ED] underline">Privacy Policy</a>.
          </div>
          <div className="mt-3 sm:mt-0 flex gap-2">
            <button onClick={decline} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Decline</button>
            <button onClick={accept} className="px-4 py-2 rounded-lg btn-primary">Accept</button>
          </div>
        </div>
      </div>
    </div>
  )
}
