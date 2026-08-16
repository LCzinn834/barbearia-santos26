// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

function closeMenu() {
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.hidden = true;
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.hidden = !isOpen;
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Ano atual no footer
document.getElementById("ano").textContent = new Date().getFullYear();

// Slideshow do hero (troca a imagem de fundo a cada intervalo)
const heroSlides = document.querySelectorAll(".hero-slide");
if (heroSlides.length > 1) {
  let currentSlide = 0;
  setInterval(() => {
    heroSlides[currentSlide].classList.remove("is-active");
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add("is-active");
  }, 5000);
}

// Animação de revelação ao rolar
const revealEls = document.querySelectorAll(
  ".about-grid, .service-card, .gallery-item, .review-card, .info-grid, .contato-inner, .section-head"
);

revealEls.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}
