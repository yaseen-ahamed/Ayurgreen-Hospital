import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/cardiology";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Cardiology | Ayurgreen Hospital",
  description: "Monitored cardiac recovery, aerobic conditioning, and safe active exercise loads for post-stroke or geriatric patients.",
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
    "Cardiology",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/cardiology",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/cardiology",
    title: "Cardiology | Ayurgreen Hospital",
    description: "Monitored cardiac recovery, aerobic conditioning, and safe active exercise loads for post-stroke or geriatric patients.",
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
    title: "Cardiology | Ayurgreen Hospital",
    description: "Monitored cardiac recovery, aerobic conditioning, and safe active exercise loads for post-stroke or geriatric patients.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function CardiologyPage() {
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
        "@id": "https://ayurgreenhospital.com/cardiology#webpage",
        "url": "https://ayurgreenhospital.com/cardiology",
        "name": "Cardiology | Ayurgreen Hospital",
        "description": "Monitored cardiac recovery, aerobic conditioning, and safe active exercise loads for post-stroke or geriatric patients.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Cardiology",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/cardiology#breadcrumb",
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
            "name": "Cardiology",
            "item": "https://ayurgreenhospital.com/cardiology",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/cardiology#service",
        "name": "Cardiology",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Monitored cardiac recovery, aerobic conditioning, and safe active exercise loads for post-stroke or geriatric patients.",
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
