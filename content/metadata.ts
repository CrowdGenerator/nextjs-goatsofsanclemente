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
      title: "About | San Clemente Wildfire Resilience Foundation",
      description:
        "Learn about the San Clemente Wildfire Resilience Foundation's vision, purpose, mission, core values, and organizational role as a community connector and advocate.",
    },
    "wildfire-resilience": {
      title: "Wildfire Resilience | San Clemente Wildfire Resilience Foundation",
      description:
        "Understand wildfire resilience in San Clemente: local hazard context, practical steps for home hardening, defensible space, Firewise USA, and community preparation.",
    },
    programs: {
      title: "Programs | San Clemente Wildfire Resilience Foundation",
      description:
        "Explore future programs the Foundation hopes to build: community education and preparedness, environmental stewardship, and youth and career learning.",
    },
    partners: {
      title: "Partners | San Clemente Wildfire Resilience Foundation",
      description:
        "See how the Foundation works with the City of San Clemente, OCFA, HOAs, schools, businesses, and nonprofits to build shared wildfire resilience.",
    },
    "get-involved": {
      title: "Get Involved | San Clemente Wildfire Resilience Foundation",
      description:
        "Join the San Clemente Wildfire Resilience Foundation as a volunteer or community partner. Help build a wildfire-resilient San Clemente.",
    },
    resources: {
      title: "Resources | San Clemente Wildfire Resilience Foundation",
      description:
        "Trusted wildfire resilience resources for San Clemente residents, including CAL FIRE, Firewise USA, OCFA, Zone Zero, and local preparedness guidance.",
    },
    contact: {
      title: "Contact | San Clemente Wildfire Resilience Foundation",
      description:
        "Contact the San Clemente Wildfire Resilience Foundation with questions about wildfire preparedness, volunteering, or community partnerships.",
    },
    donate: {
      title: "Donate | San Clemente Wildfire Resilience Foundation",
      description:
        "Support the San Clemente Wildfire Resilience Foundation's mission to protect people, neighborhoods, and nature through wildfire prevention and community action.",
    },
  },
};
