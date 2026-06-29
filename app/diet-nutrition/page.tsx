import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/diet-nutrition";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Diet & Nutrition | Ayurgreen Hospital",
  description: "Custom GMP-prepared healing foods mapped directly to metabolic states and clinical digestive requirements.",
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
    "Diet & Nutrition",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/diet-nutrition",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/diet-nutrition",
    title: "Diet & Nutrition | Ayurgreen Hospital",
    description: "Custom GMP-prepared healing foods mapped directly to metabolic states and clinical digestive requirements.",
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
    title: "Diet & Nutrition | Ayurgreen Hospital",
    description: "Custom GMP-prepared healing foods mapped directly to metabolic states and clinical digestive requirements.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function DietNutritionPage() {
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
        "@id": "https://ayurgreenhospital.com/diet-nutrition#webpage",
        "url": "https://ayurgreenhospital.com/diet-nutrition",
        "name": "Diet & Nutrition | Ayurgreen Hospital",
        "description": "Custom GMP-prepared healing foods mapped directly to metabolic states and clinical digestive requirements.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Diet & Nutrition",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/diet-nutrition#breadcrumb",
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
            "name": "Diet & Nutrition",
            "item": "https://ayurgreenhospital.com/diet-nutrition",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/diet-nutrition#service",
        "name": "Diet & Nutrition",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Custom GMP-prepared healing foods mapped directly to metabolic states and clinical digestive requirements.",
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
