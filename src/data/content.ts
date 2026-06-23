import type { Locale } from '@/lib/i18n';

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  owner?: string;
  description: string;
  image: string;
  images: string[];
};

type BaseProject = {
  id: string;
  category: string;
  image: string;
  images: string[];
  ownerAr?: string;
  ar: string;
  en: string;
  fr: string;
};


export const company = {
  name: 'VERIX',
  legalName: 'Verix Engineering Consultants',
  email: 'info@verix.sa',
  phone: '+966 56 401 4047',
  secondaryPhone: '+966 56 868 6986',
  whatsapp: '966564014047',
  website: 'www.verix.sa',
  address: {
    ar: 'مكة المكرمة، المملكة العربية السعودية',
    en: 'Makkah, Kingdom of Saudi Arabia',
    fr: 'La Mecque, Royaume d’Arabie saoudite'
  },
  hours: {
    ar: 'الأحد - الخميس: 8 صباحاً - 5 مساءً',
    en: 'Sunday - Thursday: 8:00 AM - 5:00 PM',
    fr: 'Dimanche - jeudi : 8 h 00 - 17 h 00'
  },
  branches: {
    ar: ['المملكة العربية السعودية', 'مصر', 'رواندا', 'اليمن', 'الولايات المتحدة'],
    en: ['Saudi Arabia', 'Egypt', 'Rwanda', 'Yemen', 'United States'],
    fr: ['Arabie saoudite', 'Égypte', 'Rwanda', 'Yémen', 'États-Unis']
  }
};

