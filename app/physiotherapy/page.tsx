import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/physiotherapy";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Physiotherapy | Ayurgreen Hospital",
  description: "Evidence-based structural correction, targeted muscle loading, and functional balance restoration to regain active physical autonomy.",
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
    "Physiotherapy",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/physiotherapy",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/physiotherapy",
    title: "Physiotherapy | Ayurgreen Hospital",
    description: "Evidence-based structural correction, targeted muscle loading, and functional balance restoration to regain active physical autonomy.",
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
    title: "Physiotherapy | Ayurgreen Hospital",
    description: "Evidence-based structural correction, targeted muscle loading, and functional balance restoration to regain active physical autonomy.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function PhysiotherapyPage() {
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
        "@id": "https://ayurgreenhospital.com/physiotherapy#webpage",
        "url": "https://ayurgreenhospital.com/physiotherapy",
        "name": "Physiotherapy | Ayurgreen Hospital",
        "description": "Evidence-based structural correction, targeted muscle loading, and functional balance restoration to regain active physical autonomy.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Physiotherapy",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/physiotherapy#breadcrumb",
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
            "name": "Physiotherapy",
            "item": "https://ayurgreenhospital.com/physiotherapy",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/physiotherapy#service",
        "name": "Physiotherapy",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Evidence-based structural correction, targeted muscle loading, and functional balance restoration to regain active physical autonomy.",
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
