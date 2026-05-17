// Scroll Animation - सगळ्या pages वर काम करेल
document.addEventListener('DOMContentLoaded', () => {

  // Reveal class add करा सगळ्या sections ला
  const targets = document.querySelectorAll(
    '.card, .section, .stats, .objectives-page, .hero, footer, .objective-card'
  );

  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
});