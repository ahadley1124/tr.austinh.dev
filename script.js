// Contact configuration
// Replace this value only after Austin has an approved Team Rubicon-related public contact email.
// The placeholder is intentionally not converted into a mailto link.
const TEAM_RUBICON_EMAIL = "REPLACE_WITH_TEAM_RUBICON_EMAIL";

document.documentElement.classList.add("js");

const emailTarget = document.querySelector("[data-email-status]");

if (emailTarget && TEAM_RUBICON_EMAIL !== "REPLACE_WITH_TEAM_RUBICON_EMAIL") {
  const emailLink = document.createElement("a");
  emailLink.href = `mailto:${TEAM_RUBICON_EMAIL}`;
  emailLink.textContent = TEAM_RUBICON_EMAIL;
  emailTarget.replaceChildren(emailLink);
}

// Navigation behavior
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#site-nav");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (prefersReducedMotion.matches) {
  document.documentElement.classList.add("reduce-motion");
}

function closeNavigation() {
  if (!navToggle || !navLinks) return;
  navToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("is-open");
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
      navToggle.focus();
    }
  });
}
