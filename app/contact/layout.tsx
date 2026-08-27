import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | San Clemente Wildfire Resilience Foundation",
  description:
    "Contact the San Clemente Wildfire Resilience Foundation. Reach out with questions about wildfire resilience, volunteering, or partnerships.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | San Clemente Wildfire Resilience Foundation",
    description:
      "Contact the San Clemente Wildfire Resilience Foundation. Reach out with questions about wildfire resilience, volunteering, or partnerships.",
    url: "https://goatsofsanclemente.com/contact",
    type: "website",
    images: [{ url: "/scwrf-logo.png", alt: "San Clemente Wildfire Resilience Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | San Clemente Wildfire Resilience Foundation",
    description:
      "Contact the San Clemente Wildfire Resilience Foundation. Reach out with questions about wildfire resilience, volunteering, or partnerships.",
    images: ["/scwrf-logo.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
