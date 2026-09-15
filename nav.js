(function () {
  var mobileStyles = document.createElement('link');
  mobileStyles.rel = 'stylesheet';
  mobileStyles.href = 'mobile.css';
  document.head.appendChild(mobileStyles);

  var editorialStyles = document.createElement('link');
  editorialStyles.rel = 'stylesheet';
  editorialStyles.href = 'editorial.css';
  document.head.appendChild(editorialStyles);

  var imageStyles = document.createElement('link');
  imageStyles.rel = 'stylesheet';
  imageStyles.href = 'image-system.css';
  document.head.appendChild(imageStyles);
})();

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav').forEach(function (header) {
    var inner = header.querySelector('.nav-inner');
    var links = header.querySelector('.nav-links');
    if (!inner || !links || inner.querySelector('.nav-toggle')) return;

    var toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'mobile-navigation');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    links.id = links.id || 'mobile-navigation';
    inner.insertBefore(toggle, links);

    function closeMenu() {
      header.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }

    function openMenu() {
      header.classList.add('is-open');
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
    }

    toggle.addEventListener('click', function () {
      if (header.classList.contains('is-open')) closeMenu();
      else openMenu();
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (event) {
      if (header.classList.contains('is-open') && !header.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) closeMenu();
    });
  });
});
