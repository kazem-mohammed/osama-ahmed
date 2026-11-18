/* =========================================================
   Osama Ahmed — portfolio content
   Source of truth: Osama_Ahmed_CV.pdf, the three CREATIVA
   certificates supplied by Osama, and the supplied portrait.
   Nothing here is invented. Concept-stage ventures are
   labelled as concepts; certificates exist only where a real
   file was provided.
   ========================================================= */
'use strict';

/* Real certificate files. Images are only inserted into the
   page when the visitor opens the certificate viewer. */
const OA_CERTIFICATES = {
  digitalMarketing: {
    title: 'Digital Marketing',
    issuer: 'CREATIVA Portsaid',
    meta: '35 training hours · 15–21 March 2025',
    detail: 'Certificate of Attendance · DM-CIH-PSD-2025-0001',
    src: 'assets/img/certificates/digital-marketing-35h.jpg',
    type: 'image',
    alt: 'Certificate of Attendance for Osama Khaled Hassan — Digital Marketing, CREATIVA Portsaid, 35 training hours'
  },
  ideation38: {
    title: 'Ideation Bootcamp',
    issuer: 'CREATIVA Portsaid',
    meta: '38.5 training hours · 9–15 May 2025',
    detail: 'Certificate of Appreciation · IBC-CIH-PSD-2025-0006',
    src: 'assets/img/certificates/ideation-bootcamp-38h.jpg',
    type: 'image',
    alt: 'Certificate of Appreciation for Osama Khaled Ahmed — Ideation Bootcamp, CREATIVA Portsaid, 38.5 hours'
  },
  ideation77: {
    title: 'Ideation Bootcamp',
    issuer: 'CREATIVA Portsaid',
    meta: '77 training hours · 25 June – 5 July 2025',
    detail: 'Certificate of Appreciation · IBC-CIH-PSD-2025-0047',
    src: 'assets/img/certificates/ideation-bootcamp-77h.jpg',
    type: 'image',
    alt: 'Certificate of Appreciation for Osama Khelad Ahmed — Ideation Bootcamp, CREATIVA Portsaid, 77 hours'
  }
};

/* The three chapters requested for the career timeline. */
const OA_CHAPTERS = [
  {
    id: 'digital',
    num: '01',
    stage: 'Stage 01',
    title: 'Digital Marketing & E-commerce',
    kicker: 'The starting point',
    short: 'Training, online stores and the first real lessons in customer behaviour.',
    description: [
      'Started my journey with Digital Marketing training at Creativa, under Egypt\u2019s Ministry of Communications and Information Technology.',
      'Then gained practical experience in managing e-commerce stores, sales, and product marketing on platforms like Amazon.'
    ],
    areas: [
      'Digital Marketing',
      'E-commerce',
      'Product Marketing',
      'Online Sales',
      'Customer Understanding'
    ],
    outcomes: [
      'How a product moves from a listing to an actual sale.',
      'Why customer understanding comes before promotion.',
      'How digital channels shape the way people decide.'
    ],
    training: [
      {
        title: 'Digital Marketing',
        org: 'CREATIVA Portsaid · Ministry of Communications and Information Technology',
        meta: '35 training hours · 15–21 March 2025',
        cert: 'digitalMarketing'
      }
    ]
  },
  {
    id: 'sales',
    num: '02',
    stage: 'Stage 02',
    title: 'Sales & Real Estate',
    kicker: 'The human side of business',
    short: 'Client conversations, negotiation and the discipline of closing a deal.',
    description: [
      'After completing professional Sales training, I moved into the Real Estate industry, gaining practical experience in sales, client relations, and understanding market needs.'
    ],
    areas: [
      'Sales Communication',
      'Client Relations',
      'Customer Needs',
      'Real Estate Market Understanding',
      'Negotiation Fundamentals'
    ],
    outcomes: [
      'Reading a client\u2019s real need before presenting an option.',
      'Handling objections and carrying a conversation to a decision.',
      'Understanding how market demand shapes perceived value.'
    ],
    training: [
      {
        title: 'Professional Sales Training',
        org: 'CREATIVA Portsaid',
        meta: 'Completed before entering the real estate market',
        cert: null
      }
    ]
  },
  {
    id: 'business',
    num: '03',
    stage: 'Stage 03',
    title: 'Business Development',
    kicker: 'The wider picture',
    short: 'Market research, business models and turning ideas into structured plans.',
    description: [
      'Built on my background in Digital Marketing and Sales by studying Business Development, combining my previous experience with new business skills and applying them in the Business Development field.'
    ],
    areas: [
      'Business Development',
      'Strategic Thinking',
      'Opportunity Identification',
      'Business Understanding',
      'Relationship Building'
    ],
    outcomes: [
      'Turning an early idea into a plan another person can evaluate.',
      'Thinking in systems: market, model, customer and value.',
      'Building relationships that outlast a single transaction.'
    ],
    training: [
      {
        title: 'Ideation Bootcamp',
        org: 'CREATIVA Portsaid · AMIT',
        meta: '38.5 training hours · 9–15 May 2025',
        cert: 'ideation38'
      },
      {
        title: 'Ideation Bootcamp',
        org: 'CREATIVA Portsaid · AMIT',
        meta: '77 training hours · 25 June – 5 July 2025',
        cert: 'ideation77'
      }
    ]
  }
];

