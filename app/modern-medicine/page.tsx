import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/modern-medicine";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Modern Medicine | Ayurgreen Hospital",
  description: "Coordinating clinical diagnostics, primary care, emergency cover, and medical treatments alongside rehabilitation protocols.",
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
    "Modern Medicine",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/modern-medicine",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/modern-medicine",
    title: "Modern Medicine | Ayurgreen Hospital",
    description: "Coordinating clinical diagnostics, primary care, emergency cover, and medical treatments alongside rehabilitation protocols.",
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
    title: "Modern Medicine | Ayurgreen Hospital",
    description: "Coordinating clinical diagnostics, primary care, emergency cover, and medical treatments alongside rehabilitation protocols.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function ModernMedicinePage() {
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
        "@id": "https://ayurgreenhospital.com/modern-medicine#webpage",
        "url": "https://ayurgreenhospital.com/modern-medicine",
        "name": "Modern Medicine | Ayurgreen Hospital",
        "description": "Coordinating clinical diagnostics, primary care, emergency cover, and medical treatments alongside rehabilitation protocols.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Modern Medicine",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/modern-medicine#breadcrumb",
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
            "name": "Modern Medicine",
            "item": "https://ayurgreenhospital.com/modern-medicine",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/modern-medicine#service",
        "name": "Modern Medicine",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Coordinating clinical diagnostics, primary care, emergency cover, and medical treatments alongside rehabilitation protocols.",
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
