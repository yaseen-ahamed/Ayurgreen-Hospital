import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/autism";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Autism Rehabilitation & Care | Ayurgreen Hospital",
  description: "Pediatric sensory integration, motor coordination retraining, and gentle behavioral guidance protocols.",
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
    "Autism Spectrum Support",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/autism",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/autism",
    title: "Autism Rehabilitation & Care | Ayurgreen Hospital",
    description: "Pediatric sensory integration, motor coordination retraining, and gentle behavioral guidance protocols.",
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
    title: "Autism Rehabilitation & Care | Ayurgreen Hospital",
    description: "Pediatric sensory integration, motor coordination retraining, and gentle behavioral guidance protocols.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function AutismPage() {
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
        "@id": "https://ayurgreenhospital.com/autism#webpage",
        "url": "https://ayurgreenhospital.com/autism",
        "name": "Autism Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Pediatric sensory integration, motor coordination retraining, and gentle behavioral guidance protocols.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Autism Spectrum Support",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/autism#breadcrumb",
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
            "name": "Autism",
            "item": "https://ayurgreenhospital.com/autism",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/autism#service",
        "name": "Autism Spectrum Support",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Pediatric sensory integration, motor coordination retraining, and gentle behavioral guidance protocols.",
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
