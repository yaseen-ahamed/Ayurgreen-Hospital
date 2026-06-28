import type { Metadata } from 'next';
import '@/styles/rehab-village.css';

export const metadata: Metadata = {
  title: "Rehab Village Rehabilitation & Care | Ayurgreen Hospital",
  description: "A transformative rehabilitation ecosystem where advanced healthcare, comfortable living, and community support come together to help patients regain independence and rebuild life with confidence.",
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
    canonical: "https://ayurgreenhospital.com/rehab-village.html",
    languages: {
      'x-default': "https://ayurgreenhospital.com/",
      'en': "https://ayurgreenhospital.com/en/",
      'ar': "https://ayurgreenhospital.com/ar/",
    }
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/rehab-village.html",
    title: "Rehab Village Rehabilitation & Care | Ayurgreen Hospital",
    description: "A transformative rehabilitation ecosystem where advanced healthcare, comfortable living, and community support come together to help patients regain independence and rebuild life with confidence.",
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
    title: "Rehab Village Rehabilitation & Care | Ayurgreen Hospital",
    description: "A transformative rehabilitation ecosystem where advanced healthcare, comfortable living, and community support come together to help patients regain independence and rebuild life with confidence.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"]
  }
};

export default function RehabVillageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
          "@id": "https://ayurgreenhospital.com/rehab-village.html#webpage",
          "url": "https://ayurgreenhospital.com/rehab-village.html",
          "name": "Rehab Village Rehabilitation & Care | Ayurgreen Hospital",
          "description": "A transformative rehabilitation ecosystem where advanced healthcare, comfortable living, and community support come together to help patients regain independence and rebuild life with confidence.",
          "about": {
            "@type": "MedicalSpecialty",
            "name": "Integrated Rehab Village Rehabilitation"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://ayurgreenhospital.com/rehab-village.html#breadcrumb",
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
              "name": "Rehab Village",
              "item": "https://ayurgreenhospital.com/rehab-village.html"
            }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://ayurgreenhospital.com/rehab-village.html#service",
          "name": "Rehab Village Rehabilitation Service",
          "provider": {
            "@type": "Hospital",
            "name": "Ayurgreen Hospital"
          },
          "serviceType": "Rehabilitation Service",
          "description": "A transformative rehabilitation ecosystem where advanced healthcare, comfortable living, and community support come together to help patients regain independence and rebuild life with confidence."
        }
      ]
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </>
    );
}
