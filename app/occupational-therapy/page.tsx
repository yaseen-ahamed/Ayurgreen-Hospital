import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/occupational-therapy";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Occupational Therapy | Ayurgreen Hospital",
  description: "Retraining coordination, task performance, and hand dexterity to achieve dynamic independence in activities of daily living.",
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
    "Occupational Therapy",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/occupational-therapy",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/occupational-therapy",
    title: "Occupational Therapy | Ayurgreen Hospital",
    description: "Retraining coordination, task performance, and hand dexterity to achieve dynamic independence in activities of daily living.",
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
    title: "Occupational Therapy | Ayurgreen Hospital",
    description: "Retraining coordination, task performance, and hand dexterity to achieve dynamic independence in activities of daily living.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function OccupationalTherapyPage() {
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
        "@id": "https://ayurgreenhospital.com/occupational-therapy#webpage",
        "url": "https://ayurgreenhospital.com/occupational-therapy",
        "name": "Occupational Therapy | Ayurgreen Hospital",
        "description": "Retraining coordination, task performance, and hand dexterity to achieve dynamic independence in activities of daily living.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Occupational Therapy",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/occupational-therapy#breadcrumb",
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
            "name": "Occupational Therapy",
            "item": "https://ayurgreenhospital.com/occupational-therapy",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/occupational-therapy#service",
        "name": "Occupational Therapy",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Retraining coordination, task performance, and hand dexterity to achieve dynamic independence in activities of daily living.",
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