const ar = {
  meta: {
    title: 'فيريكس للاستشارات الهندسية | نبني المستقبل بدقة هندسية',
    description: 'شركة فيريكس للاستشارات الهندسية تقدم حلولاً هندسية متكاملة تشمل المساحة، رخص البناء، المخططات، الإشراف، الدفاع المدني، التصميم الداخلي والدراسات الفنية.'
  },
  nav: {
    home: 'الرئيسية',
    services: 'الخدمات',
    projects: 'المشاريع',
    about: 'عن الشركة',
    contact: 'تواصل معنا',
    cta: 'ابدأ مشروعك'
  },
  common: {
    discover: 'استكشف المحفظة',
    contact: 'تواصل معنا',
    readMore: 'اعرف المزيد',
    all: 'الكل',
    dark: 'داكن',
    light: 'فاتح',
    language: 'اللغة',
    scroll: 'مرّر للأسفل',
    whatsapp: 'واتساب',
    chatbot: 'مساعد Verix',
    ask: 'اسأل عن الخدمات أو المشاريع أو بيانات التواصل',
    send: 'إرسال'
  },
  home: {
    eyebrow: 'شريكك في البناء والتطوير',
    title: 'نبني المستقبل بدقة هندسية',
    subtitle: 'استشارات هندسية متكاملة تصنع وضوح القرار قبل بداية التنفيذ.',
    description: 'تقدم Verix حلولاً هندسية تجمع بين دقة المخطط، جودة المخرجات، والالتزام المهني؛ من أعمال المساحة ورخص البناء إلى التصميم، الإشراف، الدفاع المدني، والدراسات الفنية المتخصصة.',
    trust: ['مخرجات واضحة قابلة للاعتماد', 'دقة فنية في كل مرحلة', 'حلول عملية قابلة للتنفيذ'],
    metrics: [
      { value: 13, suffix: '+', label: 'خدمة هندسية متخصصة' },
      { value: 20, suffix: '+', label: 'مشروع ضمن المحفظة' },
      { value: 5, suffix: '', label: 'دول ضمن نطاق الحضور' },
      { value: 2026, suffix: '', label: 'ملف تعريفي محدث' }
    ],
    introTitle: 'هندسة تبدأ من قرار واضح',
    introText: 'نساعد العملاء على قراءة الواقع الفني للمشروع، تقليل المخاطر، وتحويل التحديات الهندسية إلى خطوات عملية قابلة للتنفيذ بثقة وكفاءة.',
    featuredServices: 'خدمات رئيسية',
    featuredProjects: 'مختارات من المشاريع'
  },
  about: {
    eyebrow: 'عن Verix',
    title: 'شركة استشارات هندسية تجمع بين الخبرة، الوضوح، والمسؤولية',
    lead: 'Verix شركة استشارات هندسية متخصصة مقرها مكة المكرمة. تعمل الشركة على تقديم حلول هندسية متكاملة تساعد العملاء على اتخاذ قرارات واضحة وموثوقة في مراحل التخطيط، التصميم، التنفيذ، والتطوير.',
    visionTitle: 'الرؤية',
    vision: 'أن تكون Verix شريكاً هندسياً يصنع وضوح القرار قبل بداية التنفيذ، ويحوّل التعقيد الفني إلى مشروعات قابلة للنجاح بثقة وكفاءة واستدامة.',
    missionTitle: 'المهمة',
    mission: 'تقديم خدمات استشارية هندسية قائمة على الدقة والخبرة والمعرفة الفنية، لمساعدة عملائنا على اتخاذ قرارات واضحة وموثوقة في مختلف مراحل المشروع، من التخطيط والتصميم وحتى التنفيذ والتطوير.',
    chairmanTitle: 'رسالة الإدارة',
    chairman: 'نؤمن أن الاستشارات الهندسية ليست مجرد حلول فنية، بل مسؤولية تبدأ من فهم المشروع بعمق وتنتهي بقرارات أكثر دقة ووضوحاً وأثراً.',
    valuesTitle: 'القيم الجوهرية',
    branchesTitle: 'نطاق الحضور',
    accreditationsTitle: 'اعتمادات وتأهيلات',
    accreditations: 'تعكس اعتمادات الشركة وتأهيلاتها الرسمية التزام Verix بالعمل وفق متطلبات الجهات المختصة والمعايير المهنية المعتمدة.'
  },
  servicesPage: {
    eyebrow: 'خدماتنا',
    title: 'حلول هندسية متكاملة من الفكرة إلى الاعتماد والتنفيذ',
    lead: 'نقدم مجموعة من الخدمات الهندسية التي تغطي احتياجات المشاريع السكنية، التجارية، والبنية التحتية، مع التركيز على الدقة، وضوح المخرجات، وسرعة الوصول إلى القرار الصحيح.',
    primary: 'الخدمات الأساسية',
    specialized: 'خدمات استشارية متخصصة'
  },
  projectsPage: {
    eyebrow: 'أعمالنا',
    title: 'محفظة مشاريع مختارة',
    lead: 'استعرض مجموعة مختارة من مشاريع Verix في قطاعات الضيافة، السكني، التجاري، البنية التحتية، ومحطات الوقود. تم تنظيم الصفحة كمعرض مشاريع واضح واحترافي لسهولة التصفح.'
  },
  contactPage: {
    eyebrow: 'تواصل معنا',
    title: 'ابدأ مشروعك باستشارة هندسية واضحة',
    lead: 'شاركنا احتياجك، وسيقوم فريق Verix بمراجعة نطاق المشروع وتوجيهك إلى الخدمة المناسبة.',
    formTitle: 'طلب استشارة',
    name: 'الاسم',
    phone: 'رقم الهاتف',
    service: 'الخدمة المطلوبة',
    message: 'تفاصيل المشروع',
    submit: 'إرسال الطلب',
    note: 'عند إرسال الطلب سيتم فتح واتساب تلقائياً مع بياناتكم ورسالة المشروع لمراجعتها من فريق Verix.'
  },
  values: [
    { title: 'الدقة', description: 'نؤمن أن التفاصيل الهندسية الصغيرة تصنع فرقاً كبيراً في جودة القرار ونجاح المشروع.' },
    { title: 'الموثوقية', description: 'نلتزم بتقديم بيانات واستشارات يمكن الاعتماد عليها في كل مرحلة من مراحل العمل.' },
    { title: 'الوضوح', description: 'نحوّل التعقيدات الفنية إلى معلومات مفهومة تساعد العميل على اتخاذ قرارات صحيحة بثقة.' },
    { title: 'المسؤولية', description: 'نتعامل مع كل مشروع باعتباره التزاماً مهنياً يؤثر على السلامة والجودة والاستدامة.' }
  ],
  categories: {
    all: 'الكل',
    hotels: 'فنادق',
    mixed: 'متعدد الاستخدام',
    residential: 'سكني',
    commercial: 'تجاري',
    infrastructure: 'بنية تحتية',
    fuel: 'محطات وقود'
  },
  services: [
    { id: 'survey', number: '01', title: 'أعمال المساحة', description: 'رفع مساحي دقيق وتحديد الإحداثيات والحدود باستخدام أجهزة وتقنيات متقدمة.' },
    { id: 'permits', number: '02', title: 'رخص البناء', description: 'إدارة إجراءات استخراج وتجديد رخص البناء والتنسيق مع الجهات المختصة بكفاءة.' },
    { id: 'drawings', number: '03', title: 'المخططات الهندسية', description: 'إعداد مخططات معمارية وإنشائية وكهربائية وميكانيكية متكاملة وفق المعايير المعتمدة.' },
    { id: 'modification', number: '04', title: 'الإضافة والتعديل', description: 'تصميم حلول الإضافة والتعديل للمباني القائمة مع مراعاة الأنظمة والاشتراطات.' },
    { id: 'supervision', number: '05', title: 'الإشراف الهندسي', description: 'متابعة تنفيذ المشروع فنياً لضمان الالتزام بالمخططات والمواصفات ومعايير الجودة.' },
    { id: 'interior', number: '06', title: 'التصميم الداخلي', description: 'تصميم مساحات داخلية تجمع بين الجمال والراحة والوظيفة بما يناسب طبيعة المشروع.' },
    { id: 'traffic', number: '07', title: 'الدراسات المرورية', description: 'تحليل الحركة والمداخل والمخارج وتأثير المشروع على شبكة الطرق المحيطة.' },
    { id: 'civil-defense', number: '08', title: 'الدفاع المدني', description: 'إعداد ومراجعة متطلبات السلامة والوقاية من الحريق وتجهيز مستندات الاعتماد.' },
    { id: 'reports', number: '09', title: 'التقارير الهندسية والفنية', description: 'إعداد تقارير ودراسات دقيقة لتقييم الحالة الهندسية ودعم القرار.' },
    { id: 'feasibility', number: '10', title: 'دراسات الجدوى', description: 'تحليل الجوانب الفنية والتكلفة والمخاطر قبل بدء التنفيذ.' },
    { id: 'value', number: '11', title: 'الهندسة القيمية', description: 'رفع كفاءة المشروع وتقليل التكاليف دون التأثير على الجودة أو الأداء.' },
    { id: 'geology', number: '12', title: 'الدراسات الجيولوجية والهيدرولوجية', description: 'دراسة طبيعة الأرض والمياه السطحية والجوفية لدعم قرارات الموقع.' },
    { id: 'inspection', number: '13', title: 'الكشف على المباني', description: 'فحص حالة المباني وتحديد المشكلات الإنشائية أو الفنية بدقة.' },
    { id: 'arbitration', number: '14', title: 'التحكيم الهندسي', description: 'تقديم آراء فنية محايدة لدعم حل النزاعات الهندسية وفق المعايير المهنية.' }
  ],
  chat: {
    welcome: 'مرحباً، أنا مساعد Verix. يمكنني الإجابة عن الخدمات، المشاريع، الفروع، الاعتمادات، وبيانات التواصل.',
    placeholder: 'اكتب سؤالك هنا...',
    suggestions: ['ما هي خدمات Verix؟', 'كيف أتواصل مع الشركة؟', 'ما هي فروع الشركة؟'],
    fallback: 'يمكنني مساعدتك في معلومات Verix الأساسية: الخدمات، المشاريع، الفروع، الاعتمادات، وبيانات التواصل.'
  }
};

