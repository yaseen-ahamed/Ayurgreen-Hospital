import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/post-covid-complications";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Post-Covid Complications Rehabilitation & Care | Ayurgreen Hospital",
  description: "Restoring respiratory capacity, addressing muscular fatigue, and rebuilding full biological immune health.",
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
    "Post-COVID Rehabilitation",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/post-covid-complications",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/post-covid-complications",
    title: "Post-Covid Complications Rehabilitation & Care | Ayurgreen Hospital",
    description: "Restoring respiratory capacity, addressing muscular fatigue, and rebuilding full biological immune health.",
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
    title: "Post-Covid Complications Rehabilitation & Care | Ayurgreen Hospital",
    description: "Restoring respiratory capacity, addressing muscular fatigue, and rebuilding full biological immune health.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function PostCovidComplicationsPage() {
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
        "@id": "https://ayurgreenhospital.com/post-covid-complications#webpage",
        "url": "https://ayurgreenhospital.com/post-covid-complications",
        "name": "Post-Covid Complications Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Restoring respiratory capacity, addressing muscular fatigue, and rebuilding full biological immune health.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Post-COVID Rehabilitation",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/post-covid-complications#breadcrumb",
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
            "name": "Post-Covid Complications",
            "item": "https://ayurgreenhospital.com/post-covid-complications",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/post-covid-complications#service",
        "name": "Post-COVID Rehabilitation",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Restoring respiratory capacity, addressing muscular fatigue, and rebuilding full biological immune health.",
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
