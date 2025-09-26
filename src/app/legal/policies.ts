export type PolicyDefinition = {
  slug: string;
  title: string;
  fileName: string;
};

export const POLICIES: PolicyDefinition[] = [
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    fileName: "terms_of_service.md",
  },
  {
    slug: "condition-eligibility",
    title: "Condition & Eligibility Guidelines",
    fileName: "condition_eligibility.md",
  },
  {
    slug: "photo-guidelines",
    title: "Photo Guidelines",
    fileName: "photo_guidlines.md",
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    fileName: "privacy_policy.md",
  },
  {
    slug: "anti-money-laundering",
    title: "Anti-Money Laundering Policy",
    fileName: "anti_money_laundering.md",
  },
];

export function findPolicy(slug: string) {
  return POLICIES.find((policy) => policy.slug === slug);
}
