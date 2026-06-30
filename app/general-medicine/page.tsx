import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/general-medicine";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "General Medicine | Ayurgreen Hospital",
  description: "Managing general metabolic health, blood pressure, diabetes, and clinical balance alongside active daily rehabilitation.",
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
    "General Medicine",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/general-medicine",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/general-medicine",
    title: "General Medicine | Ayurgreen Hospital",
    description: "Managing general metabolic health, blood pressure, diabetes, and clinical balance alongside active daily rehabilitation.",
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
    title: "General Medicine | Ayurgreen Hospital",
    description: "Managing general metabolic health, blood pressure, diabetes, and clinical balance alongside active daily rehabilitation.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function GeneralMedicinePage() {
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
        "@id": "https://ayurgreenhospital.com/general-medicine#webpage",
        "url": "https://ayurgreenhospital.com/general-medicine",
        "name": "General Medicine | Ayurgreen Hospital",
        "description": "Managing general metabolic health, blood pressure, diabetes, and clinical balance alongside active daily rehabilitation.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "General Medicine",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/general-medicine#breadcrumb",
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
            "name": "General Medicine",
            "item": "https://ayurgreenhospital.com/general-medicine",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/general-medicine#service",
        "name": "General Medicine",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Managing general metabolic health, blood pressure, diabetes, and clinical balance alongside active daily rehabilitation.",
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
