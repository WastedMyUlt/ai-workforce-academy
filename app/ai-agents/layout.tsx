import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents Library - AI Workforce Academy",
  description: "Discover AI agents that transform your business operations. From lead research to content creation, find the perfect AI agent for your needs with step-by-step tutorials.",
  keywords: "AI agents, business automation, lead research AI, content creation AI, customer support automation, AI agent library, business AI tools",
  openGraph: {
    title: "AI Agents Library - AI Workforce Academy",
    description: "Discover AI agents that transform your business operations. From lead research to content creation, find the perfect AI agent for your needs.",
    url: "https://aiworkforceacademy.com/ai-agents",
    type: "website",
    images: [
      {
        url: "/cropped-logo.png",
        width: 1200,
        height: 630,
        alt: "AI Agents Library - AI Workforce Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents Library - AI Workforce Academy",
    description: "Discover AI agents that transform your business operations. From lead research to content creation.",
    images: ["/cropped-logo.png"],
  },
};

export default function AIAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
