import type { Offer } from "./types";

export const offers: Offer[] = [
  {
    slug: "audit",
    name: "Agent Opportunity Audit",
    price: "£495 to £1,250",
    summary: "Find the first workflow worth fixing.",
    bullets: [
      "Short workflow review",
      "Scope boundary",
      "Quick ROI logic",
      "Clear recommendation"
    ],
    emphasis: "Best first move",
    ctaLabel: "Book an audit"
  },
  {
    slug: "quick-win-sprint",
    name: "Quick-Win Agent Sprint",
    price: "£2,500 to £6,000",
    summary: "Build one useful agent fast.",
    bullets: [
      "One bounded workflow",
      "Required integrations",
      "Approval logic where needed",
      "Testing, training, handover"
    ],
    emphasis: "Front-door offer",
    ctaLabel: "Start the sprint"
  },
  {
    slug: "care-plan",
    name: "Agent Care Plan",
    price: "£250 to £1,250 / month",
    summary: "Keep the first agent sharp.",
    bullets: [
      "Monitoring",
      "Prompt updates",
      "Minor refinements",
      "Issue response"
    ],
    emphasis: "After launch",
    ctaLabel: "Add care"
  },
  {
    slug: "expansion",
    name: "Expansion Build",
    price: "£7,500 to £25,000+",
    summary: "Add the next agent once the first one proves out.",
    bullets: [
      "Second or third workflows",
      "Cross-team logic",
      "Deeper operational design",
      "Scoped by complexity"
    ],
    emphasis: "Later stage",
    ctaLabel: "Plan expansion"
  }
];

export const managedOperationsNote = {
  title: "Managed Agent Operations",
  text: "Available later for teams running a wider estate of agents. Scoped by need."
};
