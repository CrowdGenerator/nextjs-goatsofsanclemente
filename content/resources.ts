export interface Resource {
  title: string;
  description: string;
  href: string;
}

export const resources: Resource[] = [
  {
    title: "CAL FIRE",
    description:
      "California Department of Forestry and Fire Protection provides state-level wildfire prevention, emergency response, and fire hazard severity zone mapping.",
    href: "https://www.fire.ca.gov/",
  },
  {
    title: "Firewise USA",
    description:
      "A national program that helps neighborhoods organize, recognize, and take action to reduce wildfire risk through community-based prevention.",
    href: "https://www.nfpa.org/education-and-research/wildfire/firewise-usa",
  },
  {
    title: "City of San Clemente",
    description:
      "Official City of San Clemente website with local government services, emergency information, and community resources.",
    href: "https://www.san-clemente.org/",
  },
  {
    title: "Orange County Fire Authority (OCFA)",
    description:
      "OCFA provides fire protection, emergency medical services, and fire prevention programs for San Clemente and surrounding communities.",
    href: "https://www.ocfa.org/",
  },
  {
    title: "Zone Zero",
    description:
      "California's Zone Zero program establishes defensible space requirements around homes and structures to reduce wildfire risk.",
    href: "https://bof.fire.ca.gov/projects-and-programs/defensible-space-zones-0-1-and-2",
  },
  {
    title: "Ready.gov Wildfires",
    description:
      "Federal emergency preparedness resource with guidance on wildfire preparedness, evacuation planning, and home emergency kits.",
    href: "https://www.ready.gov/wildfires",
  },
];
