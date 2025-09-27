import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - AI Workforce Academy",
  description: "Join AI Workforce Academy for $197/month. Get access to 12+ AI agent courses, templates, live coaching, and community. 30-day money-back guarantee.",
  keywords: "AI automation pricing, AI agent courses cost, business automation subscription, AI workforce training price, Make.com training cost",
  openGraph: {
    title: "Pricing - AI Workforce Academy",
    description: "Join AI Workforce Academy for $197/month. Get access to 12+ AI agent courses, templates, live coaching, and community. 30-day money-back guarantee.",
    url: "https://aiworkforceacademy.com/pricing",
    type: "website",
    images: [
      {
        url: "/cropped-logo.png",
        width: 1200,
        height: 630,
        alt: "Pricing - AI Workforce Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - AI Workforce Academy",
    description: "Join AI Workforce Academy for $197/month. Get access to 12+ AI agent courses, templates, and community.",
    images: ["/cropped-logo.png"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
