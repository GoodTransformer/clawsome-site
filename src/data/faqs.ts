import type { FaqItem } from "./types";

export const faqs: FaqItem[] = [
  {
    question: "What kinds of workflows suit a quick-win agent?",
    answer:
      "The best fits are repetitive workflows with clear next steps, visible business value, and a reasonable way to keep sensitive decisions approval-led. Lead response, campaign production, invoice chasing, request routing, document triage, and routine coordination are all strong candidates."
  },
  {
    question: "How fast can this be set up?",
    answer:
      "The aim is to get one bounded workflow live quickly, not spend months in discovery. Timing depends on the systems involved and the approval logic needed, but the front-door offer is designed to move in weeks rather than dragging into a long programme."
  },
  {
    question: "Do I need technical staff on my side?",
    answer:
      "Not necessarily. You do need somebody who understands the workflow, can help confirm the rules, and can act as the nominated operator after handover. Clawsome handles the setup work and trains that person to supervise the result."
  },
  {
    question: "What does my team need to do during the build?",
    answer:
      "Usually the team helps clarify the workflow, confirms the right boundaries, gives access to the agreed tools, tests real examples, and nominates the operator who will run the process after handover."
  },
  {
    question: "Who operates the agent after handover?",
    answer:
      "A nominated operator on your side does. That is an explicit part of the delivery model. They are trained on what the agent does, what stays human, how to supervise it, and how to intervene when something needs judgement."
  },
  {
    question: "What if the workflow touches sensitive actions?",
    answer:
      "Then the workflow stays approval-led where it needs to. Financial, legal, or sensitive steps do not have to be handed over blindly. The point is controlled automation under supervision, not reckless autonomy."
  },
  {
    question: "Do you replace staff?",
    answer:
      "No. The practical aim is to remove repetitive work, speed response, reduce drag, and let people focus on the parts that still need judgement, service, and ownership."
  },
  {
    question: "Why start with one agent instead of a larger programme?",
    answer:
      "Because one useful agent is easier to understand, easier to buy, easier to govern, and easier to prove. Once there is trust and evidence, the second and third builds become much more straightforward."
  },
  {
    question: "What software can this connect to?",
    answer:
      "That depends on the workflow and the tools already in use. The right build usually connects to the systems that already hold the work, the messages, or the hand-off. The audit is where we confirm the sensible route."
  },
  {
    question: "What does OpenClaw actually do here?",
    answer:
      "OpenClaw is the action layer. It helps the workflow interact with tools, routes, approvals, and operational steps in a way that is useful in the real business process."
  },
  {
    question: "Why use Claude in the stack?",
    answer:
      "Claude supports the reasoning, drafting, and decision-support part of the workflow. It is not the product being sold. It is part of the stack that helps the agent behave well inside a real business task."
  },
  {
    question: "What happens after the first build?",
    answer:
      "You can keep the agent running with internal ownership, add a care plan, or plan the next build. The expansion path follows proof rather than pushing you into a bigger programme before the first workflow has earned it."
  }
];
