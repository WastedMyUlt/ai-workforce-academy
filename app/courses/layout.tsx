import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Courses - AI Workforce Academy",
  description: "Learn to build AI agents for lead generation, content creation, and customer service. Start with our free AI Lead Research Agent course and unlock the full library.",
  keywords: "AI agent courses, AI automation training, lead generation AI, content creation AI, customer service automation, Make.com tutorials, ChatGPT agents",
  openGraph: {
    title: "AI Agent Courses - AI Workforce Academy",
    description: "Learn to build AI agents for lead generation, content creation, and customer service. Start with our free AI Lead Research Agent course and unlock the full library.",
    url: "https://aiworkforceacademy.com/courses",
    type: "website",
    images: [
      {
        url: "/cropped-logo.png",
        width: 1200,
        height: 630,
        alt: "AI Agent Courses - AI Workforce Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Courses - AI Workforce Academy",
    description: "Learn to build AI agents for lead generation, content creation, and customer service. Start with our free course.",
    images: ["/cropped-logo.png"],
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
