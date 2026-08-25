// ==============================
// MENÚ MÓVIL
// ==============================

const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

// ==============================
// ANIMACIONES AL HACER SCROLL
// ==============================

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px"
  }
);

document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});

// ==============================
// CURSOR DECORATIVO
// ==============================

const cursor = document.querySelector(".cursor-dot");

window.addEventListener("pointermove", event => {
  if (!cursor) return;

  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

// ==============================
// EFECTO MAGNÉTICO EN BOTONES
// ==============================

document.querySelectorAll(".magnetic").forEach(button => {
  button.addEventListener("pointermove", event => {
    if (window.innerWidth < 760) return;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * 0.08}px, ${y * 0.08}px)`;
  });

  button.addEventListener("pointerleave", () => {
    button.style.transform = "";
  });
});

// ==============================
// PARALLAX SUAVE DEL HERO
// ==============================

const heroVisual = document.querySelector(".hero-visual");

window.addEventListener("scroll", () => {
  if (!heroVisual || window.innerWidth < 760) return;

  const scroll = window.scrollY;

  if (scroll < window.innerHeight * 1.1) {
    const amount = Math.min(scroll * 0.05, 25);
    heroVisual.style.transform = `translateY(${amount}px)`;
  }
}, { passive: true });

// ==============================
// FORMULARIO DEMO
// ==============================
//
// Este formulario está preparado visualmente.
// Para recibir mensajes de verdad puedes conectarlo a:
// Formspree / Netlify Forms / EmailJS / tu backend / CRM.
//
// No se envía a ningún sitio mientras no conectes un servicio.

const form = document.querySelector("#contactForm");
const result = document.querySelector(".form-result");

form?.addEventListener("submit", event => {
  event.preventDefault();

  result.textContent =
    "Formulario preparado. Conecta aquí tu sistema de recepción de mensajes.";

  form.reset();
});

// ==============================
// AÑO DEL FOOTER
// ==============================

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}
