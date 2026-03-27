import type { UseCase } from "./types";

export const useCases: UseCase[] = [
  {
    slug: "meta-ads",
    name: "Meta Ads Agent",
    shortLabel: "Meta Ads",
    headline: "Launch more tests without the copy drag.",
    summary:
      "Turns one offer into variants, routing, and faster campaign setup.",
    problem: "Briefs, asset chasing, and approvals slow launch.",
    outcome: "More variants go live with less production time.",
    handles: [
      "Drafts fresh angles and variants",
      "Routes copy, assets, and sign-off",
      "Keeps brief-to-launch moving"
    ],
    human: ["Offer decisions", "Final creative sign-off", "Budget control"],
    results: [
      "Faster setup",
      "More tests shipped",
      "Lower production time"
    ],
    suits:
      "Best for agencies, paid teams, and brands spending consistently on Meta.",
    metaDescription:
      "Meta Ads quick wins for SMEs: more tests shipped, less production drag, clear human approval.",
    ctaLabel: "Discuss Meta Ads"
  },
  {
    slug: "lead-response",
    name: "Lead Response Agent",
    shortLabel: "Lead Response",
    headline: "Reply before the lead goes cold.",
    summary:
      "Watches enquiries, drafts replies, and routes hot prospects fast.",
    problem: "Slow follow-up quietly kills meetings and pipeline.",
    outcome: "Faster replies and fewer leads left waiting.",
    handles: [
      "Watches the agreed inbox or form",
      "Enriches and drafts first replies",
      "Routes hot prospects fast"
    ],
    human: ["Pricing", "Sensitive sales calls", "Final relationship ownership"],
    results: ["Faster response", "More meetings booked", "Lower drop-off"],
    suits:
      "Best for service firms, founder-led sales teams, and lean B2B operations.",
    metaDescription:
      "Lead response automation for SMEs with faster follow-up, clearer routing, and human control where it matters.",
    ctaLabel: "Review lead response"
  },
  {
    slug: "admin-recovery",
    name: "Admin Recovery Agent",
    shortLabel: "Admin Recovery",
    headline: "Take the drag out of repetitive admin.",
    summary:
      "Chases invoices, routes requests, and keeps routine work moving.",
    problem: "Admin drag slows cash collection and clogs the queue.",
    outcome: "Less backlog and steadier cash discipline.",
    handles: [
      "Invoice chasing and admin reminders",
      "Request and document routing",
      "Routine updates and triage"
    ],
    human: [
      "Disputed cases",
      "Sensitive documents",
      "Final escalation"
    ],
    results: [
      "Hours saved",
      "Lower backlog",
      "Better cash collection"
    ],
    suits:
      "Best for professional services firms and admin-heavy SMEs.",
    metaDescription:
      "Admin recovery quick wins for SMEs, from invoice chasing to routing and triage, with clear human escalation.",
    ctaLabel: "Discuss admin recovery"
  }
];
