/* =========================================================
   Osama Ahmed — Portfolio data layer (EN/AR)
   All content sourced from Osama_Ahmed_CV.pdf2026.pdf,
   the three CREATIVA/AMIT certificates, and the provided
   portrait + "Wady Le3b" logo. Nothing invented.
   ========================================================= */
'use strict';

const OA_LANG = {
  en: {
    skip: 'Skip to content',
    brandRole: 'Business Development',
    navStory: 'Story', navTimeline: 'Journey', navSkills: 'Skills',
    navProjects: 'Ventures', navCerts: 'Certificates', navContact: 'Contact',
    navCv: 'Download CV',
    themeAria: 'Switch theme', menuAria: 'Open menu',
    langSwitchAria: 'EN / ع — switch to Arabic',
    heroEyebrow: 'Business Development · Business Strategy · Market Research',
    heroTitle1: 'Deals are built on',
    heroTitle2: 'understanding people.',
    heroLead: 'Business Development professional with 2 years of sales experience — 20+ real estate deals closed and 60+ client meetings at Golden Development — now building business models, market research and growth strategy for early-stage ventures.',
    ctaCv: 'Download My CV',
    ctaCv2: 'Download My CV',
    ctaTalk: "Let's Work Together",
    statYears: 'Years in sales',
    statDeals: 'Deals closed',
    statMeetings: 'Client meetings',
    statVentures: 'Venture concepts',
    locTag: 'Port Said · Egypt',
    storyEyebrow: 'The Mindset',
    storyTitle: 'My Business Mindset',
    storyQuote: 'I believe business is not just about selling; it\u2019s about understanding people, identifying opportunities, and creating real value.',
    storyQuoteBy: '— Osama Ahmed',
    storyP1: 'I focus on building relationships, thinking beyond the immediate deal, and continuously learning to become better at what I do. That mindset carried me from digital marketing and e-commerce into real estate sales, and then into business development — where strategy, research and negotiation meet.',
    storyP2: 'Today I work at the intersection of sales practice and business design: mapping customer journeys, structuring revenue models, and turning early ideas into structured plans ready for growth and funding conversations.',
    focus1: 'Client relationships', focus2: 'Opportunity identification',
    focus3: 'Real value creation', focus4: 'Continuous learning',
    timelineEyebrow: 'Career Timeline',
    timelineTitle: 'Three Steps, One Direction',
    timelineHint: 'Ordered exactly as it happened — no invented dates.',
    skillsEyebrow: 'Capabilities',
    skillsTitle: 'Core Competencies',
    skillsHint: 'Grouped exactly as stated in the CV — no invented ratings.',
    flTitle: 'Freelance Services',
    flCta: 'Ask about a service',
    projEyebrow: 'Selected Work',
    projTitle: 'Ventures & Projects',
    projSub: 'Four early-stage business concepts — plus a brand identity I designed. Every project is shown with its real status.',
    filterAll: 'All', filterFeatured: 'Featured',
    projRole: 'Role', projCat: 'Category', projStatus: 'Status',
    pmPoints: 'Key contributions', pmGallery: 'Gallery',
    statusConcept: 'Concept development and planning',
    statusResearch: 'Business research and planning',
    statusPlanning: 'Business planning and prototype conceptualization',
    statusStrategy: 'Business concept and planning',
    statusDone: 'Logo & brand identity delivered',
    winsEyebrow: 'Highlights', winsTitle: 'Achievement Highlights',
    winsFoot: 'Every number above is taken directly from the CV or the certificates.',
    certsEyebrow: 'Training', certsTitle: 'Certificates & Programs',
    certsSub: 'Three programs completed at CREATIVA Portsaid — under Egypt\u2019s Ministry of Communications and Information Technology, ITIDA, TIEC and AMIT.',
    certView: 'View certificate',
    contactEyebrow: 'Get In Touch', contactTitle: "Let's Build Something",
    contactSub: 'Hiring for a business development or sales role? Need market research or a business plan? The fastest way to reach me is WhatsApp or email.',
    chEmail: 'Email', chPhone: 'Phone',
    chWa: 'WhatsApp', chWaHint: 'Opens a chat — fastest reply',
    copyAria: 'Copy to clipboard',
    shareBtn: 'Share Profile',
    formTitle: 'Write the message here',
    formHint: 'This opens the message in your own email app — nothing is sent from the website itself.',
    fName: 'Your name', fTopic: 'Topic',
    fTopicJob: 'Job opportunity', fTopicFreelance: 'Freelance project', fTopicOther: 'Something else',
    fMsg: 'Message', fSend: 'Open in Email App',
    formAlt: 'Prefer WhatsApp?', formAltWa: 'Chat there instead',
    formErrName: 'Please add your name.',
    formErrMsg: 'Please write a short message first.',
    formOk: 'Opening your email app…',
    copied: 'Copied ✓',
    copyFail: 'Copy failed — long-press to copy',
    footMade: 'Designed & built as a single static page — fast, bilingual and accessible.',
    copyLink: 'Copy profile link', backTop: 'Back to top ↑',
    backTopAria: 'Back to top', closeAria: 'Close',
    prevAria: 'Previous image', nextAria: 'Next image',
    cvTitle: 'Download my CV',
    cvDesc: 'The original CV file, exactly as shared — nothing regenerated.',
    cvFile: 'Osama-Ahmed-CV.pdf',
    cvFileHint: '2 pages · English · original file',
    cvView: 'View in browser instead',
    tlRole: 'Step', tlNow: 'Current focus',
    projActions: { live: 'Open project', none: 'Early-stage concept — private planning phase' },
    shareText: 'Osama Ahmed — Business Development Portfolio'
  },
  ar: {
    skip: 'الانتقال إلى المحتوى',
    brandRole: 'تطوير أعمال',
    navStory: 'القصة', navTimeline: 'المسيرة', navSkills: 'المهارات',
    navProjects: 'المشاريع', navCerts: 'الشهادات', navContact: 'تواصل',
    navCv: 'تحميل السيرة الذاتية',
    themeAria: 'تبديل المظهر', menuAria: 'فتح القائمة',
    langSwitchAria: 'EN / ع — تغيير اللغة',
    heroEyebrow: 'تطوير أعمال · استراتيجية أعمال · أبحاث سوق',
    heroTitle1: 'الصفقات تُبنى على',
    heroTitle2: 'فهم الناس.',
    heroLead: 'متخصص تطوير أعمال بخبرة عامين في المبيعات — أغلقت أكثر من 20 صفقة عقارية وأدرت أكثر من 60 اجتماعًا مع العملاء في Golden Development — وأعمل الآن على بناء نماذج الأعمال وأبحاث السوق واستراتيجيات النمو للمشاريع الناشئة.',
    ctaCv: 'حمّل سيرتي الذاتية',
    ctaCv2: 'حمّل سيرتي الذاتية',
    ctaTalk: 'لنعمل معًا',
    statYears: 'سنوات في المبيعات',
    statDeals: 'صفقة مُغلقة',
    statMeetings: 'اجتماع مع العملاء',
    statVentures: 'مشاريع ناشئة',
    locTag: 'بورسعيد · مصر',
    storyEyebrow: 'العقلية',
    storyTitle: 'عقليتي في الأعمال',
    storyQuote: 'أؤمن أن الأعمال ليست مجرد بيع؛ بل فهم الناس، واكتشاف الفرص، وخلق قيمة حقيقية.',
    storyQuoteBy: '— أسامة أحمد',
    storyP1: 'أركّز على بناء العلاقات، والتفكير بما يتجاوز الصفقة الآنية، والتعلّم المستمر لأتحسن فيما أفعله. هذه العقلية نقلتني من التسويق الرقمي والتجارة الإلكترونية إلى مبيعات العقارات، ثم إلى تطوير الأعمال — حيث تلتقي الاستراتيجية بالبحث بالتفاوض.',
    storyP2: 'أعمل اليوم عند تقاطع ممارسة المبيعات وتصميم الأعمال: أرسم رحلات العملاء، وأبني نماذج الإيرادات، وأحوّل الأفكار المبكرة إلى خطط منظمة جاهزة للنمو وللنقاشات التمويلية.',
    focus1: 'علاقات العملاء', focus2: 'اكتشاف الفرص',
    focus3: 'خلق قيمة حقيقية', focus4: 'التعلّم المستمر',
    timelineEyebrow: 'المسيرة المهنية',
    timelineTitle: 'ثلاث خطوات في اتجاه واحد',
    timelineHint: 'الترتيب كما حدث بالفعل — بلا تواريخ مخترعة.',
    skillsEyebrow: 'القدرات',
    skillsTitle: 'الكفاءات الأساسية',
    skillsHint: 'مجمّعة كما وردت في السيرة الذاتية — بلا تقديرات مخترعة.',
    flTitle: 'خدمات العمل الحر',
    flCta: 'اسأل عن خدمة',
    projEyebrow: 'أعمال مختارة',
    projTitle: 'المشاريع والمغامرات التجارية',
    projSub: 'أربعة مفاهيم أعمال في مرحلتها المبكرة — إضافة إلى هوية بصرية صممتها. كل مشروع معروض بحالته الحقيقية.',
    filterAll: 'الكل', filterFeatured: 'المميز',
    projRole: 'الدور', projCat: 'المجال', projStatus: 'الحالة',
    pmPoints: 'أبرز المساهمات', pmGallery: 'المعرض',
    statusConcept: 'تطوير المفهوم والتخطيط',
    statusResearch: 'أبحاث وتخطيط أعمال',
    statusPlanning: 'تخطيط أعمال وتصور نموذج أولي',
    statusStrategy: 'مفهوم أعمال وتخطيط',
    statusDone: 'الشعار والهوية البصرية منجزان',
    winsEyebrow: 'أبرز المحطات', winsTitle: 'أبرز الإنجازات',
    winsFoot: 'كل رقم أعلاه مأخوذ مباشرة من السيرة الذاتية أو من الشهادات.',
    certsEyebrow: 'التدريب', certsTitle: 'الشهادات والبرامج',
    certsSub: 'ثلاثة برامج في CREATIVA بورسعيد — تحت مظلة وزارة الاتصالات وتكنولوجيا المعلومات، وITIDA وTIEC وAMIT.',
    certView: 'عرض الشهادة',
    contactEyebrow: 'لنتواصل', contactTitle: 'لنبني شيئًا معًا',
    contactSub: 'تبحث عن كفاءة في تطوير الأعمال أو المبيعات؟ تحتاج أبحاث سوق أو خطة عمل؟ أسرع وسيلة للوصول إليّ هي واتساب أو البريد الإلكتروني.',
    chEmail: 'البريد الإلكتروني', chPhone: 'الهاتف',
    chWa: 'واتساب', chWaHint: 'يفتح محادثة — أسرع رد',
    copyAria: 'نسخ إلى الحافظة',
    shareBtn: 'شارك الملف الشخصي',
    formTitle: 'اكتب رسالتك هنا',
    formHint: 'سيُفتح محتوى الرسالة في تطبيق البريد لديك — الموقع نفسه لا يرسل شيئًا.',
    fName: 'اسمك', fTopic: 'الموضوع',
    fTopicJob: 'فرصة عمل', fTopicFreelance: 'مشروع عمل حر', fTopicOther: 'شيء آخر',
    fMsg: 'الرسالة', fSend: 'افتح في تطبيق البريد',
    formAlt: 'تفضّل واتساب؟', formAltWa: 'راسلني هناك',
    formErrName: 'من فضلك أضف اسمك.',
    formErrMsg: 'من فضلك اكتب رسالة قصيرة أولًا.',
    formOk: 'جارٍ فتح تطبيق البريد…',
    copied: 'تم النسخ ✓',
    copyFail: 'تعذّر النسخ — اضغط مطولًا للنسخ',
    footMade: 'مصمم ومبني كصفحة ثابتة واحدة — سريع وثنائي اللغة ومتاح للجميع.',
    copyLink: 'نسخ رابط الملف الشخصي', backTop: 'إلى الأعلى ↑',
    backTopAria: 'العودة إلى الأعلى', closeAria: 'إغلاق',
    prevAria: 'الصورة السابقة', nextAria: 'الصورة التالية',
    cvTitle: 'حمّل سيرتي الذاتية',
    cvDesc: 'ملف السيرة الذاتية الأصلي كما هو تمامًا — بلا أي إعادة توليد.',
    cvFile: 'Osama-Ahmed-CV.pdf',
    cvFileHint: 'صفحتان · إنجليزي · الملف الأصلي',
    cvView: 'عرض في المتصفح بدلًا من ذلك',
    tlRole: 'الخطوة', tlNow: 'التوجه الحالي',
    projActions: { live: 'فتح المشروع', none: 'مفهوم في مرحلة مبكرة — مرحلة تخطيط خاصة' },
    shareText: 'أسامة أحمد — ملف أعمال تطوير الأعمال'
  }
};

