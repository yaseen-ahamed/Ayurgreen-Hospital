import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/orthopedic";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Orthopedic | Ayurgreen Hospital",
  description: "Correcting joint mechanical limits, muscle weakness, and joint range issues post-fracture or post-joint replacement surgery.",
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
    "Orthopedic",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/orthopedic",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/orthopedic",
    title: "Orthopedic | Ayurgreen Hospital",
    description: "Correcting joint mechanical limits, muscle weakness, and joint range issues post-fracture or post-joint replacement surgery.",
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
    title: "Orthopedic | Ayurgreen Hospital",
    description: "Correcting joint mechanical limits, muscle weakness, and joint range issues post-fracture or post-joint replacement surgery.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function OrthopedicPage() {
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
        "@id": "https://ayurgreenhospital.com/orthopedic#webpage",
        "url": "https://ayurgreenhospital.com/orthopedic",
        "name": "Orthopedic | Ayurgreen Hospital",
        "description": "Correcting joint mechanical limits, muscle weakness, and joint range issues post-fracture or post-joint replacement surgery.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Orthopedic",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/orthopedic#breadcrumb",
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
            "name": "Orthopedic",
            "item": "https://ayurgreenhospital.com/orthopedic",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/orthopedic#service",
        "name": "Orthopedic",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Correcting joint mechanical limits, muscle weakness, and joint range issues post-fracture or post-joint replacement surgery.",
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
