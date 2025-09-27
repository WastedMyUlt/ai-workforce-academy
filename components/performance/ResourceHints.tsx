import Head from 'next/head';

export default function ResourceHints() {
  return (
    <Head>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://api.mixpanel.com" />
      <link rel="preconnect" href="https://js.stripe.com" />
      
      {/* DNS prefetch for likely external resources */}
      <link rel="dns-prefetch" href="https://youtube.com" />
      <link rel="dns-prefetch" href="https://vimeo.com" />
      
      {/* Preload critical assets */}
      <link
        rel="preload"
        href="/cropped-logo.png"
        as="image"
        type="image/png"
      />
      
      {/* Prefetch likely next pages */}
      <link rel="prefetch" href="/courses" />
      <link rel="prefetch" href="/pricing" />
    </Head>
  );
}
