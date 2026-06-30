import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/spinal-cord-injury";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Spinal Cord Injury Rehabilitation & Care | Ayurgreen Hospital",
  description: "Rebuilding trunk control, sensory awareness, and mobility post-spinal trauma through integrated physical and traditional therapies.",
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
    "Spinal Cord Injury Rehabilitation",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/spinal-cord-injury",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/spinal-cord-injury",
    title: "Spinal Cord Injury Rehabilitation & Care | Ayurgreen Hospital",
    description: "Rebuilding trunk control, sensory awareness, and mobility post-spinal trauma through integrated physical and traditional therapies.",
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
    title: "Spinal Cord Injury Rehabilitation & Care | Ayurgreen Hospital",
    description: "Rebuilding trunk control, sensory awareness, and mobility post-spinal trauma through integrated physical and traditional therapies.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function SpinalCordInjuryPage() {
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
        "@id": "https://ayurgreenhospital.com/spinal-cord-injury#webpage",
        "url": "https://ayurgreenhospital.com/spinal-cord-injury",
        "name": "Spinal Cord Injury Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Rebuilding trunk control, sensory awareness, and mobility post-spinal trauma through integrated physical and traditional therapies.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Spinal Cord Injury Rehabilitation",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/spinal-cord-injury#breadcrumb",
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
            "name": "Spinal Cord Injury",
            "item": "https://ayurgreenhospital.com/spinal-cord-injury",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/spinal-cord-injury#service",
        "name": "Spinal Cord Injury Rehabilitation",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Rebuilding trunk control, sensory awareness, and mobility post-spinal trauma through integrated physical and traditional therapies.",
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
