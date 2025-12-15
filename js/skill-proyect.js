document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const SELECTOR_SKILL = "[data-skill]";
  const SELECTOR_FILL  = ".vini-skillbar__fill";
  const SELECTOR_PCT   = ".vini-skillbar__pct";

  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  // Anima una barra a su %
  const animateSkill = (el) => {
    const raw = Number(el.dataset.percent ?? 0);
    const percent = clamp(isNaN(raw) ? 0 : raw, 0, 100);

    const fill = el.querySelector(SELECTOR_FILL);
    const pct  = el.querySelector(SELECTOR_PCT);

    if (pct) pct.textContent = `${percent}%`;

    // Forzar reinicio y luego animar (para que siempre se vea la animación)
    if (fill) fill.style.width = "0%";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (fill) fill.style.width = `${percent}%`;
      });
    });
  };

  // Resetea una barra a 0% (para que al volver a entrar anime otra vez)
  const resetSkill = (el) => {
    const fill = el.querySelector(SELECTOR_FILL);
    if (fill) fill.style.width = "0%";
  };

  const skills = document.querySelectorAll(SELECTOR_SKILL);
  if (!skills.length) return;

  // Fallback: si no hay IntersectionObserver, animar una vez al cargar
  if (!("IntersectionObserver" in window)) {
    skills.forEach(animateSkill);
    return;
  }

  // ✅ Observa cada skill: anima al entrar, resetea al salir
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {
        animateSkill(el);
      } else {
        resetSkill(el);
      }
    });
  }, {
    threshold: 0.90 // si querés que dispare antes, bajalo a 0.2
  });

  skills.forEach(s => observer.observe(s));
});
