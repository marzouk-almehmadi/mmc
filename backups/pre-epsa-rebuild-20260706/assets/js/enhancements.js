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

  /* Corporate mega navigation: desktop panels and mobile accordion share one source. */
  const desktopNav = document.querySelector('.site-header .nav');
  if (desktopNav && panel && !desktopNav.querySelector('.mega-menu')) {
    const services = [
      ['service-mining.html', 'التعدين وإدارة المحاجر', 'Mining & Quarry Management', 'تخطيط وتشغيل المحاجر وضبط المواد الخام.', 'Quarry planning, operations and quality control.', 'assets/images/real/quarry-operations.jpg'],
      ['service-contracting.html', 'المقاولات والأعمال المدنية', 'Contracting & Civil Works', 'أعمال ترابية وطرق وشبكات وبنية تحتية.', 'Earthworks, roads, utilities and infrastructure.', 'assets/images/real/road-paving.jpg'],
      ['service-drilling.html', 'الحفر والاستكشاف', 'Drilling & Exploration', 'حفر لبي ودوران عكسي ومسح داخل الآبار.', 'Core and RC drilling with downhole surveys.', 'assets/images/real/site-excavation.jpg'],
      ['service-rock-cutting.html', 'قص الصخور', 'Rock Cutting', 'قص وتجهيز الصخور للمحاجر والمشاريع.', 'Rock cutting for quarries and projects.', 'assets/images/real/excavators-earthworks.jpg'],
      ['service-geology.html', 'الدراسات الجيولوجية', 'Geological Studies', 'استكشاف وتقييم احتياطيات ونمذجة الخام.', 'Exploration, reserves and ore modelling.', 'assets/images/real/earthworks-panorama.jpg'],
      ['service-survey.html', 'الأعمال المساحية', 'Survey Works', 'رفع طبوغرافي وكميات ومراقبة دقيقة.', 'Topography, quantities and monitoring.', 'assets/images/real/asphalt-paver.jpg'],
      ['service-equipment.html', 'تأجير المعدات الثقيلة', 'Heavy Equipment Rental', 'أسطول حديث ودعم تشغيلي وصيانة.', 'Modern fleet, operations and maintenance.', 'assets/images/real/contracting-truck-fleet.jpg'],
      ['service-materials.html', 'التكسير والنقل وتوريد المواد', 'Crushing, Haulage & Supply', 'تكسير ونقل وتوريد الخامات والركام.', 'Crushing, haulage and material supply.', 'assets/images/real/crushing-plant.jpg']
    ];
    const about = [
      ['about.html#overview', 'نبذة عن الشركة', 'Company Overview', 'assets/images/real/team-safety.jpg'],
      ['about.html#vision', 'الرؤية والرسالة', 'Vision & Mission', 'assets/images/real/hero-mining-fleet.jpg'],
      ['about.html#values', 'قيمنا', 'Our Values', 'assets/images/real/completed-road-yard.jpg'],
      ['about.html#quality', 'الجودة والسلامة', 'Quality & Safety', 'assets/images/real/safety-briefing.jpg']
    ];
    const projects = [
      ['projects.html#current', 'المشاريع الحالية', 'Current Projects', 'assets/images/real/quarry-operations.jpg'],
      ['projects.html#completed', 'المشاريع السابقة', 'Completed Projects', 'assets/images/real/road-paving.jpg'],
      ['projects.html#sectors', 'القطاعات التي نخدمها', 'Sectors We Serve', 'assets/images/real/industrial-loading.jpg']
    ];
    const label = (ar, en) => document.documentElement.lang === 'ar' ? ar : en;
    const attrs = (ar, en) => `data-ar="${ar}" data-en="${en}"`;
    const serviceCards = services.map(item => `<a class="mega-service" href="${item[0]}"><img src="${item[5]}" alt="" width="160" height="110" loading="lazy"><span><strong ${attrs(item[1], item[2])}>${label(item[1], item[2])}</strong><small ${attrs(item[3], item[4])}>${label(item[3], item[4])}</small></span></a>`).join('');
    const visualCards = items => items.map(item => `<a class="mega-visual" href="${item[0]}"><img src="${item[3]}" alt="" width="260" height="150" loading="lazy"><strong ${attrs(item[1], item[2])}>${label(item[1], item[2])}</strong></a>`).join('');
    const megaPanel = (type, titleAr, titleEn, textAr, textEn, ctaAr, ctaEn, url, content) => `<div class="mega-menu mega-${type}"><div class="mega-inner"><div class="mega-intro"><p ${attrs(titleAr,titleEn)}>${label(titleAr,titleEn)}</p><h2 ${attrs(titleAr,titleEn)}>${label(titleAr,titleEn)}</h2><span ${attrs(textAr,textEn)}>${label(textAr,textEn)}</span><a href="${url}" ${attrs(ctaAr,ctaEn)}>${label(ctaAr,ctaEn)} <b aria-hidden="true">←</b></a></div><div class="mega-grid">${content}</div></div></div>`;
    desktopNav.innerHTML = `
      <a class="${page === 'home' ? 'active' : ''}" href="index.html" ${attrs('الرئيسية','Home')}>${label('الرئيسية','Home')}</a>
      <div class="nav-item has-mega"><a class="${page === 'about' ? 'active' : ''}" href="about.html" ${attrs('من نحن','About')}>${label('من نحن','About')} <i aria-hidden="true">⌄</i></a>${megaPanel('about','من نحن','About Us','شركة سعودية بخبرة تتجاوز 26 عامًا في التعدين والمقاولات والمعدات الثقيلة.','A Saudi company with over 26 years in mining, contracting and heavy equipment.','تعرف على الشركة','Discover MMC','about.html',visualCards(about))}</div>
      <div class="nav-item has-mega"><a class="${page === 'services' ? 'active' : ''}" href="services.html" ${attrs('الخدمات','Services')}>${label('الخدمات','Services')} <i aria-hidden="true">⌄</i></a>${megaPanel('services','خدماتنا','Our Services','قدرات متكاملة من الدراسة والتخطيط حتى التنفيذ والتشغيل.','Integrated capabilities from studies and planning to delivery and operations.','عرض جميع الخدمات','View all services','services.html',serviceCards)}</div>
      <div class="nav-item has-mega"><a class="${page === 'projects' ? 'active' : ''}" href="projects.html" ${attrs('المشاريع','Projects')}>${label('المشاريع','Projects')} <i aria-hidden="true">⌄</i></a>${megaPanel('projects','مشاريعنا','Our Projects','خبرة تنفيذية في المحاجر والتعدين والبنية التحتية والمواقع الصناعية.','Delivery experience across quarries, mining, infrastructure and industrial sites.','عرض جميع المشاريع','View all projects','projects.html',visualCards(projects))}</div>
      <a href="projects.html#insights" ${attrs('المقالات','Insights')}>${label('المقالات','Insights')}</a>
      <a class="${page === 'contact' ? 'active' : ''}" href="contact.html" ${attrs('تواصل معنا','Contact')}>${label('تواصل معنا','Contact')}</a>`;

    const mobileLinks = items => items.map(item => `<a href="${item[0]}" ${attrs(item[1],item[2])}>${label(item[1],item[2])}</a>`).join('');
    panel.innerHTML = `
      <a href="index.html" ${attrs('الرئيسية','Home')}>${label('الرئيسية','Home')}</a>
      <details><summary ${attrs('من نحن','About')}>${label('من نحن','About')}</summary><div>${mobileLinks(about)}<a class="mobile-all" href="about.html" ${attrs('عرض صفحة من نحن','View About page')}>${label('عرض صفحة من نحن','View About page')}</a></div></details>
      <details><summary ${attrs('الخدمات','Services')}>${label('الخدمات','Services')}</summary><div>${mobileLinks(services)}<a class="mobile-all" href="services.html" ${attrs('عرض جميع الخدمات','View all services')}>${label('عرض جميع الخدمات','View all services')}</a></div></details>
      <details><summary ${attrs('المشاريع','Projects')}>${label('المشاريع','Projects')}</summary><div>${mobileLinks(projects)}<a class="mobile-all" href="projects.html" ${attrs('عرض جميع المشاريع','View all projects')}>${label('عرض جميع المشاريع','View all projects')}</a></div></details>
      <a href="projects.html#insights" ${attrs('المقالات','Insights')}>${label('المقالات','Insights')}</a>
      <a href="contact.html" ${attrs('تواصل معنا','Contact')}>${label('تواصل معنا','Contact')}</a>
      <a class="mobile-whatsapp" href="https://wa.me/966500075750" target="_blank" rel="noopener" ${attrs('تواصل عبر واتساب','Contact on WhatsApp')}>${label('تواصل عبر واتساب','Contact on WhatsApp')}</a>`;

    desktopNav.querySelectorAll('.has-mega').forEach(item => {
      const trigger = item.querySelector(':scope > a');
      trigger.setAttribute('aria-haspopup', 'true');
      trigger.setAttribute('aria-expanded', 'false');
      item.addEventListener('mouseenter', () => trigger.setAttribute('aria-expanded', 'true'));
      item.addEventListener('mouseleave', () => trigger.setAttribute('aria-expanded', 'false'));
      item.addEventListener('focusin', () => trigger.setAttribute('aria-expanded', 'true'));
      item.addEventListener('focusout', event => { if (!item.contains(event.relatedTarget)) trigger.setAttribute('aria-expanded', 'false'); });
    });
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

  /* Services index: connect every corporate card to its dedicated detail page. */
  if (document.body.dataset.page === 'services' && !document.body.dataset.service) {
    const services = [
      ['service-mining.html', 'التعدين وإدارة المحاجر', 'Mining & Quarry Management', 'تصميم وتخطيط وتشغيل المحاجر وضبط جودة المواد الخام والتحميل والنقل.', 'Quarry planning, operations, raw-material quality control, loading and haulage.'],
      ['service-contracting.html', 'المقاولات والأعمال المدنية', 'Contracting & Civil Works', 'الأعمال الترابية والحفر والردم وخطوط الخدمات والطرق والبنية التحتية.', 'Earthworks, excavation, pipelines, roads and infrastructure.'],
      ['service-drilling.html', 'الحفر والاستكشاف', 'Drilling & Exploration', 'الحفر اللبي والدوران العكسي والمسح داخل الآبار والتسجيل الجيولوجي.', 'Core and RC drilling, downhole surveys and geological logging.'],
      ['service-rock-cutting.html', 'قص الصخور', 'Rock Cutting', 'قص وتجهيز الصخور للمحاجر والطرق والمشاريع الصناعية.', 'Rock cutting and preparation for quarries, roads and industrial projects.'],
      ['service-geology.html', 'الدراسات الجيولوجية', 'Geological Studies', 'الاستكشاف وتقييم الاحتياطيات ونمذجة الخام وإعداد خطط التعدين.', 'Exploration, reserve assessment, ore modelling and mine planning.'],
      ['service-survey.html', 'الأعمال المساحية', 'Survey Works', 'الرفع الطبوغرافي وتصميم الطرق والمحاجر وحساب الكميات ومراقبة الهبوط.', 'Topographical surveys, design, quantities and settlement monitoring.'],
      ['service-equipment.html', 'تأجير المعدات الثقيلة', 'Heavy Equipment Rental', 'أسطول حديث مع دعم تشغيلي وصيانة وفرق فنية متخصصة.', 'A modern fleet with operational, maintenance and technical support.'],
      ['service-materials.html', 'التكسير والنقل وتوريد المواد', 'Crushing, Haulage & Material Supply', 'تشغيل الكسارات والسيور ونقل وتوريد المواد الخام والركام والرمل.', 'Crushing, conveying, haulage and raw-material supply.']
    ];
    const language = document.documentElement.lang === 'en' ? 'en' : 'ar';
    document.querySelectorAll('.services-grid .image-card').forEach((card, index) => {
      const service = services[index];
      if (!service) return;
      const title = card.querySelector('h3');
      const description = card.querySelector('p');
      const link = card.querySelector('.text-link');
      title.dataset.ar = service[1]; title.dataset.en = service[2]; title.textContent = language === 'ar' ? service[1] : service[2];
      description.dataset.ar = service[3]; description.dataset.en = service[4]; description.textContent = language === 'ar' ? service[3] : service[4];
      link.href = service[0]; link.dataset.ar = 'اعرف المزيد'; link.dataset.en = 'Learn more'; link.textContent = language === 'ar' ? 'اعرف المزيد' : 'Learn more';
      card.addEventListener('click', event => { if (!event.target.closest('a')) location.href = service[0]; });
      card.tabIndex = 0;
      card.addEventListener('keydown', event => { if (event.key === 'Enter') location.href = service[0]; });
    });
  }
})();
