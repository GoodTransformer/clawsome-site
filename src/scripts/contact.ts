import { trackEvent } from "./analytics";

type ContactResponse = {
  ok: boolean;
  message: string;
};

function isPlaceholderEmail(email: string) {
  return email.includes("replace-me") || email.endsWith(".example");
}

function buildMailtoUrl(formData: FormData, email: string) {
  const subject = encodeURIComponent("Clawsome workflow request");
  const lines = [
    `Name: ${formData.get("name") || ""}`,
    `Business: ${formData.get("business") || ""}`,
    `Email: ${formData.get("email") || ""}`,
    `Where time goes: ${formData.get("workflow") || ""}`,
    `Best first agent: ${formData.get("quickWin") || ""}`,
    "",
    `${formData.get("message") || ""}`
  ];

  return `mailto:${email}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
}

async function submitToEndpoint(endpoint: string, formData: FormData) {
  const payload = Object.fromEntries(formData.entries());
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return (await response.json().catch(() => ({ ok: true }))) as ContactResponse;
}

export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector<HTMLElement>("[data-form-status]");
  const submit = form.querySelector<HTMLButtonElement>("button[type='submit']");
  const endpoint = form.dataset.endpoint || "";
  const fallbackEmail = form.dataset.email || "";
  const thankYou = form.dataset.thankYou || "/thank-you/";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    submit?.setAttribute("disabled", "disabled");
    if (status) {
      status.textContent = "Sending...";
      status.dataset.state = "loading";
    }

    const formData = new FormData(form);

    try {
      if (endpoint) {
        await submitToEndpoint(endpoint, formData);
      } else if (fallbackEmail && !isPlaceholderEmail(fallbackEmail)) {
        window.location.href = buildMailtoUrl(formData, fallbackEmail);
      } else {
        throw new Error("No form endpoint configured");
      }

      trackEvent("contact_form_submit", {
        quick_win: String(formData.get("quickWin") || "")
      });

      window.location.href = thankYou;
    } catch (error) {
      if (status) {
        status.textContent =
          "The contact route is being finalised. Add a live email or form endpoint to enable submissions here.";
        status.dataset.state = "error";
      }
      submit?.removeAttribute("disabled");
      console.error(error);
    }
  });
}
