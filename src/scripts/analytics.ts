type EventPayload = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (name: string, options?: { props?: EventPayload }) => void;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, props: EventPayload = {}) {
  window.dispatchEvent(
    new CustomEvent("clawsome:track", { detail: { name, props } })
  );

  if (typeof window.plausible === "function") {
    window.plausible(name, { props });
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", name, props);
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", name, props);
  }
}

export function initTrackedLinks(root: Document | HTMLElement = document) {
  root.addEventListener("click", (event) => {
    const target = event.target as HTMLElement | null;
    const trigger = target?.closest<HTMLElement>("[data-track]");
    if (!trigger) return;

    const name = trigger.dataset.track;
    if (!name) return;

    trackEvent(name, {
      label: trigger.dataset.trackLabel || trigger.textContent?.trim() || "",
      href: trigger.getAttribute("href") || ""
    });
  });
}
