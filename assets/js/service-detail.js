const services = {
  mining:{
    no:'01',title:['التعدين وإدارة المحاجر','Mining & Quarry Management'],hero:'quarry-operations.jpg',
    intro:['حلول متكاملة تغطي دورة حياة المنجم والمحجر من التصميم والتخطيط إلى الإنتاج وضبط الجودة والتحميل والنقل.','Integrated mine and quarry solutions from design and planning through production, quality control, loading and haulage.'],
    overview:['نخطط لافتتاح وتطوير المحاجر والمصاطب وطرق النقل ومناطق التحميل والتفريغ، ثم نوازن بين معدات التحميل والقلابات ومسافة النقل لتقليل زمن الدورة. وتشمل المتابعة جودة أرضيات وطرق النقل والتصريف والحواجز الترابية بما يدعم السلامة والإنتاج واستمرارية المعدات.','We plan quarry openings, benches, haul roads, loading and dumping areas, then balance loading tools, trucks and haul distance to reduce cycle time. Monitoring covers running surfaces, drainage and safety berms to support production and equipment availability.'],
    benefits:[['تخطيط متكامل لدورة حياة المحجر','رفع كفاءة الإنتاج والطاقة التشغيلية','ضبط جودة المواد الخام والمزائج','تحسين زمن الدورة وتكلفة التشغيل'],['Integrated quarry lifecycle planning','Higher production and capacity utilisation','Raw-material and mix quality control','Optimised cycle time and operating cost']],
    equipment:[['حفارات هيدروليكية','لوادر بعجلات','شاحنات طرق وعرة','جرافات وممهدات'],['Hydraulic excavators','Wheel loaders','Off-road dump trucks','Dozers and graders']],
    note:['يتم اختيار أحجام وقدرات المعدات وفق طبيعة الخام ومخطط الموقع ومسافات النقل وأهداف الإنتاج.','Equipment size and capacity are selected around ore conditions, site layout, haul distances and production targets.'],
    gallery:['quarry-operations.jpg','hero-mining-fleet.jpg','industrial-loading.jpg'],related:['geology','drilling','materials']
  },
  contracting:{
    no:'02',title:['المقاولات والأعمال المدنية','Contracting & Civil Works'],hero:'road-paving.jpg',
    intro:['تنفيذ موثوق للأعمال الترابية والحفر والردم والدعم الجانبي وخطوط المياه والصرف وتصريف السيول.','Reliable earthworks, excavation, backfilling, side support, water, sewerage and drainage pipelines.'],
    overview:['تنفذ فرقنا تجهيز المواقع والقطع والردم والتسوية والطرق والبنية التحتية، مع ضبط المناسيب والكميات أثناء التنفيذ. ويساعد ربط بيانات التصميم بالرفع المساحي وتوجيه المعدات على تقليل إعادة العمل والهدر وتحسين جودة السطح النهائي.','Our teams deliver site preparation, cut and fill, grading, roads and infrastructure with continuous level and quantity control. Connecting design data, surveying and machine guidance helps reduce rework and material waste and improves final grade quality.'],
    benefits:[['تعبئة سريعة للمعدات والفرق','تنفيذ متكامل من الحفر إلى التسليم','تنسيق الأعمال المدنية والتوريد','قدرة على العمل في المواقع الصناعية والمحاجر'],['Rapid fleet and team mobilisation','Integrated delivery from excavation to handover','Coordinated civil works and supply','Capability across industrial and quarry sites']],
    equipment:[['حفارات هيدروليكية','جرافات بلدوزر','ممهدات طرق','شاحنات نقل ومعدات مساندة'],['Hydraulic excavators','Bulldozers','Motor graders','Transport trucks and support equipment']],
    note:['يتم تجهيز الأسطول حسب كميات الحفر والردم وطبيعة التربة ومتطلبات البرنامج التنفيذي.','Fleet mobilisation is tailored to cut-and-fill quantities, ground conditions and programme requirements.'],
    gallery:['road-paving.jpg','site-excavation.jpg','completed-road-yard.jpg'],related:['equipment','survey','materials']
  },
  drilling:{
    no:'03',title:['الحفر والاستكشاف','Drilling & Exploration'],hero:'site-excavation.jpg',
    intro:['خدمات حفر ميدانية متكاملة تدعم تقدم المشروع عبر مراحل الاستكشاف المختلفة.','Complete field drilling services supporting projects through the different exploration stages.'],
    overview:['تشمل قدراتنا الحفر اللبي الماسي والسلكي PQ وHQ وNQ، والدوران العكسي واللب الهوائي والحفر بالهواء والطين. ويُدمج اختيار طريقة الحفر مع برنامج أخذ العينات والمسح داخل الآبار وتوجيه اللب والتسجيل الجيولوجي للحصول على بيانات يمكن تتبعها واستخدامها في القرار.','Capabilities include PQ, HQ and NQ diamond wireline drilling, reverse circulation, air core, and air or mud rotary methods. Method selection is integrated with sampling, downhole surveys, core orientation and geological logging to produce traceable decision-ready data.'],
    benefits:[['بيانات حفر موثوقة تدعم القرار','تغطية متعددة لتقنيات الحفر','تكامل المسح والتسجيل وأخذ العينات','دعم الاستكشاف وضبط الجودة'],['Reliable drilling data for decisions','Multiple drilling methods','Integrated surveying, logging and sampling','Exploration and grade-control support']],
    equipment:[['حفارات لبيّة ماسية وسلكية','حفارات دوران عكسي ولب هوائي','أدوات مسح مغناطيسية وغير مغناطيسية','REFLEX EZ-TRAC وأدوات توجيه اللب'],['Diamond and wireline core rigs','RC and air-core rigs','Magnetic and non-magnetic tools','REFLEX EZ-TRAC and core-orientation tools']],
    note:['تحدد طريقة الحفر والأقطار وبرنامج العينات وفق أهداف الاستكشاف والظروف الجيولوجية.','Method, diameter and sampling programme are selected around exploration objectives and site geology.'],
    gallery:['site-excavation.jpg','earthworks-panorama.jpg','team-safety.jpg'],related:['geology','survey','mining']
  },
  rock:{
    no:'04',title:['قص الصخور','Rock Cutting'],hero:'excavators-earthworks.jpg',
    intro:['قدرات متخصصة لقطع الصخور وتجهيز واجهات العمل باستخدام معدات الحفر والضغط والحفر الهيدروليكي والدفع والتسوية.','Specialist rock cutting and face preparation using drilling, compression, excavation, dozing and grading equipment.'],
    overview:['ندير العمل من تقييم الواجهة والتجهيز إلى القطع والإزالة والتحميل والتسوية لخدمة المحاجر والطرق والمواقع الصناعية.','We manage work from face assessment and preparation through cutting, removal, loading and grading for quarries, roads and industrial sites.'],
    benefits:[['حل ميداني متكامل','تجهيز منظم لواجهات العمل','سرعة إزالة ونقل نواتج القطع','مرونة في المواقع الصخرية المختلفة'],['Integrated field solution','Organised face preparation','Faster cut-material removal','Flexibility across different rock sites']],
    equipment:[['حفارات حفر الصخور','ضواغط صخور هيدروليكية','حفارات صخور','بلدوزرات ولوادر وممهدات'],['Rock drilling rigs','Hydraulic rock compressors','Rock excavators','Bulldozers, loaders and graders']],
    note:['تتحدد مجموعة المعدات وفق صلابة الصخور وحجم الواجهة ومسار إزالة ونقل المواد.','The equipment spread is configured around rock hardness, face size and material removal route.'],
    gallery:['excavators-earthworks.jpg','earthworks-panorama.jpg','loader-and-truck.jpg'],related:['drilling','contracting','equipment']
  },
  geology:{
    no:'05',title:['الدراسات الجيولوجية','Geological Studies'],hero:'earthworks-panorama.jpg',
    intro:['دراسات من الاستكشاف وتقييم الاحتياطيات إلى نمذجة الخام وخطط التعدين وإدارة المحاجر طويلة المدى.','Studies from exploration and reserve assessment to orebody modelling, mining plans and long-term quarry management.'],
    overview:['نغطي برامج التحقيق الجيولوجي للمواد الخام وإدارة المشاريع والخرائط وتجهيز العينات وتحليلها وتقدير الموارد والاحتياطيات.','We cover raw-material investigation programmes, project management, mapping, sample preparation and analysis, and resource and reserve estimation.'],
    benefits:[['تقليل عدم اليقين قبل الاستثمار','فهم أفضل لتوزيع وجودة الخام','دعم خطط التعدين طويلة المدى','استدامة إمدادات المواد الخام'],['Reduced uncertainty before investment','Better ore distribution and quality insight','Support for long-term mining plans','Reliable raw-material supply']],
    equipment:[['أدوات التحقيق والخرائط الجيولوجية','معدات أخذ وتجهيز العينات','برامج نمذجة وتحليل جسم الخام','معدات المسح وقياس المناسيب'],['Geological investigation and mapping tools','Sampling and preparation equipment','Orebody modelling and analysis software','Survey and elevation equipment']],
    note:['تتكامل الأدوات الميدانية والتحليلية مع بيانات الحفر والمساحة لبناء نموذج جيولوجي قابل للاستخدام التشغيلي.','Field and analytical tools integrate with drilling and survey data to build an operational geological model.'],
    gallery:['earthworks-panorama.jpg','quarry-operations.jpg','site-excavation.jpg'],related:['drilling','survey','mining']
  },
  survey:{
    no:'06',title:['الأعمال المساحية','Survey Works'],hero:'asphalt-paver.jpg',
    intro:['خدمات مساحية شاملة تدعم التصميم والتنفيذ وحساب الكميات ومراقبة المنشآت بدقة.','Comprehensive surveying supporting design, delivery, quantity control and precise asset monitoring.'],
    overview:['تشمل أعمالنا الرفع الطبوغرافي وتوقيع التصميم وحساب القطع والردم وقياس المخزون وإعداد مخططات المنفذ فعليًا. وتربط منهجية العمل القياسات الميدانية ببيانات التصميم لمراقبة تقدم الأعمال الترابية والطرق والمحاجر وتقليل فروقات التنفيذ.','Our work covers topographic surveys, design stakeout, cut-and-fill quantities, stockpile measurement and as-built records. Field measurements are connected to design data to monitor earthworks, haul roads and quarry progress and reduce construction variance.'],
    benefits:[['قياسات دقيقة للتصميم والتنفيذ','تحكم أفضل بالكميات والتكاليف','متابعة الهبوط والمحاذاة','تقليل إعادة العمل والأخطاء'],['Precise measurements for design and delivery','Better quantity and cost control','Settlement and alignment monitoring','Reduced rework and field errors']],
    equipment:[['أجهزة المساحة الحديثة','تقنيات القياس الدقيقة','معدات قياس المخزون والكميات','معدات مراقبة الهبوط والمحاذاة'],['Advanced surveying equipment','Precision measurement technologies','Stockpile and quantity tools','Settlement and alignment equipment']],
    note:['تحدد منهجية القياس وفق مساحة الموقع والدقة المطلوبة وطبيعة المخرج الهندسي.','The measurement method is selected around site area, required accuracy and engineering deliverable.'],
    gallery:['asphalt-paver.jpg','completed-road-yard.jpg','earthworks-panorama.jpg'],related:['contracting','geology','mining']
  },
  equipment:{
    no:'07',title:['تأجير المعدات الثقيلة','Heavy Equipment Rental'],hero:'contracting-truck-fleet.jpg',
    intro:['أسطول حديث ومتكامل يدعم مشاريع التعدين والإنشاءات والبنية التحتية بكفاءة وموثوقية.','A modern integrated fleet supporting mining, construction and infrastructure with efficiency and reliability.'],
    overview:['يتجاوز أسطولنا 505 معدات ومركبات تشمل الحفارات والجرافات واللوادر وشاحنات الطرق الوعرة والممهدات وشاحنات النقل مع الدعم التشغيلي والصيانة الوقائية.','Our fleet exceeds 505 units across excavators, bulldozers, loaders, off-road trucks, graders and transport trucks with operational and maintenance support.'],
    benefits:[['أسطول واسع لمتطلبات متعددة','جاهزية تقلل زمن التوقف','موديلات للتعدين والمقاولات','دعم فني وصيانة وقائية'],['Broad fleet for varied requirements','Readiness that reduces downtime','Models for mining and contracting','Technical support and preventive maintenance']],
    equipment:[['59 حفارة: Volvo وHitachi وKomatsu','64 بلدوزر: CAT D9R–D11R','42 لودر: CAT 966H و990H','53 شاحنة طرق وعرة، 17 جريدر، 270 شاحنة Actros'],['59 excavators: Volvo, Hitachi and Komatsu','64 bulldozers: CAT D9R–D11R','42 loaders: CAT 966H and 990H','53 off-road trucks, 17 graders, 270 Actros trucks']],
    note:['تخضع تعبئة المعدات لتوفر الموديل ومدة المشروع وموقعه ومتطلبات التشغيل.','Mobilisation is subject to model availability, project duration, location and operating requirements.'],
    gallery:['contracting-truck-fleet.jpg','haulage-fleet.jpg','heavy-truck-line.jpg'],related:['contracting','mining','materials']
  },
  materials:{
    no:'08',title:['التكسير والنقل وتوريد المواد','Crushing, Haulage & Material Supply'],hero:'crushing-plant.jpg',
    intro:['تشغيل متكامل للتكسير والسيور والتحميل والنقل وتوريد الركام والرمل والمواد الخام.','Integrated crushing, conveying, loading, haulage and supply of aggregate, sand and raw materials.'],
    overview:['ندعم المحاجر ومصانع الأسمنت بسلسلة معالجة تبدأ بالتغذية والتكسير الأولي، ثم التكسير الثانوي والغربلة لفصل التدرجات المطلوبة، وتنتهي بالتخزين أو التحميل والنقل. نتابع معدل التغذية وحالة مكونات التآكل وجودة المنتج لتقليل التوقف والمحافظة على تدفق مستقر للمواد.','We support quarries and cement plants with a process from feeding and primary crushing through secondary reduction and screening to separate required gradations, followed by stockpiling or haulage. Feed rate, wear components and product quality are monitored to reduce downtime and sustain material flow.'],
    benefits:[['تدفق مستقر للمواد','تحسين دورة التحميل والنقل','تنسيق الإنتاج مع احتياج العميل','توريد وفق الكميات والمواصفات'],['Stable material flow','Optimised loading and haulage cycles','Production aligned with client demand','Supply to agreed quantity and specification']],
    equipment:[['كسارات وغرابيل','سيور ناقلة','لوادر ومعدات تحميل','شاحنات طرق وعرة وشاحنات نقل'],['Crushers and screens','Conveyor systems','Loaders and loading equipment','Off-road and transport trucks']],
    note:['تحدد منظومة التشغيل وفق نوع المادة والمقاس المطلوب والمسافة والطاقة الإنتاجية المستهدفة.','The operating spread is configured around material type, required gradation, distance and target output.'],
    gallery:['crushing-plant.jpg','aggregate-processing.jpg','industrial-loading.jpg'],related:['mining','equipment','contracting']
  }
};

