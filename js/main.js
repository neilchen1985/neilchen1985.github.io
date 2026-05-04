document.addEventListener('DOMContentLoaded', function () {

  // ── Hamburger nav toggle ──
  const navToggle = document.getElementById('nav-toggle');
  const navDrawer = document.getElementById('nav-drawer');

  if (navToggle && navDrawer) {
    navToggle.addEventListener('click', function () {
      navDrawer.classList.toggle('open');
    });

    navDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navDrawer.classList.remove('open');
      });
    });

    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navDrawer.contains(e.target)) {
        navDrawer.classList.remove('open');
      }
    });
  }

  // ── Scroll fade-in via Intersection Observer ──
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

});
