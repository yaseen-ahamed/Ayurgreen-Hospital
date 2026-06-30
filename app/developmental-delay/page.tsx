import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/developmental-delay";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Developmental Delay Rehabilitation & Care | Ayurgreen Hospital",
  description: "Pediatric milestone tracking and customized motor-cognitive stimulation to assist functional age achievements.",
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
    "Developmental Delay Rehabilitation",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/developmental-delay",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/developmental-delay",
    title: "Developmental Delay Rehabilitation & Care | Ayurgreen Hospital",
    description: "Pediatric milestone tracking and customized motor-cognitive stimulation to assist functional age achievements.",
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
    title: "Developmental Delay Rehabilitation & Care | Ayurgreen Hospital",
    description: "Pediatric milestone tracking and customized motor-cognitive stimulation to assist functional age achievements.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function DevelopmentalDelayPage() {
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
        "@id": "https://ayurgreenhospital.com/developmental-delay#webpage",
        "url": "https://ayurgreenhospital.com/developmental-delay",
        "name": "Developmental Delay Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Pediatric milestone tracking and customized motor-cognitive stimulation to assist functional age achievements.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Developmental Delay Rehabilitation",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/developmental-delay#breadcrumb",
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
            "name": "Developmental Delay",
            "item": "https://ayurgreenhospital.com/developmental-delay",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/developmental-delay#service",
        "name": "Developmental Delay Rehabilitation",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Pediatric milestone tracking and customized motor-cognitive stimulation to assist functional age achievements.",
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
