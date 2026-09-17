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

  var uxStyles = document.createElement('link');
  uxStyles.rel = 'stylesheet';
  uxStyles.href = 'ux-polish.css';
  document.head.appendChild(uxStyles);

  var buttonStyles = document.createElement('link');
  buttonStyles.rel = 'stylesheet';
  buttonStyles.href = 'button-system.css';
  document.head.appendChild(buttonStyles);
})();

document.addEventListener('DOMContentLoaded', function () {
  var main = document.querySelector('main');
  if (main) {
    main.id = main.id || 'main-content';
    if (!document.querySelector('.skip-link')) {
      var skipLink = document.createElement('a');
      skipLink.className = 'skip-link';
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      document.body.insertBefore(skipLink, document.body.firstChild);
    }
  }

  document.querySelectorAll('.footer').forEach(function (footer) {
    footer.innerHTML = '<div class="container">' +
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<a class="footer-logo" href="index.html" aria-label="Spicy Dogs home"><img src="assets/logo-clean-full.jpg" alt="Spicy Dogs"></a>' +
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
            '<a href="https://www.facebook.com/share/19JUocAdEJ/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook">' +
              '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M13.8 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6H17V3.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8.2v3h2.6v8h3Z"></path></svg>' +
            '</a>' +
            '<a href="https://www.threads.com/@spicydogsbehaviour?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener" aria-label="Threads">' +
              '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 8.7c-.8-3-3-4.5-5.9-4.5-3.9 0-6.5 2.7-6.5 7.7 0 5.2 2.8 8 6.7 8 3.5 0 6.1-2 6.1-5.1 0-2.7-1.9-4.2-4.5-4.2-2.2 0-3.7 1.1-3.7 2.8 0 1.5 1.2 2.5 2.8 2.5 2.1 0 3.5-1.5 3.5-4.1 0-1.9-.5-3.5-1.5-4.5-.8-.8-1.9-1.2-3.2-1.2"></path></svg>' +
            '</a>' +
            '<a href="https://www.tiktok.com/@spicydogs3" target="_blank" rel="noopener" aria-label="TikTok">' +
              '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M14.2 3h3c.3 1.7 1.4 3 3 3.6v3.1c-1.2 0-2.4-.4-3.4-1.1v6.1c0 3.7-2.5 6.3-6.1 6.3-3.3 0-6-2.7-6-6s2.7-6 6-6c.4 0 .8 0 1.2.1v3.2a3 3 0 0 0-1.2-.2 2.9 2.9 0 1 0 3 3V3Z"></path></svg>' +
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
        '<span>© Spicy Dogs 2026 | All rights reserved</span>' +
        '<div class="footer-legal"><a href="privacy.html">Privacy Policy</a> · <a href="terms.html">Terms &amp; Conditions</a></div>' +
      '</div>' +
    '</div>';
  });

  var backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.type = 'button';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"></path></svg>';
  document.body.appendChild(backToTop);

  function updateBackToTop() {
    if (window.innerWidth <= 860 && window.scrollY > 520) backToTop.classList.add('is-visible');
    else backToTop.classList.remove('is-visible');
  }

  backToTop.addEventListener('click', function () {
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  window.addEventListener('resize', updateBackToTop);
  updateBackToTop();

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

    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    links.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.setAttribute('aria-current', 'page');
      }
    });

    var toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'mobile-navigation');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    links.id = links.id || 'mobile-navigation';
    inner.insertBefore(toggle, links);

    function closeMenu(returnFocus) {
      header.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      if (returnFocus) toggle.focus();
    }

    function openMenu() {
      header.classList.add('is-open');
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      if (window.innerWidth <= 860) {
        var firstLink = links.querySelector('a');
        if (firstLink) setTimeout(function () { firstLink.focus(); }, 0);
      }
    }

    toggle.addEventListener('click', function () {
      if (header.classList.contains('is-open')) closeMenu(false);
      else openMenu();
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { closeMenu(false); });
    });

    document.addEventListener('click', function (event) {
      if (header.classList.contains('is-open') && !header.contains(event.target)) closeMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && header.classList.contains('is-open')) closeMenu(true);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) closeMenu(false);
    });
  });

  /* Homepage-only motion: calm, editorial, and disabled for reduced-motion users. */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var isHome = page === 'index.html' || page === '';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isHome) {
    document.body.classList.add('home-motion');

    var homeNav = document.querySelector('.nav');
    function updateHomeNav() {
      if (!homeNav) return;
      if (window.scrollY > 42) homeNav.classList.add('nav-scrolled');
      else homeNav.classList.remove('nav-scrolled');
    }
    window.addEventListener('scroll', updateHomeNav, { passive: true });
    updateHomeNav();

    if (!reducedMotion) {
      var revealGroups = [
        '.home-think .container > *',
        '.home-principles .eyebrow, .home-principles h2, .home-principles .pillar',
        '.home-difference .grid-2 > *',
        '.home-about .grid-2 > *',
        '.home-work .container > .eyebrow, .home-work .container > h2, .home-work .container > .kicker, .home-work .service-card, .home-work .notice',
        '.home-resource .email-box',
        '.home-proof .section-intro-inline, .home-proof .quote-card, .home-proof > .container > .hero-actions',
        '.home-writing .container > .eyebrow, .home-writing .container > h2, .home-writing .container > .kicker, .home-writing .card',
        '.home-next-step .container > *'
      ];

      var revealItems = [];
      revealGroups.forEach(function (selector) {
        document.querySelectorAll(selector).forEach(function (el, index) {
          if (el.classList.contains('motion-reveal')) return;
          el.classList.add('motion-reveal');
          if (index % 3 === 1) el.classList.add('motion-delay-1');
          if (index % 3 === 2) el.classList.add('motion-delay-2');
          revealItems.push(el);
        });
      });

      if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
        revealItems.forEach(function (el) { observer.observe(el); });
      } else {
        revealItems.forEach(function (el) { el.classList.add('is-visible'); });
      }

      var parallaxMedia = Array.prototype.slice.call(document.querySelectorAll('.home-difference .photo-frame img, .home-about .photo-frame img, .hero-photo img, .hero-photo video'));
      var ticking = false;

      function updateParallax() {
        parallaxMedia.forEach(function (media) {
          var frame = media.parentElement;
          if (!frame) return;
          var rect = frame.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) return;
          var centerOffset = (rect.top + rect.height / 2) - window.innerHeight / 2;
          var movement = Math.max(-12, Math.min(12, centerOffset * -0.025));
          media.style.setProperty('--parallax-y', movement.toFixed(1) + 'px');
        });
        ticking = false;
      }

      function requestParallax() {
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }

      window.addEventListener('scroll', requestParallax, { passive: true });
      window.addEventListener('resize', requestParallax);
      requestParallax();
    }
  }
});
