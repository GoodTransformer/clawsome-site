import { trackEvent } from "./analytics";

function currency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0
  }).format(value);
}

export function initValueEstimator() {
  const form = document.querySelector<HTMLFormElement>("[data-roi-form]");
  if (!form) return;

  const output = document.querySelector<HTMLElement>("[data-roi-output]");
  const narrative = document.querySelector<HTMLElement>("[data-roi-narrative]");

  const calculate = () => {
    const formData = new FormData(form);
    const hours = Number(formData.get("hoursLost") || 0);
    const rate = Number(formData.get("hourlyRate") || 0);
    const leads = Number(formData.get("leadsRecovered") || 0);
    const leadValue = Number(formData.get("leadValue") || 0);
    const invoices = Number(formData.get("invoiceHours") || 0);

    const monthlyValue = hours * rate * 4 + leads * leadValue + invoices * rate * 4;

    if (output) {
      output.textContent = monthlyValue > 0 ? currency(monthlyValue) : "£0";
    }

    if (narrative) {
      narrative.textContent =
        monthlyValue > 0
          ? `A bounded quick win at this level could protect roughly ${currency(monthlyValue)} of monthly value before wider upside.`
          : "Add a few realistic numbers to sketch the likely value of a first bounded build.";
    }
  };

  form.addEventListener("input", calculate);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    calculate();
    trackEvent("roi_calculator_completed", {
      hours_lost: Number(new FormData(form).get("hoursLost") || 0)
    });
  });

  calculate();
}
