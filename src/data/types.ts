export type NavItem = {
  label: string;
  href: string;
};

export type UseCase = {
  slug: string;
  name: string;
  shortLabel: string;
  summary: string;
  metaDescription: string;
  pain: string;
  whatItDoes: string[];
  whyItSells: string;
  outcomes: string[];
  proofAngles: string[];
  whatStaysHuman: string[];
  whoItSuits: string[];
  workflow: {
    title: string;
    detail: string;
  }[];
  trustNotes: string[];
  ctaLabel: string;
};

export type Offer = {
  slug: string;
  name: string;
  purpose: string;
  scope: string;
  includes: string[];
  suits: string;
  pricing: string;
  role: string;
  ctaLabel: string;
};

export type ProcessStep = {
  index: string;
  title: string;
  detail: string;
};

export type TrustPrinciple = {
  title: string;
  detail: string;
};

export type ProofAsset = {
  title: string;
  type: string;
  description: string;
  status: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LegalSection = {
  heading: string;
  body: string[];
};
