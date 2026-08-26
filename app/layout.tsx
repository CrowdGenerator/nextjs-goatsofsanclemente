import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ea580c',
};

export const metadata: Metadata = {
  title: {
    default: "San Clemente Wildfire Resilience Foundation | Preparedness, Prevention & Community Action",
    template: "%s | San Clemente Wildfire Resilience Foundation",
  },
  description:
    "A citizen-led San Clemente nonprofit focused on wildfire prevention, preparedness, environmental stewardship, trusted education, and community action.",
  keywords: [
    "San Clemente",
    "wildfire",
    "wildfire prevention",
    "wildfire preparedness",
    "fire resilience",
    "nonprofit",
    "community action",
    "environmental stewardship",
    "SCWRF",
  ],
  authors: [{ name: "San Clemente Wildfire Resilience Foundation" }],
  creator: "San Clemente Wildfire Resilience Foundation",
  publisher: "San Clemente Wildfire Resilience Foundation",
  metadataBase: new URL('https://goatsofsanclemente.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/scwrf-logo.png',
    apple: '/scwrf-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://goatsofsanclemente.com',
    siteName: 'San Clemente Wildfire Resilience Foundation',
    title: 'San Clemente Wildfire Resilience Foundation',
    description:
      'A citizen-led San Clemente nonprofit focused on wildfire prevention, preparedness, environmental stewardship, trusted education, and community action.',
    images: [
      {
        url: '/scwrf-logo.png',
        width: 1200,
        height: 630,
        alt: 'San Clemente Wildfire Resilience Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Clemente Wildfire Resilience Foundation',
    description:
      'A citizen-led San Clemente nonprofit focused on wildfire prevention, preparedness, environmental stewardship, trusted education, and community action.',
    images: ['/scwrf-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
