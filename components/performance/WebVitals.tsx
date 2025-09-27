'use client'

import { useEffect } from 'react';

export default function WebVitals() {
  useEffect(() => {
    // Only run in production and if analytics consent is given
    if (process.env.NODE_ENV !== 'production') return;
    
    let consent = false;
    try {
      consent = localStorage.getItem('cookie_consent_v1') === 'true';
    } catch {}
    
    if (!consent) return;

    // Dynamic import to avoid loading in development
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      function sendToAnalytics(metric: any) {
        // Send to Google Analytics if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true,
          });
        }

        // Send to Mixpanel if available
        if (typeof window !== 'undefined' && (window as any).mixpanel?.track) {
          (window as any).mixpanel.track('Web Vital', {
            metric_name: metric.name,
            metric_value: metric.value,
            metric_id: metric.id,
            metric_delta: metric.delta,
          });
        }

        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Web Vital:', metric);
        }
      }

      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    });
  }, []);

  return null;
}
