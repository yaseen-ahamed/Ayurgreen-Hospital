import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/parkinsons-disease";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Parkinson's Disease Rehabilitation & Care | Ayurgreen Hospital",
  description: "Delaying progression and maintaining active motor coordination through tailored Ayurvedic protocols and sensory exercises.",
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
    "Parkinson's Disease Management",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/parkinsons-disease",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/parkinsons-disease",
    title: "Parkinson's Disease Rehabilitation & Care | Ayurgreen Hospital",
    description: "Delaying progression and maintaining active motor coordination through tailored Ayurvedic protocols and sensory exercises.",
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
    title: "Parkinson's Disease Rehabilitation & Care | Ayurgreen Hospital",
    description: "Delaying progression and maintaining active motor coordination through tailored Ayurvedic protocols and sensory exercises.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function ParkinsonsDiseasePage() {
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
        "@id": "https://ayurgreenhospital.com/parkinsons-disease#webpage",
        "url": "https://ayurgreenhospital.com/parkinsons-disease",
        "name": "Parkinson's Disease Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Delaying progression and maintaining active motor coordination through tailored Ayurvedic protocols and sensory exercises.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Parkinson's Disease Management",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/parkinsons-disease#breadcrumb",
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
            "name": "Parkinson's Disease",
            "item": "https://ayurgreenhospital.com/parkinsons-disease",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/parkinsons-disease#service",
        "name": "Parkinson's Disease Management",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Delaying progression and maintaining active motor coordination through tailored Ayurvedic protocols and sensory exercises.",
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
