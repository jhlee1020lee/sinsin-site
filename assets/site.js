(() => {
  const toggle = document.querySelector('[data-mobile-toggle]');
  const nav = document.querySelector('[data-mobile-nav]');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
})();
