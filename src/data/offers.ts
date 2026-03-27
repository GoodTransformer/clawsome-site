import type { Offer } from "./types";

export const offers: Offer[] = [
  {
    slug: "audit",
    name: "Agent Opportunity Audit",
    price: "£495 to £1,250",
    summary: "Find the first workflow worth fixing.",
    bullets: ["Short review", "Scope boundary", "Clear recommendation"],
    ctaLabel: "Book an audit"
  },
  {
    slug: "quick-win-sprint",
    name: "Quick-Win Agent Sprint",
    price: "£2,500 to £6,000",
    summary: "Build one agent with the right tools, approvals, and handover.",
    bullets: [
      "One bounded workflow",
      "Only the integrations you need",
      "Testing, training, handover"
    ],
    ctaLabel: "Start the sprint"
  },
  {
    slug: "care-plan",
    name: "Agent Care Plan",
    price: "£250 to £1,250 / month",
    summary: "Keep the first agent working well.",
    bullets: ["Monitoring", "Prompt and logic updates", "Small refinements"],
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
