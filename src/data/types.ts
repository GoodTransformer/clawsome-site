export type NavItem = {
  label: string;
  href: string;
};

export type UseCase = {
  slug: string;
  name: string;
  shortLabel: string;
  headline: string;
  summary: string;
  problem: string;
  outcome: string;
  handles: string[];
  human: string[];
  results: string[];
  suits: string;
  metaDescription: string;
  ctaLabel: string;
};

export type Offer = {
  slug: string;
  name: string;
  price: string;
  summary: string;
  bullets: string[];
  emphasis?: string;
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

export type FaqItem = {
  question: string;
  answer: string;
};

export type LegalSection = {
  heading: string;
  body: string[];
};
