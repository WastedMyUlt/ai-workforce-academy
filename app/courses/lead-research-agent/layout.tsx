import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Lead Research Agent Course - Free Training | AI Workforce Academy",
  description: "Learn to build an AI agent that finds 100+ qualified leads per day automatically. Free course with Make.com workflows, ChatGPT prompts, and Google Sheets templates.",
  keywords: "AI lead generation, lead research automation, Make.com lead generation, ChatGPT lead qualification, automated prospecting, AI sales agent",
  openGraph: {
    title: "AI Lead Research Agent Course - Free Training",
    description: "Learn to build an AI agent that finds 100+ qualified leads per day automatically. Free course with Make.com workflows, ChatGPT prompts, and Google Sheets templates.",
    url: "https://aiworkforceacademy.com/courses/lead-research-agent",
    type: "website",
    images: [
      {
        url: "/cropped-logo.png",
        width: 1200,
        height: 630,
        alt: "AI Lead Research Agent Course - Free Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Research Agent Course - Free Training",
    description: "Learn to build an AI agent that finds 100+ qualified leads per day automatically. Free course with templates included.",
    images: ["/cropped-logo.png"],
  },
};

export default function LeadResearchAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
