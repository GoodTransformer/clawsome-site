import { absoluteUrl, withBase } from "./paths";
import type { NavItem, ProcessStep, TrustPrinciple } from "./types";

const placeholderEmail = "hello@replace-me.example";
const placeholderBooking = "https://cal.com/replace-me/clawsome-audit";
const placeholderLinkedIn = "https://www.linkedin.com/company/replace-me";

export const siteConfig = {
  name: "Clawsome",
  tagLine: "Agents work now. We can set them up for you and start your journey.",
  shortDescription: "Practical OpenClaw and Claude builds for high-value SME workflows.",
  description:
    "Clawsome sets up practical AI agents for SMEs. Start with one useful workflow, prove the value fast, train your operator, and expand from proof.",
  siteUrl:
    import.meta.env.PUBLIC_SITE_URL ||
    import.meta.env.SITE_URL ||
    "https://clawsome.example",
  basePath: import.meta.env.BASE_URL || "/",
  defaultOgImage: "/images/og-clawsome.png",
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || placeholderEmail,
  bookingUrl: import.meta.env.PUBLIC_BOOKING_URL || placeholderBooking,
  linkedInUrl: import.meta.env.PUBLIC_LINKEDIN_URL || placeholderLinkedIn,
  contactLabel: "Book an audit",
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
  { label: "Use Cases", href: "/use-cases/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Contact", href: "/contact/" }
];

export const footerNavigation: NavItem[] = [
  { label: "Use Cases", href: "/use-cases/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Contact", href: "/contact/" }
];

export const legalNavigation: NavItem[] = [
  { label: "Privacy", href: "/privacy-policy/" },
  { label: "Cookies", href: "/cookie-notice/" },
  { label: "Terms", href: "/terms/" }
];

export const homeProcessSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Find the workflow",
    detail: "Pick the first pain worth fixing."
  },
  {
    index: "02",
    title: "Build the agent",
    detail: "One bounded workflow. The right integrations."
  },
  {
    index: "03",
    title: "Train your operator",
    detail: "Clear ownership after handover."
  },
  {
    index: "04",
    title: "Expand from proof",
    detail: "Add more only when the first one earns it."
  }
];

export const detailedProcessSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Audit",
    detail: "Short review. Clear first target."
  },
  {
    index: "02",
    title: "Scope",
    detail: "Bound the workflow before anything is built."
  },
  {
    index: "03",
    title: "Build",
    detail: "Set up the agent, tools, routing, and approvals."
  },
  {
    index: "04",
    title: "Test",
    detail: "Run live examples before handover."
  },
  {
    index: "05",
    title: "Train",
    detail: "A nominated operator learns the job."
  },
  {
    index: "06",
    title: "Handover",
    detail: "Clear ownership, then optional care."
  }
];

export const trustPrinciples: TrustPrinciple[] = [
  {
    title: "Approval-led where needed",
    detail: "Sensitive actions stay human-approved."
  },
  {
    title: "Least-privilege access",
    detail: "Only the systems needed for the workflow."
  },
  {
    title: "Visible workflow logic",
    detail: "The route is legible, not mysterious."
  },
  {
    title: "Operator handover",
    detail: "A person on your side is trained to run it."
  }
];

export const founderBlock = {
  title: "Built for real operators, not AI tourists.",
  text:
    "Clawsome is designed to get one useful agent live, train the person who will own it, and keep the scope commercially sane."
};

export const proofBlock = {
  title: "Proof is shown live.",
  text:
    "Private pilot demos and workflow walk-throughs are available in the audit conversation. Public case studies follow live deployments, not placeholder marketing."
};

export const finalCta = {
  title: "Tell us the workflow.",
  text: "We will tell you whether it is a good first agent.",
  primaryLabel: "Book an audit",
  secondaryLabel: "Contact Clawsome"
};
