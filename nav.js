(function () {
  var mobileStyles = document.createElement('link');
  mobileStyles.rel = 'stylesheet';
  mobileStyles.href = 'mobile.css';
  document.head.appendChild(mobileStyles);

  var imageStyles = document.createElement('link');
  imageStyles.rel = 'stylesheet';
  imageStyles.href = 'image-system.css';
  document.head.appendChild(imageStyles);

  var colorStyles = document.createElement('link');
  colorStyles.rel = 'stylesheet';
  colorStyles.href = 'color-system.css';
  document.head.appendChild(colorStyles);

  var footerStyles = document.createElement('link');
  footerStyles.rel = 'stylesheet';
  footerStyles.href = 'footer-system.css';
  document.head.appendChild(footerStyles);
})();

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.footer').forEach(function (footer) {
    footer.innerHTML = '<div class="container">' +
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<div class="footer-logo"><img src="assets/logo-clean-full.jpg" alt="Spicy Dogs"></div>' +
          '<p class="footer-tagline">Helping people understand the dog behind the behaviour.</p>' +
          '<a class="footer-email" href="mailto:vpetsservices@gmail.com">vpetsservices@gmail.com</a>' +
        '</div>' +
        '<div class="footer-nav">' +
          '<div><div class="eyebrow footer-nav-title">Explore</div>' +
            '<div class="footer-page-links">' +
              '<a href="services.html">Services</a>' +
              '<a href="faq.html">FAQ</a>' +
              '<a href="shop.html">Shop</a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-socials" aria-label="Social links">' +
            '<a href="https://www.instagram.com/spicydogsbehaviour/" target="_blank" rel="noopener" aria-label="Instagram">' +
              '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.4" cy="6.7" r="1"></circle></svg>' +
            '</a>' +
            '<a href="https://spicydogss.substack.com/" target="_blank" rel="noopener" aria-label="Substack">' +
              '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M4.5 5.2h15v2.1h-15V5.2Zm0 3.6h15v2.1h-15V8.8Zm0 3.7h15v6.3l-7.5-4.2-7.5 4.2v-6.3Z"></path></svg>' +
            '</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-newsletter">' +
          '<div class="eyebrow">Newsletter</div>' +
          '<h3>Stay connected</h3>' +
          '<p>Behaviour insights and writing for living with free-living, fearful and sensitive dogs.</p>' +
          '<a class="btn footer-guide-btn" href="https://spicy-dogs.kit.com/9feae1d9c4" target="_blank" rel="noopener">Subscribe</a>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<span>Spicy Dogs Behaviour</span>' +
        '<span>Welfare before obedience · Relationship over control</span>' +
      '</div>' +
    '</div>';
  });

  document.querySelectorAll('.nav').forEach(function (header) {
    var inner = header.querySelector('.nav-inner');
    var links = header.querySelector('.nav-links');
    if (!inner || !links || inner.querySelector('.nav-toggle')) return;

    if (!links.querySelector('a[href="faq.html"]')) {
      var faqLink = document.createElement('a');
      faqLink.href = 'faq.html';
      faqLink.textContent = 'FAQ';
      var blogLink = links.querySelector('a[href="blog.html"]');
      if (blogLink) links.insertBefore(faqLink, blogLink);
      else links.insertBefore(faqLink, links.querySelector('.btn'));
    }

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
