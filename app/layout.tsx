import type { Metadata } from 'next';
import Script from 'next/script';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: "Ayurgreen Hospital | Integrated Ortho-Neuro Rehabilitation & Ayurveda Hospital in Kerala",
  description: "Ayurgreen Hospital is India's leading integrated ortho-neuro rehabilitation center combining robotics, physiotherapy, Ayurveda, speech therapy, occupational therapy, and holistic care for stroke, Parkinson's, spinal cord injury, and neurological recovery.",
  keywords: ["Neuro Rehabilitation Kerala", "Stroke Rehabilitation Kerala", "Parkinson's Treatment Kerala", "Robotic Rehabilitation India", "Ayurveda Rehabilitation Kerala", "Integrated Rehabilitation Hospital India", "Occupational Therapy", "Speech Therapy", "Physiotherapy", "Rehab Village", "Medical Tourism Kerala"],
  alternates: {
    canonical: "https://ayurgreenhospital.com/",
    languages: {
      'x-default': "https://ayurgreenhospital.com/",
      'en': "https://ayurgreenhospital.com/en/",
      'ar': "https://ayurgreenhospital.com/ar/",
    }
  },
  openGraph: {
    type: "website",
    url: "https://ayurgreenhospital.com/",
    title: "Ayurgreen Hospital | Integrated Ortho-Neuro Rehabilitation & Ayurveda Hospital in Kerala",
    description: "Ayurgreen Hospital is India's leading integrated ortho-neuro rehabilitation center combining robotics, physiotherapy, Ayurveda, speech therapy, occupational therapy, and holistic care for stroke, Parkinson's, spinal cord injury, and neurological recovery.",
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
    title: "Ayurgreen Hospital | Integrated Ortho-Neuro Rehabilitation & Ayurveda Hospital in Kerala",
    description: "Ayurgreen Hospital is India's leading integrated ortho-neuro rehabilitation center combining robotics, physiotherapy, Ayurveda, speech therapy, occupational therapy, and holistic care for stroke, Parkinson's, spinal cord injury, and neurological recovery.",
    images: ["https://ayurgreenhospital.com/Assets/ayurgreen-hospital.webp"]
  }
};

import Header from '@/components/layout/Header';
import MegaMenu from '@/components/layout/MegaMenu';
import Footer from '@/components/layout/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap"
            rel="stylesheet" />
        
        <Script src="https://unpkg.com/lucide@latest" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <MegaMenu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
