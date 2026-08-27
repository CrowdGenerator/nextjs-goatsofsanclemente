import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | San Clemente Wildfire Resilience Foundation",
  description:
    "Volunteer, partner, or connect with the San Clemente Wildfire Resilience Foundation. Help build a wildfire-resilient community.",
  alternates: { canonical: "/get-involved" },
  openGraph: {
    title: "Get Involved | San Clemente Wildfire Resilience Foundation",
    description:
      "Volunteer, partner, or connect with the San Clemente Wildfire Resilience Foundation. Help build a wildfire-resilient community.",
    url: "https://goatsofsanclemente.com/get-involved",
    type: "website",
    images: [{ url: "/scwrf-logo.png", alt: "San Clemente Wildfire Resilience Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Involved | San Clemente Wildfire Resilience Foundation",
    description:
      "Volunteer, partner, or connect with the San Clemente Wildfire Resilience Foundation. Help build a wildfire-resilient community.",
    images: ["/scwrf-logo.png"],
  },
};

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
