export function initGlobalUi() {
  const root = document.documentElement;
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  const menuButton = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const nav = document.querySelector<HTMLElement>("[data-mobile-nav]");

  const setHeaderState = () => {
    if (!header) return;
    header.dataset.scrolled = window.scrollY > 12 ? "true" : "false";
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  menuButton?.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    nav?.setAttribute("data-open", String(!expanded));
    root.classList.toggle("menu-open", !expanded);
  });

  nav?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      menuButton?.setAttribute("aria-expanded", "false");
      nav?.setAttribute("data-open", "false");
      root.classList.remove("menu-open");
    })
  );
}
