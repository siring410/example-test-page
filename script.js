// Lab site interactions

// --- Mobile navigation toggle ---
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close the menu after clicking a link (mobile)
  links.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// --- Highlight the active section in the nav while scrolling ---
const navLinks = document.querySelectorAll(".nav-links a");
const sections = [...navLinks]
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const setActive = () => {
  const scrollY = window.scrollY + 120;
  let current = sections[0];
  for (const section of sections) {
    if (section.offsetTop <= scrollY) current = section;
  }
  navLinks.forEach((a) => {
    a.classList.toggle(
      "active",
      current && a.getAttribute("href") === `#${current.id}`
    );
  });
};
window.addEventListener("scroll", setActive, { passive: true });
setActive();

// --- "Last updated" in the footer: shows the date the site was last built ---
const lastUpdated = document.getElementById("last-updated");
if (lastUpdated) {
  lastUpdated.textContent = new Date().toISOString().slice(0, 10);
}
