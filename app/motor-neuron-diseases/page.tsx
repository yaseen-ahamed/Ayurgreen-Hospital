import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/motor-neuron-diseases";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Motor Neuron Diseases Rehabilitation & Care | Ayurgreen Hospital",
  description: "Providing neurological nourishment, muscle spasm control, and custom exercises to maintain function and manage progression.",
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
    "Motor Neuron Disease Management",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/motor-neuron-diseases",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/motor-neuron-diseases",
    title: "Motor Neuron Diseases Rehabilitation & Care | Ayurgreen Hospital",
    description: "Providing neurological nourishment, muscle spasm control, and custom exercises to maintain function and manage progression.",
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
    title: "Motor Neuron Diseases Rehabilitation & Care | Ayurgreen Hospital",
    description: "Providing neurological nourishment, muscle spasm control, and custom exercises to maintain function and manage progression.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function MotorNeuronDiseasesPage() {
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
        "@id": "https://ayurgreenhospital.com/motor-neuron-diseases#webpage",
        "url": "https://ayurgreenhospital.com/motor-neuron-diseases",
        "name": "Motor Neuron Diseases Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Providing neurological nourishment, muscle spasm control, and custom exercises to maintain function and manage progression.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Motor Neuron Disease Management",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/motor-neuron-diseases#breadcrumb",
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
            "name": "Motor Neuron Diseases",
            "item": "https://ayurgreenhospital.com/motor-neuron-diseases",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/motor-neuron-diseases#service",
        "name": "Motor Neuron Disease Management",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Providing neurological nourishment, muscle spasm control, and custom exercises to maintain function and manage progression.",
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
