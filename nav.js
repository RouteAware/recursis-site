// Mobile nav drawer. Progressive enhancement: without JS the links are still
// in the DOM, so nothing is lost — the drawer just doesn't animate open.
(function () {
  var btn = document.querySelector('.menu-btn');
  var drawer = document.querySelector('.drawer');
  var scrim = document.querySelector('.scrim');
  if (!btn || !drawer || !scrim) return;

  function setOpen(open) {
    drawer.classList.toggle('open', open);
    scrim.classList.toggle('open', open);
    document.body.classList.toggle('drawer-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) {
      var first = drawer.querySelector('a');
      if (first) first.focus();
    } else {
      btn.focus();
    }
  }

  btn.addEventListener('click', function () {
    setOpen(!drawer.classList.contains('open'));
  });
  scrim.addEventListener('click', function () { setOpen(false); });
  drawer.querySelector('.drawer-close').addEventListener('click', function () { setOpen(false); });
  // Same-page anchors don't reload, so close the drawer behind them.
  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) setOpen(false);
  });
  // Back on a wide screen, the row nav takes over again.
  window.matchMedia('(min-width:761px)').addEventListener('change', function (e) {
    if (e.matches) setOpen(false);
  });
})();
