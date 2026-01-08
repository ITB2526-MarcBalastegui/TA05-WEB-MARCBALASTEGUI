document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu-lateral");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.classList.toggle("menu-visible");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const proyectos = document.querySelectorAll(".projecte");

  // Animación de entrada con IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  proyectos.forEach(proyecto => {
    observer.observe(proyecto);

    // Animación al pasar el ratón
    proyecto.addEventListener("mouseenter", () => {
      proyecto.classList.add("hovered");
    });

    proyecto.addEventListener("mouseleave", () => {
      proyecto.classList.remove("hovered");
    });
  });
});
