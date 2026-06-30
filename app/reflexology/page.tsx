import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/reflexology";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Reflexology | Ayurgreen Hospital",
  description: "Targeted pressure point stimulation on feet and hands to restore energy flow, calm the nerves, and boost circulation.",
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
    "Reflexology",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/reflexology",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/reflexology",
    title: "Reflexology | Ayurgreen Hospital",
    description: "Targeted pressure point stimulation on feet and hands to restore energy flow, calm the nerves, and boost circulation.",
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
    title: "Reflexology | Ayurgreen Hospital",
    description: "Targeted pressure point stimulation on feet and hands to restore energy flow, calm the nerves, and boost circulation.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function ReflexologyPage() {
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
        "@id": "https://ayurgreenhospital.com/reflexology#webpage",
        "url": "https://ayurgreenhospital.com/reflexology",
        "name": "Reflexology | Ayurgreen Hospital",
        "description": "Targeted pressure point stimulation on feet and hands to restore energy flow, calm the nerves, and boost circulation.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Reflexology",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/reflexology#breadcrumb",
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
            "name": "Departments",
            "item": "https://ayurgreenhospital.com/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Reflexology",
            "item": "https://ayurgreenhospital.com/reflexology",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/reflexology#service",
        "name": "Reflexology",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Targeted pressure point stimulation on feet and hands to restore energy flow, calm the nerves, and boost circulation.",
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
