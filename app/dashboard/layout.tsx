import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Implementation Dashboard - AI Workforce Academy",
  description: "Track your AI Lead Research Agent implementation progress with our interactive dashboard. Monitor tasks, access resources, and follow your step-by-step checklist.",
  keywords: "AI implementation dashboard, lead research agent setup, progress tracking, automation checklist, AI agent implementation",
  openGraph: {
    title: "Implementation Dashboard - AI Workforce Academy",
    description: "Track your AI Lead Research Agent implementation progress with our interactive dashboard.",
    url: "https://aiworkforceacademy.com/dashboard",
    type: "website",
    images: [
      {
        url: "/cropped-logo.png",
        width: 1200,
        height: 630,
        alt: "Implementation Dashboard - AI Workforce Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Implementation Dashboard - AI Workforce Academy",
    description: "Track your AI Lead Research Agent implementation progress with our interactive dashboard.",
    images: ["/cropped-logo.png"],
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
