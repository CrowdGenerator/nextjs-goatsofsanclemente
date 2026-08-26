import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

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
  title: "Goats of San Clemente",
  description: "Goats of San Clemente - A blog about goats on San Clemente Island",
  keywords: ["goats", "san clemente", "blog"],
  authors: [{ name: "Goats of San Clemente" }],
  creator: "Goats of San Clemente",
  publisher: "Goats of San Clemente",
  metadataBase: new URL('https://goatsofsanclemente.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://goatsofsanclemente.com',
    siteName: 'Goats of San Clemente',
    title: 'Goats of San Clemente',
    description: 'A blog about goats on San Clemente Island',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Goats of San Clemente',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goats of San Clemente',
    description: 'A blog about goats on San Clemente Island',
    images: ['/twitter-image.png'],
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
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>
        <Nav />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
