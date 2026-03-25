import type { UseCase } from "./types";

export const useCases: UseCase[] = [
  {
    slug: "meta-ads",
    name: "Meta Ads Agent",
    shortLabel: "Meta Ads",
    headline: "Ship more tests without the copy churn.",
    summary:
      "Turns a live offer and brief into sharper variants, cleaner routing, and faster campaign setup.",
    problem: "Paid teams lose time in drafting, asset chasing, and approval loops.",
    outcome: "More variants live, with less production drag.",
    handles: [
      "Drafts new angles and ad variants",
      "Routes copy, assets, and approvals",
      "Cuts brief-to-launch time"
    ],
    human: [
      "Offer decisions",
      "Final creative approval",
      "Budget control"
    ],
    results: [
      "Faster setup",
      "More tests shipped",
      "Lower production time"
    ],
    suits:
      "Agencies, paid social teams, and founder-led brands spending on Meta.",
    metaDescription:
      "Meta Ads quick wins for SMEs: more tests shipped, less production drag, clear human approval.",
    ctaLabel: "Discuss Meta Ads"
  },
  {
    slug: "lead-response",
    name: "Lead Response Agent",
    shortLabel: "Lead Response",
    headline: "Reply faster before the lead goes cold.",
    summary:
      "Monitors enquiries, prepares the right response, and routes hotter prospects to the right human.",
    problem: "Missed follow-up quietly kills meetings, pipeline, and trust.",
    outcome: "Faster responses and fewer leads left sitting.",
    handles: [
      "Watches the agreed inbox or channel",
      "Enriches and drafts first replies",
      "Routes the right prospects fast"
    ],
    human: [
      "Pricing",
      "Sensitive sales conversations",
      "Final relationship ownership"
    ],
    results: [
      "Faster response",
      "More meetings booked",
      "Lower drop-off"
    ],
    suits:
      "Founder-led B2B firms, service businesses, and lean sales teams.",
    metaDescription:
      "Lead response automation for SMEs with faster follow-up, clearer routing, and human control where it matters.",
    ctaLabel: "Review lead response"
  },
  {
    slug: "admin-recovery",
    name: "Admin Recovery Agent",
    shortLabel: "Admin Recovery",
    headline: "Take the heat out of repetitive admin.",
    summary:
      "Chases invoices, routes requests, drafts updates, and keeps routine coordination moving.",
    problem: "Admin drag slows cash collection, clogs queues, and burns good time.",
    outcome: "Less backlog, less chasing, better cash discipline.",
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
      "Better cash collection speed"
    ],
    suits:
      "Professional services firms and admin-heavy SMEs with workflow drag.",
    metaDescription:
      "Admin recovery quick wins for SMEs, from invoice chasing to routing and triage, with clear human escalation.",
    ctaLabel: "Discuss admin recovery"
  }
];
