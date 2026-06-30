import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/speech-therapy";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Speech Therapy | Ayurgreen Hospital",
  description: "Diagnosing and treating speech, language, voice, and swallowing disorders post-stroke or post-neurological trauma.",
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
    "Speech Therapy",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/speech-therapy",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/speech-therapy",
    title: "Speech Therapy | Ayurgreen Hospital",
    description: "Diagnosing and treating speech, language, voice, and swallowing disorders post-stroke or post-neurological trauma.",
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
    title: "Speech Therapy | Ayurgreen Hospital",
    description: "Diagnosing and treating speech, language, voice, and swallowing disorders post-stroke or post-neurological trauma.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function SpeechTherapyPage() {
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
        "@id": "https://ayurgreenhospital.com/speech-therapy#webpage",
        "url": "https://ayurgreenhospital.com/speech-therapy",
        "name": "Speech Therapy | Ayurgreen Hospital",
        "description": "Diagnosing and treating speech, language, voice, and swallowing disorders post-stroke or post-neurological trauma.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Speech Therapy",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/speech-therapy#breadcrumb",
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
            "name": "Speech Therapy",
            "item": "https://ayurgreenhospital.com/speech-therapy",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/speech-therapy#service",
        "name": "Speech Therapy",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Diagnosing and treating speech, language, voice, and swallowing disorders post-stroke or post-neurological trauma.",
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