/* Career timeline — exactly the three steps from the source text,
   plus the coordinator role and the dated trainings. */
const OA_TIMELINE = [
  {
    step: '01',
    when: { en: 'Starting point', ar: 'نقطة البداية' },
    title: { en: 'Digital Marketing & E-commerce', ar: 'التسويق الرقمي والتجارة الإلكترونية' },
    body: {
      en: 'Started with Digital Marketing training at Creativa, under Egypt\u2019s Ministry of Communications and Information Technology. Then gained practical experience managing e-commerce stores, sales, and product marketing on platforms like Amazon.',
      ar: 'بدأت بتدريب التسويق الرقمي في Creativa تحت مظلة وزارة الاتصالات وتكنولوجيا المعلومات المصرية. ثم اكتسبت خبرة عملية في إدارة المتاجر الإلكترونية والمبيعات والتسويق للمنتجات على منصات مثل أمازون.'
    },
    tags: ['Digital Marketing', 'E-commerce', 'Sales']
  },
  {
    step: '02',
    when: { en: 'Golden Development', ar: 'Golden Development' },
    title: { en: 'Sales & Real Estate', ar: 'المبيعات والعقارات' },
    body: {
      en: 'After completing professional Sales training, I moved into the real estate industry — 10 months as a Real Estate Sales Representative, 20+ deals personally closed, and 60+ client meetings conducted.',
      ar: 'بعد إتمام التدريب الاحترافي في المبيعات، انتقلت إلى قطاع العقارات — 10 أشهر كمندوب مبيعات عقارية، وأكثر من 20 صفقة أغلقتها بنفسي، وأكثر من 60 اجتماعًا مع العملاء.'
    },
    tags: ['Real Estate', 'Negotiation', 'CRM']
  },
  {
    step: '03',
    when: { en: 'Current direction', ar: 'التوجه الحالي' },
    title: { en: 'Business Development', ar: 'تطوير الأعمال' },
    body: {
      en: 'Built on my background in Digital Marketing and Sales by studying and practising Business Development — combining market research, business model development and strategic planning across four venture concepts.',
      ar: 'بنيت على خلفيتي في التسويق الرقمي والمبيعات بدراسة وتطبيق تطوير الأعمال — بدمج أبحاث السوق وتطوير نماذج الأعمال والتخطيط الاستراتيجي عبر أربعة مشاريع ناشئة.'
    },
    tags: ['Business Models', 'Market Research', 'Strategy'],
    current: true
  },
  {
    step: '04',
    when: { en: 'Ministry of Youth and Sports', ar: 'وزارة الشباب والرياضة' },
    title: { en: 'Future by AI — Port Said Coordinator', ar: 'Future by AI — منسق محافظة بورسعيد' },
    body: {
      en: 'Appointed through the Ministry of Youth and Sports as the project\u2019s coordinator in Port Said Governorate — a coordination role within an initiative focused on artificial intelligence and technology awareness.',
      ar: 'تم تكليفي عبر وزارة الشباب والرياضة بمنصب منسق المشروع في محافظة بورسعيد — دور تنسيقي ضمن مبادرة تركز على الذكاء الاصطناعي ونشر الوعي التقني.'
    },
    tags: ['Coordination', 'AI awareness']
  }
];

