import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/myopathy";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Myopathy Rehabilitation & Care | Ayurgreen Hospital",
  description: "Nourishing muscle tissue, boosting strength, and prescribing safe mobility protocols to manage active muscle weakness.",
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
    "Myopathy Rehabilitation",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/myopathy",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/myopathy",
    title: "Myopathy Rehabilitation & Care | Ayurgreen Hospital",
    description: "Nourishing muscle tissue, boosting strength, and prescribing safe mobility protocols to manage active muscle weakness.",
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
    title: "Myopathy Rehabilitation & Care | Ayurgreen Hospital",
    description: "Nourishing muscle tissue, boosting strength, and prescribing safe mobility protocols to manage active muscle weakness.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function MyopathyPage() {
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
        "@id": "https://ayurgreenhospital.com/myopathy#webpage",
        "url": "https://ayurgreenhospital.com/myopathy",
        "name": "Myopathy Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Nourishing muscle tissue, boosting strength, and prescribing safe mobility protocols to manage active muscle weakness.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Myopathy Rehabilitation",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/myopathy#breadcrumb",
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
            "name": "Myopathy",
            "item": "https://ayurgreenhospital.com/myopathy",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/myopathy#service",
        "name": "Myopathy Rehabilitation",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Nourishing muscle tissue, boosting strength, and prescribing safe mobility protocols to manage active muscle weakness.",
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
