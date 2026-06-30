import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/psychological-problems";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Psychological Problems Rehabilitation & Care | Ayurgreen Hospital",
  description: "Integrated mental health care, biofeedback sessions, relaxation, and wellness counseling to improve emotional balance.",
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
    "Psychological Rehabilitation",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/psychological-problems",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/psychological-problems",
    title: "Psychological Problems Rehabilitation & Care | Ayurgreen Hospital",
    description: "Integrated mental health care, biofeedback sessions, relaxation, and wellness counseling to improve emotional balance.",
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
    title: "Psychological Problems Rehabilitation & Care | Ayurgreen Hospital",
    description: "Integrated mental health care, biofeedback sessions, relaxation, and wellness counseling to improve emotional balance.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function PsychologicalProblemsPage() {
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
        "@id": "https://ayurgreenhospital.com/psychological-problems#webpage",
        "url": "https://ayurgreenhospital.com/psychological-problems",
        "name": "Psychological Problems Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Integrated mental health care, biofeedback sessions, relaxation, and wellness counseling to improve emotional balance.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Psychological Rehabilitation",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/psychological-problems#breadcrumb",
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
            "name": "Psychological Problems",
            "item": "https://ayurgreenhospital.com/psychological-problems",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/psychological-problems#service",
        "name": "Psychological Rehabilitation",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Integrated mental health care, biofeedback sessions, relaxation, and wellness counseling to improve emotional balance.",
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
