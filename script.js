// ===== Theme persistence =====
(function() {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const html = document.documentElement;
  if (stored === 'dark' || (!stored && prefersDark)) {
    html.classList.add('dark');
  }
  const updateIcon = () => {
    const icon = document.querySelector('#theme-toggle .icon');
    if (icon) icon.textContent = html.classList.contains('dark') ? '☾' : '☀︎';
  };
  window.addEventListener('DOMContentLoaded', updateIcon);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#theme-toggle');
    if (!btn) return;
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    const icon = btn.querySelector('.icon');
    if (icon) icon.textContent = html.classList.contains('dark') ? '☾' : '☀︎';
  });
})();

// ===== Footer year =====
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// ===== Simple contact form mock =====
document.addEventListener('submit', (e) => {
  const form = e.target.closest('#contact-form');
  if (!form) return;
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  alert('Merci ! Ceci est une démo. Connectez un service (Formspree, Netlify Forms, EmailJS) pour recevoir les messages.\n\nAperçu:\n' + JSON.stringify(data, null, 2));
  form.reset();
});
