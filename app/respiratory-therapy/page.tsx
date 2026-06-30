import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/respiratory-therapy";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Respiratory Therapy | Ayurgreen Hospital",
  description: "Restoring lung volumes, diaphragmatic training, clearing airways, and supporting recovery post-respiratory distress.",
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
    "Respiratory Therapy",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/respiratory-therapy",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/respiratory-therapy",
    title: "Respiratory Therapy | Ayurgreen Hospital",
    description: "Restoring lung volumes, diaphragmatic training, clearing airways, and supporting recovery post-respiratory distress.",
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
    title: "Respiratory Therapy | Ayurgreen Hospital",
    description: "Restoring lung volumes, diaphragmatic training, clearing airways, and supporting recovery post-respiratory distress.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function RespiratoryTherapyPage() {
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
        "@id": "https://ayurgreenhospital.com/respiratory-therapy#webpage",
        "url": "https://ayurgreenhospital.com/respiratory-therapy",
        "name": "Respiratory Therapy | Ayurgreen Hospital",
        "description": "Restoring lung volumes, diaphragmatic training, clearing airways, and supporting recovery post-respiratory distress.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Respiratory Therapy",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/respiratory-therapy#breadcrumb",
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
            "name": "Modern Integrations",
            "item": "https://ayurgreenhospital.com/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Respiratory Therapy",
            "item": "https://ayurgreenhospital.com/respiratory-therapy",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/respiratory-therapy#service",
        "name": "Respiratory Therapy",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Restoring lung volumes, diaphragmatic training, clearing airways, and supporting recovery post-respiratory distress.",
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
