import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/disc-spine-problems";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Disc & Spine Problems Rehabilitation & Care | Ayurgreen Hospital",
  description: "Non-surgical spinal decompression, specialized manual therapies, and herbal oil wraps to restore structural spine alignment.",
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
    "Disc & Spine Problems Treatment",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/disc-spine-problems",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/disc-spine-problems",
    title: "Disc & Spine Problems Rehabilitation & Care | Ayurgreen Hospital",
    description: "Non-surgical spinal decompression, specialized manual therapies, and herbal oil wraps to restore structural spine alignment.",
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
    title: "Disc & Spine Problems Rehabilitation & Care | Ayurgreen Hospital",
    description: "Non-surgical spinal decompression, specialized manual therapies, and herbal oil wraps to restore structural spine alignment.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function DiscSpineProblemsPage() {
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
        "@id": "https://ayurgreenhospital.com/disc-spine-problems#webpage",
        "url": "https://ayurgreenhospital.com/disc-spine-problems",
        "name": "Disc & Spine Problems Rehabilitation & Care | Ayurgreen Hospital",
        "description": "Non-surgical spinal decompression, specialized manual therapies, and herbal oil wraps to restore structural spine alignment.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Disc & Spine Problem Treatment",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/disc-spine-problems#breadcrumb",
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
            "name": "Disc & Spine Problems",
            "item": "https://ayurgreenhospital.com/disc-spine-problems",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/disc-spine-problems#service",
        "name": "Disc & Spine Problems Treatment",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Non-surgical spinal decompression, specialized manual therapies, and herbal oil wraps to restore structural spine alignment.",
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
