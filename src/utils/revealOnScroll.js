// Utility: intersection observer for reveal animations
export function initRevealOnScroll(options = {}) {
  const selector = options.selector || '.reveal, .animated-section';
  const visibleClass = options.visibleClass || 'is-visible';
  const rootMargin = options.rootMargin || '0px 0px -10%';

  const elements = Array.from(document.querySelectorAll(selector));
  if (!elements.length) return () => {};

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
        io.unobserve(entry.target);
      }
    });
  }, { root: null, threshold: 0.15, rootMargin });

  elements.forEach(el => io.observe(el));

  return () => io.disconnect();
}

