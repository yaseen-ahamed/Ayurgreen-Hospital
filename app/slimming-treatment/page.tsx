import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/slimming-treatment";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Slimming Treatment | Ayurgreen Hospital",
  description: "Ayurvedic metabolic stimulation, dry herbal powder massage, custom yoga routines, and organic diets for healthy fat loss.",
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
    "Slimming Treatment",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/slimming-treatment",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/slimming-treatment",
    title: "Slimming Treatment | Ayurgreen Hospital",
    description: "Ayurvedic metabolic stimulation, dry herbal powder massage, custom yoga routines, and organic diets for healthy fat loss.",
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
    title: "Slimming Treatment | Ayurgreen Hospital",
    description: "Ayurvedic metabolic stimulation, dry herbal powder massage, custom yoga routines, and organic diets for healthy fat loss.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function SlimmingTreatmentPage() {
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
        "@id": "https://ayurgreenhospital.com/slimming-treatment#webpage",
        "url": "https://ayurgreenhospital.com/slimming-treatment",
        "name": "Slimming Treatment | Ayurgreen Hospital",
        "description": "Ayurvedic metabolic stimulation, dry herbal powder massage, custom yoga routines, and organic diets for healthy fat loss.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Slimming Treatment",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/slimming-treatment#breadcrumb",
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
            "name": "Slimming Treatment",
            "item": "https://ayurgreenhospital.com/slimming-treatment",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/slimming-treatment#service",
        "name": "Slimming Treatment",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Ayurvedic metabolic stimulation, dry herbal powder massage, custom yoga routines, and organic diets for healthy fat loss.",
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
