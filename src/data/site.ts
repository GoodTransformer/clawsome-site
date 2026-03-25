import { absoluteUrl, withBase } from "./paths";
import type { NavItem, ProcessStep, TrustPrinciple } from "./types";

const placeholderEmail = "hello@replace-me.example";
const placeholderBooking = "https://cal.com/replace-me/clawsome-audit";
const placeholderLinkedIn = "https://www.linkedin.com/company/replace-me";

export const siteConfig = {
  name: "Clawsome",
  tagLine: "Agents work now. We can set them up for you and start your journey.",
  shortDescription:
    "Practical OpenClaw and Claude automations for high-value business workflows.",
  description:
    "Clawsome sets up practical AI agents for SMEs. Start with one quick-win automation, prove value quickly, train your operator, and build from proof.",
  siteUrl:
    import.meta.env.PUBLIC_SITE_URL ||
    import.meta.env.SITE_URL ||
    "https://clawsome.example",
  basePath: import.meta.env.BASE_URL || "/",
  defaultOgImage: "/images/og-clawsome.png",
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || placeholderEmail,
  bookingUrl: import.meta.env.PUBLIC_BOOKING_URL || placeholderBooking,
  linkedInUrl: import.meta.env.PUBLIC_LINKEDIN_URL || placeholderLinkedIn,
  contactLabel: "Book a quick-win audit",
  founder: "Patrick Hussey",
  credibilityNote: "Built by Patrick Hussey / Good Transformer",
  location: "United Kingdom"
};

export function isPlaceholderValue(value: string) {
  return value.includes("replace-me") || value.endsWith(".example");
}

export function getPrimaryCtaHref() {
  return isPlaceholderValue(siteConfig.bookingUrl)
    ? withBase("/contact/")
    : siteConfig.bookingUrl;
}

export function getContactEmailHref() {
  return `mailto:${siteConfig.email}`;
}

export function getAbsoluteSiteUrl(path: string) {
  return absoluteUrl(path, siteConfig.siteUrl);
}

export const primaryNavigation: NavItem[] = [
  { label: "Example Agents", href: "/example-agents/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Trust and Control", href: "/trust-and-control/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" }
];

export const footerNavigation: NavItem[] = [
  ...primaryNavigation,
  { label: "FAQ", href: "/faq/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Cookie Notice", href: "/cookie-notice/" },
  { label: "Terms", href: "/terms/" }
];

export const homeProcessSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Find the workflow",
    detail:
      "We review the drag, map the process, and choose the first workflow that is commercially worth solving."
  },
  {
    index: "02",
    title: "Build one agent",
    detail:
      "We set up a bounded automation with the right integrations, prompts, and approval points where they matter."
  },
  {
    index: "03",
    title: "Prove the value",
    detail:
      "We test it in the real workflow and tie the outcome to time saved, faster response, lower backlog, or recovered revenue."
  },
  {
    index: "04",
    title: "Train your operator",
    detail:
      "A nominated person on your team learns what the agent does, how to supervise it, and how to step in if needed."
  },
  {
    index: "05",
    title: "Expand from proof",
    detail:
      "If the first agent works, we add the next one from a position of trust, evidence, and operating confidence."
  }
];

export const detailedProcessSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Agent Opportunity Audit",
    detail:
      "Short review, light workflow mapping, quick ROI logic, and a recommendation on the strongest first use case."
  },
  {
    index: "02",
    title: "Workflow selection",
    detail:
      "We agree the workflow, the hand-offs, the systems involved, and where the build should stay deliberately bounded."
  },
  {
    index: "03",
    title: "Bounded build",
    detail:
      "Clawsome configures the agent, integrations, prompts, routing, and delivery logic for one useful automation."
  },
  {
    index: "04",
    title: "Approval rules and testing",
    detail:
      "Sensitive actions stay approval-led where needed. We test the workflow cleanly before it touches live operations."
  },
  {
    index: "05",
    title: "Operator training",
    detail:
      "A nominated client-side operator is trained on outputs, exceptions, supervision, and the practical limits of the setup."
  },
  {
    index: "06",
    title: "Handover",
    detail:
      "You leave with clear ownership, documentation, and a live process that your team can actually run."
  },
  {
    index: "07",
    title: "Optional care plan",
    detail:
      "Monitoring, prompt updates, minor refinements, and issue response are available if you want a light managed layer."
  },
  {
    index: "08",
    title: "Expansion later",
    detail:
      "Once the first agent has proven itself, the second and third builds are easier to scope, justify, and land."
  }
];

export const trustPrinciples: TrustPrinciple[] = [
  {
    title: "Isolation first",
    detail:
      "Deploy in sensible, isolated environments rather than casually on core machines or shared accounts."
  },
  {
    title: "Least privilege",
    detail:
      "Every workflow gets the minimum access needed for the job. No sprawling permissions by default."
  },
  {
    title: "Approval where it matters",
    detail:
      "Financial, legal, or sensitive actions can stay human-approved while the agent handles the repetitive groundwork."
  },
  {
    title: "Visible workflow traces",
    detail:
      "Logging and workflow visibility make it easier to supervise the result, understand what happened, and improve it."
  },
  {
    title: "Clear handover",
    detail:
      "A nominated operator on your side is trained to run, supervise, and intervene when the workflow needs human judgement."
  }
];

export const finalCta = {
  title: "Get one useful agent live first.",
  text:
    "Start with a bounded workflow that matters. Prove the payoff. Expand from there if it earns the right.",
  primaryLabel: "Book a quick-win audit",
  secondaryLabel: "Request a use-case review"
};
