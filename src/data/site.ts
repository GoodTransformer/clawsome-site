import { absoluteUrl, withBase } from "./paths";
import type { NavItem, ProcessStep } from "./types";

const placeholderEmail = "hello@replace-me.example";
const placeholderBooking = "https://cal.com/replace-me/clawsome-audit";
const placeholderLinkedIn = "https://www.linkedin.com/company/replace-me";

export const siteConfig = {
  name: "Clawsome",
  tagLine: "Agents work now. We can set them up for you and start your journey.",
  shortDescription: "Practical OpenClaw and Claude builds for SME workflows.",
  description:
    "Clawsome sets up practical AI agents for SMEs. Start with one useful workflow, train the operator, and expand from proof.",
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
    detail: "Pick one bounded pain worth fixing."
  },
  {
    index: "02",
    title: "Build the agent",
    detail: "Required integrations only. Visible logic."
  },
  {
    index: "03",
    title: "Train your operator",
    detail: "A nominated owner learns the route."
  },
  {
    index: "04",
    title: "Prove before expansion",
    detail: "Sensitive actions stay approved. Add more only after proof."
  }
];

export const finalCta = {
  title: "Tell us the workflow.",
  text: "We will tell you if it is a strong first agent.",
  primaryLabel: "Book an audit",
  secondaryLabel: "Contact Clawsome"
};
