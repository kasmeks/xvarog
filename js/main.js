/* ============================================================
   xvarog — main.js
   Mobile menu toggle. Included by every page.
   ============================================================ */

(function () {
  'use strict';

  function openMenu() {
    var menu = document.getElementById('mobileNav');
    var btn  = document.getElementById('hamburgerBtn');
    if (!menu || !btn) return;
    menu.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    var menu = document.getElementById('mobileNav');
    var btn  = document.getElementById('hamburgerBtn');
    if (!menu || !btn) return;
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  window.openMenu  = openMenu;
  window.closeMenu = closeMenu;
}());
