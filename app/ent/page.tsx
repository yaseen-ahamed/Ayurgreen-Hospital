import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/ent";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ENT | Ayurgreen Hospital",
  description: "Managing speech acoustics, balance challenges, vestibular issues, and swallowing difficulties alongside rehab clinicians.",
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
    "ENT",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/ent",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/ent",
    title: "ENT | Ayurgreen Hospital",
    description: "Managing speech acoustics, balance challenges, vestibular issues, and swallowing difficulties alongside rehab clinicians.",
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
    title: "ENT | Ayurgreen Hospital",
    description: "Managing speech acoustics, balance challenges, vestibular issues, and swallowing difficulties alongside rehab clinicians.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function EntPage() {
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
        "@id": "https://ayurgreenhospital.com/ent#webpage",
        "url": "https://ayurgreenhospital.com/ent",
        "name": "ENT | Ayurgreen Hospital",
        "description": "Managing speech acoustics, balance challenges, vestibular issues, and swallowing difficulties alongside rehab clinicians.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "ENT",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/ent#breadcrumb",
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
            "name": "ENT",
            "item": "https://ayurgreenhospital.com/ent",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/ent#service",
        "name": "ENT",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Managing speech acoustics, balance challenges, vestibular issues, and swallowing difficulties alongside rehab clinicians.",
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
