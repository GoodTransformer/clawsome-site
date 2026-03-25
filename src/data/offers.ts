import type { Offer } from "./types";

export const offers: Offer[] = [
  {
    slug: "audit",
    name: "Agent Opportunity Audit",
    purpose: "Identify the best first workflow.",
    scope:
      "A short review of the current process, light mapping, quick ROI logic, and a recommendation on the strongest first agent.",
    includes: [
      "Workflow review",
      "Commercial prioritisation",
      "Initial scope boundary",
      "Recommendation and next-step outline"
    ],
    suits:
      "Teams that know there is drag but want a commercially sensible first move rather than a generic AI workshop.",
    pricing: "£495 to £1,250",
    role: "Low-friction qualifier and buying aid.",
    ctaLabel: "Start with an audit"
  },
  {
    slug: "quick-win-sprint",
    name: "Quick-Win Agent Sprint",
    purpose: "Build one useful automation fast.",
    scope:
      "One bounded workflow, the required integrations, approval steps where needed, testing, operator training, and handover.",
    includes: [
      "Single workflow build",
      "Core integrations",
      "Approval logic where needed",
      "Testing, training, and handover"
    ],
    suits:
      "SMEs that want one useful agent live quickly with clear ownership and a controlled delivery path.",
    pricing: "£2,500 to £6,000",
    role: "Primary front-door offer.",
    ctaLabel: "Book a quick-win sprint"
  },
  {
    slug: "care-plan",
    name: "Agent Care Plan",
    purpose: "Keep the first agent healthy and improving.",
    scope:
      "Monitoring, prompt updates, minor refinements, issue response, and practical governance basics after launch.",
    includes: [
      "Monitoring and issue response",
      "Prompt and workflow refinements",
      "Minor changes",
      "Governance basics"
    ],
    suits:
      "Teams that want a light recurring layer after deployment without moving straight into a bigger retained model.",
    pricing: "£250 to £1,250 per month",
    role: "Light recurring layer after deployment.",
    ctaLabel: "Add a care plan"
  },
  {
    slug: "expansion-build",
    name: "Expansion Build",
    purpose: "Add second or third agents or deeper operational workflows.",
    scope:
      "Cross-team automations, multi-step systems, or wider operational design once the first quick win has proven itself.",
    includes: [
      "Multi-step workflow design",
      "Additional tools and routes",
      "Cross-team operating logic",
      "Commercial scoping by complexity"
    ],
    suits:
      "Clients who already have proof and want to widen the system rather than staying with a single bounded workflow.",
    pricing: "£7,500 to £25,000+",
    role: "Upsell after proof.",
    ctaLabel: "Plan the next build"
  },
  {
    slug: "managed-operations",
    name: "Managed Agent Operations",
    purpose: "Operate a wider estate of automations.",
    scope:
      "Governance, monitoring, optimisation, cost control, change handling, and practical operational stewardship.",
    includes: [
      "Governance and monitoring",
      "Performance and cost oversight",
      "Change handling",
      "Ongoing optimisation"
    ],
    suits:
      "Businesses that have grown beyond one or two agents and want a steadier managed operating layer.",
    pricing: "Discussed and scoped",
    role: "Later-stage retained relationship.",
    ctaLabel: "Discuss managed operations"
  }
];