const en = {
  meta: {
    title: 'Verix Engineering Consultants | Building the Future with Engineering Precision',
    description: 'Verix Engineering Consultants delivers integrated engineering services including surveying, building permits, drawings, supervision, civil defense, interior design and technical studies.'
  },
  nav: { home: 'Home', services: 'Services', projects: 'Projects', about: 'About', contact: 'Contact', cta: 'Start a Project' },
  common: { discover: 'Explore Portfolio', contact: 'Contact Us', readMore: 'Discover More', all: 'All', dark: 'Dark', light: 'Light', language: 'Language', scroll: 'Scroll', whatsapp: 'WhatsApp', chatbot: 'Verix Assistant', ask: 'Ask about services, projects or contact details', send: 'Send' },
  home: {
    eyebrow: 'Your partner in building and development',
    title: 'Building the Future with Engineering Precision',
    subtitle: 'Integrated engineering consultancy that brings clarity before execution.',
    description: 'Verix delivers engineering solutions that combine precise planning, reliable outputs and professional commitment; from surveying and building permits to design, supervision, civil defense and specialized technical studies.',
    trust: ['Clear outputs ready for approval', 'Technical precision at every stage', 'Practical solutions ready for execution'],
    metrics: [
      { value: 13, suffix: '+', label: 'Specialized engineering services' },
      { value: 20, suffix: '+', label: 'Projects in the portfolio' },
      { value: 5, suffix: '', label: 'Countries of presence' },
      { value: 2026, suffix: '', label: 'Updated company profile' }
    ],
    introTitle: 'Engineering begins with a clear decision',
    introText: 'We help clients understand the technical reality of each project, reduce risk and turn engineering challenges into practical steps with confidence and efficiency.',
    featuredServices: 'Core Services',
    featuredProjects: 'Selected Projects'
  },
  about: {
    eyebrow: 'About Verix',
    title: 'An engineering consultancy built on experience, clarity and responsibility',
    lead: 'Verix is a specialized engineering consultancy based in Makkah. The company provides integrated engineering solutions that help clients make clear and reliable decisions across planning, design, execution and development stages.',
    visionTitle: 'Vision',
    vision: 'To be an engineering partner that creates decision clarity before execution and turns technical complexity into successful projects with confidence, efficiency and sustainability.',
    missionTitle: 'Mission',
    mission: 'To provide engineering consultancy services built on precision, experience and technical knowledge, helping clients make clear and reliable decisions throughout the project lifecycle.',
    chairmanTitle: 'Management Message',
    chairman: 'We believe engineering consultancy is not merely technical solutions; it is a responsibility that starts with a deep understanding of the project and ends with decisions that are clearer, more accurate and more impactful.',
    valuesTitle: 'Core Values',
    branchesTitle: 'Geographic Presence',
    accreditationsTitle: 'Accreditations & Qualifications',
    accreditations: 'The company’s official accreditations and qualifications reflect Verix’s commitment to working in line with regulatory requirements and professional standards.'
  },
  servicesPage: {
    eyebrow: 'Our Services',
    title: 'Integrated engineering solutions from concept to approval and execution',
    lead: 'We provide engineering services for residential, commercial and infrastructure projects, focusing on precision, clear deliverables and faster access to the right decision.',
    primary: 'Core Services',
    specialized: 'Specialized Consulting Services'
  },
  projectsPage: {
    eyebrow: 'Our Work',
    title: 'Selected Project Portfolio',
    lead: 'Browse a curated selection of Verix projects across hospitality, residential, commercial, infrastructure and fuel-station sectors, presented in a clear and professional portfolio format.'
  },
  contactPage: {
    eyebrow: 'Contact',
    title: 'Start your project with a clear engineering consultation',
    lead: 'Share your requirements and the Verix team will review the scope and guide you to the most suitable service.',
    formTitle: 'Consultation Request',
    name: 'Name',
    phone: 'Phone Number',
    service: 'Required Service',
    message: 'Project Details',
    submit: 'Submit Request',
    note: 'When you submit the request, WhatsApp will open automatically with your details and project message ready to send to the Verix team.'
  },
  values: [
    { title: 'Precision', description: 'Small engineering details make a major difference in decision quality and project success.' },
    { title: 'Reliability', description: 'We deliver data and consultancy outputs that clients can rely on at every stage.' },
    { title: 'Clarity', description: 'We translate technical complexity into understandable information that supports confident decisions.' },
    { title: 'Responsibility', description: 'Every project is treated as a professional commitment that affects safety, quality and sustainability.' }
  ],
  categories: { all: 'All', hotels: 'Hotels', mixed: 'Mixed Use', residential: 'Residential', commercial: 'Commercial', infrastructure: 'Infrastructure', fuel: 'Fuel Stations' },
  services: [
    { id: 'survey', number: '01', title: 'Surveying Works', description: 'Accurate site surveying, coordinates and boundary definition using advanced tools and techniques.' },
    { id: 'permits', number: '02', title: 'Building Permits', description: 'Managing building permit issuance and renewal procedures with the relevant authorities.' },
    { id: 'drawings', number: '03', title: 'Engineering Drawings', description: 'Integrated architectural, structural, electrical and mechanical drawings prepared to approved standards.' },
    { id: 'modification', number: '04', title: 'Additions & Modifications', description: 'Design solutions for additions and modifications to existing buildings in line with regulations.' },
    { id: 'supervision', number: '05', title: 'Engineering Supervision', description: 'Technical follow-up to ensure implementation aligns with drawings, specifications and quality standards.' },
    { id: 'interior', number: '06', title: 'Interior Design', description: 'Interior spaces that balance beauty, comfort and functionality according to the nature of the project.' },
    { id: 'traffic', number: '07', title: 'Traffic Studies', description: 'Analysis of movement, entrances, exits and project impact on the surrounding road network.' },
    { id: 'civil-defense', number: '08', title: 'Civil Defense', description: 'Preparing and reviewing fire safety requirements and technical documents for approval.' },
    { id: 'reports', number: '09', title: 'Engineering & Technical Reports', description: 'Precise technical reports and studies for engineering assessment and decision support.' },
    { id: 'feasibility', number: '10', title: 'Feasibility Studies', description: 'Analysis of technical aspects, cost and risks before execution begins.' },
    { id: 'value', number: '11', title: 'Value Engineering', description: 'Improving project efficiency and reducing cost without affecting quality or performance.' },
    { id: 'geology', number: '12', title: 'Geological & Hydrological Studies', description: 'Studying soil, surface water and groundwater conditions to support site decisions.' },
    { id: 'inspection', number: '13', title: 'Building Inspection', description: 'Inspecting building condition and identifying structural or technical issues accurately.' },
    { id: 'arbitration', number: '14', title: 'Engineering Arbitration', description: 'Neutral technical opinions to support engineering dispute resolution according to professional standards.' }
  ],
  chat: { welcome: 'Hello, I am the Verix Assistant. I can answer questions about services, projects, branches, accreditations and contact details.', placeholder: 'Type your question...', suggestions: ['What services does Verix provide?', 'How can I contact the company?', 'Where does Verix operate?'], fallback: 'I can help with core Verix information: services, projects, branches, accreditations and contact details.' }
};

