import Script from 'next/script';

interface StructuredDataProps {
  type: 'website' | 'course' | 'organization' | 'product';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
    };

    switch (type) {
      case 'website':
        return {
          ...baseData,
          "@type": "WebSite",
          name: "AI Workforce Academy",
          url: "https://aiworkforceacademy.com",
          description: "Transform your business with an AI workforce that works 24/7. Learn to build AI agents without coding skills.",
          publisher: {
            "@type": "Organization",
            name: "AI Workforce Academy",
            logo: {
              "@type": "ImageObject",
              url: "https://aiworkforceacademy.com/cropped-logo.png"
            }
          }
        };

      case 'course':
        return {
          ...baseData,
          "@type": "Course",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: "AI Workforce Academy",
            url: "https://aiworkforceacademy.com"
          },
          courseMode: "online",
          educationalLevel: data.difficulty || "Beginner",
          timeRequired: data.duration,
          offers: {
            "@type": "Offer",
            price: data.isFree ? "0" : data.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock"
          }
        };

      case 'organization':
        return {
          ...baseData,
          "@type": "Organization",
          name: "AI Workforce Academy",
          url: "https://aiworkforceacademy.com",
          logo: "https://aiworkforceacademy.com/cropped-logo.png",
          description: "Leading provider of AI automation training and courses for businesses.",
          sameAs: [
            "https://twitter.com/aiworkforceacademy",
            "https://linkedin.com/company/aiworkforceacademy"
          ]
        };

      default:
        return baseData;
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}
