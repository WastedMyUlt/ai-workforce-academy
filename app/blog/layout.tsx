import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Blog - AI Workforce Academy",
  description: "Latest strategies, tutorials, and insights for building your AI workforce. Learn from real case studies and expert guidance on AI automation for business.",
  keywords: "AI automation blog, AI agent tutorials, business automation strategies, AI workforce insights, ChatGPT automation, Make.com tutorials",
  openGraph: {
    title: "AI Automation Blog - AI Workforce Academy",
    description: "Latest strategies, tutorials, and insights for building your AI workforce. Learn from real case studies and expert guidance on AI automation for business.",
    url: "https://aiworkforceacademy.com/blog",
    type: "website",
    images: [
      {
        url: "/cropped-logo.png",
        width: 1200,
        height: 630,
        alt: "AI Automation Blog - AI Workforce Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Blog - AI Workforce Academy",
    description: "Latest strategies, tutorials, and insights for building your AI workforce.",
    images: ["/cropped-logo.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
