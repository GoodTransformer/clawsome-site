import type { Offer } from "./types";

export const offers: Offer[] = [
  {
    slug: "audit",
    name: "Agent Opportunity Audit",
    price: "£495 to £1,250",
    summary: "We work out which workflow is worth turning into an agent first.",
    bullets: ["Short review", "Scope boundary", "Clear recommendation"],
    ctaLabel: "Book an audit"
  },
  {
    slug: "quick-win-sprint",
    name: "Quick-Win Agent Sprint",
    price: "£2,500 to £6,000",
    summary: "We set up one useful agent with the right checks, testing, and handover.",
    bullets: [
      "One bounded workflow",
      "Required integrations",
      "Testing and setup",
      "Training and handover"
    ],
    ctaLabel: "Start the sprint"
  },
  {
    slug: "care-plan",
    name: "Agent Care Plan",
    price: "£250 to £1,250 / month",
    summary: "We keep the first agent sharp after launch.",
    bullets: ["Monitoring", "Prompt updates", "Minor refinements"],
    ctaLabel: "Add care"
  },
  {
    slug: "expansion",
    name: "Expansion Build",
    price: "£7,500 to £25,000+",
    summary: "Add the next agent once the first one proves out.",
    bullets: [
      "Second or third agents",
      "Cross-team logic",
      "Scoped by complexity"
    ],
    ctaLabel: "Plan expansion"
  }
];

export const managedOperationsNote = {
  title: "Managed Agent Operations",
  text: "Available later for teams running multiple agents. Scoped by need."
};