const fr = {
  meta: {
    title: 'Verix Engineering Consultants | Construire l’avenir avec précision d’ingénierie',
    description: 'Verix Engineering Consultants propose des services d’ingénierie intégrés : topographie, permis de construire, plans, supervision, défense civile, design intérieur et études techniques.'
  },
  nav: { home: 'Accueil', services: 'Services', projects: 'Projets', about: 'À propos', contact: 'Contact', cta: 'Démarrer un projet' },
  common: { discover: 'Voir le portefeuille', contact: 'Nous contacter', readMore: 'En savoir plus', all: 'Tous', dark: 'Sombre', light: 'Clair', language: 'Langue', scroll: 'Défiler', whatsapp: 'WhatsApp', chatbot: 'Assistant Verix', ask: 'Posez une question sur les services, les projets ou le contact', send: 'Envoyer' },
  home: {
    eyebrow: 'Votre partenaire pour la construction et le développement',
    title: 'Construire l’avenir avec précision d’ingénierie',
    subtitle: 'Un conseil en ingénierie intégré qui apporte de la clarté avant l’exécution.',
    description: 'Verix fournit des solutions d’ingénierie qui combinent planification précise, livrables fiables et engagement professionnel ; de la topographie et des permis de construire au design, à la supervision, à la défense civile et aux études techniques spécialisées.',
    trust: ['Livrables clairs prêts à l’approbation', 'Précision technique à chaque étape', 'Solutions pratiques prêtes à l’exécution'],
    metrics: [
      { value: 13, suffix: '+', label: 'Services d’ingénierie spécialisés' },
      { value: 20, suffix: '+', label: 'Projets dans le portefeuille' },
      { value: 5, suffix: '', label: 'Pays de présence' },
      { value: 2026, suffix: '', label: 'Profil d’entreprise mis à jour' }
    ],
    introTitle: 'L’ingénierie commence par une décision claire',
    introText: 'Nous aidons les clients à comprendre la réalité technique du projet, à réduire les risques et à transformer les défis d’ingénierie en étapes pratiques, avec confiance et efficacité.',
    featuredServices: 'Services clés',
    featuredProjects: 'Projets sélectionnés'
  },
  about: {
    eyebrow: 'À propos de Verix',
    title: 'Un cabinet de conseil en ingénierie fondé sur l’expérience, la clarté et la responsabilité',
    lead: 'Verix est un cabinet de conseil en ingénierie intégrée basé à La Mecque. L’entreprise propose des solutions intégrées qui aident les clients à prendre des décisions claires et fiables aux étapes de planification, de conception, d’exécution et de développement.',
    visionTitle: 'Vision',
    vision: 'Être un partenaire d’ingénierie qui crée la clarté décisionnelle avant l’exécution et transforme la complexité technique en projets réussis avec confiance, efficacité et durabilité.',
    missionTitle: 'Mission',
    mission: 'Fournir des services de conseil en ingénierie fondés sur la précision, l’expérience et la connaissance technique, afin d’aider les clients à prendre des décisions claires et fiables tout au long du cycle de vie du projet.',
    chairmanTitle: 'Message de la direction',
    chairman: 'Nous croyons que le conseil en ingénierie n’est pas seulement une solution technique ; c’est une responsabilité qui commence par une compréhension approfondie du projet et se termine par des décisions plus claires, plus précises et plus utiles.',
    valuesTitle: 'Valeurs fondamentales',
    branchesTitle: 'Présence géographique',
    accreditationsTitle: 'Accréditations et qualifications',
    accreditations: 'Les accréditations et qualifications officielles de l’entreprise reflètent l’engagement de Verix à travailler conformément aux exigences réglementaires et aux standards professionnels.'
  },
  servicesPage: {
    eyebrow: 'Nos services',
    title: 'Des solutions d’ingénierie intégrées, du concept à l’approbation et à l’exécution',
    lead: 'Nous fournissons des services pour les projets résidentiels, commerciaux et d’infrastructure, avec un accent sur la précision, la clarté des livrables et la rapidité d’accès à la bonne décision.',
    primary: 'Services clés',
    specialized: 'Services de conseil spécialisés'
  },
  projectsPage: {
    eyebrow: 'Nos réalisations',
    title: 'Portefeuille de projets sélectionnés',
    lead: 'Découvrez une sélection de projets Verix dans les secteurs hôtelier, résidentiel, commercial, infrastructurel et des stations-service, présentés dans un format clair et professionnel.'
  },
  contactPage: {
    eyebrow: 'Contact',
    title: 'Démarrez votre projet avec une consultation d’ingénierie claire',
    lead: 'Partagez votre besoin ; l’équipe Verix examinera le périmètre et vous orientera vers le service le plus adapté.',
    formTitle: 'Demande de consultation',
    name: 'Nom',
    phone: 'Numéro de téléphone',
    service: 'Service demandé',
    message: 'Détails du projet',
    submit: 'Envoyer la demande',
    note: 'Après l’envoi, WhatsApp s’ouvrira automatiquement avec vos informations et votre message prêts à être envoyés à l’équipe Verix.'
  },
  values: [
    { title: 'Précision', description: 'Les petits détails d’ingénierie font une grande différence dans la qualité de la décision et la réussite du projet.' },
    { title: 'Fiabilité', description: 'Nous fournissons des données et des livrables de conseil sur lesquels les clients peuvent s’appuyer à chaque étape.' },
    { title: 'Clarté', description: 'Nous transformons la complexité technique en informations compréhensibles qui soutiennent des décisions confiantes.' },
    { title: 'Responsabilité', description: 'Chaque projet est traité comme un engagement professionnel qui influence la sécurité, la qualité et la durabilité.' }
  ],
  categories: { all: 'Tous', hotels: 'Hôtels', mixed: 'Usage mixte', residential: 'Résidentiel', commercial: 'Commercial', infrastructure: 'Infrastructure', fuel: 'Stations-service' },
  services: [
    { id: 'survey', number: '01', title: 'Travaux topographiques', description: 'Levé topographique précis, coordonnées et limites du terrain avec des outils et techniques avancés.' },
    { id: 'permits', number: '02', title: 'Permis de construire', description: 'Gestion des procédures d’obtention et de renouvellement des permis auprès des autorités compétentes.' },
    { id: 'drawings', number: '03', title: 'Plans d’ingénierie', description: 'Plans architecturaux, structurels, électriques et mécaniques intégrés selon les standards approuvés.' },
    { id: 'modification', number: '04', title: 'Extensions et modifications', description: 'Solutions de conception pour les extensions et modifications de bâtiments existants selon la réglementation.' },
    { id: 'supervision', number: '05', title: 'Supervision d’ingénierie', description: 'Suivi technique pour garantir une exécution conforme aux plans, aux spécifications et aux standards de qualité.' },
    { id: 'interior', number: '06', title: 'Design intérieur', description: 'Espaces intérieurs qui équilibrent esthétique, confort et fonctionnalité selon la nature du projet.' },
    { id: 'traffic', number: '07', title: 'Études de circulation', description: 'Analyse des flux, des accès, des sorties et de l’impact du projet sur le réseau routier environnant.' },
    { id: 'civil-defense', number: '08', title: 'Défense civile', description: 'Préparation et révision des exigences de sécurité incendie et des documents techniques d’approbation.' },
    { id: 'reports', number: '09', title: 'Rapports techniques et d’ingénierie', description: 'Rapports et études techniques précis pour l’évaluation d’ingénierie et l’aide à la décision.' },
    { id: 'feasibility', number: '10', title: 'Études de faisabilité', description: 'Analyse des aspects techniques, des coûts et des risques avant le début de l’exécution.' },
    { id: 'value', number: '11', title: 'Ingénierie de la valeur', description: 'Amélioration de l’efficacité du projet et réduction des coûts sans compromettre la qualité ni la performance.' },
    { id: 'geology', number: '12', title: 'Études géologiques et hydrologiques', description: 'Étude du sol, des eaux de surface et des eaux souterraines pour soutenir les décisions liées au site.' },
    { id: 'inspection', number: '13', title: 'Inspection des bâtiments', description: 'Évaluation de l’état des bâtiments et identification précise des problèmes structurels ou techniques.' },
    { id: 'arbitration', number: '14', title: 'Arbitrage d’ingénierie', description: 'Avis techniques neutres pour soutenir le règlement des différends d’ingénierie selon les standards professionnels.' }
  ],
  chat: { welcome: 'Bonjour, je suis l’assistant Verix. Je peux répondre aux questions sur les services, les projets, les branches, les accréditations et les coordonnées.', placeholder: 'Écrivez votre question...', suggestions: ['Quels services propose Verix ?', 'Comment contacter l’entreprise ?', 'Où Verix est-elle présente ?'], fallback: 'Je peux vous aider avec les informations clés de Verix : services, projets, branches, accréditations et coordonnées.' }
};

