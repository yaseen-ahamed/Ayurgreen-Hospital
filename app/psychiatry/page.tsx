import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/psychiatry";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Psychiatry Rehabilitation & Care | Ayurgreen Hospital",
  description: "Comprehensive clinical support, medication management, stress reduction, and integrated psychiatric guidance.",
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
    "Psychiatry & Mental Health Care",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/psychiatry",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/psychiatry",
    title: "Psychiatry Rehabilitation & Care | Ayurgreen Hospital",
    description: "Comprehensive clinical support, medication management, stress reduction, and integrated psychiatric guidance.",
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
    title: "Psychiatry Rehabilitation & Care | Ayurgreen Hospital",
    description: "Comprehensive clinical support, medication management, stress reduction, and integrated psychiatric guidance.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function PsychiatryPage() {
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
        "@id": "https://ayurgreenhospital.com/psychiatry#webpage",
        "url": "https://ayurgreenhospital.com/psychiatry",
        "name": "Psychiatry Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Comprehensive clinical support, medication management, stress reduction, and integrated psychiatric guidance.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Psychiatry Care",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/psychiatry#breadcrumb",
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
            "name": "Psychiatry",
            "item": "https://ayurgreenhospital.com/psychiatry",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/psychiatry#service",
        "name": "Psychiatry & Mental Health Care",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Comprehensive clinical support, medication management, stress reduction, and integrated psychiatric guidance.",
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