/* Venture concepts — exactly as described in the CV. */
const OA_PROJECTS = [
  {
    id: 'daira',
    num: '01',
    name: 'DAIRA',
    cat: 'PropTech',
    role: 'Product Concept Development & Business Development',
    status: 'Concept development and planning',
    desc: 'A proposed real-estate platform concept. I developed the project concept, core features and proposed operating approach; structured the customer journey and defined key user roles; and organised the product concept into a structured plan covering platform functionality and workflows.',
    points: [
      'Developed the concept, core features and proposed operating approach.',
      'Structured the customer journey and defined key user roles.',
      'Designed concepts for lead management, communication and deal tracking.',
      'Organised the product into a plan covering functionality and workflows.'
    ]
  },
  {
    id: 'carvalue',
    num: '02',
    name: 'CarValue',
    cat: 'Automotive Technology',
    role: 'Market Research & Business Strategy',
    status: 'Business concept and planning',
    desc: 'A proposed platform focused on used-car valuation and connecting buyers with sellers. I contributed to market research and competitor analysis, worked on business strategy and revenue model development, and helped shape the commercial concept.',
    points: [
      'Contributed to market research and competitor analysis.',
      'Worked on business strategy and revenue model development.',
      'Helped shape the commercial concept for a used-car valuation platform.'
    ]
  },
  {
    id: 'banqok',
    num: '03',
    name: 'BanqOK',
    cat: 'FinTech',
    role: 'Business Model Development & Business Planning',
    status: 'Business planning and prototype conceptualization',
    desc: 'A fintech concept carried from business model to funding-ready planning. I contributed to business model development and revenue planning, supported the conceptual planning of the proposed product prototype, and helped prepare a structured business plan intended to support funding discussions.',
    points: [
      'Contributed to business model development and revenue planning.',
      'Supported conceptual planning of the proposed product prototype.',
      'Helped prepare a structured plan intended to support funding discussions.'
    ]
  },
  {
    id: 'ezsouq',
    num: '04',
    name: 'EZ Souq',
    cat: 'E-commerce',
    role: 'Market Research & Business Strategy',
    status: 'Business research and planning',
    desc: 'An e-commerce concept built on research first. I contributed to market research and competitor analysis, worked on business model development and commercial strategy, and explored market opportunities, value proposition and potential revenue generation approaches.',
    points: [
      'Contributed to market research and competitor analysis.',
      'Worked on business model development and commercial strategy.',
      'Explored market opportunities, value proposition and revenue approaches.'
    ]
  },
  {
    id: 'wady',
    num: '05',
    name: 'Wady Le3b',
    cat: 'Brand Identity · Logo Design',
    role: 'Logo & Brand Identity Designer',
    status: 'Logo and brand identity delivered',
    desc: 'A brand identity and logo I designed: a circular wordmark split by a single horizontal line with a centre point — reading “WADY” above and “LE3B” below. The tagline carries the brand promise: “في أي وقت، مع كل حد” — anytime, with everyone.',
    points: [
      'Designed the circular split logo with a centre point marking the meeting place.',
      'Built the identity around the tagline “في أي وقت، مع كل حد”.',
      'Delivered a high-contrast black-and-white system that works at any size.'
    ],
    image: {
      src: 'assets/img/projects/wady-le3b.jpg',
      alt: 'Wady Le3b logo — circular wordmark split by a horizontal line, with Arabic tagline'
    }
  }
];

/* Core competencies — the CV's list, grouped faithfully. */
const OA_SKILLS = [
  {
    num: '01',
    group: 'Strategy & Planning',
    items: [
      'Business Development and Strategy',
      'Business Model Development',
      'Revenue Model Planning',
      'Business Planning',
      'Value Proposition Development'
    ]
  },
  {
    num: '02',
    group: 'Sales & Clients',
    items: [
      'Sales Negotiation and Deal Closing',
      'Lead Generation and Qualification',
      'Client Relationship Management',
      'CRM and Lead Follow-up',
      'Customer Journey Mapping'
    ]
  },
  {
    num: '03',
    group: 'Research & Analysis',
    items: [
      'Market Research and Competitor Analysis',
      'Business Opportunity Identification',
      'Product Concept Development'
    ]
  }
];

/* Freelance services — verbatim list from the CV. */
const OA_FREELANCE = [
  'Market Research and Competitor Analysis',
  'Business Model Development',
  'Business Opportunity Analysis',
  'Revenue Model Planning',
  'Business Planning and Concept Development',
  'Business Development Support'
];

/* Only figures printed in the CV or the certificates. */
const OA_NUMBERS = [
  { value: '2', label: 'Years in sales' },
  { value: '20+', label: 'Real estate deals closed' },
  { value: '60+', label: 'Client meetings' },
  { value: '150+', label: 'Training hours' }
];
