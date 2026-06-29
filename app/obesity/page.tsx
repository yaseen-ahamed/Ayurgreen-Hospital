import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/obesity";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Obesity Rehabilitation & Care | Ayurgreen Hospital",
  description: "Scientific metabolic control, customized Ayurvedic powder massages, low-impact exercise, and customized diet plans.",
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
    "Obesity Management",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/obesity",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/obesity",
    title: "Obesity Rehabilitation & Care | Ayurgreen Hospital",
    description: "Scientific metabolic control, customized Ayurvedic powder massages, low-impact exercise, and customized diet plans.",
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
    title: "Obesity Rehabilitation & Care | Ayurgreen Hospital",
    description: "Scientific metabolic control, customized Ayurvedic powder massages, low-impact exercise, and customized diet plans.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function ObesityPage() {
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
        "@id": "https://ayurgreenhospital.com/obesity#webpage",
        "url": "https://ayurgreenhospital.com/obesity",
        "name": "Obesity Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Scientific metabolic control, customized Ayurvedic powder massages, low-impact exercise, and customized diet plans.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Obesity Management",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/obesity#breadcrumb",
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
            "name": "Obesity",
            "item": "https://ayurgreenhospital.com/obesity",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/obesity#service",
        "name": "Obesity Management",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Scientific metabolic control, customized Ayurvedic powder massages, low-impact exercise, and customized diet plans.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RehabPageClient data={pageData} />
    </>
  );
}
