const header = document.querySelector('.site-header');
const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));

function onScroll() {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item, index) => {
    item.style.setProperty('--delay', `${Math.min(index * 0.08, 0.5)}s`);
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
