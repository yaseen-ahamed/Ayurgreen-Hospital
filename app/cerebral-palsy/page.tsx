import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/cerebral-palsy";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cerebral Palsy Rehabilitation & Care | Ayurgreen Hospital",
  description: "Specialized pediatric neurodevelopmental therapies to help reduce rigid muscle stiffness and assist milestone achievements.",
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
    "Cerebral Palsy Rehabilitation",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/cerebral-palsy",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/cerebral-palsy",
    title: "Cerebral Palsy Rehabilitation & Care | Ayurgreen Hospital",
    description: "Specialized pediatric neurodevelopmental therapies to help reduce rigid muscle stiffness and assist milestone achievements.",
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
    title: "Cerebral Palsy Rehabilitation & Care | Ayurgreen Hospital",
    description: "Specialized pediatric neurodevelopmental therapies to help reduce rigid muscle stiffness and assist milestone achievements.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function CerebralPalsyPage() {
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
        "@id": "https://ayurgreenhospital.com/cerebral-palsy#webpage",
        "url": "https://ayurgreenhospital.com/cerebral-palsy",
        "name": "Cerebral Palsy Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Specialized pediatric neurodevelopmental therapies to help reduce rigid muscle stiffness and assist milestone achievements.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Cerebral Palsy Rehabilitation",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/cerebral-palsy#breadcrumb",
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
            "name": "Cerebral Palsy",
            "item": "https://ayurgreenhospital.com/cerebral-palsy",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/cerebral-palsy#service",
        "name": "Cerebral Palsy Rehabilitation",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Specialized pediatric neurodevelopmental therapies to help reduce rigid muscle stiffness and assist milestone achievements.",
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
