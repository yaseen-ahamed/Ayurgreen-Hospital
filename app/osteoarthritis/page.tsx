import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/osteoarthritis";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Osteoarthritis Rehabilitation & Care | Ayurgreen Hospital",
  description: "Natural joint lubrication therapies, muscle strengthening, and cartilage support to relieve joint pain and stiffness.",
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
    "Osteoarthritis Management",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/osteoarthritis",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/osteoarthritis",
    title: "Osteoarthritis Rehabilitation & Care | Ayurgreen Hospital",
    description: "Natural joint lubrication therapies, muscle strengthening, and cartilage support to relieve joint pain and stiffness.",
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
    title: "Osteoarthritis Rehabilitation & Care | Ayurgreen Hospital",
    description: "Natural joint lubrication therapies, muscle strengthening, and cartilage support to relieve joint pain and stiffness.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function OsteoarthritisPage() {
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
        "@id": "https://ayurgreenhospital.com/osteoarthritis#webpage",
        "url": "https://ayurgreenhospital.com/osteoarthritis",
        "name": "Osteoarthritis Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Natural joint lubrication therapies, muscle strengthening, and cartilage support to relieve joint pain and stiffness.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Osteoarthritis Management",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/osteoarthritis#breadcrumb",
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
            "name": "Osteoarthritis",
            "item": "https://ayurgreenhospital.com/osteoarthritis",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/osteoarthritis#service",
        "name": "Osteoarthritis Management",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Natural joint lubrication therapies, muscle strengthening, and cartilage support to relieve joint pain and stiffness.",
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
