(() => {
  'use strict';

  const set = (selector, ar, en) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.dataset.ar = ar;
    element.dataset.en = en;
  };

  const setMany = (selector, pairs) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      const pair = pairs[index];
      if (!pair) return;
      element.dataset.ar = pair[0];
      element.dataset.en = pair[1];
    });
  };

  const wrapLabelText = (selector, pairs) => {
    document.querySelectorAll(selector).forEach((label, index) => {
      const pair = pairs[index];
      if (!pair) return;
      const textNode = [...label.childNodes].find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (!textNode) return;
      const span = document.createElement('span');
      span.dataset.ar = pair[0];
      span.dataset.en = pair[1];
      span.textContent = pair[0];
      label.replaceChild(span, textNode);
    });
  };

  const title = (ar, en) => {
    document.body.dataset.titleAr = ar;
    document.body.dataset.titleEn = en;
  };

  const about = () => {
    title('عن شركة مرزوق المحمادي | MMC', 'About Marzouk Al Mehmadi | MMC');
    set('.about-values-hero__copy > .kicker', 'من نحن', 'About us');
    set('.about-values-hero__copy > h1', 'شريك ميداني بخبرة تصنع الأثر', 'A field partner with experience that delivers impact');
    set('.about-values-hero__lead', 'شركة سعودية تعمل في قلب مشاريع التعدين والمقاولات والمحاجر، وتجمع بين الانضباط التشغيلي، الأسطول الجاهز، والفرق المتخصصة لتقديم نتائج يمكن الاعتماد عليها.', 'A Saudi company operating at the heart of mining, contracting and quarry projects, combining operational discipline, a ready fleet and specialist teams to deliver dependable results.');
    set('.about-values-hero__lead + p', 'منذ 1998 ونحن نبني حضورنا من أرض المشروع نفسها: فهم الموقع، اختيار الحل الصحيح، وتحريك الموارد المناسبة في الوقت المناسب.', 'Since 1998, we have built our presence from the project site itself: understanding conditions, selecting the right solution and mobilising the right resources at the right time.');
    setMany('.about-values-hero__stats span', [['سنة التأسيس','Founded'],['عامًا من الخبرة','Years of experience'],['معدة ومركبة','Fleet units']]);
    set('.about-values-strip__heading .kicker', 'قيمنا', 'Our values');
    set('.about-values-strip__heading h2', 'المبادئ التي تقود قراراتنا في كل موقع', 'The principles guiding every decision on site');
    set('.about-values-strip__heading .ed-muted', 'نحافظ على مستوى واحد من الالتزام في السلامة والجودة والنزاهة والشراكة، سواء كان العمل في المحجر أو الطريق أو الموقع الصناعي.', 'We maintain one standard of safety, quality, integrity and partnership across quarries, roads and industrial sites.');
    setMany('.about-values-card h3', [['النزاهة','Integrity'],['السلامة','Safety'],['الجودة','Quality'],['الشراكة','Partnership']]);
    setMany('.about-values-card p', [
      ['وضوح في الالتزام والتواصل والمسؤولية تجاه العميل والموقع والنتيجة النهائية.','Clear commitments, communication and accountability to the client, site and final result.'],
      ['حماية الأشخاص والمعدات والمجتمعات جزء أساسي من كل قرار تشغيلي.','Protecting people, equipment and communities is fundamental to every operational decision.'],
      ['قياس الأداء والتحسين المستمر والانضباط في التنفيذ حتى نهاية دورة العمل.','Measured performance, continuous improvement and disciplined delivery through the full work cycle.'],
      ['نعمل مع العميل كفريق واحد لبناء حلول عملية وشراكات طويلة الأمد.','We work as one team with the client to build practical solutions and lasting partnerships.']
    ]);
    set('.about-story__copy .kicker', 'الرؤية والرسالة', 'Vision & mission');
    set('.about-story__copy h2', 'نمو تشغيلي يخدم أثرًا مستدامًا', 'Operational growth that creates lasting impact');
    setMany('.about-story__copy > p:not(.kicker)', [
      ['رؤيتنا تقديم حلول ذكية ومبتكرة تبني شراكات طويلة الأمد، ورسالتنا توفير خدمات احترافية للقطاعات المعتمدة على الموارد الطبيعية بأعلى معايير الجودة والجاهزية.','Our vision is to deliver intelligent, innovative solutions that build long-term partnerships. Our mission is to provide professional services to resource-based sectors with the highest standards of quality and readiness.'],
      ['نطوّر قدراتنا حول احتياج المشروع الحقيقي: من أعمال المقاولات وقص الصخور إلى التعدين، الدراسات، المساحة، والنقل الثقيل.','We develop our capabilities around real project needs—from contracting and rock cutting to mining, studies, surveying and heavy haulage.']
    ]);
    setMany('.about-story__links a', [['استكشف قدراتنا ←','Explore our capabilities →'],['شاهد خبراتنا التنفيذية ←','View our delivery experience →']]);
    set('#quality .kicker', 'الجودة والسلامة', 'Quality & safety');
    set('#quality h2', 'الجاهزية تبدأ قبل التشغيل', 'Readiness begins before operations');
    set('#quality .ed-copy > p:not(.kicker)', 'التخطيط للمخاطر، الفحص الوقائي، اجتماعات السلامة، ومتابعة الأداء؛ كلها ممارسات يومية تدعم استمرارية العمل وجودة النتائج في مواقعنا.', 'Risk planning, preventive inspections, safety briefings and performance monitoring are daily practices supporting continuity and quality across our sites.');
    set('#quality .text-link', 'الجودة والاعتمادات ←', 'Quality & certifications →');
    set('.ed-cta .kicker', 'نبني القادم', 'Building what comes next');
    set('.ed-cta h2', 'جاهزون لنكون امتداد فريق مشروعك', 'Ready to become an extension of your project team');
    set('.ed-cta .btn', 'تواصل معنا', 'Contact us');
  };

  const certificates = () => {
    title('الجودة والاعتمادات | MMC', 'Quality & Certifications | MMC');
    setMany('.ed-hero :is(.kicker,h1,p:not(.kicker))', [['الجودة والاعتمادات','Quality & certifications'],['الثقة تُبنى بالانضباط','Trust is built through discipline'],['منهج تشغيلي يضع السلامة والجودة والامتثال في صميم التخطيط والتنفيذ.','An operating approach placing safety, quality and compliance at the heart of planning and delivery.']]);
    set('.ed-intro .kicker', 'التزام مؤسسي', 'Corporate commitment');
    set('.ed-intro h2', 'أنظمة تدعم نتائج موثوقة', 'Systems supporting reliable outcomes');
    set('.ed-intro .ed-lead', 'نستخدم إجراءات واضحة للفحص وإدارة المخاطر ومتابعة الأداء، ونوفر الوثائق المؤسسية للجهات والعملاء المؤهلين عند الطلب.', 'We use clear procedures for inspection, risk management and performance monitoring, and provide corporate documents to qualified clients and organisations on request.');
    set('.ed-intro .ed-note', 'لا تُعرض أي شهادة باعتبارها اعتمادًا ساريًا دون إرفاق نسخة موثقة منها. تواصل معنا لطلب الوثائق المتاحة والتحقق من نطاقها وتاريخها.', 'No certificate is presented as a current accreditation without a verified copy. Contact us to request available documents and confirm their scope and date.');
    set('.ed-heading .kicker', 'مجالات التوثيق', 'Documentation areas');
    set('.ed-heading h2', 'وثائق تدعم قرار الشراكة', 'Documents supporting partnership decisions');
    setMany('.ed-docs h3', [['إدارة الجودة','Quality management'],['الصحة والسلامة','Health & safety'],['الوثائق النظامية','Corporate documents']]);
    setMany('.ed-docs p', [['إجراءات تشغيل ومتابعة وتحسين مستمر لجودة الخدمة.','Operating, monitoring and continuous-improvement procedures for service quality.'],['إدارة المخاطر واجتماعات السلامة وفحص الجاهزية في المواقع.','Risk management, safety briefings and site-readiness inspections.'],['السجل والعضويات والتصنيفات المتاحة للجهات المؤهلة.','Registration, memberships and classifications available to qualified organisations.']]);
    setMany('.ed-docs a', [['اطلب الوثائق','Request documents'],['اطلب الوثائق','Request documents'],['اطلب الوثائق','Request documents']]);
    set('.ed-split .kicker', 'ثقافة السلامة', 'Safety culture');
    set('.ed-split h2', 'المعيار يبدأ من الأشخاص', 'The standard starts with people');
    set('.ed-split .ed-copy > p:not(.kicker)', 'التوجيه قبل العمل، الإبلاغ عن المخاطر، والفحص المستمر للمعدات ممارسات تحمي الفرق وتدعم استمرارية الإنتاج.', 'Pre-work guidance, hazard reporting and continuous equipment inspection protect teams and support production continuity.');
    set('.ed-split .text-link', 'تواصل مع فريقنا ←', 'Contact our team →');
  };

  const contact = () => {
    title('تواصل معنا | MMC', 'Contact us | MMC');
    setMany('.ed-hero :is(.kicker,h1,p:not(.kicker))', [['تواصل معنا','Contact us'],['لنبدأ العمل معًا','Let’s start working together'],['شاركنا متطلبات الموقع أو الخدمة، وسيتواصل معك فريقنا لمراجعة النطاق والخطوة التالية.','Share your site or service requirements and our team will contact you to review the scope and next step.']]);
    set('.ed-form-wrap > div .kicker', 'قنوات التواصل', 'Contact channels');
    set('.ed-form-wrap > div h2', 'فريقنا جاهز لمشروعك', 'Our team is ready for your project');
    set('.ed-form-wrap > div .ed-muted', 'للطلبات التشغيلية والاستفسارات العامة وفرص التعاون.', 'For operational requests, general enquiries and partnership opportunities.');
    setMany('.ed-contact-links small', [['الهاتف','Phone'],['هاتف إضافي','Alternate phone'],['البريد','Email'],['WhatsApp','WhatsApp']]);
    set('.ed-contact-links a:last-child strong', 'ابدأ المحادثة', 'Start a conversation');
    wrapLabelText('.contact-form label', [['الاسم','Name'],['الشركة','Company'],['البريد','Email'],['الهاتف','Phone'],['نوع الخدمة','Service type'],['تفاصيل المشروع','Project details']]);
    setMany('.contact-form option', [['التعدين والمحاجر','Mining & quarries'],['المقاولات والأعمال الترابية','Contracting & earthworks'],['الحفر وقص الصخور','Drilling & rock cutting'],['الدراسات والمساحة','Studies & surveying'],['تأجير المعدات','Equipment rental']]);
    set('.contact-form button', 'إرسال الطلب', 'Send enquiry');
    set('.ed-split .kicker', 'نطاق العمل', 'Operating region');
    set('.ed-split h2', 'المملكة العربية السعودية', 'Kingdom of Saudi Arabia');
    set('.ed-split .ed-copy > p:not(.kicker)', 'ندعم المشاريع والمواقع الصناعية والتعدينية بخدمات ميدانية وأساطيل قابلة للتعبئة وفق نطاق المشروع.', 'We support projects, industrial sites and mining operations with field services and fleets mobilised to the required scope.');
  };

  const projects = () => {
    title('مشاريع التعدين والمحاجر والمقاولات | MMC', 'Mining, Quarry & Contracting Projects | MMC');
    setMany('.ed-hero :is(.kicker,h1,p:not(.kicker))', [['مشاريعنا','Our projects'],['خبرة تظهر في أرض المشروع','Experience proven on the project site'],['سجل تنفيذي في مواقع التعدين والمحاجر والطرق والمصانع، مدعوم بفرق مستقرة وأسطول واسع.','A delivery record across mines, quarries, roads and plants, supported by stable teams and an extensive fleet.']]);
    set('.ed-intro .kicker', 'سجلنا التنفيذي', 'Our delivery record');
    set('.ed-intro h2', 'من التحدي الميداني إلى نتيجة قابلة للقياس', 'From field challenge to measurable results');
    set('.ed-intro .ed-lead', 'نحوّل نطاق العمل إلى خطة تعبئة وتشغيل تناسب المادة والموقع والإنتاج المطلوب.', 'We turn the scope into a mobilisation and operating plan matched to the material, site and required output.');
    set('.ed-intro .ed-muted', 'تشمل خبرتنا مناجم الذهب، محاجر الحجر الجيري والجبس، نقل الخام والكلنكر، ومشاريع الطرق والأعمال الترابية.', 'Our experience spans gold mines, limestone and gypsum quarries, ore and clinker haulage, roads and earthworks.');
    setMany('.ed-stats span', [['قطاعات رئيسية','Core sectors'],['معدة ومركبة','Fleet units'],['عامًا من الخبرة','Years of experience']]);
    set('.ed-heading .kicker', 'مختارات من الخبرة', 'Selected experience');
    set('.ed-heading h2', 'مشاريع صنعت قدراتنا', 'Projects that shaped our capabilities');
    setMany('.ed-card-body span', [['التعدين','Mining'],['المحاجر','Quarries'],['البنية التحتية','Infrastructure']]);
    setMany('.ed-card-body h3', [['مناجم معادن للذهب','Ma’aden gold mines'],['الحجر الجيري والجبس','Limestone & gypsum'],['الطرق والأعمال الترابية','Roads & earthworks']]);
    setMany('.ed-card-body p', [['الأمار، بلغة، الصخيبرات والسوق.','Al Amar, Bulghah, Sukhaybarat and As Suq.'],['إدارة الاستخراج والتحميل والمعالجة.','Extraction, loading and processing management.'],['تجهيز وتسوية ورصف طرق المواقع.','Site-road preparation, grading and paving.']]);
    set('.ed-split .kicker', 'النقل الصناعي', 'Industrial haulage');
    set('.ed-split h2', 'حركة المواد دون تعطيل الإنتاج', 'Material movement without disrupting production');
    set('.ed-split .ed-copy > p:not(.kicker)', 'خبرة في نقل المواد الخام والركام والكلنكر، مع تشكيل دورات النقل وفق المسافة والكمية وظروف الموقع.', 'Experience hauling raw materials, aggregates and clinker, with haul cycles configured around distance, volume and site conditions.');
    set('.ed-split .text-link', 'القطاعات التي نخدمها ←', 'Explore our sectors →');
    set('.ed-cta .kicker', 'المشروع القادم', 'Your next project');
    set('.ed-cta h2', 'لنحوّل نطاق العمل إلى خطة تنفيذ', 'Let’s turn the scope into a delivery plan');
    set('.ed-cta .btn', 'ناقش مشروعك', 'Discuss your project');
  };

  const services = () => {
    title('خدمات التعدين والمقاولات والمعدات | MMC', 'Mining, Contracting & Equipment Services | MMC');
    setMany('.si-hero :is(.kicker,h1,p:not(.kicker))', [['خدماتنا','Our services'],['قدرات متكاملة للمشاريع الميدانية','Integrated capabilities for field projects'],['من الدراسة والتخطيط إلى التنفيذ والتشغيل؛ نوحّد الخبرة والفرق والمعدات ضمن حل يناسب أهداف الموقع.','From studies and planning to delivery and operations, we unite expertise, teams and equipment in a solution aligned with site objectives.']]);
    set('.si-intro .kicker', 'ما الذي نقدمه', 'What we deliver');
    set('.si-intro h2', 'شريك واحد عبر دورة المشروع', 'One partner across the project lifecycle');
    set('.si-intro > div > p', 'نربط المعرفة الجيولوجية والمساحية بالتنفيذ الميداني والأسطول، ونبني نطاق الخدمة وفق المادة والكميات والبرنامج والإنتاج المطلوب.', 'We connect geological and surveying knowledge with field delivery and fleet capability, shaping the service around material, quantities, programme and required output.');
    setMany('.si-band h2', [['التعدين وإدارة المحاجر','Mining & quarry management'],['المقاولات والأعمال المدنية','Contracting & civil works'],['الحفر والاستكشاف','Drilling & exploration'],['قص الصخور','Rock cutting'],['الدراسات الجيولوجية','Geological studies'],['الأعمال المساحية','Surveying works'],['تأجير المعدات الثقيلة','Heavy equipment rental'],['التكسير والنقل وتوريد المواد','Crushing, haulage & material supply']]);
    setMany('.si-band p', [['تخطيط وتشغيل الاستخراج والتحميل والنقل وإدارة واجهات العمل.','Planning and operation of extraction, loading, haulage and working faces.'],['الحفر والردم والتسوية والطرق وتجهيز المواقع والبنية التحتية.','Excavation, backfilling, grading, roads, site preparation and infrastructure.'],['حفر لبي ودوران عكسي ولب هوائي ومسح وتسجيل جيولوجي.','Core, reverse-circulation and air-core drilling, surveying and geological logging.'],['تجهيز الواجهات الصخرية والقطع والإزالة والتحميل والتسوية.','Rock-face preparation, cutting, removal, loading and grading.'],['الاستكشاف وتقييم الموارد والنمذجة ودعم خطط التعدين.','Exploration, resource assessment, modelling and mine-planning support.'],['رفع طبوغرافي وكميات ومناسيب ومراقبة التقدم والمحاذاة.','Topographic surveys, quantities, levels, progress and alignment control.'],['أسطول واسع مع التعبئة والدعم التشغيلي والصيانة الوقائية.','An extensive fleet with mobilisation, operating support and preventive maintenance.'],['معالجة وتصنيف وتحميل ونقل المواد الخام والركام.','Processing, grading, loading and hauling raw materials and aggregates.']]);
    setMany('.si-band b', Array.from({length:8}, () => ['اكتشف الخدمة ←','Explore service →']));
    set('.si-feature .kicker', 'السلامة والكفاءة', 'Safety & efficiency');
    set('.si-feature h2', 'نخطط للعمل قبل أن يبدأ', 'We plan the work before it begins');
    set('.si-feature p:not(.kicker)', 'نراجع المخاطر ومسارات الحركة وتشكيلة المعدات ومؤشرات الأداء قبل التعبئة، ثم نتابع الإنتاج والجودة طوال التنفيذ.', 'We review risks, traffic routes, fleet configuration and performance indicators before mobilisation, then monitor production and quality throughout delivery.');
    set('.si-feature .text-link', 'منهجنا في الجودة ←', 'Our quality approach →');
    set('.si-fleet h2', 'الأسطول يحول الخطة إلى حركة', 'The fleet turns plans into action');
    set('.si-fleet .btn', 'استكشف المعدات', 'Explore equipment');
  };

  window.MMCTranslatePage = () => {
    const file = location.pathname.split('/').pop() || 'index.html';
    const titles = {
      'index.html':['تأجير المعدات الثقيلة والمحاجر والتعدين | مرزوق المحمادي','Heavy Equipment, Quarrying & Mining | Marzouk Al Mehmadi'],
      'equipment.html':['الأسطول والمعدات | MMC','Fleet & Equipment | MMC'],
      'careers.html':['الوظائف | مرزوق المحمادي','Careers | Marzouk Al Mehmadi'],
      'certificates.html':['الجودة والاعتمادات | MMC','Quality & Certifications | MMC'],
      'contact.html':['تواصل معنا | MMC','Contact us | MMC'],
      'privacy.html':['سياسة الخصوصية | مرزوق المحمادي','Privacy Policy | Marzouk Al Mehmadi'],
      'terms.html':['الشروط | مرزوق المحمادي','Terms | Marzouk Al Mehmadi'],
      '404.html':['الصفحة غير موجودة | مرزوق المحمادي','Page Not Found | Marzouk Al Mehmadi'],
      'service-mining.html':['التعدين وإدارة المحاجر | مرزوق المحمادي','Mining & Quarry Management | Marzouk Al Mehmadi'],
      'service-contracting.html':['المقاولات والأعمال المدنية | مرزوق المحمادي','Contracting & Civil Works | Marzouk Al Mehmadi'],
      'service-drilling.html':['الحفر والاستكشاف | مرزوق المحمادي','Drilling & Exploration | Marzouk Al Mehmadi'],
      'service-rock-cutting.html':['قص الصخور | مرزوق المحمادي','Rock Cutting | Marzouk Al Mehmadi'],
      'service-geology.html':['الدراسات الجيولوجية | مرزوق المحمادي','Geological Studies | Marzouk Al Mehmadi'],
      'service-survey.html':['الأعمال المساحية | مرزوق المحمادي','Surveying Works | Marzouk Al Mehmadi'],
      'service-equipment.html':['تأجير المعدات الثقيلة | مرزوق المحمادي','Heavy Equipment Rental | Marzouk Al Mehmadi'],
      'service-materials.html':['التكسير والنقل وتوريد المواد | مرزوق المحمادي','Crushing, Haulage & Material Supply | Marzouk Al Mehmadi']
    };
    if (titles[file]) title(...titles[file]);
    const page = document.body.dataset.page;
    if (page === 'about') about();
    if (page === 'certificates') certificates();
    if (page === 'contact') contact();
    if (page === 'projects') projects();
    if (page === 'services' && document.querySelector('.service-index')) services();
  };
})();
