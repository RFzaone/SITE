const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const quoteForm = document.getElementById("quoteForm");
const cursorGlow = document.getElementById("cursorGlow");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      requestAnimationFrame(() => element.classList.add("visible"));
      observer.unobserve(element);
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 95}ms`;
  observer.observe(element);
});

window.addEventListener("load", () => {
  document.body.classList.add("page-ready");
});

window.addEventListener("pointermove", (event) => {
  if (window.innerWidth > 900) {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  }
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const garment = document.getElementById("garment").value;
  const details = document.getElementById("details").value.trim();

  const message =
`Hi Naz, I would like to request an alteration quote.

Name: ${name}
Phone: ${phone}
Garment: ${garment}
Alteration needed: ${details}

I can also send a photo through WhatsApp.`;

  window.open(
    `https://wa.me/61450173766?text=${encodeURIComponent(message)}`,
    "_blank"
  );
});