const baseProjects: BaseProject[] = [
  { id: 'samarn-hotel', category: 'hotels', image: '/images/project-gallery/project-01-01.webp', images: ['/images/project-gallery/project-01-01.webp', '/images/project-gallery/project-01-02.webp', '/images/project-gallery/project-01-03.webp', '/images/project-gallery/project-01-04.webp'], ownerAr: 'الشيخ محمد الغماس', ar: 'فندق وقف سمارن التجاري السكني', en: 'Waqf Samarn Commercial Residential Hotel', fr: 'Hôtel résidentiel et commercial Waqf Samarn' },
  { id: 'al-rajhi-hotel', category: 'hotels', image: '/images/project-gallery/project-02-01.webp', images: ['/images/project-gallery/project-02-01.webp', '/images/project-gallery/project-02-02.webp', '/images/project-gallery/project-02-03.webp', '/images/project-gallery/project-02-04.webp', '/images/project-gallery/project-02-05.webp'], ar: 'فندق الراجحي', en: 'Al Rajhi Hotel', fr: 'Hôtel Al Rajhi' },
  { id: 'samarn-waqf', category: 'mixed', image: '/images/project-gallery/project-03-01.webp', images: ['/images/project-gallery/project-03-01.webp', '/images/project-gallery/project-03-02.webp'], ar: 'مشروع وقف سمارن', en: 'Smarn Waqf Project', fr: 'Projet Waqf Smarn' },
  { id: 'al-nimri-waqf', category: 'mixed', image: '/images/project-gallery/project-04-01.webp', images: ['/images/project-gallery/project-04-01.webp', '/images/project-gallery/project-04-02.webp', '/images/project-gallery/project-04-03.webp', '/images/project-gallery/project-04-04.webp'], ar: 'وقف النمري', en: 'Al-Nimri Waqf', fr: 'Waqf Al-Nimri' },
  { id: 'sabbagh', category: 'mixed', image: '/images/project-gallery/project-05-01.webp', images: ['/images/project-gallery/project-05-01.webp', '/images/project-gallery/project-05-02.webp', '/images/project-gallery/project-05-03.webp', '/images/project-gallery/project-05-04.webp', '/images/project-gallery/project-05-05.webp'], ar: 'مشروع ورثة محمود عبدالغني صباغ', en: 'Mahmoud Abdulghani Sabbagh Heirs Project', fr: 'Projet des héritiers Mahmoud Abdulghani Sabbagh' },
  { id: 'alrowada', category: 'residential', image: '/images/project-gallery/project-06-01.webp', images: ['/images/project-gallery/project-06-01.webp', '/images/project-gallery/project-06-02.webp', '/images/project-gallery/project-06-03.webp', '/images/project-gallery/project-06-04.webp'], ar: 'مشروع الروضة', en: 'Al Rowada Project', fr: 'Projet Al Rowada' },
  { id: 'desalination', category: 'infrastructure', image: '/images/project-gallery/project-07-01.webp', images: ['/images/project-gallery/project-07-01.webp', '/images/project-gallery/project-07-02.webp', '/images/project-gallery/project-07-03.webp', '/images/project-gallery/project-07-04.webp'], ar: 'مشروع محطة تحلية مياه البحر', en: 'Sea Water Desalination Station Project', fr: 'Projet de station de dessalement d’eau de mer' },
  { id: 'al-shalawi-mall', category: 'commercial', image: '/images/project-gallery/project-08-03.webp', images: ['/images/project-gallery/project-08-03.webp', '/images/project-gallery/project-08-01.webp', '/images/project-gallery/project-08-02.webp'], ar: 'مول الشلاوي', en: 'Al-Shalawi Mall', fr: 'Centre commercial Al-Shalawi' },
  { id: 'dam-residence', category: 'residential', image: '/images/project-gallery/project-09-01.webp', images: ['/images/project-gallery/project-09-01.webp', '/images/project-gallery/project-09-02.webp', '/images/project-gallery/project-09-03.webp', '/images/project-gallery/project-09-04.webp'], ar: 'مجمع دام ريزيدنس السكني', en: 'Dam Residence Complex', fr: 'Complexe résidentiel Dam Residence' },
  { id: 'omran-al-dam', category: 'commercial', image: '/images/project-gallery/project-10-01.webp', images: ['/images/project-gallery/project-10-01.webp', '/images/project-gallery/project-10-02.webp', '/images/project-gallery/project-10-03.webp', '/images/project-gallery/project-10-04.webp'], ar: 'برج شركة أملاك دام العمران', en: 'Amlak Dam Al Omran Tower', fr: 'Tour Amlak Dam Al Omran' },
  { id: 'station-1', category: 'fuel', image: '/images/project-gallery/project-11-01.webp', images: ['/images/project-gallery/project-11-01.webp', '/images/project-gallery/project-11-02.webp', '/images/project-gallery/project-11-03.webp'], ownerAr: 'عابد الصاعدي', ar: 'محطة وقود — عابد الصاعدي', en: 'Fuel Station — Abed Al-Saadi', fr: 'Station-service — Abed Al-Saadi' },
  { id: 'station-2', category: 'fuel', image: '/images/project-gallery/project-12-02.webp', images: ['/images/project-gallery/project-12-02.webp', '/images/project-gallery/project-12-03.webp'], ownerAr: 'خاطر الزهراني', ar: 'محطة وقود — خاطر الزهراني', en: 'Fuel Station — Khater Al-Zahrani', fr: 'Station-service — Khater Al-Zahrani' },
  { id: 'sasco', category: 'fuel', image: '/images/project-gallery/project-13-01.webp', images: ['/images/project-gallery/project-13-01.webp', '/images/project-gallery/project-13-02.webp', '/images/project-gallery/project-13-03.webp', '/images/project-gallery/project-13-04.webp'], ownerAr: 'ورثة حسين عريشي', ar: 'محطة ساسكو', en: 'SASCO Station', fr: 'Station SASCO' },
  { id: 'drive-thru', category: 'commercial', image: '/images/project-gallery/project-14-01.webp', images: ['/images/project-gallery/project-14-01.webp', '/images/project-gallery/project-14-02.webp', '/images/project-gallery/project-14-03.webp', '/images/project-gallery/project-14-04.webp'], ownerAr: 'ورثة حسن مطهر', ar: 'مشروع درايف ثرو', en: 'Drive-Thru Project', fr: 'Projet Drive-Thru' },
  { id: 'station-3', category: 'fuel', image: '/images/project-gallery/project-15-01.webp', images: ['/images/project-gallery/project-15-01.webp', '/images/project-gallery/project-15-02.webp', '/images/project-gallery/project-15-03.webp', '/images/project-gallery/project-15-04.webp'], ownerAr: 'الشيخ صالح الغامدي', ar: 'محطة وقود — الشيخ صالح الغامدي', en: 'Fuel Station — Sheikh Saleh Al-Ghamdi', fr: 'Station-service — Sheikh Saleh Al-Ghamdi' },
  { id: 'station-4', category: 'fuel', image: '/images/project-gallery/project-16-01.webp', images: ['/images/project-gallery/project-16-01.webp', '/images/project-gallery/project-16-02.webp', '/images/project-gallery/project-16-03.webp', '/images/project-gallery/project-16-04.webp'], ownerAr: 'عابد عبد ربه هاشم القرشي', ar: 'محطة وقود — عابد عبد ربه هاشم القرشي', en: 'Fuel Station — Abed Abdulraboh Hashem Al-Qurashi', fr: 'Station-service — Abed Abdulraboh Hashem Al-Qurashi' },
  { id: 'station-5', category: 'fuel', image: '/images/project-gallery/project-17-01.webp', images: ['/images/project-gallery/project-17-01.webp', '/images/project-gallery/project-17-02.webp', '/images/project-gallery/project-17-03.webp', '/images/project-gallery/project-17-04.webp'], ownerAr: 'سلمان بن عليان المطرفي', ar: 'محطة وقود — سلمان بن عليان المطرفي', en: 'Fuel Station — Salman bin Alyan Al-Mutairfi', fr: 'Station-service — Salman bin Alyan Al-Mutairfi' },
  { id: 'fifth-settlement', category: 'commercial', image: '/images/project-gallery/project-18-01.webp', images: ['/images/project-gallery/project-18-01.webp', '/images/project-gallery/project-18-02.webp', '/images/project-gallery/project-18-03.webp', '/images/project-gallery/project-18-04.webp'], ar: 'مجمع تجاري — التجمع الخامس', en: 'Commercial Complex — Fifth Settlement', fr: 'Complexe commercial — Fifth Settlement' },
  { id: 'nac-residential-1', category: 'residential', image: '/images/project-gallery/project-19-01.webp', images: ['/images/project-gallery/project-19-01.webp', '/images/project-gallery/project-19-02.webp', '/images/project-gallery/project-19-03.webp', '/images/project-gallery/project-19-04.webp'], ar: 'مشروع سكني — العاصمة الإدارية الجديدة', en: 'Residential Project — New Administrative Capital', fr: 'Projet résidentiel — Nouvelle capitale administrative' },
  { id: 'nac-residential-2', category: 'residential', image: '/images/project-gallery/project-20-01.webp', images: ['/images/project-gallery/project-20-01.webp', '/images/project-gallery/project-20-02.webp', '/images/project-gallery/project-20-03.webp', '/images/project-gallery/project-20-04.webp'], ar: 'مشروع سكني بالعاصمة الإدارية', en: 'Residential Development in the New Administrative Capital', fr: 'Développement résidentiel dans la nouvelle capitale administrative' },
  { id: 'nac-residential-3', category: 'residential', image: '/images/project-gallery/project-21-01.webp', images: ['/images/project-gallery/project-21-01.webp', '/images/project-gallery/project-21-02.webp', '/images/project-gallery/project-21-03.webp', '/images/project-gallery/project-21-04.webp'], ar: 'أعمال سكنية — العاصمة الإدارية', en: 'Residential Works — New Administrative Capital', fr: 'Travaux résidentiels — Nouvelle capitale administrative' }
];


