import type { UseCase } from "./types";

export const useCases: UseCase[] = [
  {
    slug: "lead-response",
    name: "Lead Response Agent",
    shortLabel: "Lead Response",
    headline: "Reply before the lead goes cold.",
    summary:
      "Monitors enquiries, drafts the first reply, and routes the prospect to the right person.",
    problem: "Slow follow-up quietly kills meetings and pipeline.",
    outcome: "Faster follow-up. More meetings. Less drop-off.",
    handles: [
      "Watches the agreed inbox or form",
      "Drafts the first reply",
      "Routes the right prospects fast"
    ],
    human: ["Pricing", "Sensitive sales calls", "Final relationship ownership"],
    results: ["Faster response", "More meetings booked", "Lower drop-off"],
    suits:
      "Best for service firms, founder-led sales teams, and lean B2B operations.",
    metaDescription:
      "Lead response automation for SMEs with faster follow-up, clearer routing, and human control where it matters.",
    ctaLabel: "Discuss lead response"
  },
  {
    slug: "marketing-ops",
    name: "Marketing Ops Agent",
    shortLabel: "Marketing Ops",
    headline: "Get campaigns moving faster.",
    summary:
      "Turns a live offer into draft ads, routes approvals, and gets campaigns moving faster.",
    problem: "Briefs, asset chasing, and approvals slow launch.",
    outcome: "Faster setup. More tests. Less production drag.",
    handles: [
      "Drafts ad angles and variants",
      "Routes copy, assets, and sign-off",
      "Keeps launch work moving"
    ],
    human: ["Offer decisions", "Final creative sign-off", "Budget control"],
    results: [
      "Faster setup",
      "More tests shipped",
      "Lower production time"
    ],
    suits:
      "Best for agencies, paid teams, and brands spending consistently on campaigns.",
    metaDescription:
      "Marketing ops quick wins for SMEs: more tests shipped, less production drag, clear human approval.",
    ctaLabel: "Discuss marketing ops"
  },
  {
    slug: "admin-recovery",
    name: "Admin Recovery Agent",
    shortLabel: "Admin Recovery",
    headline: "Take hours of admin off the team.",
    summary:
      "Chases invoices, routes requests, and drafts routine updates so busywork stops eating time.",
    problem: "Admin drag slows cash collection and clogs the queue.",
    outcome: "Hours saved. Lower backlog. Faster cash collection.",
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
