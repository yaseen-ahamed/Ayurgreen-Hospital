import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/rheumatoid-arthritis";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Rheumatoid Arthritis Rehabilitation & Care | Ayurgreen Hospital",
  description: "Regulating immune response, calming active joint inflammation, and maintaining coordinate joint range of motion.",
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
    "Rheumatoid Arthritis Care",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/rheumatoid-arthritis",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/rheumatoid-arthritis",
    title: "Rheumatoid Arthritis Rehabilitation & Care | Ayurgreen Hospital",
    description: "Regulating immune response, calming active joint inflammation, and maintaining coordinate joint range of motion.",
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
    title: "Rheumatoid Arthritis Rehabilitation & Care | Ayurgreen Hospital",
    description: "Regulating immune response, calming active joint inflammation, and maintaining coordinate joint range of motion.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function RheumatoidArthritisPage() {
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
        "@id": "https://ayurgreenhospital.com/rheumatoid-arthritis#webpage",
        "url": "https://ayurgreenhospital.com/rheumatoid-arthritis",
        "name": "Rheumatoid Arthritis Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Regulating immune response, calming active joint inflammation, and maintaining coordinate joint range of motion.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Rheumatoid Arthritis Care",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/rheumatoid-arthritis#breadcrumb",
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
            "name": "Rheumatoid Arthritis",
            "item": "https://ayurgreenhospital.com/rheumatoid-arthritis",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/rheumatoid-arthritis#service",
        "name": "Rheumatoid Arthritis Care",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Regulating immune response, calming active joint inflammation, and maintaining coordinate joint range of motion.",
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
