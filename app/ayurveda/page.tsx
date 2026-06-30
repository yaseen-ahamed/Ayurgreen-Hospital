import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/ayurveda";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ayurveda | Ayurgreen Hospital",
  description: "Integrating authentic Kerala Ayurvedic medicine with scientific neurological rehabilitation models to maximize active biological recovery.",
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
    "Ayurveda",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/ayurveda",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/ayurveda",
    title: "Ayurveda | Ayurgreen Hospital",
    description: "Integrating authentic Kerala Ayurvedic medicine with scientific neurological rehabilitation models to maximize active biological recovery.",
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
    title: "Ayurveda | Ayurgreen Hospital",
    description: "Integrating authentic Kerala Ayurvedic medicine with scientific neurological rehabilitation models to maximize active biological recovery.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function AyurvedaPage() {
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
        "@id": "https://ayurgreenhospital.com/ayurveda#webpage",
        "url": "https://ayurgreenhospital.com/ayurveda",
        "name": "Ayurveda | Ayurgreen Hospital",
        "description": "Integrating authentic Kerala Ayurvedic medicine with scientific neurological rehabilitation models to maximize active biological recovery.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Ayurveda",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/ayurveda#breadcrumb",
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
            "name": "Ayurveda",
            "item": "https://ayurgreenhospital.com/ayurveda",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/ayurveda#service",
        "name": "Ayurveda",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Integrating authentic Kerala Ayurvedic medicine with scientific neurological rehabilitation models to maximize active biological recovery.",
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
