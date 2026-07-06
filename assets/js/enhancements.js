(() => {
  const head = document.head;
  const title = document.title;
  const isArabic = document.documentElement.lang === 'ar';
  const description = document.querySelector('meta[name="description"]')?.content || (isArabic
    ? 'شركة مرزوق مسلم المحمادي المحدودة للمقاولات والتعدين والمحاجر والمعدات الثقيلة في المملكة العربية السعودية.'
    : 'Marzouk Musallam Al Mehmadi Co. Ltd. — contracting, mining, quarry and heavy equipment services in Saudi Arabia.');
  const canonicalUrl = new URL(location.pathname.replace(/index\.html$/, ''), 'https://www.marzuk.org').href;
  const ensure = (selector, tag, attributes) => {
    const element = head.querySelector(selector) || head.appendChild(document.createElement(tag));
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
  };
  ensure('meta[name="description"]', 'meta', { name: 'description', content: description });
  ensure('link[rel="canonical"]', 'link', { rel: 'canonical', href: canonicalUrl });
  ensure('meta[property="og:title"]', 'meta', { property: 'og:title', content: title });
  ensure('meta[property="og:description"]', 'meta', { property: 'og:description', content: description });
  ensure('meta[property="og:type"]', 'meta', { property: 'og:type', content: 'website' });
  ensure('meta[property="og:url"]', 'meta', { property: 'og:url', content: canonicalUrl });
  ensure('meta[name="twitter:card"]', 'meta', { name: 'twitter:card', content: 'summary_large_image' });

  const panel = document.querySelector('.mobile-panel');
  const menu = document.querySelector('.menu-btn');
  const searchButton = document.querySelector('.search-btn');
  const searchPanel = document.querySelector('.search-panel');
  const searchInput = searchPanel?.querySelector('input');
  const headerTools = document.querySelector('.header-tools');
  searchButton?.remove();
  if (headerTools && !headerTools.querySelector('.header-preferences')) {
    const legacyLanguageButton = headerTools.querySelector('.lang-btn');
    legacyLanguageButton?.classList.add('legacy-lang-btn');

    const preferences = document.createElement('div');
    preferences.className = 'header-preferences';
    preferences.setAttribute('aria-label', 'Display preferences');

    const themeButton = document.createElement('button');
    themeButton.type = 'button';
    themeButton.className = 'theme-toggle';
    themeButton.setAttribute('aria-label', isArabic ? 'تبديل الوضع الفاتح والداكن' : 'Toggle light and dark mode');

    const languageSwitch = document.createElement('div');
    languageSwitch.className = 'language-switch';
    languageSwitch.setAttribute('role', 'group');
    languageSwitch.setAttribute('aria-label', isArabic ? 'اختيار اللغة' : 'Choose language');
    languageSwitch.innerHTML = '<button type="button" data-language="ar"><img src="assets/images/ui/flag-sa.png" alt="" width="72" height="48"> AR</button><button type="button" data-language="en"><img src="assets/images/ui/flag-us.png" alt="" width="72" height="48"> EN</button>';

    const contactCta = document.createElement('a');
    contactCta.className = 'header-cta';
    contactCta.href = 'contact.html';
    contactCta.dataset.ar = 'تواصل معنا';
    contactCta.dataset.en = 'Contact us';
    contactCta.textContent = isArabic ? 'تواصل معنا' : 'Contact us';

    const setTheme = theme => {
      document.documentElement.dataset.theme = theme;
      const dark = theme === 'dark';
      themeButton.innerHTML = `<span aria-hidden="true">${dark ? '☾' : '☀'}</span>`;
      themeButton.setAttribute('aria-pressed', String(dark));
      themeButton.title = dark ? 'Dark mode' : 'Light mode';
      localStorage.setItem('mmc-theme', theme);
    };
    setTheme(localStorage.getItem('mmc-theme') === 'dark' ? 'dark' : 'light');
    themeButton.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

    const updateLanguageButtons = () => {
      const language = document.documentElement.lang;
      languageSwitch.querySelectorAll('[data-language]').forEach(button => {
        const active = button.dataset.language === language;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
    };
    languageSwitch.addEventListener('click', event => {
      const button = event.target.closest('[data-language]');
      if (!button || button.dataset.language === document.documentElement.lang) return;
      legacyLanguageButton?.click();
      requestAnimationFrame(updateLanguageButtons);
    });
    updateLanguageButtons();

    preferences.append(themeButton, languageSwitch);
    headerTools.insertBefore(preferences, legacyLanguageButton || menu);
    headerTools.insertBefore(contactCta, preferences);
  }
  panel?.setAttribute('aria-label', isArabic ? 'التنقل الرئيسي' : 'Main navigation');
  panel?.setAttribute('aria-hidden', 'true');
  searchPanel?.setAttribute('role', 'search');
  searchPanel?.setAttribute('aria-hidden', 'true');
  if (searchPanel) searchPanel.id = 'site-search';
  searchButton?.setAttribute('aria-controls', 'site-search');
  searchButton?.setAttribute('aria-expanded', 'false');

  const closeMenu = () => {
    panel?.classList.remove('open');
    panel?.setAttribute('aria-hidden', 'true');
    menu?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };
  const closeSearch = () => {
    searchPanel?.classList.remove('open');
    searchPanel?.setAttribute('aria-hidden', 'true');
    searchButton?.setAttribute('aria-expanded', 'false');
  };
  menu?.addEventListener('click', () => requestAnimationFrame(() => {
    const open = panel.classList.contains('open');
    panel.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('nav-open', open);
    if (open) closeSearch();
  }));
  searchButton?.addEventListener('click', () => requestAnimationFrame(() => {
    const open = searchPanel.classList.contains('open');
    searchPanel.setAttribute('aria-hidden', String(!open));
    searchButton.setAttribute('aria-expanded', String(open));
    if (open) { closeMenu(); searchInput?.focus(); }
  }));
  panel?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const returnFocus = searchPanel?.classList.contains('open') ? searchButton : menu;
    closeMenu(); closeSearch(); returnFocus?.focus();
  });

  const pages = [
    ['index.html', 'الرئيسية شركة مقاولات تعدين Home contracting mining'],
    ['about.html', 'من نحن تاريخ رؤية رسالة About history vision mission'],
    ['services.html', 'خدمات تعدين محاجر مقاولات طرق معدات Services mining quarry contracting'],
    ['equipment.html', 'أسطول معدات حفارات جرافات شاحنات Fleet equipment excavators trucks'],
    ['projects.html', 'مشاريع معادن محاجر بنية تحتية Projects portfolio'],
    ['certificates.html', 'شهادات جودة سلامة ISO Certificates quality safety'], ['careers.html', 'وظائف Careers jobs'],
    ['contact.html', 'تواصل هاتف بريد واتساب Contact phone email WhatsApp']
  ];
  const results = document.createElement('div');
  results.className = 'search-results';
  results.setAttribute('aria-live', 'polite');
  searchPanel?.append(results);
  searchInput?.addEventListener('input', () => {
    const query = searchInput.value.trim().toLocaleLowerCase();
    results.replaceChildren();
    if (query.length < 2) return;
    const matches = pages.filter(([, keywords]) => keywords.toLocaleLowerCase().includes(query));
    if (!matches.length) {
      const empty = document.createElement('p');
      empty.textContent = document.documentElement.lang === 'ar' ? 'لا توجد نتائج مطابقة.' : 'No matching results.';
      results.append(empty); return;
    }
    matches.forEach(([url, keywords]) => {
      const link = document.createElement('a');
      link.href = url; link.textContent = keywords.split(' ').slice(0, 4).join(' '); results.append(link);
    });
  });
  document.querySelectorAll('.filter-bar').forEach(bar => {
    bar.setAttribute('role', 'group');
    bar.querySelectorAll('.filter-btn').forEach(button => {
      button.setAttribute('aria-pressed', String(button.classList.contains('active')));
      button.addEventListener('click', () => bar.querySelectorAll('.filter-btn').forEach(item => item.setAttribute('aria-pressed', String(item === button))));
    });
  });

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.setAttribute('novalidate', '');
    const status = document.createElement('p');
    status.className = 'form-status full';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    contactForm.append(status);

    contactForm.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('input', () => field.removeAttribute('aria-invalid'));
    });

    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const invalid = contactForm.querySelector(':invalid');
      if (invalid) {
        invalid.setAttribute('aria-invalid', 'true');
        status.className = 'form-status form-status-error full';
        status.textContent = document.documentElement.lang === 'ar'
          ? 'يرجى إكمال الحقول المطلوبة بصورة صحيحة.'
          : 'Please complete the required fields correctly.';
        invalid.focus();
        return;
      }

      const data = new FormData(contactForm);
      const labels = document.documentElement.lang === 'ar'
        ? { intro: 'طلب تواصل جديد من الموقع', name: 'الاسم', company: 'الشركة', email: 'البريد', phone: 'الهاتف', service: 'الخدمة', message: 'تفاصيل المشروع' }
        : { intro: 'New website inquiry', name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', service: 'Service', message: 'Project details' };
      const message = [
        labels.intro,
        `${labels.name}: ${data.get('name') || '-'}`,
        `${labels.company}: ${data.get('company') || '-'}`,
        `${labels.email}: ${data.get('email') || '-'}`,
        `${labels.phone}: ${data.get('phone') || '-'}`,
        `${labels.service}: ${data.get('service') || '-'}`,
        `${labels.message}: ${data.get('message') || '-'}`
      ].join('\n');
      status.className = 'form-status form-status-success full';
      status.textContent = document.documentElement.lang === 'ar'
        ? 'تم تجهيز طلبك. سيتم فتح واتساب لإرساله إلى فريقنا.'
        : 'Your inquiry is ready. WhatsApp will open so you can send it to our team.';
      const popup = window.open(`https://wa.me/966500075750?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      if (!popup) window.location.href = `https://wa.me/966500075750?text=${encodeURIComponent(message)}`;
    });
  }

  if (document.body.dataset.page === 'home') {
    const homeRevealItems = document.querySelectorAll('[data-home-reveal]');
    if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const homeRevealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('home-visible');
          homeRevealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
      homeRevealItems.forEach((item, index) => {
        item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
        homeRevealObserver.observe(item);
      });
    } else {
      homeRevealItems.forEach(item => item.classList.add('home-visible'));
    }

    const projectButtons = document.querySelectorAll('[data-home-filter]');
    const projectCards = document.querySelectorAll('[data-home-category]');
    projectButtons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.classList.contains('active')));
      button.addEventListener('click', () => {
        const category = button.dataset.homeFilter;
        projectButtons.forEach(item => {
          const active = item === button;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        projectCards.forEach(card => {
          card.hidden = category !== 'all' && card.dataset.homeCategory !== category;
        });
      });
    });

    const parallaxImage = document.querySelector('.home-parallax');
    let parallaxFrame = 0;
    const updateParallax = () => {
      parallaxFrame = 0;
      if (!parallaxImage || scrollY > innerHeight * 1.2) return;
      parallaxImage.style.transform = `translate3d(0,${Math.min(scrollY * 0.08, 55)}px,0) scale(1.02)`;
    };
    if (parallaxImage && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addEventListener('scroll', () => {
        if (!parallaxFrame) parallaxFrame = requestAnimationFrame(updateParallax);
      }, { passive: true });
    }
  }
})();
