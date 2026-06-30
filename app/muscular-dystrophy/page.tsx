import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/muscular-dystrophy";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Muscular Dystrophy Rehabilitation & Care | Ayurgreen Hospital",
  description: "Providing muscular nutrition, maintaining joint range, and custom gentle exercises to slow functional muscle decline.",
  keywords: [
    "Neuro Rehabilitation Kerala",
    "Robotic Rehabilitation India",
    "Ayurveda Rehabilitation Kerala",
    "Integrated Rehabilitation Hospital India",
    "Occupational Therapy",
    "Speech Therapy",
    "Physiotherapy",
    "Rehab Village",
    "Medical Tourism Kerala",
    "Muscular Dystrophy Rehabilitation",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/muscular-dystrophy",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/muscular-dystrophy",
    title: "Muscular Dystrophy Rehabilitation & Care | Ayurgreen Hospital",
    description: "Providing muscular nutrition, maintaining joint range, and custom gentle exercises to slow functional muscle decline.",
    images: [
      {
        url: "https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp",
        width: 1200,
        height: 630,
        alt: "Ayurgreen Hospital Front View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muscular Dystrophy Rehabilitation & Care | Ayurgreen Hospital",
    description: "Providing muscular nutrition, maintaining joint range, and custom gentle exercises to slow functional muscle decline.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function MuscularDystrophyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://ayurgreenhospital.com/#organization",
        "name": "Ayurgreen Hospital",
        "url": "https://ayurgreenhospital.com/",
        "logo": "https://ayurgreenhospital.com/Assets/Ayurgreen_Logo.webp",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-89430-55555",
          "contactType": "customer service",
          "email": "info@ayurgreenhospitals.com",
          "availableLanguage": ["en", "ar"],
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://ayurgreenhospital.com/muscular-dystrophy#webpage",
        "url": "https://ayurgreenhospital.com/muscular-dystrophy",
        "name": "Muscular Dystrophy Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Providing muscular nutrition, maintaining joint range, and custom gentle exercises to slow functional muscle decline.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Muscular Dystrophy Rehabilitation",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/muscular-dystrophy#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ayurgreenhospital.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Specialities",
            "item": "https://ayurgreenhospital.com/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Muscular Dystrophy",
            "item": "https://ayurgreenhospital.com/muscular-dystrophy",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/muscular-dystrophy#service",
        "name": "Muscular Dystrophy Rehabilitation",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Providing muscular nutrition, maintaining joint range, and custom gentle exercises to slow functional muscle decline.",
      },
    ],
  };

  return (
    <>
      <Script id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RehabPageClient data={pageData} />
    </>
  );
}
