import type { UseCase } from "./types";

export const useCases: UseCase[] = [
  {
    slug: "meta-ads-agent",
    name: "Meta Ads Agent",
    shortLabel: "Meta Ads",
    summary:
      "Turn a live offer and a clear brief into sharper ad variants, cleaner routing, and faster campaign setup.",
    metaDescription:
      "A practical Meta Ads Agent that helps SMEs move from brief to test faster with better campaign workflow discipline.",
    pain:
      "Campaign setup is often slowed down by repetitive copy drafting, asset chasing, hand-offs, and inconsistent follow-up between strategy and execution.",
    whatItDoes: [
      "Turns an offer and brief into multiple ad angles and copy variants",
      "Routes assets, copy, and approval notes into the campaign workflow",
      "Accelerates test setup so teams can launch faster and learn sooner"
    ],
    whyItSells:
      "It links directly to growth, is easy to visualise, and is simple to connect to time saved and more tests shipped.",
    outcomes: [
      "Faster campaign setup",
      "More variants tested",
      "Lower production time per campaign"
    ],
    proofAngles: [
      "Brief-to-launch time",
      "Variant volume per campaign",
      "Manual production hours removed"
    ],
    whatStaysHuman: [
      "Offer direction and budget decisions",
      "Final approval on live creative",
      "Strategic call on scaling or pausing campaigns"
    ],
    whoItSuits: [
      "Agencies running paid social for clients",
      "Founder-led SMEs with active acquisition spend",
      "Marketing teams losing time in production drag"
    ],
    workflow: [
      {
        title: "Receive the brief",
        detail:
          "The workflow takes in offer context, audience notes, constraints, and asset availability."
      },
      {
        title: "Generate and route",
        detail:
          "The agent drafts variants, structures approvals, and routes copy and assets into the next campaign step."
      },
      {
        title: "Prepare for launch",
        detail:
          "The team reviews, approves, and moves faster into live testing with fewer manual loops."
      }
    ],
    trustNotes: [
      "Approval can stay in place before anything goes live",
      "Access can be limited to the exact campaign tools involved",
      "The workflow is bounded around campaign preparation, not unsupervised spend control"
    ],
    ctaLabel: "Discuss this use case"
  },
  {
    slug: "lead-response-agent",
    name: "Lead Response Agent",
    shortLabel: "Lead Response",
    summary:
      "Protect follow-up discipline, enrich inbound leads, and move the right prospects to the right human faster.",
    metaDescription:
      "A Lead Response Agent that helps SMEs reply faster, protect follow-up, and book more meetings from inbound demand.",
    pain:
      "Leads go cold when inboxes are busy, qualification is inconsistent, and follow-up slips between sales, admin, and delivery teams.",
    whatItDoes: [
      "Monitors enquiries across the agreed channels",
      "Enriches leads and drafts or sends first responses",
      "Routes hotter prospects to the right human while keeping follow-up on track"
    ],
    whyItSells:
      "Missed follow-up is intuitive, expensive, and easy for a buyer to grasp without needing a technical explanation.",
    outcomes: [
      "Faster response times",
      "More meetings booked",
      "Lower drop-off from inbound interest"
    ],
    proofAngles: [
      "First-response speed",
      "Qualified meeting volume",
      "Lead leakage reduced"
    ],
    whatStaysHuman: [
      "Commercial judgement on higher-value opportunities",
      "Sensitive pricing or contract conversations",
      "Final ownership of the relationship"
    ],
    whoItSuits: [
      "Founder-led B2B firms with lean sales capacity",
      "Service businesses handling enquiries across multiple channels",
      "Teams losing leads through slow or inconsistent response"
    ],
    workflow: [
      {
        title: "Capture the enquiry",
        detail:
          "Forms, inboxes, or messages are watched so inbound interest does not sit untouched."
      },
      {
        title: "Qualify and respond",
        detail:
          "The agent enriches the lead, drafts the right response, and applies agreed routing rules."
      },
      {
        title: "Escalate the right leads",
        detail:
          "Hot prospects are surfaced to the right person with the relevant context already prepared."
      }
    ],
    trustNotes: [
      "Human review can stay in the loop for sending if that is the safer fit",
      "The workflow is bounded by clear routing and response rules",
      "Logs make follow-up visible rather than mysterious"
    ],
    ctaLabel: "Review lead response drag"
  },
  {
    slug: "admin-recovery-agent",
    name: "Admin Recovery Agent",
    shortLabel: "Admin Recovery",
    summary:
      "Remove repetitive admin loops around invoice chasing, updates, triage, and routine coordination.",
    metaDescription:
      "An Admin Recovery Agent that helps SMEs reduce workflow drag, speed admin response, and recover cash collection discipline.",
    pain:
      "Admin-heavy teams lose time to chasing, document triage, routing, and status updates that are repetitive but still critical to the business.",
    whatItDoes: [
      "Chases overdue invoices or unresolved admin tasks",
      "Routes inbound documents and requests into the right next step",
      "Drafts updates so routine coordination does not consume the team"
    ],
    whyItSells:
      "Cash flow and operational drag matter to almost every SME, so the value is broad, immediate, and easy to discuss in plain business terms.",
    outcomes: [
      "Admin hours saved",
      "Lower backlog",
      "Better cash collection speed"
    ],
    proofAngles: [
      "Hours removed from repetitive admin",
      "Days sales outstanding improved",
      "Backlog or queue reduction"
    ],
    whatStaysHuman: [
      "Escalation on disputed or exceptional cases",
      "Final decisions on sensitive documents",
      "Oversight of cash and customer relationships"
    ],
    whoItSuits: [
      "Professional services firms with high billable admin drag",
      "Operationally stretched SMEs managing queues and requests",
      "Businesses losing time to chasing, routing, and document handling"
    ],
    workflow: [
      {
        title: "Spot the queue",
        detail:
          "The agent monitors the agreed inbox, task list, or payment state and recognises what needs a next action."
      },
      {
        title: "Prepare the next move",
        detail:
          "It drafts the update, sends the reminder, or routes the item with the right context attached."
      },
      {
        title: "Escalate exceptions",
        detail:
          "Anything sensitive, disputed, or outside the rules is surfaced to a human instead of being pushed through carelessly."
      }
    ],
    trustNotes: [
      "Sensitive or financial actions can remain approval-led",
      "The workflow is bounded around repetitive admin, not broad autonomy",
      "A nominated operator stays in control of exceptions and escalation"
    ],
    ctaLabel: "Discuss admin recovery"
  }
];

export function getUseCaseBySlug(slug: string) {
  return useCases.find((item) => item.slug === slug);
}
