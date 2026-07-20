// 🜁 Reino Silente — Interactividad
// Por ahora mínima, preparada para crecer
(function() {
  'use strict';

  // ─── Navegación con teclado en páginas de escena ──────
  document.addEventListener('keydown', function(e) {
    // Solo en páginas con navegación de escena
    const nav = document.querySelector('.scene-nav');
    if (!nav) return;

    const prev = nav.querySelector('a:first-child');
    const next = nav.querySelector('a:last-child');

    if (e.key === 'ArrowLeft' && prev && !prev.classList.contains('disabled')) {
      window.location.href = prev.getAttribute('href');
    }
    if (e.key === 'ArrowRight' && next && !next.classList.contains('disabled')) {
      window.location.href = next.getAttribute('href');
    }
  });

  // ─── Scroll suave a fragmentos ────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();
