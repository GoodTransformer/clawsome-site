import { absoluteUrl } from "./paths";
import type { NavItem, ProcessStep } from "./types";

const placeholderEmail = "hello@replace-me.example";
const placeholderBooking = "https://cal.com/replace-me/clawsome-audit";
const placeholderLinkedIn = "https://www.linkedin.com/company/replace-me";

export const siteConfig = {
  name: "Clawsome",
  tagLine: "We set up your first useful AI agent.",
  shortDescription: "We set up practical AI agents for SMEs.",
  description:
    "Clawsome sets up practical AI agents for SMEs. We find the right workflow, build it properly, and train your team to run it.",
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
  credibilityNote: "Built by Patrick Hussey / Good Transformer"
};

export function isPlaceholderValue(value: string) {
  return value.includes("replace-me") || value.endsWith(".example");
}

export function getPrimaryCtaHref() {
  return isPlaceholderValue(siteConfig.bookingUrl) ? "/contact/" : siteConfig.bookingUrl;
}

export function getContactEmailHref() {
  return `mailto:${siteConfig.email}`;
}

export function getAbsoluteSiteUrl(path: string) {
  return absoluteUrl(path, siteConfig.siteUrl);
}

export const primaryNavigation: NavItem[] = [
  { label: "How We Work", href: "/#how-it-works" },
  { label: "Example Agents", href: "/use-cases/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Contact", href: "/contact/" }
];

export const footerNavigation: NavItem[] = [
  { label: "How We Work", href: "/#how-it-works" },
  { label: "Example Agents", href: "/use-cases/" },
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
    title: "Find the right workflow",
    detail:
      "We sit with you, look at how the work really moves, and pick the first job worth turning into an agent."
  },
  {
    index: "02",
    title: "Set it up properly",
    detail:
      "We connect the tools, put the checks in place, and make the workflow work in the real business."
  },
  {
    index: "03",
    title: "Train your team",
    detail:
      "We hand it over cleanly, train your staff, and help you build from one useful agent to a more agentic way of working."
  }
];

export const finalCta = {
  label: "Next step",
  title: "Tell us the workflow.",
  text: "We will tell you whether it is a good fit for a first agent, and how we would set it up.",
  primaryLabel: "Book an audit",
  secondaryLabel: "Contact Clawsome"
};
