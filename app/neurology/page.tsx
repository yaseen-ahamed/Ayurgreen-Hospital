import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/neurology";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Neurology | Ayurgreen Hospital",
  description: "Advanced neurological diagnostics, consultation, and coordinated recovery paths for stroke, neuropathy, and brain lesions.",
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
    "Neurology",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/neurology",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/neurology",
    title: "Neurology | Ayurgreen Hospital",
    description: "Advanced neurological diagnostics, consultation, and coordinated recovery paths for stroke, neuropathy, and brain lesions.",
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
    title: "Neurology | Ayurgreen Hospital",
    description: "Advanced neurological diagnostics, consultation, and coordinated recovery paths for stroke, neuropathy, and brain lesions.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function NeurologyPage() {
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
        "@id": "https://ayurgreenhospital.com/neurology#webpage",
        "url": "https://ayurgreenhospital.com/neurology",
        "name": "Neurology | Ayurgreen Hospital",
        "description": "Advanced neurological diagnostics, consultation, and coordinated recovery paths for stroke, neuropathy, and brain lesions.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Neurology",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/neurology#breadcrumb",
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
            "name": "Neurology",
            "item": "https://ayurgreenhospital.com/neurology",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/neurology#service",
        "name": "Neurology",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Advanced neurological diagnostics, consultation, and coordinated recovery paths for stroke, neuropathy, and brain lesions.",
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
