import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/urology";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Urology | Ayurgreen Hospital",
  description: "Integrated bladder and bowel dysfunction management, pelvic muscle retraining, and clinical tracking for post-spinal patients.",
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
    "Urology",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/urology",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/urology",
    title: "Urology | Ayurgreen Hospital",
    description: "Integrated bladder and bowel dysfunction management, pelvic muscle retraining, and clinical tracking for post-spinal patients.",
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
    title: "Urology | Ayurgreen Hospital",
    description: "Integrated bladder and bowel dysfunction management, pelvic muscle retraining, and clinical tracking for post-spinal patients.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function UrologyPage() {
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
        "@id": "https://ayurgreenhospital.com/urology#webpage",
        "url": "https://ayurgreenhospital.com/urology",
        "name": "Urology | Ayurgreen Hospital",
        "description": "Integrated bladder and bowel dysfunction management, pelvic muscle retraining, and clinical tracking for post-spinal patients.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Urology",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/urology#breadcrumb",
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
            "name": "Urology",
            "item": "https://ayurgreenhospital.com/urology",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/urology#service",
        "name": "Urology",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Integrated bladder and bowel dysfunction management, pelvic muscle retraining, and clinical tracking for post-spinal patients.",
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
