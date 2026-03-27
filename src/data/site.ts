import { absoluteUrl } from "./paths";
import type { NavItem, ProcessStep } from "./types";

const placeholderEmail = "hello@replace-me.example";
const placeholderBooking = "https://cal.com/replace-me/clawsome-audit";
const placeholderLinkedIn = "https://www.linkedin.com/company/replace-me";

export const siteConfig = {
  name: "Clawsome",
  tagLine: "Clawsome makes agents work, starting with one useful workflow.",
  shortDescription: "Practical OpenClaw and Claude builds for SME workflows.",
  description:
    "Clawsome builds practical AI agents for SMEs. Start with one useful workflow, train the owner, and expand once it proves itself.",
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
  { label: "Use Cases", href: "/use-cases/" },
  { label: "How It Works", href: "/#how-it-works" },
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
    detail: "Choose one bounded problem worth fixing."
  },
  {
    index: "02",
    title: "Build the agent",
    detail: "Use only the tools and approvals it needs."
  },
  {
    index: "03",
    title: "Train your operator",
    detail: "Train one owner to run it with confidence."
  },
  {
    index: "04",
    title: "Prove before expansion",
    detail: "Keep sensitive actions approved. Expand only after proof."
  }
];

export const finalCta = {
  title: "Tell us the workflow.",
  text: "We will tell you if it is a strong first build.",
  primaryLabel: "Book an audit",
  secondaryLabel: "Contact Clawsome"
};
