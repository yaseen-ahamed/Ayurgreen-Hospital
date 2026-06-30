import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/virtual-reality";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Virtual Reality | Ayurgreen Hospital",
  description: "Immersive cognitive and sensory retraining utilizing advanced virtual reality software to promote rapid neural plastic growth.",
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
    "Virtual Reality",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/virtual-reality",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/virtual-reality",
    title: "Virtual Reality | Ayurgreen Hospital",
    description: "Immersive cognitive and sensory retraining utilizing advanced virtual reality software to promote rapid neural plastic growth.",
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
    title: "Virtual Reality | Ayurgreen Hospital",
    description: "Immersive cognitive and sensory retraining utilizing advanced virtual reality software to promote rapid neural plastic growth.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function VirtualRealityPage() {
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
        "@id": "https://ayurgreenhospital.com/virtual-reality#webpage",
        "url": "https://ayurgreenhospital.com/virtual-reality",
        "name": "Virtual Reality | Ayurgreen Hospital",
        "description": "Immersive cognitive and sensory retraining utilizing advanced virtual reality software to promote rapid neural plastic growth.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Virtual Reality",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/virtual-reality#breadcrumb",
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
            "name": "Virtual Reality",
            "item": "https://ayurgreenhospital.com/virtual-reality",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/virtual-reality#service",
        "name": "Virtual Reality",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Immersive cognitive and sensory retraining utilizing advanced virtual reality software to promote rapid neural plastic growth.",
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