const key=document.body.dataset.service;
const service=services[key];
const allTitles={
  mining:['التعدين وإدارة المحاجر','Mining & Quarry Management'],contracting:['المقاولات والأعمال المدنية','Contracting & Civil Works'],
  drilling:['الحفر والاستكشاف','Drilling & Exploration'],rock:['قص الصخور','Rock Cutting'],geology:['الدراسات الجيولوجية','Geological Studies'],
  survey:['الأعمال المساحية','Survey Works'],equipment:['تأجير المعدات الثقيلة','Heavy Equipment Rental'],materials:['التكسير والنقل وتوريد المواد','Crushing, Haulage & Material Supply']
};
const allImages={mining:'quarry-operations.jpg',contracting:'road-paving.jpg',drilling:'site-excavation.jpg',rock:'excavators-earthworks.jpg',geology:'earthworks-panorama.jpg',survey:'asphalt-paver.jpg',equipment:'contracting-truck-fleet.jpg',materials:'crushing-plant.jpg'};
const allUrls={mining:'service-mining.html',contracting:'service-contracting.html',drilling:'service-drilling.html',rock:'service-rock-cutting.html',geology:'service-geology.html',survey:'service-survey.html',equipment:'service-equipment.html',materials:'service-materials.html'};

if(service){
  const bi=(ar,en)=>' data-ar="'+ar+'" data-en="'+en+'"';
  const items=(ar,en)=>ar.map((x,i)=>'<li'+bi(x,en[i])+'>'+x+'</li>').join('');
  const benefits=service.benefits[0].map((x,i)=>'<li><span>0'+(i+1)+'</span><h3'+bi(x,service.benefits[1][i])+'>'+x+'</h3></li>').join('');
  const gallery=service.gallery.map((x,i)=>'<figure><img src="assets/images/real/'+x+'" alt="'+service.title[0]+'" width="1200" height="850" loading="lazy"><figcaption>0'+(i+1)+'</figcaption></figure>').join('');
  const faqAr=[
    ['ما الذي يشمله نطاق الخدمة؟','يتم تحديد النطاق بعد مراجعة الموقع والمتطلبات والبرنامج، ويشمل العناصر الفنية والتشغيلية المتفق عليها.'],
    ['كيف يتم اختيار المعدات المناسبة؟','وفق طبيعة العمل وظروف الموقع والكميات والإنتاج المستهدف ومدة المشروع.'],
    ['هل يمكن تخصيص الخدمة للمشروع؟','نعم، يبني فريقنا خطة التنفيذ وتعبئة الموارد حسب احتياج كل مشروع.']
  ];
  const faqEn=[
    ['What does the service scope include?','The scope is defined after reviewing the site, requirements and programme, and covers the agreed technical and operational elements.'],
    ['How is the right equipment selected?','Around the work type, site conditions, quantities, target output and project duration.'],
    ['Can the service be tailored?','Yes. Our team builds the delivery and mobilisation plan around each project.']
  ];
  const faq=faqAr.map((x,i)=>'<details><summary'+bi(x[0],faqEn[i][0])+'>'+x[0]+'</summary><p'+bi(x[1],faqEn[i][1])+'>'+x[1]+'</p></details>').join('');
  const related=service.related.map(x=>'<a class="related-card" href="'+allUrls[x]+'"><img src="assets/images/real/'+allImages[x]+'" alt="" width="600" height="420" loading="lazy"><span><small'+bi('خدمة ذات صلة','Related service')+'>خدمة ذات صلة</small><strong'+bi(allTitles[x][0],allTitles[x][1])+'>'+allTitles[x][0]+'</strong></span></a>').join('');

  document.querySelector('main').innerHTML=
  '<section class="service-hero"><img src="assets/images/real/'+service.hero+'" alt="'+service.title[0]+'" width="1900" height="1400" fetchpriority="high"><div class="service-hero__shade"></div><div class="service-hero__content"><p class="breadcrumbs"'+bi('الرئيسية / الخدمات / '+service.title[0],'Home / Services / '+service.title[1])+'>'+'الرئيسية / الخدمات / '+service.title[0]+'</p><span>'+service.no+'</span><h1'+bi(service.title[0],service.title[1])+'>'+service.title[0]+'</h1><p'+bi(service.intro[0],service.intro[1])+'>'+service.intro[0]+'</p><a class="service-hero__cta" href="#overview"'+bi('اكتشف الخدمة','Explore service')+'>اكتشف الخدمة</a></div></section>'+
  '<section class="service-overview section" id="overview"><div class="section-heading reveal"><p class="eyebrow"'+bi('نظرة عامة','Overview')+'>نظرة عامة</p><h2'+bi('خبرة متخصصة من التخطيط إلى التنفيذ','Specialist expertise from planning to delivery')+'>خبرة متخصصة من التخطيط إلى التنفيذ</h2></div><p class="service-overview__lead reveal"'+bi(service.overview[0],service.overview[1])+'>'+service.overview[0]+'</p></section>'+
  '<section class="service-benefits section"><div class="section-heading reveal"><p class="eyebrow"'+bi('القيمة التي نقدمها','Benefits')+'>القيمة التي نقدمها</p><h2'+bi('نتائج تشغيلية قابلة للقياس','Operational value that can be measured')+'>نتائج تشغيلية قابلة للقياس</h2></div><ol class="benefits-grid">'+benefits+'</ol></section>'+
  '<section class="service-equipment"><div class="service-equipment__image"><img src="assets/images/real/'+service.gallery[1]+'" alt="'+service.title[0]+'" width="1600" height="1200" loading="lazy"></div><div class="service-equipment__content reveal"><p class="eyebrow"'+bi('المعدات والأدوات','Equipment')+'>المعدات والأدوات</p><h2'+bi('قدرات ميدانية تناسب نطاق العمل','Field capability matched to the scope')+'>قدرات ميدانية تناسب نطاق العمل</h2><ul>'+items(service.equipment[0],service.equipment[1])+'</ul><p'+bi(service.note[0],service.note[1])+'>'+service.note[0]+'</p></div></section>'+
  '<section class="service-gallery-section section"><div class="section-heading reveal"><p class="eyebrow"'+bi('من الميدان','Gallery')+'>من الميدان</p><h2'+bi('الخبرة تظهر في موقع العمل','Experience at work')+'>الخبرة تظهر في موقع العمل</h2></div><div class="service-gallery">'+gallery+'</div></section>'+
  '<section class="service-faq section"><div class="section-heading reveal"><p class="eyebrow"'+bi('الأسئلة الشائعة','FAQ')+'>الأسئلة الشائعة</p><h2'+bi('إجابات واضحة قبل بدء المشروع','Clear answers before the project begins')+'>إجابات واضحة قبل بدء المشروع</h2></div><div class="service-faq__list">'+faq+'</div></section>'+
  '<section class="service-cta-wrap section"><div class="service-cta"><div><p class="eyebrow"'+bi('ابدأ مشروعك','Start your project')+'>ابدأ مشروعك</p><h2'+bi('دعنا نحدد القدرة المناسبة لمشروعك','Let us define the right capability for your project')+'>دعنا نحدد القدرة المناسبة لمشروعك</h2><p'+bi('شاركنا نطاق العمل والموقع والبرنامج المستهدف، وسيتواصل فريقنا معك.','Share your scope, location and target programme, and our team will contact you.')+'>شاركنا نطاق العمل والموقع والبرنامج المستهدف، وسيتواصل فريقنا معك.</p></div><a class="button" href="contact.html"'+bi('تواصل معنا','Contact us')+'>تواصل معنا</a></div></section>'+
  '<section class="service-related section"><div class="section-heading reveal"><p class="eyebrow"'+bi('استكشف المزيد','Related services')+'>استكشف المزيد</p><h2'+bi('خدمات تكمل نطاق مشروعك','Services that complement your scope')+'>خدمات تكمل نطاق مشروعك</h2></div><div class="related-grid">'+related+'</div></section>';
}