/* Core competencies — the 13 items from the CV, grouped faithfully. */
const OA_SKILLS = [
  {
    group: { en: 'Strategy & Planning', ar: 'الاستراتيجية والتخطيط' },
    items: [
      { en: 'Business Development and Strategy', ar: 'تطوير الأعمال والاستراتيجية' },
      { en: 'Business Model Development', ar: 'تطوير نماذج الأعمال' },
      { en: 'Revenue Model Planning', ar: 'تخطيط نماذج الإيرادات' },
      { en: 'Business Planning', ar: 'التخطيط للأعمال' },
      { en: 'Value Proposition Development', ar: 'بناء عرض القيمة' }
    ]
  },
  {
    group: { en: 'Sales & Clients', ar: 'المبيعات والعملاء' },
    items: [
      { en: 'Sales Negotiation and Deal Closing', ar: 'التفاوض وإغلاق الصفقات' },
      { en: 'Lead Generation and Qualification', ar: 'توليد وتأهيل العملاء المحتملين' },
      { en: 'Client Relationship Management', ar: 'إدارة علاقات العملاء' },
      { en: 'CRM and Lead Follow-up', ar: 'أنظمة CRM ومتابعة العملاء' },
      { en: 'Customer Journey Mapping', ar: 'رسم رحلة العميل' }
    ]
  },
  {
    group: { en: 'Research & Analysis', ar: 'البحث والتحليل' },
    items: [
      { en: 'Market Research and Competitor Analysis', ar: 'أبحاث السوق وتحليل المنافسين' },
      { en: 'Business Opportunity Identification', ar: 'تحديد الفرص التجارية' },
      { en: 'Product Concept Development', ar: 'تطوير مفهوم المنتج' }
    ]
  }
];

