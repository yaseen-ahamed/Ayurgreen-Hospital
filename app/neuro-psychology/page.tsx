import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/neuro-psychology";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Neuro Psychology | Ayurgreen Hospital",
  description: "Cognitive retraining, sensory stimulation, emotional support, and clinical guidance to rebuild cerebral pathways and coordinate focus.",
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
    "Neuro Psychology",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/neuro-psychology",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/neuro-psychology",
    title: "Neuro Psychology | Ayurgreen Hospital",
    description: "Cognitive retraining, sensory stimulation, emotional support, and clinical guidance to rebuild cerebral pathways and coordinate focus.",
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
    title: "Neuro Psychology | Ayurgreen Hospital",
    description: "Cognitive retraining, sensory stimulation, emotional support, and clinical guidance to rebuild cerebral pathways and coordinate focus.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function NeuroPsychologyPage() {
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
        "@id": "https://ayurgreenhospital.com/neuro-psychology#webpage",
        "url": "https://ayurgreenhospital.com/neuro-psychology",
        "name": "Neuro Psychology | Ayurgreen Hospital",
        "description": "Cognitive retraining, sensory stimulation, emotional support, and clinical guidance to rebuild cerebral pathways and coordinate focus.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Neuro Psychology",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/neuro-psychology#breadcrumb",
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
            "name": "Neuro Psychology",
            "item": "https://ayurgreenhospital.com/neuro-psychology",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/neuro-psychology#service",
        "name": "Neuro Psychology",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Cognitive retraining, sensory stimulation, emotional support, and clinical guidance to rebuild cerebral pathways and coordinate focus.",
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
