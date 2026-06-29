import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/post-surgical-complications";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Post-Surgical Complications Rehabilitation & Care | Ayurgreen Hospital",
  description: "Correcting joint stiffness, relieving nerve impingements, and speeding tissue healing after orthopedic or neurosurgery.",
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
    "Post-Surgical Complication Rehabilitation",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/post-surgical-complications",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/post-surgical-complications",
    title: "Post-Surgical Complications Rehabilitation & Care | Ayurgreen Hospital",
    description: "Correcting joint stiffness, relieving nerve impingements, and speeding tissue healing after orthopedic or neurosurgery.",
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
    title: "Post-Surgical Complications Rehabilitation & Care | Ayurgreen Hospital",
    description: "Correcting joint stiffness, relieving nerve impingements, and speeding tissue healing after orthopedic or neurosurgery.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function PostSurgicalComplicationsPage() {
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
        "@id": "https://ayurgreenhospital.com/post-surgical-complications#webpage",
        "url": "https://ayurgreenhospital.com/post-surgical-complications",
        "name": "Post-Surgical Complications Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Correcting joint stiffness, relieving nerve impingements, and speeding tissue healing after orthopedic or neurosurgery.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Post-Surgical Complication Rehabilitation",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/post-surgical-complications#breadcrumb",
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
            "name": "Post-Surgical Complications",
            "item": "https://ayurgreenhospital.com/post-surgical-complications",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/post-surgical-complications#service",
        "name": "Post-Surgical Complication Rehabilitation",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Correcting joint stiffness, relieving nerve impingements, and speeding tissue healing after orthopedic or neurosurgery.",
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
