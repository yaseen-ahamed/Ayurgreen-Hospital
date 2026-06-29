import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/acupuncture";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Acupuncture | Ayurgreen Hospital",
  description: "Fine-needle neural stimulation to reduce chronic pain states, restore local blood circulation, and activate sensory pathways.",
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
    "Acupuncture",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/acupuncture",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/acupuncture",
    title: "Acupuncture | Ayurgreen Hospital",
    description: "Fine-needle neural stimulation to reduce chronic pain states, restore local blood circulation, and activate sensory pathways.",
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
    title: "Acupuncture | Ayurgreen Hospital",
    description: "Fine-needle neural stimulation to reduce chronic pain states, restore local blood circulation, and activate sensory pathways.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function AcupuncturePage() {
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
        "@id": "https://ayurgreenhospital.com/acupuncture#webpage",
        "url": "https://ayurgreenhospital.com/acupuncture",
        "name": "Acupuncture | Ayurgreen Hospital",
        "description": "Fine-needle neural stimulation to reduce chronic pain states, restore local blood circulation, and activate sensory pathways.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Acupuncture",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/acupuncture#breadcrumb",
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
            "name": "Acupuncture",
            "item": "https://ayurgreenhospital.com/acupuncture",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/acupuncture#service",
        "name": "Acupuncture",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Fine-needle neural stimulation to reduce chronic pain states, restore local blood circulation, and activate sensory pathways.",
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
