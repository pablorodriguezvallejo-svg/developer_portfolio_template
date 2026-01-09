gsap.registerPlugin(DrawSVGPlugin);

// HERO SIGNATURE DRAW
gsap.fromTo(
  "#signature-path",
  { drawSVG: "0%" },
  {
    drawSVG: "100%",
    duration: 2.5,
    ease: "power2.out",
  }
);

// SECTION REVEALS
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
  });
});

function ajustarUltimaTarjeta() {
  const grid = document.querySelector(".project-grid");
  const cards = grid.querySelectorAll(".project-card");

  // Quitamos la clase full-row de todas por seguridad
  cards.forEach((card) => card.classList.remove("full-row"));

  // Si el número de tarjetas es impar, la última ocupa 2 columnas
  if (cards.length % 2 !== 0) {
    const lastCard = cards[cards.length - 1];
    lastCard.classList.add("full-row");
  }
}

// Ejecutamos al cargar la página
ajustarUltimaTarjeta();

// Opcional: si agregas tarjetas dinámicamente, llama a ajustarUltimaTarjeta() otra vez
