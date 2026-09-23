/* Recursis motion system — vanilla, no deps.
   Everything here is enhancement: with JS off (or reduced motion on) the page
   is the same page, just static. The `motion` class is set by a 1-line inline
   script in <head> so nothing ever flashes in and out. */
(function () {
  var root = document.documentElement;
  if (!root.classList.contains('motion')) return;

  /* ── scroll reveals ─────────────────────────────────────────────── */
  var targets = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && targets.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    targets.forEach(function (el) {
      // stagger children of a group (cards, rungs, principles)
      var kids = el.hasAttribute('data-stagger') ? el.children : null;
      if (kids) {
        for (var i = 0; i < kids.length; i++) {
          kids[i].classList.add('r-item');
          kids[i].style.setProperty('--d', Math.min(i, 8) * 55 + 'ms');
        }
      }
      io.observe(el);
    });
  } else {
    targets.forEach(function (el) { el.classList.add('is-in'); });
  }
  // failsafe: never leave content hidden
  setTimeout(function () {
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('is-in');
    });
  }, 2500);

  /* ── pointer edge-light on raised surfaces ──────────────────────── */
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    var frame = 0, pending = null;
    document.addEventListener('pointermove', function (ev) {
      var el = ev.target.closest && ev.target.closest('.card,.prin,.rung,.strip');
      if (!el) return;
      pending = [el, ev.clientX, ev.clientY];
      if (frame) return;
      frame = requestAnimationFrame(function () {
        frame = 0;
        if (!pending) return;
        var t = pending[0], b = t.getBoundingClientRect();
        t.style.setProperty('--mx', ((pending[1] - b.left) / b.width * 100).toFixed(1) + '%');
        t.style.setProperty('--my', ((pending[2] - b.top) / b.height * 100).toFixed(1) + '%');
      });
    }, { passive: true });
  }

  /* ── header: condense + hairline once you leave the top ─────────── */
  var head = document.querySelector('header');
  if (head) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        head.classList.toggle('is-stuck', window.scrollY > 12);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── same-page anchors: smooth, and land below the sticky header ── */
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href^="#"], a[href^="/#"]');
    if (!a) return;
    var hash = a.getAttribute('href').replace(/^\//, '');
    if (hash === '#' || (a.pathname && a.pathname !== location.pathname && a.getAttribute('href')[0] !== '#')) return;
    var el = document.querySelector(hash);
    if (!el) return;
    ev.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', hash);
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  });
})();