/* Freelance services — verbatim list from the CV. */
const OA_FREELANCE = [
  { en: 'Market Research and Competitor Analysis', ar: 'أبحاث السوق وتحليل المنافسين' },
  { en: 'Business Model Development', ar: 'تطوير نماذج الأعمال' },
  { en: 'Business Opportunity Analysis', ar: 'تحليل الفرص التجارية' },
  { en: 'Revenue Model Planning', ar: 'تخطيط نماذج الإيرادات' },
  { en: 'Business Planning and Concept Development', ar: 'التخطيط للأعمال وتطوير المفاهيم' },
  { en: 'Business Development Support', ar: 'دعم تطوير الأعمال' }
];

/* Projects — the four real concepts from the CV + Wady Le3b brand design.
   No fake URLs: concept-stage projects have no live site, and the CV
   explicitly marks their status. Featured = most complete data. */
const OA_PROJECTS = [
  {
    id: 'daira',
    cat: 'proptech',
    featured: true,
    name: 'DAIRA',
    catLabel: { en: 'PropTech', ar: 'تقنية عقارية' },
    role: { en: 'Product Concept Development & Business Development', ar: 'تطوير مفهوم المنتج وتطوير الأعمال' },
    statusKey: 'statusConcept',
    desc: {
      en: 'A proposed real-estate platform concept. I developed the project concept, core features and proposed operating approach; structured the customer journey and defined key user roles; and organised the product concept into a structured plan covering platform functionality and workflows.',
      ar: 'مفهوم منصة عقارية مقترحة. طوّرت فكرة المشروع وميزاته الأساسية وأسلوب التشغيل المقترح؛ ورسمت رحلة العميل وحددت أدوار المستخدمين الرئيسية؛ ونظمت المفهوم في خطة منظمة تغطي وظائف المنصة وسير العمل.'
    },
    points: {
      en: [
        'Developed the project concept, core features, and proposed operating approach.',
        'Structured the customer journey and defined key user roles across the proposed platform.',
        'Developed concepts for lead management, customer communication, and deal tracking.',
        'Organized the product concept into a structured plan covering platform functionality and workflows.'
      ],
      ar: [
        'طوّرت فكرة المشروع والميزات الأساسية وأسلوب التشغيل المقترح.',
        'رسمت رحلة العميل وحددت أدوار المستخدمين الرئيسية عبر المنصة المقترحة.',
        'طوّرت مفاهيم لإدارة العملاء المحتملين والتواصل معهم وتتبع الصفقات.',
        'نظمت مفهوم المنتج في خطة منظمة تغطي وظائف المنصة وسير العمل.'
      ]
    },
    gallery: [],
    accent: '#C9A15C'
  },
  {
    id: 'carvalue',
    cat: 'automotive',
    featured: true,
    name: 'CarValue',
    catLabel: { en: 'Automotive Technology', ar: 'تقنية سيارات' },
    role: { en: 'Market Research & Business Strategy', ar: 'أبحاث السوق والاستراتيجية' },
    statusKey: 'statusStrategy',
    desc: {
      en: 'A proposed platform focused on used-car valuation and connecting buyers with sellers. I contributed to market research and competitor analysis, worked on business strategy and revenue model development, and helped shape the commercial concept.',
      ar: 'منصة مقترحة تركز على تقييم السيارات المستخدمة وربط المشترين بالبائعين. ساهمت في أبحاث السوق وتحليل المنافسين، وعملت على استراتيجية الأعمال وتطوير نموذج الإيرادات، وساهمت في بناء المفهوم التجاري.'
    },
    points: {
      en: [
        'Contributed to market research and competitor analysis.',
        'Worked on business strategy and revenue model development.',
        'Contributed to the commercial concept for a proposed platform focused on used-car valuation and connecting buyers with sellers.'
      ],
      ar: [
        'ساهمت في أبحاث السوق وتحليل المنافسين.',
        'عملت على استراتيجية الأعمال وتطوير نموذج الإيرادات.',
        'ساهمت في المفهوم التجاري لمنصة مقترحة تركز على تقييم السيارات المستخدمة وربط المشترين بالبائعين.'
      ]
    },
    gallery: [],
    accent: '#7C93B5'
  },
  {
    id: 'banqok',
    cat: 'fintech',
    featured: false,
    name: 'BanqOK',
    catLabel: { en: 'FinTech', ar: 'تقنية مالية' },
    role: { en: 'Business Model Development & Business Planning', ar: 'تطوير نماذج الأعمال والتخطيط' },
    statusKey: 'statusPlanning',
    desc: {
      en: 'A fintech concept carried from business model to funding-ready planning. I contributed to business model development and revenue planning, supported the conceptual planning of the proposed product prototype, and helped prepare a structured business plan intended to support funding discussions.',
      ar: 'مفهوم تقنية مالية تطوّر من نموذج الأعمال إلى تخطيط جاهز للتمويل. ساهمت في تطوير نموذج الأعمال وتخطيط الإيرادات، ودعت التصور المفاهيمي للنموذج الأولي المقترح، وساعدت في إعداد خطة عمل منظمة بهدف دعم النقاشات التمويلية.'
    },
    points: {
      en: [
        'Contributed to business model development and revenue planning.',
        'Supported the conceptual planning of the proposed product prototype.',
        'Helped prepare a structured business plan intended to support funding discussions.'
      ],
      ar: [
        'ساهمت في تطوير نموذج الأعمال وتخطيط الإيرادات.',
        'دعت التصور المفاهيمي للنموذج الأولي المقترح.',
        'ساعدت في إعداد خطة عمل منظمة بهدف دعم النقاشات التمويلية.'
      ]
    },
    gallery: [],
    accent: '#9BB183'
  },
  {
    id: 'ezsouq',
    cat: 'ecommerce',
    featured: false,
    name: 'EZ Souq',
    catLabel: { en: 'E-commerce', ar: 'تجارة إلكترونية' },
    role: { en: 'Market Research & Business Strategy', ar: 'أبحاث السوق والاستراتيجية' },
    statusKey: 'statusResearch',
    desc: {
      en: 'An e-commerce concept built on research first. I contributed to market research and competitor analysis, worked on business model development and commercial strategy, and explored market opportunities, value proposition and potential revenue generation approaches.',
      ar: 'مفهوم تجارة إلكترونية مبني على البحث أولًا. ساهمت في أبحاث السوق وتحليل المنافسين، وعملت على تطوير نموذج الأعمال والاستراتيجية التجارية، ودرست الفرص السوقية وعرض القيمة ومقاربات توليد الإيرادات المحتملة.'
    },
    points: {
      en: [
        'Contributed to market research and competitor analysis.',
        'Worked on business model development and commercial strategy.',
        'Explored market opportunities, value proposition, and potential revenue generation approaches.'
      ],
      ar: [
        'ساهمت في أبحاث السوق وتحليل المنافسين.',
        'عملت على تطوير نموذج الأعمال والاستراتيجية التجارية.',
        'درست الفرص السوقية وعرض القيمة ومقاربات توليد الإيرادات المحتملة.'
      ]
    },
    gallery: [],
    accent: '#B58C7C'
  },
  {
    id: 'wadyle3b',
    cat: 'branding',
    featured: true,
    name: 'Wady Le3b',
    catLabel: { en: 'Brand Identity · Logo Design', ar: 'هوية بصرية · تصميم شعار' },
    role: { en: 'Logo & Brand Identity Designer', ar: 'مصمم الشعار والهوية البصرية' },
    statusKey: 'statusDone',
    desc: {
      en: 'A brand identity and logo I designed: a circular wordmark split by a single horizontal line with a centre point — reading "WADY" above and "LE3B" below. The tagline carries the brand promise: "في أي وقت، مع كل حد" — anytime, with everyone.',
      ar: 'هوية بصرية وشعار صممته: علامة لفظية دائرية يقسمها خط أفقي واحد بنقطة في المنتصف — تُقرأ "WADY" أعلاه و"LE3B" أدناه. والشعار الترويجي يحمل وعد العلامة: «في أي وقت، مع كل حد».'
    },
    points: {
      en: [
        'Designed the circular split logo with a centred dot marking the meeting point.',
        'Built the identity around the tagline "في أي وقت، مع كل حد" (anytime, with everyone).',
        'Delivered a high-contrast black/white system that works at any size.'
      ],
      ar: [
        'صممت الشعار الدائري المنقسم بنقطة في المنتصف ترمز لنقطة اللقاء.',
        'بنيت الهوية حول الشعار الترويجي «في أي وقت، مع كل حد».',
        'أنجزت نظامًا عالي التباين بالأبيض والأسود يعمل بأي حجم.'
      ]
    },
    gallery: [{ src: 'assets/img/wady-le3b-logo.jpg', alt: 'Wady Le3b logo — circular wordmark with tagline' }],
    accent: '#E0DAD0'
  }
];

