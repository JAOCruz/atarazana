/**
 * Atarazana — Scroll Reveal (IntersectionObserver)
 * Lightweight replacement for scroll-triggered animation.
 * No external dependencies.
 */
(function () {
  'use strict';

  // ── Preloader ──────────────────────────────────────────────
  function hidePreloader() {
    var el = document.getElementById('at-preloader');
    if (!el) return;
    el.classList.add('hidden');
    setTimeout(function () {
      el.style.display = 'none';
    }, 700);
  }

  if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 400);
  } else {
    window.addEventListener('load', function () {
      setTimeout(hidePreloader, 400);
    });
  }

  // ── Scroll Reveal ─────────────────────────────────────────
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything immediately
      document.querySelectorAll('.at-reveal').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    document.querySelectorAll('.at-reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
