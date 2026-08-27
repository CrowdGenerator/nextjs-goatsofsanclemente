export interface PageMetadata {
  title: string;
  description: string;
}

export interface SiteMetadata {
  siteName: string;
  pages: Record<string, PageMetadata>;
}

export const siteMetadata: SiteMetadata = {
  siteName: "San Clemente Wildfire Resilience Foundation",
  pages: {
    home: {
      title:
        "San Clemente Wildfire Resilience Foundation | Preparedness, Prevention & Community Action",
      description:
        "A citizen-led San Clemente nonprofit focused on wildfire prevention, preparedness, environmental stewardship, trusted education, and community action.",
    },
    about: {
      title: "About Us | San Clemente Wildfire Resilience Foundation",
      description:
        "Learn about the San Clemente Wildfire Resilience Foundation's vision, mission, core values, and role as a community connector for wildfire preparedness.",
    },
    "wildfire-resilience": {
      title: "Wildfire Resilience | San Clemente Wildfire Resilience Foundation",
      description:
        "Understanding wildfire resilience in San Clemente — local hazard context, practical steps for home hardening, defensible space, and community preparedness.",
    },
    programs: {
      title: "Programs | San Clemente Wildfire Resilience Foundation",
      description:
        "Explore future community education, environmental stewardship, and youth learning programs being developed by the San Clemente Wildfire Resilience Foundation.",
    },
    partners: {
      title: "Partners | San Clemente Wildfire Resilience Foundation",
      description:
        "Learn how the San Clemente Wildfire Resilience Foundation works with the City, OCFA, HOAs, schools, and community organizations.",
    },
    "get-involved": {
      title: "Get Involved | San Clemente Wildfire Resilience Foundation",
      description:
        "Volunteer, partner, or connect with the San Clemente Wildfire Resilience Foundation. Help build a wildfire-resilient community.",
    },
    resources: {
      title: "Resources | San Clemente Wildfire Resilience Foundation",
      description:
        "Trusted wildfire resilience resources for San Clemente residents — Firewise USA, CAL FIRE, OCFA, defensible space guides, and home hardening information.",
    },
    contact: {
      title: "Contact Us | San Clemente Wildfire Resilience Foundation",
      description:
        "Contact the San Clemente Wildfire Resilience Foundation. Reach out with questions about wildfire resilience, volunteering, or partnerships.",
    },
    donate: {
      title: "Donate | San Clemente Wildfire Resilience Foundation",
      description:
        "Support the San Clemente Wildfire Resilience Foundation. Donation platform coming soon.",
    },
  },
};
