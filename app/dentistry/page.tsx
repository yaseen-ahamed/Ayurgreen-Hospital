import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/dentistry";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Dentistry | Ayurgreen Hospital",
  description: "Dedicated premium dental care, hygiene maintenance, and corrective dentistry procedures in a comfortable clinic setting.",
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
    "Dentistry",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/dentistry",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/dentistry",
    title: "Dentistry | Ayurgreen Hospital",
    description: "Dedicated premium dental care, hygiene maintenance, and corrective dentistry procedures in a comfortable clinic setting.",
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
    title: "Dentistry | Ayurgreen Hospital",
    description: "Dedicated premium dental care, hygiene maintenance, and corrective dentistry procedures in a comfortable clinic setting.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function DentistryPage() {
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
        "@id": "https://ayurgreenhospital.com/dentistry#webpage",
        "url": "https://ayurgreenhospital.com/dentistry",
        "name": "Dentistry | Ayurgreen Hospital",
        "description": "Dedicated premium dental care, hygiene maintenance, and corrective dentistry procedures in a comfortable clinic setting.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Dentistry",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/dentistry#breadcrumb",
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
            "name": "Dentistry",
            "item": "https://ayurgreenhospital.com/dentistry",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/dentistry#service",
        "name": "Dentistry",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Dedicated premium dental care, hygiene maintenance, and corrective dentistry procedures in a comfortable clinic setting.",
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
