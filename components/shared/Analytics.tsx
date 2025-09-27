'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Lightweight runtime check to avoid SSR issues
function initMixpanel(token: string) {
  try {
    // @ts-ignore
    if (typeof window !== 'undefined' && !window.mixpanel) {
      // Dynamically load Mixpanel library
      const script = document.createElement('script')
      script.src = 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'
      script.async = true
      script.onload = () => {
        // @ts-ignore
        if (window.mixpanel && !window.mixpanel.__initialized) {
          // @ts-ignore
          window.mixpanel.init(token, { debug: false })
          // @ts-ignore
          window.mixpanel.__initialized = true
        }
      }
      document.head.appendChild(script)
    } else {
      // @ts-ignore
      if (window.mixpanel && !window.mixpanel.__initialized) {
        // @ts-ignore
        window.mixpanel.init(token, { debug: false })
        // @ts-ignore
        window.mixpanel.__initialized = true
      }
    }
  } catch (e) {
    console.warn('Mixpanel init skipped:', e)
  }
}

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const MIXPANEL = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
  const CONSENT_KEY = 'cookie_consent_v1'

  useEffect(() => {
    let consent = false
    try {
      consent = localStorage.getItem(CONSENT_KEY) === 'true'
    } catch {}

    if (MIXPANEL && consent) {
      initMixpanel(MIXPANEL)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MIXPANEL])

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    let consent = false
    try {
      consent = localStorage.getItem(CONSENT_KEY) === 'true'
    } catch {}

    if (!consent) return
    try {
      // Google Analytics pageview
      // @ts-ignore
      if (typeof window !== 'undefined' && window.gtag) {
        // @ts-ignore
        window.gtag('event', 'page_view', { page_path: url })
      }
      // Mixpanel pageview
      // @ts-ignore
      if (typeof window !== 'undefined' && window.mixpanel && window.mixpanel.__initialized) {
        // @ts-ignore
        window.mixpanel.track('Page View', { url })
      }
    } catch (e) {
      // no-op
    }
  }, [pathname, searchParams])

  return null
}
