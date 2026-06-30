import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/neurosurgery";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Neurosurgery | Ayurgreen Hospital",
  description: "Comprehensive clinical support, post-operative tracking, and integrated neuro rehab immediately following brain or spine surgeries.",
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
    "Neurosurgery",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/neurosurgery",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/neurosurgery",
    title: "Neurosurgery | Ayurgreen Hospital",
    description: "Comprehensive clinical support, post-operative tracking, and integrated neuro rehab immediately following brain or spine surgeries.",
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
    title: "Neurosurgery | Ayurgreen Hospital",
    description: "Comprehensive clinical support, post-operative tracking, and integrated neuro rehab immediately following brain or spine surgeries.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function NeurosurgeryPage() {
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
        "@id": "https://ayurgreenhospital.com/neurosurgery#webpage",
        "url": "https://ayurgreenhospital.com/neurosurgery",
        "name": "Neurosurgery | Ayurgreen Hospital",
        "description": "Comprehensive clinical support, post-operative tracking, and integrated neuro rehab immediately following brain or spine surgeries.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Neurosurgery",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/neurosurgery#breadcrumb",
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
            "name": "Neurosurgery",
            "item": "https://ayurgreenhospital.com/neurosurgery",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/neurosurgery#service",
        "name": "Neurosurgery",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Comprehensive clinical support, post-operative tracking, and integrated neuro rehab immediately following brain or spine surgeries.",
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