function projectDescription(locale: Locale, project: BaseProject) {
  const descriptions: Record<string, Record<Locale, string>> = {
    'samarn-hotel': {
      ar: 'مشروع ضيافة متعدد الاستخدامات يجمع بين الاستخدام التجاري والسكني، ويتطلب تنسيقاً دقيقاً بين التخطيط المعماري، متطلبات التشغيل، ومعايير السلامة والاعتماد.',
      en: 'A mixed-use hospitality project combining commercial and residential functions, requiring careful coordination between architectural planning, operational needs and approval requirements.',
      fr: 'Un projet hôtelier mixte associant fonctions commerciales et résidentielles, nécessitant une coordination précise entre planification architecturale, exploitation et exigences d’approbation.'
    },
    'al-rajhi-hotel': {
      ar: 'مشروع فندقي يبرز أهمية وضوح المخططات وتكامل الأعمال الهندسية لضمان تجربة تشغيلية منظمة وجودة تنفيذ قابلة للاعتماد.',
      en: 'A hospitality project highlighting the importance of clear drawings and integrated engineering coordination to support organized operation and reliable delivery.',
      fr: 'Un projet hôtelier qui souligne l’importance de plans clairs et d’une coordination d’ingénierie intégrée pour une exploitation organisée et une livraison fiable.'
    },
    'samarn-waqf': {
      ar: 'مشروع وقف يتطلب حلولاً هندسية عملية تراعي طبيعة الاستخدام، كفاءة المساحات، ووضوح المتطلبات الفنية قبل مراحل التنفيذ.',
      en: 'A waqf development requiring practical engineering solutions that consider use requirements, space efficiency and clear technical outputs before execution.',
      fr: 'Un projet de waqf nécessitant des solutions d’ingénierie pratiques, adaptées aux usages, à l’efficacité des espaces et à la clarté des livrables techniques.'
    },
    'al-nimri-waqf': {
      ar: 'مشروع وقفي متعدد المتطلبات يعكس خبرة Verix في تنظيم المدخلات الفنية وتحويلها إلى مخططات ومخرجات قابلة للاعتماد.',
      en: 'A waqf project with multiple requirements, reflecting Verix’s ability to organize technical inputs and turn them into clear, approval-ready deliverables.',
      fr: 'Un projet de waqf aux exigences multiples, illustrant la capacité de Verix à structurer les données techniques en livrables clairs et validables.'
    },
    sabbagh: {
      ar: 'مشروع أعمال خاصة يتطلب معالجة هندسية متوازنة بين المتطلبات التصميمية، الجدوى الفنية، وجودة المخرجات النهائية.',
      en: 'A private portfolio project requiring balanced engineering treatment across design requirements, technical feasibility and final deliverable quality.',
      fr: 'Un projet privé nécessitant un équilibre entre exigences de conception, faisabilité technique et qualité des livrables finaux.'
    },
    alrowada: {
      ar: 'مشروع سكني يركز على كفاءة التخطيط، جودة المخططات، وتقديم حلول واضحة تساعد على تنفيذ مراحل العمل بثقة.',
      en: 'A residential project focused on planning efficiency, drawing quality and clear solutions that support confident execution across project stages.',
      fr: 'Un projet résidentiel axé sur l’efficacité de la planification, la qualité des plans et des solutions claires pour une exécution maîtrisée.'
    },
    desalination: {
      ar: 'مشروع بنية تحتية لمحطة تحلية مياه البحر يتطلب دراسة فنية دقيقة وتنسيقاً هندسياً مع طبيعة المنشأة ومتطلبات الجهات المختصة.',
      en: 'An infrastructure project for a seawater desalination station, requiring precise technical study and engineering coordination aligned with facility and authority requirements.',
      fr: 'Un projet d’infrastructure pour une station de dessalement, nécessitant une étude technique précise et une coordination adaptée aux exigences de l’installation.'
    },
    'al-shalawi-mall': {
      ar: 'مشروع تجاري يتطلب وضوحاً في الحركة الداخلية والخارجية، تنظيم المساحات، وتنسيقاً فنياً يخدم تجربة الزوار وكفاءة التشغيل.',
      en: 'A commercial project requiring clear internal and external movement, efficient space organization and technical coordination for visitor experience and operations.',
      fr: 'Un projet commercial nécessitant une circulation claire, une organisation efficace des espaces et une coordination technique au service de l’exploitation.'
    },
    'dam-residence': {
      ar: 'مجمع سكني يعكس أهمية التكامل بين التخطيط المعماري، المخططات التنفيذية، ومتطلبات الجودة لتحقيق بيئة سكنية منظمة.',
      en: 'A residential complex reflecting the need for integrated architectural planning, execution drawings and quality requirements to create an organized living environment.',
      fr: 'Un complexe résidentiel illustrant l’intégration de la planification, des plans d’exécution et des exigences de qualité.'
    },
    'omran-al-dam': {
      ar: 'مشروع برج تجاري يتطلب تنسيقاً هندسياً دقيقاً بين المتطلبات المعمارية والإنشائية وأنظمة التشغيل والسلامة.',
      en: 'A commercial tower project requiring precise coordination between architectural, structural, operational and safety requirements.',
      fr: 'Un projet de tour commerciale nécessitant une coordination précise entre architecture, structure, exploitation et sécurité.'
    },
    'drive-thru': {
      ar: 'مشروع درايف ثرو يركز على تنظيم الحركة، سهولة الوصول، وضمان توافق التصميم مع متطلبات التشغيل والسلامة.',
      en: 'A drive-thru project focused on movement organization, accessibility and alignment between design, operational and safety requirements.',
      fr: 'Un projet drive-thru axé sur l’organisation des flux, l’accessibilité et l’adéquation entre conception, exploitation et sécurité.'
    },
    'fifth-settlement': {
      ar: 'مجمع تجاري في التجمع الخامس يركز على كفاءة التوزيع، وضوح المخططات، وتقديم تجربة تجارية منظمة قابلة للتطوير.',
      en: 'A commercial complex in the Fifth Settlement focused on efficient layout, clear drawings and a scalable commercial experience.',
      fr: 'Un complexe commercial au Fifth Settlement, axé sur l’efficacité de l’aménagement, la clarté des plans et une expérience commerciale évolutive.'
    },
    'nac-residential-1': {
      ar: 'مشروع سكني في العاصمة الإدارية الجديدة يعكس خبرة في تنظيم المتطلبات التصميمية وتقديم مخرجات هندسية واضحة للمشروعات الحديثة.',
      en: 'A residential project in the New Administrative Capital, reflecting experience in organizing design requirements and delivering clear engineering outputs for modern developments.',
      fr: 'Un projet résidentiel dans la nouvelle capitale administrative, reflétant une expertise dans la structuration des exigences de conception.'
    },
    'nac-residential-2': {
      ar: 'تطوير سكني بالعاصمة الإدارية يعتمد على وضوح التخطيط، جودة العرض الهندسي، وتنسيق العناصر الفنية قبل التنفيذ.',
      en: 'A residential development in the New Administrative Capital built around planning clarity, engineering presentation quality and technical coordination before execution.',
      fr: 'Un développement résidentiel fondé sur la clarté de la planification, la qualité de la présentation technique et la coordination avant exécution.'
    },
    'nac-residential-3': {
      ar: 'أعمال سكنية حديثة تتطلب مخرجات هندسية دقيقة تساعد على اعتماد المشروع وتنظيم مراحل التنفيذ بكفاءة.',
      en: 'Modern residential works requiring precise engineering deliverables that support approval and efficient execution planning.',
      fr: 'Des travaux résidentiels modernes nécessitant des livrables précis pour faciliter l’approbation et l’organisation de l’exécution.'
    }
  };

  const fuelText = {
    ar: 'مشروع محطة وقود يتطلب مراعاة اشتراطات السلامة، حركة المركبات، المداخل والمخارج، والتنسيق مع متطلبات الدفاع المدني والجهات المختصة.',
    en: 'A fuel-station project requiring careful consideration of safety requirements, vehicle circulation, access points and coordination with civil defense and regulatory standards.',
    fr: 'Un projet de station-service nécessitant une prise en compte précise de la sécurité, des flux véhicules, des accès et des exigences réglementaires.'
  } as const;

  const categoryText: Record<string, Record<Locale, string>> = {
    hotels: {
      ar: 'مشروع ضيافة يتطلب تكاملاً بين المخططات المعمارية، متطلبات التشغيل، ومعايير الجودة لضمان تجربة استخدام واضحة ومنظمة.',
      en: 'A hospitality project requiring integration between architectural drawings, operational requirements and quality standards.',
      fr: 'Un projet hôtelier nécessitant l’intégration des plans, des exigences d’exploitation et des standards de qualité.'
    },
    mixed: {
      ar: 'مشروع متعدد الاستخدام يتطلب وضوحاً في توزيع الوظائف، كفاءة المساحات، وتنسيقاً فنياً بين الاستخدامات المختلفة.',
      en: 'A mixed-use project requiring clear functional distribution, space efficiency and technical coordination between different uses.',
      fr: 'Un projet mixte nécessitant une répartition claire des fonctions, l’efficacité des espaces et une coordination technique.'
    },
    residential: {
      ar: 'مشروع سكني يركز على كفاءة التخطيط، جودة المخططات، ووضوح مراحل التنفيذ بما يدعم بيئة سكنية عملية ومنظمة.',
      en: 'A residential project focused on planning efficiency, drawing quality and clear execution stages for an organized living environment.',
      fr: 'Un projet résidentiel axé sur l’efficacité de la planification, la qualité des plans et la clarté de l’exécution.'
    },
    commercial: {
      ar: 'مشروع تجاري يركز على تجربة المستخدم، كفاءة الحركة، وتنظيم المساحات بما يخدم التشغيل والاستثمار.',
      en: 'A commercial project focused on user experience, circulation efficiency and space organization to support operation and investment.',
      fr: 'Un projet commercial axé sur l’expérience utilisateur, l’efficacité des circulations et l’organisation des espaces.'
    },
    infrastructure: {
      ar: 'مشروع بنية تحتية يتطلب دراسة فنية دقيقة وتنسيقاً مع الجهات المختصة لضمان جاهزية التنفيذ والاعتماد.',
      en: 'An infrastructure project requiring precise technical study and coordination with relevant authorities for approval and execution readiness.',
      fr: 'Un projet d’infrastructure nécessitant une étude technique précise et une coordination avec les autorités concernées.'
    },
    fuel: fuelText
  };

  return descriptions[project.id]?.[locale] ?? categoryText[project.category]?.[locale] ?? categoryText.mixed[locale];
}

export const dictionary = { ar, en, fr } as const;
export type Dictionary = typeof ar;

export function getDictionary(locale: Locale): Dictionary {
  return dictionary[locale] as unknown as Dictionary;
}

export function getProjects(locale: Locale): Project[] {
  const dict = getDictionary(locale);
  return baseProjects.map((project) => ({
    id: project.id,
    category: project.category,
    title: project[locale as 'ar' | 'en' | 'fr'],
    owner: locale === 'ar' ? project.ownerAr : undefined,
    description: projectDescription(locale, project),
    image: project.image,
    images: project.images ?? [project.image]
  }));
}
