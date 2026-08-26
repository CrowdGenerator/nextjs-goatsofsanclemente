export interface HeroContent {
  eyebrow: string;
  title: string;
  intro: string;
  vision: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}

export const heroContent: HeroContent = {
  eyebrow: "SAN CLEMENTE",
  title: "Wildfire Resilience Foundation",
  intro:
    "A citizen-led nonprofit for wildfire prevention, preparedness, stewardship and community action",
  vision:
    "A wildfire-resilient San Clemente where informed residents, healthy native landscapes, strong partnerships, and shared preparation protect people, neighborhoods, and nature for future generations.",
  primaryCta: {
    text: "Learn About Wildfire Resilience",
    href: "/wildfire-resilience",
  },
  secondaryCta: { text: "Get Involved", href: "/get-involved" },
};
