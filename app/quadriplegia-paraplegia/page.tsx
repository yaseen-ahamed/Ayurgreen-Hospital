import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/quadriplegia-paraplegia";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Quadriplegia & Paraplegia Rehabilitation & Care | Ayurgreen Hospital",
  description: "Aggressive physical restoration, autonomic regulation, and sensory stimulations to regain maximum lifestyle independence.",
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
    "Quadriplegia & Paraplegia Rehabilitation",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/quadriplegia-paraplegia",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/quadriplegia-paraplegia",
    title: "Quadriplegia & Paraplegia Rehabilitation & Care | Ayurgreen Hospital",
    description: "Aggressive physical restoration, autonomic regulation, and sensory stimulations to regain maximum lifestyle independence.",
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
    title: "Quadriplegia & Paraplegia Rehabilitation & Care | Ayurgreen Hospital",
    description: "Aggressive physical restoration, autonomic regulation, and sensory stimulations to regain maximum lifestyle independence.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function QuadriplegiaParaplegiaPage() {
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
        "@id": "https://ayurgreenhospital.com/quadriplegia-paraplegia#webpage",
        "url": "https://ayurgreenhospital.com/quadriplegia-paraplegia",
        "name": "Quadriplegia & Paraplegia Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Aggressive physical restoration, autonomic regulation, and sensory stimulations to regain maximum lifestyle independence.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Quadriplegia & Paraplegia Rehabilitation",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/quadriplegia-paraplegia#breadcrumb",
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
            "name": "Quadriplegia & Paraplegia",
            "item": "https://ayurgreenhospital.com/quadriplegia-paraplegia",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/quadriplegia-paraplegia#service",
        "name": "Quadriplegia & Paraplegia Rehabilitation",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Aggressive physical restoration, autonomic regulation, and sensory stimulations to regain maximum lifestyle independence.",
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
