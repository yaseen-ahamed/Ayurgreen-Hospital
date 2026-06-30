import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/hemiplegia";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hemiplegia Rehabilitation & Care | Ayurgreen Hospital",
  description: "Targeted active movement, sensory integration, and traditional heat therapies to improve unilateral motor deficit control.",
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
    "Hemiplegia Rehabilitation",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/hemiplegia",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/hemiplegia",
    title: "Hemiplegia Rehabilitation & Care | Ayurgreen Hospital",
    description: "Targeted active movement, sensory integration, and traditional heat therapies to improve unilateral motor deficit control.",
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
    title: "Hemiplegia Rehabilitation & Care | Ayurgreen Hospital",
    description: "Targeted active movement, sensory integration, and traditional heat therapies to improve unilateral motor deficit control.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function HemiplegiaPage() {
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
        "@id": "https://ayurgreenhospital.com/hemiplegia#webpage",
        "url": "https://ayurgreenhospital.com/hemiplegia",
        "name": "Hemiplegia Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Targeted active movement, sensory integration, and traditional heat therapies to improve unilateral motor deficit control.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Hemiplegia Rehabilitation",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/hemiplegia#breadcrumb",
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
            "name": "Hemiplegia",
            "item": "https://ayurgreenhospital.com/hemiplegia",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/hemiplegia#service",
        "name": "Hemiplegia Rehabilitation",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Targeted active movement, sensory integration, and traditional heat therapies to improve unilateral motor deficit control.",
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
