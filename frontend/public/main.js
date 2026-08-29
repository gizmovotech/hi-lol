/* ============================================================
   Gizmovo — main.js (Vanilla JS, zero dependencies)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Hero on-load masked line reveal ---------- */
  window.addEventListener('load', function () {
    document.body.classList.add('gizmovo-loaded');
  });
  // Fallback in case load fires before listener attaches
  setTimeout(function () {
    document.body.classList.add('gizmovo-loaded');
  }, 400);

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  var observed = document.querySelectorAll('.gizmovo-observe');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('gizmovo-observe--visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  observed.forEach(function (el, i) {
    // Stagger siblings inside the same parent for a cascading feel
    var siblings = Array.prototype.filter.call(
      el.parentElement.children,
      function (c) { return c.classList.contains('gizmovo-observe'); }
    );
    var index = siblings.indexOf(el);
    el.style.setProperty('--gz-stagger', (index * 0.09) + 's');
    io.observe(el);
  });

  /* ---------- Header shadow on scroll ---------- */
  var header = document.getElementById('gizmovo-header');
  window.addEventListener('scroll', function () {
    header.classList.toggle('gizmovo-header--scrolled', window.scrollY > 10);
  }, { passive: true });

  /* ---------- Subtle hero parallax ---------- */
  var heroVisual = document.getElementById('gizmovo-hero-visual');
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var y = window.scrollY;
      if (y < window.innerHeight && document.body.classList.contains('gizmovo-loaded')) {
        heroVisual.style.transform = 'translateY(' + (y * 0.12) + 'px)';
      }
      ticking = false;
    });
  }, { passive: true });

  /* ---------- Cart: add-to-cart + notification dot pop ---------- */
  var cartCount = 0;
  var cartDot = document.getElementById('gizmovo-cart-dot');

  function popCartDot() {
    cartDot.textContent = cartCount;
    cartDot.classList.add('gizmovo-header__cart-dot--visible');
    cartDot.classList.remove('gizmovo-header__cart-dot--pop');
    // Force reflow so the pop animation can restart
    void cartDot.offsetWidth;
    cartDot.classList.add('gizmovo-header__cart-dot--pop');
  }

  document.querySelectorAll('[data-add-to-cart]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      cartCount += 1;
      popCartDot();
      btn.classList.add('gizmovo-btn--clicked');
      setTimeout(function () {
        btn.classList.remove('gizmovo-btn--clicked');
      }, 1400);
    });
  });

  /* ---------- Newsletter form (client-side validation) ---------- */
  var form = document.getElementById('gizmovo-newsletter-form');
  var emailInput = document.getElementById('gizmovo-newsletter-email');
  var message = document.getElementById('gizmovo-newsletter-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var value = emailInput.value.trim();
    var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!valid) {
      message.textContent = 'Please enter a valid email address.';
      message.classList.add('gizmovo-newsletter__message--error');
      return;
    }
    message.classList.remove('gizmovo-newsletter__message--error');
    message.textContent = 'You’re in! Check your inbox for the 10% code. 🎉';
    emailInput.value = '';
  });
})();
