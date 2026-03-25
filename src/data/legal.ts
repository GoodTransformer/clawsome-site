import type { LegalSection } from "./types";

export const privacySections: LegalSection[] = [
  {
    heading: "Purpose",
    body: [
      "This page explains, in plain terms, how Clawsome may collect, use, and store personal information through the website and related sales conversations.",
      "Replace the placeholders on this page once a final legal review and the live operating setup are confirmed."
    ]
  },
  {
    heading: "Information collected",
    body: [
      "Clawsome may collect the details you submit through the contact form, including your name, business name, email address, website, workflow notes, and any message you choose to send.",
      "Basic analytics and event data may also be collected to understand site usage and conversion behaviour once analytics tools are connected."
    ]
  },
  {
    heading: "How the information is used",
    body: [
      "Submitted information is used to respond to enquiries, assess whether the workflow is a fit, prepare a useful follow-up, and manage the sales process.",
      "Information should not be used for unrelated marketing without a lawful basis and a clear, documented process."
    ]
  },
  {
    heading: "Storage and retention",
    body: [
      "Form submissions, contact records, and related notes should only be stored in the systems needed to manage the enquiry and any later project delivery.",
      "Retention periods should be confirmed during legal review and updated here before launch."
    ]
  },
  {
    heading: "Your rights",
    body: [
      "Individuals may have rights to request access, correction, deletion, or restriction depending on the applicable law and the specific use of their data.",
      "Insert the final contact route for privacy requests before launch."
    ]
  }
];

export const cookieSections: LegalSection[] = [
  {
    heading: "Essential site data",
    body: [
      "The site may use minimal technical storage where needed for core site behaviour such as form handling or accessibility preferences.",
      "If analytics or advertising tools are enabled, the final live consent flow and wording should be reviewed and updated here."
    ]
  },
  {
    heading: "Analytics and advertising",
    body: [
      "Analytics hooks are included so tools such as GA4, Plausible, or Meta Pixel can be connected later without rewriting the site.",
      "Do not enable tracking scripts without final policy wording, consent handling where required, and the correct account IDs."
    ]
  }
];

export const termsSections: LegalSection[] = [
  {
    heading: "Website use",
    body: [
      "This site is intended to explain the services offered by Clawsome and provide a route for interested businesses to get in touch.",
      "The content is for general information and should not be treated as legal, regulatory, or technical advice for a specific implementation without a direct engagement."
    ]
  },
  {
    heading: "Service scope",
    body: [
      "Any project work, pricing, delivery timing, and support arrangements are subject to a separate commercial agreement.",
      "Nothing on this site is a binding promise of delivery until both parties agree the scope and terms in writing."
    ]
  },
  {
    heading: "External services",
    body: [
      "The site may link to booking tools, analytics tools, or external platforms. Clawsome is not responsible for third-party content or availability once you leave this website.",
      "Review and replace this text as part of the final legal pass before launch."
    ]
  }
];