/* Achievement highlights — only figures printed in the CV/certificates. */
const OA_WINS = [
  { icon: 'check', big: '20+', text: { en: 'Real estate deals personally closed at Golden Development', ar: 'صفقة عقارية أغلقتها بنفسي في Golden Development' } },
  { icon: 'check', big: '60+', text: { en: 'Client meetings conducted to present options and advance sales', ar: 'اجتماع مع العملاء لعرض الخيارات وتقديم الفرص البيعية' } },
  { icon: 'check', big: '150+', text: { en: 'Training hours across 3 CREATIVA / AMIT programs', ar: 'ساعة تدريب عبر 3 برامج من CREATIVA / AMIT' } },
  { icon: 'check', big: '4', text: { en: 'Venture concepts developed: Daira, CarValue, BanqOK, EZ Souq', ar: 'مفاهيم مشاريع: Daira و CarValue و BanqOK و EZ Souq' } }
];

/* Certificates — real files, real names as printed, no translation of names. */
const OA_CERTS = [
  {
    img: 'assets/img/cert-digital-marketing.jpg',
    name: 'Osama Khaled Hassan',
    course: 'Digital Marketing',
    issuer: 'CREATIVA Portsaid · AMIT',
    when: 'March 15 – 21, 2025',
    hours: '35 hours',
    code: 'DM-CIH-PSD-2025-0001',
    alt: 'Certificate of Attendance — Digital Marketing — Osama Khaled Hassan — CREATIVA Portsaid'
  },
  {
    img: 'assets/img/cert-ideation-38h.jpg',
    name: 'Osama Khaled Ahmed',
    course: 'Ideation Bootcamp',
    issuer: 'CREATIVA Portsaid · AMIT',
    when: 'May 9 – 15, 2025',
    hours: '38.5 hours',
    code: 'IBC-CIH-PSD-2025-0006',
    alt: 'Certificate of Appreciation — Ideation Bootcamp — Osama Khaled Ahmed — CREATIVA Portsaid'
  },
  {
    img: 'assets/img/cert-ideation-77h.jpg',
    name: 'Osama Khelad Ahmed',
    course: 'Ideation Bootcamp',
    issuer: 'CREATIVA Portsaid · AMIT',
    when: 'June 25 – July 5, 2025',
    hours: '77 hours',
    code: 'IBC-CIH-PSD-2025-0047',
    alt: 'Certificate of Appreciation — Ideation Bootcamp — Osama Khelad Ahmed — CREATIVA Portsaid'
  }
];
