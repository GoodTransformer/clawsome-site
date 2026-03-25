import type { FaqItem } from "./types";

export const faqs: FaqItem[] = [
  {
    question: "What makes a good first agent?",
    answer:
      "A repetitive workflow with clear steps, clear value, and a sensible place for human approval."
  },
  {
    question: "How fast can it go live?",
    answer:
      "The point is weeks, not months. Timing depends on the workflow and the systems involved."
  },
  {
    question: "Do we need technical staff?",
    answer:
      "No. You do need a nominated operator who understands the workflow and can own it after handover."
  },
  {
    question: "Who runs it after handover?",
    answer:
      "A person on your side does. Training and handover are part of the build."
  },
  {
    question: "What if the workflow is sensitive?",
    answer:
      "Then it stays approval-led where needed. The build is controlled, not reckless."
  },
  {
    question: "Why OpenClaw and Claude?",
    answer:
      "OpenClaw handles the workflow steps and routing. Claude supports the reasoning, drafting, and decision support inside the build."
  }
];
