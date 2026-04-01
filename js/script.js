/* ============================================================
   SCROLL PROGRESS BAR
============================================================ */
const progressBar = document.getElementById('scrollProgress');

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = pct + '%';
}

/* ============================================================
   HEADER SCROLL EFFECT
============================================================ */
const header = document.querySelector('.site-header');

function onScroll() {
  if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
  updateProgress();
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);

/* ============================================================
   DARK MODE TOGGLE
============================================================ */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Load saved preference, fallback to system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

/* ============================================================
   MOBILE HAMBURGER NAV
============================================================ */
const navToggle = document.getElementById('navToggle');
const mainNav   = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close nav when a link is clicked
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ============================================================
   SCROLL REVEAL
============================================================ */
const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item, index) => {
    item.style.setProperty('--delay', `${Math.min(index * 0.07, 0.45)}s`);
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

/* ============================================================
   ACTIVE NAV LINK (section tracking)
============================================================ */
const sections  = Array.from(document.querySelectorAll('main [id]'));
const navLinks  = Array.from(document.querySelectorAll('.nav a[href^="#"]'));

if ('IntersectionObserver' in window && navLinks.length) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('nav-active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach(sec => sectionObserver.observe(sec));
}

/* ============================================================
   SKILL BARS ANIMATION
============================================================ */
const skillItems = Array.from(document.querySelectorAll('.skill-item[data-pct]'));

if ('IntersectionObserver' in window && skillItems.length) {
  const skillObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector('.skill-fill');
          if (fill) {
            const pct = entry.target.dataset.pct;
            // small delay so the bar animates after appearing
            setTimeout(() => { fill.style.width = pct + '%'; }, 120);
          }
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  skillItems.forEach(item => skillObserver.observe(item));
}

/* ============================================================
   TYPEWRITER EYEBROW
============================================================ */
const eyebrowText = document.getElementById('eyebrow-text');
const phrases = [
  'Data Scientist · PhD (Unicamp) · Professor',
  'Vibroacústica · Machine Learning · IoT',
  'Pesquisador · Engenheiro · Educador',
];

if (eyebrowText) {
  let phraseIndex   = 0;
  let charIndex     = phrases[0].length; // start fully written
  let isDeleting    = false;
  let typeTimer     = null;

  function type() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      eyebrowText.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeTimer = setTimeout(type, 400);
        return;
      }
      typeTimer = setTimeout(type, 35);
    } else {
      charIndex++;
      eyebrowText.textContent = phrases[phraseIndex].slice(0, charIndex);
      if (charIndex === phrases[phraseIndex].length) {
        typeTimer = setTimeout(() => { isDeleting = true; type(); }, 2800);
        return;
      }
      typeTimer = setTimeout(type, 60);
    }
  }

  // Start typewriter after 3 s (let the page settle)
  setTimeout(() => {
    isDeleting = true;
    type();
  }, 3000);
}

/* ============================================================
   CONTACT FORM — mailto fallback
============================================================ */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name    = contactForm.name.value.trim();
    const email   = contactForm.email.value.trim();
    const subject = contactForm.subject.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !subject || !message) return;

    const sub  = encodeURIComponent(`[Portfólio] ${subject} — ${name}`);
    const body = encodeURIComponent(
      `De: ${name}\nE-mail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:derdickferreira@gmail.com?subject=${sub}&body=${body}`;

    contactForm.reset();
    if (formSuccess) {
      formSuccess.classList.add('show');
      setTimeout(() => formSuccess.classList.remove('show'), 5000);
    }
  });
}
