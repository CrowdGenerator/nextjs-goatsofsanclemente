export interface CoreValue {
  title: string;
  description: string;
}

export interface CoreValuesContent {
  values: CoreValue[];
  ourFocus: string;
}

export const coreValuesContent: CoreValuesContent = {
  values: [
    {
      title: "Community First",
      description:
        "We are nonpartisan and serve all of San Clemente. We give residents safe and useful ways to volunteer and help their community.",
    },
    {
      title: "Facts and Trusted Guidance",
      description:
        "We use and share state law, agency guidance, and reliable facts. This helps people understand their choices and make informed decisions.",
    },
    {
      title: "Care for Nature",
      description:
        "We speak up for wildfire prevention that also protects native plants and habitat. We promote good care of open space. We do not clear land or plant landscaping.",
    },
    {
      title: "Clear Roles",
      description:
        "We work with the City, OCFA, HOAs, schools, and other partners. We respect each group's role and do not replace public agencies or contractors.",
    },
    {
      title: "Safe and Useful Volunteer Service",
      description:
        "Every volunteer role will have a clear purpose, safe steps, and responsible leaders. We use time, money, and other resources with care.",
    },
    {
      title: "Start Small and Grow With Care",
      description:
        "We start with work we can do well. We learn as we go and grow only when we have the people, partners, and funds to do it right.",
    },
  ],
  ourFocus:
    "We focus on San Clemente. We connect residents and partners, support safe volunteer work, and directly promote wildfire prevention, preparedness, education, and care for the environment.",
};
