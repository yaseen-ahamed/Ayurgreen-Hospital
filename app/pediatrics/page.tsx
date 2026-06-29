import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/pediatrics";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Pediatrics | Ayurgreen Hospital",
  description: "Comprehensive neurodevelopmental, occupational, and sensory care customized for children facing milestone challenges.",
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
    "Pediatrics",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/pediatrics",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/pediatrics",
    title: "Pediatrics | Ayurgreen Hospital",
    description: "Comprehensive neurodevelopmental, occupational, and sensory care customized for children facing milestone challenges.",
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
    title: "Pediatrics | Ayurgreen Hospital",
    description: "Comprehensive neurodevelopmental, occupational, and sensory care customized for children facing milestone challenges.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function PediatricsPage() {
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
        "@id": "https://ayurgreenhospital.com/pediatrics#webpage",
        "url": "https://ayurgreenhospital.com/pediatrics",
        "name": "Pediatrics | Ayurgreen Hospital",
        "description": "Comprehensive neurodevelopmental, occupational, and sensory care customized for children facing milestone challenges.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Pediatrics",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/pediatrics#breadcrumb",
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
            "name": "Pediatrics",
            "item": "https://ayurgreenhospital.com/pediatrics",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/pediatrics#service",
        "name": "Pediatrics",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Comprehensive neurodevelopmental, occupational, and sensory care customized for children facing milestone challenges.",
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
