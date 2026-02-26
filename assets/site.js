(() => {
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', String(open));
    });
  }

  const qty = document.querySelector('[data-qty]');
  const unit = document.querySelector('[data-unit]');
  const total = document.querySelector('[data-total]');

  if (qty && unit && total) {
    const unitPrice = Number(unit.getAttribute('data-unit-price') || 0);
    const format = (value) => `${value.toLocaleString('ko-KR')}원`;

    const updateTotal = () => {
      const quantity = Number(qty.value || 0);
      total.textContent = `${format(unitPrice * quantity)} (VAT 별도)`;
    };

    qty.addEventListener('change', updateTotal);
    qty.addEventListener('input', updateTotal);
    updateTotal();
  }
})();
