// Selecciona todas las secciones con animación
const panels = document.querySelectorAll(".panel");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;

      if (entry.isIntersecting) {
        // Sección visible: aparece desde abajo
        el.classList.add("show");
        el.classList.remove("hide-up");
      } else {
        // Ya no es visible
        if (entry.boundingClientRect.top < 0) {
          // Se fue hacia ARRIBA del viewport → contraer hacia arriba
          el.classList.remove("show");
          el.classList.add("hide-up");
        } else {
          // Viene desde abajo (al hacer scroll hacia arriba)
          el.classList.remove("show", "hide-up");
        }
      }
    });
  },
  {
    threshold: 0.2, // porcentaje visible para activar (ajusta si quieres)
  }
);

// Activar observer en cada sección
panels.forEach((panel) => observer.observe(panel));
