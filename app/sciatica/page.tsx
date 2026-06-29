import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/sciatica";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Sciatica Rehabilitation & Care | Ayurgreen Hospital",
  description: "Relieving sciatic nerve compression, reducing radiating pain, and rebuilding core strength to prevent future flare-ups.",
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
    "Sciatica Treatment",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/sciatica",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/sciatica",
    title: "Sciatica Rehabilitation & Care | Ayurgreen Hospital",
    description: "Relieving sciatic nerve compression, reducing radiating pain, and rebuilding core strength to prevent future flare-ups.",
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
    title: "Sciatica Rehabilitation & Care | Ayurgreen Hospital",
    description: "Relieving sciatic nerve compression, reducing radiating pain, and rebuilding core strength to prevent future flare-ups.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function SciaticaPage() {
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
        "@id": "https://ayurgreenhospital.com/sciatica#webpage",
        "url": "https://ayurgreenhospital.com/sciatica",
        "name": "Sciatica Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Relieving sciatic nerve compression, reducing radiating pain, and rebuilding core strength to prevent future flare-ups.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Sciatica Treatment",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/sciatica#breadcrumb",
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
            "name": "Sciatica",
            "item": "https://ayurgreenhospital.com/sciatica",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/sciatica#service",
        "name": "Sciatica Treatment",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Relieving sciatic nerve compression, reducing radiating pain, and rebuilding core strength to prevent future flare-ups.",
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
