import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/hydro-therapy";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Hydro / Aquatic Therapy | Ayurgreen Hospital",
  description: "Heated pool therapy leveraging buoyancy to rebuild active walking patterns and coordination without heavy joint loads.",
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
    "Hydro / Aquatic Therapy",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/hydro-therapy",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/hydro-therapy",
    title: "Hydro / Aquatic Therapy | Ayurgreen Hospital",
    description: "Heated pool therapy leveraging buoyancy to rebuild active walking patterns and coordination without heavy joint loads.",
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
    title: "Hydro / Aquatic Therapy | Ayurgreen Hospital",
    description: "Heated pool therapy leveraging buoyancy to rebuild active walking patterns and coordination without heavy joint loads.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function HydroTherapyPage() {
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
        "@id": "https://ayurgreenhospital.com/hydro-therapy#webpage",
        "url": "https://ayurgreenhospital.com/hydro-therapy",
        "name": "Hydro / Aquatic Therapy | Ayurgreen Hospital",
        "description": "Heated pool therapy leveraging buoyancy to rebuild active walking patterns and coordination without heavy joint loads.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Hydro / Aquatic Therapy",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/hydro-therapy#breadcrumb",
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
            "name": "Hydro / Aquatic Therapy",
            "item": "https://ayurgreenhospital.com/hydro-therapy",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/hydro-therapy#service",
        "name": "Hydro / Aquatic Therapy",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Heated pool therapy leveraging buoyancy to rebuild active walking patterns and coordination without heavy joint loads.",
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
