import type { FaqItem } from "./types";

export const faqs: FaqItem[] = [
  {
    question: "What makes a good first agent?",
    answer:
      "A repetitive workflow with clear steps, clear value, and a sensible place for human approval."
  },
  {
    question: "How fast can this go live?",
    answer:
      "The point is weeks, not months. Timing depends on the workflow and the systems involved."
  },
  {
    question: "Do we need technical staff?",
    answer:
      "No. You do need a nominated operator who understands the workflow and can own it after handover."
  },
  {
    question: "Who runs it after launch?",
    answer:
      "A person on your side does. Training and handover are part of the build."
  },
  {
    question: "What if the workflow is sensitive?",
    answer:
      "Then it stays approval-led where needed. The build is controlled, not reckless."
  },
  {
    question: "Why start with one agent?",
    answer:
      "Because one useful workflow is easier to buy, easier to govern, and easier to prove."
  },
  {
    question: "What does OpenClaw do here?",
    answer:
      "OpenClaw is the action layer. It handles the workflow steps, tools, and routing."
  },
  {
    question: "Why Claude?",
    answer:
      "Claude supports the reasoning, drafting, and decision support inside the workflow."
  }
];
