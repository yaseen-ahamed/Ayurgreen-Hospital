import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import { pageData } from "@/data/rehab/yoga-meditation";
import RehabPageClient from "@/components/pages/rehab/RehabPageClient";

export const metadata: Metadata = {
  title: "Yoga and Meditation | Ayurgreen Hospital",
  description: "Mind-body alignment, flexibility training, and conscious breathing to regulate stress hormones and support physical recovery.",
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
    "Yoga and Meditation",
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/yoga-meditation",
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/yoga-meditation",
    title: "Yoga and Meditation | Ayurgreen Hospital",
    description: "Mind-body alignment, flexibility training, and conscious breathing to regulate stress hormones and support physical recovery.",
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
    title: "Yoga and Meditation | Ayurgreen Hospital",
    description: "Mind-body alignment, flexibility training, and conscious breathing to regulate stress hormones and support physical recovery.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"],
  },
};

export default function YogaMeditationPage() {
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
        "@id": "https://ayurgreenhospital.com/yoga-meditation#webpage",
        "url": "https://ayurgreenhospital.com/yoga-meditation",
        "name": "Yoga and Meditation | Ayurgreen Hospital",
        "description": "Mind-body alignment, flexibility training, and conscious breathing to regulate stress hormones and support physical recovery.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Yoga and Meditation",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/yoga-meditation#breadcrumb",
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
            "name": "Yoga and Meditation",
            "item": "https://ayurgreenhospital.com/yoga-meditation",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/yoga-meditation#service",
        "name": "Yoga and Meditation",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital",
        },
        "serviceType": "Rehabilitation Service",
        "description": "Mind-body alignment, flexibility training, and conscious breathing to regulate stress hormones and support physical recovery.",
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
