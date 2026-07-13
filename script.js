// Contact configuration
// Austin's approved Team Rubicon-related public contact email.
const TEAM_RUBICON_EMAIL = "Austin.hadley@teamrubiconusa.org";
const CONTACT_PHONE_DISPLAY = "419-207-0762";
const CONTACT_PHONE_E164 = "+14192070762";

const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Austin Hadley
N:Hadley;Austin;;;
TITLE:TR Field Readiness, Northern Ohio
EMAIL;TYPE=INTERNET:${TEAM_RUBICON_EMAIL}
TEL;TYPE=CELL,VOICE:${CONTACT_PHONE_E164}
URL:https://tr.austinh.dev/
NOTE:Team Rubicon volunteer supporting readiness, operational capability, emergency communications, and emergency-management partnerships in Northern Ohio. Personal volunteer profile; not an official Team Rubicon website.
END:VCARD
`;

document.documentElement.classList.add("js");

const emailTarget = document.querySelector("[data-email-status]");

if (emailTarget && TEAM_RUBICON_EMAIL.includes("@")) {
  const emailLink = document.createElement("a");
  emailLink.href = `mailto:${TEAM_RUBICON_EMAIL}`;
  emailLink.textContent = TEAM_RUBICON_EMAIL;
  emailTarget.replaceChildren(emailLink);
}

function downloadVcard(event) {
  event.preventDefault();
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "Austin_Hadley_TR_Field_Readiness.vcf";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

document.querySelectorAll("[data-vcard-download]").forEach((link) => {
  link.addEventListener("click", downloadVcard);
});

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
