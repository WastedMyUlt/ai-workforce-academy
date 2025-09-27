import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";
import Analytics from "../components/shared/Analytics";
import CookieConsent from "../components/shared/CookieConsent";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "AI Workforce Academy - Build Your AI Workforce",
  description: "Transform your business with an AI workforce that works 24/7. Learn to build AI agents for lead generation, content creation, and customer service without coding skills.",
  keywords: "AI automation, AI agents, business automation, lead generation, content creation, no-code AI, AI workforce, Make.com, ChatGPT automation",
  authors: [{ name: "AI Workforce Academy" }],
  creator: "AI Workforce Academy",
  publisher: "AI Workforce Academy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiworkforceacademy.com",
    siteName: "AI Workforce Academy",
    title: "AI Workforce Academy - Build Your AI Workforce",
    description: "Transform your business with an AI workforce that works 24/7. Learn to build AI agents for lead generation, content creation, and customer service without coding skills.",
    images: [
      {
        url: "/cropped-logo.png",
        width: 1200,
        height: 630,
        alt: "AI Workforce Academy - Build Your AI Workforce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aiworkforceacademy",
    creator: "@aiworkforceacademy",
    title: "AI Workforce Academy - Build Your AI Workforce",
    description: "Transform your business with an AI workforce that works 24/7. Learn to build AI agents without coding skills.",
    images: ["/cropped-logo.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/cropped-logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        {GA_ID ? (
          <>
            <Script
              id="ga4-src"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
          <CookieConsent />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
