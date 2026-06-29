import type { Metadata } from "next";
import "@/styles/rehab-page.css";
import StrokeRehabClient from "@/components/stroke-rehab/StrokeRehabClient";

export const metadata: Metadata = {
  title: "Stroke Rehabilitation & Care | Ayurgreen Hospital",
  description: "A highly aggressive, time-sensitive integrated treatment pathway utilizing brain plasticity to recover lost motor, speech, and cognitive functions post-stroke.",
  keywords: [
    "Neuro Rehabilitation Kerala",
    "Stroke Rehabilitation Kerala",
    "Parkinson's Treatment Kerala",
    "Robotic Rehabilitation India",
    "Ayurveda Rehabilitation Kerala",
    "Integrated Rehabilitation Hospital India",
    "Occupational Therapy",
    "Speech Therapy",
    "Physiotherapy",
    "Rehab Village",
    "Medical Tourism Kerala"
  ],
  alternates: {
    canonical: "https://ayurgreenhospital.com/stroke-rehab.html",
    languages: {
      'x-default': "https://ayurgreenhospital.com/",
      'en': "https://ayurgreenhospital.com/en/",
      'ar': "https://ayurgreenhospital.com/ar/",
    }
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/stroke-rehab.html",
    title: "Stroke Rehabilitation & Care | Ayurgreen Hospital",
    description: "A highly aggressive, time-sensitive integrated treatment pathway utilizing brain plasticity to recover lost motor, speech, and cognitive functions post-stroke.",
    images: [
      {
        url: "https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp",
        width: 1200,
        height: 630,
        alt: "Ayurgreen Hospital Front View",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stroke Rehabilitation & Care | Ayurgreen Hospital",
    description: "A highly aggressive, time-sensitive integrated treatment pathway utilizing brain plasticity to recover lost motor, speech, and cognitive functions post-stroke.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"]
  }
};

export default function StrokeRehabPage() {
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
          "telephone": "+91-8080-808080",
          "contactType": "customer service",
          "email": "info@ayurgreen.com",
          "availableLanguage": [
            "en",
            "ar"
          ]
        }
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://ayurgreenhospital.com/stroke-rehab.html#webpage",
        "url": "https://ayurgreenhospital.com/stroke-rehab.html",
        "name": "Stroke Rehabilitation & Care | Ayurgreen Hospital",
        "description": "A highly aggressive, time-sensitive integrated treatment pathway utilizing brain plasticity to recover lost motor, speech, and cognitive functions post-stroke.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Integrated Stroke Rehabilitation"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ayurgreenhospital.com/stroke-rehab.html#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ayurgreenhospital.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Stroke",
            "item": "https://ayurgreenhospital.com/stroke-rehab.html"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://ayurgreenhospital.com/stroke-rehab.html#service",
        "name": "Stroke Rehabilitation Service",
        "provider": {
          "@type": "Hospital",
          "name": "Ayurgreen Hospital"
        },
        "serviceType": "Rehabilitation Service",
        "description": "A highly aggressive, time-sensitive integrated treatment pathway utilizing brain plasticity to recover lost motor, speech, and cognitive functions post-stroke."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StrokeRehabClient />
    </>
  );
}
