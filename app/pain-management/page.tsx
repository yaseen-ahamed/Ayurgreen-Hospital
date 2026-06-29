import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/pain-management";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Pain Management | Ayurgreen Hospital",
  description: "Multi-disciplinary relief paths targeting acute or chronic back, joint, and nerve pain without dependence on heavy meds.",
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
    "Pain Management",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/pain-management",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/pain-management",
    title: "Pain Management | Ayurgreen Hospital",
    description: "Multi-disciplinary relief paths targeting acute or chronic back, joint, and nerve pain without dependence on heavy meds.",
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
    title: "Pain Management | Ayurgreen Hospital",
    description: "Multi-disciplinary relief paths targeting acute or chronic back, joint, and nerve pain without dependence on heavy meds.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function PainManagementPage() {
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
        "@id": "https://ayurgreenhospital.com/pain-management#webpage",
        "url": "https://ayurgreenhospital.com/pain-management",
        "name": "Pain Management | Ayurgreen Hospital",
        "description": "Multi-disciplinary relief paths targeting acute or chronic back, joint, and nerve pain without dependence on heavy meds.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Pain Management",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/pain-management#breadcrumb",
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
            "name": "Pain Management",
            "item": "https://ayurgreenhospital.com/pain-management",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/pain-management#service",
        "name": "Pain Management",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Multi-disciplinary relief paths targeting acute or chronic back, joint, and nerve pain without dependence on heavy meds.",
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
