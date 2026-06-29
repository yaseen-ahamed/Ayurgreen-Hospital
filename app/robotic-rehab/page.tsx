import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/robotic-rehab";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Robotic Exoskeleton Therapy | Ayurgreen Hospital",
  description: "High-repetition, sensor-guided exoskeleton therapy designed to accelerate motor learning and rebuild walking patterns.",
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
    "Robotic Exoskeleton Therapy",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/robotic-rehab",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/robotic-rehab",
    title: "Robotic Exoskeleton Therapy | Ayurgreen Hospital",
    description: "High-repetition, sensor-guided exoskeleton therapy designed to accelerate motor learning and rebuild walking patterns.",
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
    title: "Robotic Exoskeleton Therapy | Ayurgreen Hospital",
    description: "High-repetition, sensor-guided exoskeleton therapy designed to accelerate motor learning and rebuild walking patterns.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function RoboticRehabPage() {
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
        "@id": "https://ayurgreenhospital.com/robotic-rehab#webpage",
        "url": "https://ayurgreenhospital.com/robotic-rehab",
        "name": "Robotic Exoskeleton Therapy | Ayurgreen Hospital",
        "description": "High-repetition, sensor-guided exoskeleton therapy designed to accelerate motor learning and rebuild walking patterns.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Robotic Exoskeleton Therapy",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/robotic-rehab#breadcrumb",
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
            "name": "Robotic Exoskeleton Therapy",
            "item": "https://ayurgreenhospital.com/robotic-rehab",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/robotic-rehab#service",
        "name": "Robotic Exoskeleton Therapy",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "High-repetition, sensor-guided exoskeleton therapy designed to accelerate motor learning and rebuild walking patterns.",
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
