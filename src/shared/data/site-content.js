import heroPrimaryImage from '@/shared/data/images/imgi_186_what-is-double-glazing-hero-1440x700.jpg'
import heroSidePlanningImage from '@/shared/data/images/imgi_176_aluminium-glass-glazing.jpg'
import heroSideShowroomImage from '@/shared/data/images/imgi_233_IMG_4258.jpg'
import heroStatementImage from '@/shared/data/images/imgi_173_Double-glazed-window.jpg'
import showcaseSpecialtyImage from '@/shared/data/images/imgi_188_667223738bf091ecb2c42305.webp'
import doubleGlazeCategoryImage from '@/shared/data/images/doubleglaze.png'
import vacuumGlassCategoryImage from '@/shared/data/images/Vaccum1.jpg'
import projectBeforeImageOne from '@/shared/data/images/image1.png'
import projectAfterImageOne from '@/shared/data/images/image2.png'
import windowHeroPrimaryImage from '@/shared/data/images/window_hero1.jpg'
import windowHeroSecondaryImage from '@/shared/data/images/window_hero2.jpg'
import resTimber1Image from '@/shared/data/images/ResTimber1.jpg'
import resTimber2Image from '@/shared/data/images/ResTimber2.jpg'
import resAlm1Image from '@/shared/data/images/ResAlm1.jpg'
import resAlm2Image from '@/shared/data/images/ResAlm2.jpg'
import comAlm1Image from '@/shared/data/images/ComAlm.jpg'
import comAlm2Image from '@/shared/data/images/ComAlm2.jpg'
import comTimber1Image from '@/shared/data/images/ComTimber1.jpg'
import comTimber2Image from '@/shared/data/images/ComTimber2.jpg'

export const HEADER_PRIMARY_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Categories' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export const HEADER_SECONDARY_LINKS = [
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
]

export const HOME_CONTENT = {
  hero: {
    label: 'Retrofit Double Glazing Experts',
    title: 'Everest Double Glazing. Clear Choice for Comfort.',
    subtitle:
      'Energy efficient retrofit glazing for Canberra homes with less disruption and better year-round comfort.',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80',
    primaryCta: { label: 'Get Free Quote', to: '/contact' },
    trustItems: [
      'Canberra + Regional NSW Coverage',
      'AS1288 Compliant Installations',
      '10-Year Warranty',
    ],
  },
  editorialHero: {
    kicker: 'Minimal retrofit architecture for existing homes',
    title: 'Minimal Windows style glazing upgrades for calm, modern living.',
    primaryCta: { label: 'Download Service Overview', to: '/services' },
    leadCaption: 'Individually tailored to your frames and daily comfort goals',
    sequenceLabel: '01 / 07',
    backgroundImage: windowHeroPrimaryImage,
    foregroundImage: windowHeroSecondaryImage,
    primaryImage: {
      src: heroPrimaryImage,
      alt: 'Contemporary glass extension with slim framing at dusk',
    },
    sideCards: [
      {
        title: '3D Planning',
        text: 'We map each opening to ensure precise fit and clean installation details before production.',
        cta: 'View process',
        image: heroSidePlanningImage,
      },
      {
        title: 'Showroom Inspiration',
        text: 'Explore frame finishes, glass options, and acoustic upgrades with practical recommendations.',
        cta: 'See options',
        image: heroSideShowroomImage,
      },
    ],
    statement: {
      title: 'Refined glazing design with practical performance benefits',
      body: 'Everest retrofit glazing combines minimalist visual lines with measurable thermal and acoustic improvements. You keep your existing frame character while gaining better comfort and energy control.',
      image: heroStatementImage,
      imageAlt: 'Corner glass detail and slim profile framing in a modern home',
    },
  },
  showcaseItems: [
    {
      title: 'Double Glazing',
      description:
        'Two planes of glass separated by a layer of gas that helps to enhance insulation, reduce energy consumption and improve comfort in buildings.',
      image: doubleGlazeCategoryImage,
      link: '/services',
    },
    {
      title: 'Vaccum Glass',
      description:
        'An advanced type of double glazing works by creating a vacuum between two glass panels just like outer space.',
      image: vacuumGlassCategoryImage,
      link: '/services',
    },
    {
      title: 'Specialty Glass Upgrades',
      description:
        'Privacy, acoustic, and high-performance glass options tailored to your room and comfort needs.',
      image: showcaseSpecialtyImage,
      link: '/services',
    },
  ],
  benefits: [
    {
      title: 'Warmth Year-Round',
      description:
        'Retain indoor heat in winter and reduce heat gain in summer for steadier comfort.',
    },
    {
      title: 'Reduced Outside Noise',
      description:
        'Double-glazed layers help dampen street and neighbourhood noise for a quieter home.',
    },
    {
      title: 'Lower Energy Bills',
      description:
        'Improved thermal performance reduces heating and cooling demand over the year.',
    },
    {
      title: 'Less Disruption',
      description:
        'Retrofit into existing frames without full demolition, helping installation stay cleaner and faster.',
    },
  ],
  technicalHighlight: {
    label: 'Technical Snapshot',
    title: 'What goes into our retrofit glazing system',
    subtitle:
      'A practical breakdown of our standard insulated glass build and the outcomes homeowners notice most.',
    buildSpec: {
      name: 'Standard Retrofit Build',
      badge: 'Recommended',
      specs: [
        { label: 'Overall thickness', value: '16mm' },
        { label: 'Outer pane', value: '4mm toughened glass' },
        { label: 'Spacer', value: '8mm argon gas spacer' },
        { label: 'Inner pane', value: '4mm Low-E toughened glass' },
      ],
    },
    outcomes: [
      'Steadier indoor temperatures across seasons',
      'Reduced outside noise penetration',
      'Lower heating and cooling usage',
      'Cleaner, modern finish to existing frames',
    ],
  },
  trustSection: {
    label: 'Trust and Authority',
    title: 'Local, compliant, and quality-backed installation',
    subtitle:
      'Every job is completed to Australian standards with clear communication, documented handover, and long-term support.',
    stats: [
      { value: '5+ Years', label: 'Glazing Experience' },
      { value: 'AS1288', label: 'Compliance Standard' },
      { value: '10-Year', label: 'Written Warranty' },
      { value: 'ACT + NSW', label: 'Service Coverage' },
    ],
    trustItems: [
      'Fully Insured',
      'AS1288 Compliant',
      'Australian Standard Glass',
      '10-Year Written Warranty',
      'Completion Certificate Provided',
    ],
  },
  cta: {
    label: 'Free Quote',
    title: 'Book your free measure and quote today',
    subtitle:
      'Tell us about your windows and we will recommend the most practical retrofit option for your home.',
    primaryCta: { label: 'Get Free Quote', to: '/contact' },
  },
  contactPreview: {
    label: 'Contact Preview',
    title: 'Prefer to send your details now?',
    subtitle:
      'Share your project and we will respond with clear next steps and transparent pricing guidance.',
  },
  reviewItems: [
    {
      quote:
        'So happy with our experience with Everest Double Glazing. We have an early 70s house with a lot of glass in our lounge room and clerestory windows, and were very happy with the quoted price to retrofit double glazing in our timber frames.',
      person: 'Katrina Phillips',
    },
    {
      quote:
        'Fantastic service and quality! The double glazing made a huge difference straight away - warmer, quieter, and professionally installed. Highly recommend.',
      person: 'Bree Marsh',
    },
    {
      quote:
        'Absolutely fantastic service from start to finish! The team was professional, friendly, and very knowledgeable about double glazing. The installation was completed on time with great attention to detail.',
      person: 'Robert Quigg',
    },
    {
      quote:
        'After comparing multiple companies, this one clearly stood out for the quality of their glass. Much better insulation and finish than others. The team was professional, and offered great value for money.',
      person: 'Maja Gjergjeska',
    },
  ],
  faqItems: [
    'Is retrofit cheaper than full window replacement?',
    'How long does installation take?',
    'Do you replace window frames?',
    'Is double glazing worth it in Canberra?',
    'What is Low-E glass?',
    'What areas do you service?',
  ],
  serviceAreas: [
    'Queanbeyan & Canberra surroundings',
    'Australian Capital Territory (ACT)',
  ],
  beforeAfterProjects: [
    {
      id: 'retrofit-living',
      title: 'Aluminuim Frame Transformation',
      subtitle: 'Before and After Preview',
      location: 'ACT Residential Upgrade',
      beforeImage: '/projects/before-after-01-before.jpg',
      afterImage: '/projects/before-after-01-after.jpg',
      fallbackBefore: projectAfterImageOne,
      fallbackAfter: projectBeforeImageOne,
    },
    {
      id: 'timber-frame-upgrade',
      title: 'Timber Frame Upgrade',
      subtitle: 'Noise and Heat Retention Improvement',
      location: 'Queanbeyan Family Home',
      beforeImage: '/projects/before-after-02-before.jpg',
      afterImage: '/projects/before-after-02-after.jpg',
      fallbackBefore:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1900&q=80',
      fallbackAfter:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1900&q=80',
    },
    {
      id: 'aluminium-window-refresh',
      title: 'Aluminium Window Refresh',
      subtitle: 'Clean Modern Finish',
      location: 'Canberra Retrofit Project',
      beforeImage: '/projects/before-after-03-before.jpg',
      afterImage: '/projects/before-after-03-after.jpg',
      fallbackBefore:
        'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1900&q=80',
      fallbackAfter:
        'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1900&q=80',
    },
  ],
}

export const ABOUT_CONTENT = {
  highlights: [
    'Locally owned and operated in ACT',
    'Warehouse based in Beard ACT',
    'Servicing Canberra and regional NSW',
    'Professional workmanship with 5+ years experience',
    'AS1288 compliant installations',
    '10-year guarantee',
  ],
}

export const CONTACT_CONTENT = {
  trustItems: [
    'Fully Insured',
    'AS1288 Compliant',
    'Australian Standard Glass',
    '10-Year Warranty',
    'Completion Certificate',
  ],
}

export const SERVICES_CONTENT = {
  additionalServices: [
    {
      title: 'Urgent Double Glazed Window Replacement and Repairs',
      description:
        'Fast response support for damaged or failed double glazed units with clean replacement outcomes.',
      image:
        'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80',
    },
    {
      title: 'Vacuum Glass Solutions',
      description:
        'Advanced glass performance options for high thermal insulation where slim profile matters.',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    },
    {
      title: 'Double Glazed Doors',
      description:
        'Door glazing upgrades for better comfort, reduced noise ingress, and stronger visual finish.',
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80',
    },
    {
      title: 'Frosted and Privacy Glass',
      description:
        'Privacy-focused glazing options ideal for bathrooms, street-facing windows, and feature zones.',
      image:
        'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80',
    },
    {
      title: 'Tinted Glass',
      description:
        'Reduce glare and heat load while maintaining a modern facade aesthetic across the property.',
      image:
        'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1600&q=80',
    },
  ],
  servicePillars: [
    'Retrofit specialists (no full frame demolition)',
    'Competitive pricing',
    'Locally manufactured products',
    'AS1288 compliant installations',
    'Professional workmanship and clean finish',
    '10-year written warranty',
  ],
  glassSpecs: [
    '16mm total thickness',
    '4mm toughened glass',
    '8mm argon gas spacer',
    '4mm Low-E toughened glass',
  ],
}

export const HOW_IT_WORKS_CONTENT = {
  steps: [
    {
      id: '01',
      title: 'Free Inspection and Measure',
      text: 'We inspect your existing aluminium or timber windows, note comfort issues, and take precise measurements for retrofit fit.',
      detail: 'Outcome: accurate scope and zero guesswork.',
      image:
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1800&q=80',
    },
    {
      id: '02',
      title: 'Detailed Quotation',
      text: 'You receive a transparent proposal covering glass type, timeline, pricing, and all installation inclusions.',
      detail: 'Outcome: clear plan, no hidden surprises.',
      image:
        'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1800&q=80',
    },
    {
      id: '03',
      title: 'Glass Manufacturing',
      text: 'Your units are manufactured to specification using a 16mm insulated glazing build with performance-focused components.',
      detail: 'Outcome: precision-made glass ready for retrofit.',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=80',
    },
    {
      id: '04',
      title: 'Professional Installation',
      text: 'Our team removes old glass and installs the upgraded units cleanly, with minimal disruption to your daily routine.',
      detail: 'Outcome: fast, tidy, professional execution.',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80',
    },
    {
      id: '05',
      title: 'Final Inspection and Completion Certificate',
      text: 'We complete quality checks, confirm operation and finish, and hand over final completion documentation.',
      detail: 'Outcome: verified performance and confidence.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80',
    },
  ],
}

export const SERVICE_AREAS_CONTENT = {
  coreAreas: [
    { name: 'Canberra', note: 'Primary service hub' },
    { name: 'Queanbeyan', note: 'Frequent retrofit jobs' },
    { name: 'Googong', note: 'New and existing homes' },
    { name: 'Gungahlin', note: 'High-demand service area' },
    { name: 'Belconnen', note: 'Urban retrofit projects' },
    { name: 'Woden', note: 'Comfort and noise upgrade focus' },
    { name: 'Tuggeranong', note: 'Residential performance upgrades' },
    { name: 'Regional NSW', note: 'Surrounding areas by request' },
  ],
  regionBlocks: [
    {
      title: 'ACT Core Coverage',
      text: 'Our main service base covers Canberra-wide retrofit projects with efficient scheduling and fast response.',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80',
    },
    {
      title: 'Regional NSW Support',
      text: 'We also service surrounding NSW suburbs and towns with planned installation windows and transparent lead times.',
      image:
        'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1800&q=80',
    },
  ],
  travelHighlights: [
    'Fast response for ACT metro requests',
    'Planned site visits for regional NSW',
    'Transparent lead-time communication',
    'Local warehouse logistics from Beard ACT',
  ],
}

export const REVIEWS_CONTENT = {
  headlineReviews: [
    {
      quote:
        'So happy with our experience with Everest Double Glazing. We have an early 70s house with a lot of glass in our lounge room and clerestory windows, and were very happy with the quoted price to retrofit double glazing in our timber frames.',
      person: 'Katrina Phillips',
      profile: 'Google Review',
      tag: 'Retrofit Glazing',
    },
    {
      quote:
        'Absolutely fantastic service from start to finish! The team was professional, friendly, and very knowledgeable about double glazing. The installation was completed on time with great attention to detail.',
      person: 'Robert Quigg',
      profile: 'Google Review',
      tag: 'Professional Service',
    },
    {
      quote:
        'After comparing multiple companies, this one clearly stood out for the quality of their glass. Much better insulation and finish than others. The team was professional, and offered great value for money.',
      person: 'Maja Gjergjeska',
      profile: 'Google Review',
      tag: 'Quality & Value',
    },
  ],
  supportReviews: [
    {
      quote:
        'Fantastic service and quality! The double glazing made a huge difference straight away - warmer, quieter, and professionally installed. Highly recommend.',
      person: 'Bree Marsh',
      profile: 'Google Review',
    },
  ],
  reviewStats: [
    { value: '5★', label: 'average satisfaction trend' },
    { value: '40%', label: 'reported thermal comfort uplift' },
    { value: '3x', label: 'most-cited outcome: quieter rooms' },
  ],
}

export const FAQ_CONTENT = {
  faqs: [
    {
      q: 'Is retrofit cheaper than full window replacement?',
      a: 'Yes. Retrofit typically costs less because existing frames are retained.',
    },
    {
      q: 'Why is double glazing essential in Canberra winters?',
      a: 'It improves insulation, reduces heat loss, and helps maintain indoor comfort.',
    },
    {
      q: 'How long does installation take?',
      a: 'It varies by project size, but retrofit is generally faster than full replacement.',
    },
    {
      q: 'Do you replace frames?',
      a: 'Primary focus is retrofit into existing aluminium or timber frames.',
    },
    {
      q: 'What areas do you service?',
      a: 'Canberra, Queanbeyan, Googong, Gungahlin, Belconnen, Woden, Tuggeranong, and regional NSW.',
    },
    {
      q: 'What is Low-E glass?',
      a: 'Low-E glass includes a low-emissivity coating to improve thermal efficiency.',
    },
  ],
}

export const WHY_CHOOSE_US_CONTENT = {
  reasons: [
    'Retrofit specialists (not full demolition replacement)',
    'Competitive pricing',
    'Local ACT business',
    'Fast lead times',
    'Locally manufactured product',
    'Eco friendly approach',
    'High quality materials',
    'Strong 10-year warranty',
    'Professional and clean finish',
  ],
}

export const PROJECTS_CONTENT = {
  hero: {
    title: 'Projects and Gallery',
    subtitle:
      'Before and after outcomes across Canberra, Queanbeyan, and surrounding regions.',
  },
  categories: [
    'Before and After Photos',
    'Retrofit Process Images',
    'Timber Frame Upgrades',
    'Aluminium Frame Upgrades',
    'Frosted Glass Examples',
  ],
  projects: [
    {
      title: 'Commercial Aluminium Frame Gallery 1',
      type: 'Aluminium Gallery',
      segment: 'Commercial',
      filters: ['aluminium'],
      location: 'Canberra',
      image: comAlm1Image,
      slug: 'commercial-aluminium-1',
      description: 'Modern aluminium frame commercial retrofit delivering clean aesthetics and superior thermal performance.',
      details: 'This commercial aluminium frame project demonstrates our capability to deliver high-performance glazing upgrades at scale.',
    },
    {
      title: 'Commercial Aluminium Frame Gallery 2',
      type: 'Aluminium Gallery',
      segment: 'Commercial',
      filters: ['aluminium'],
      location: 'Canberra',
      image: comAlm2Image,
      slug: 'commercial-aluminium-2',
      description: 'Premium commercial aluminium frame installation with advanced Low-E glazing for year-round comfort.',
      details: 'Our commercial aluminium retrofits combine contemporary design with proven thermal and acoustic performance.',
    },
    {
      title: 'Commercial Timber Frame Gallery 1',
      type: 'Timber Gallery',
      segment: 'Commercial',
      filters: ['timber'],
      location: 'Canberra',
      image: comTimber1Image,
      slug: 'commercial-timber-1',
      description: 'Commercial timber frame glazing upgrade preserving heritage character while meeting modern performance standards.',
      details: 'This project showcases our expertise in working with timber frames in commercial settings without compromising structural integrity.',
    },
    {
      title: 'Commercial Timber Frame Gallery 2',
      type: 'Timber Gallery',
      segment: 'Commercial',
      filters: ['timber'],
      location: 'Canberra',
      image: comTimber2Image,
      slug: 'commercial-timber-2',
      description: 'Heritage commercial timber frame retrofit with precision-fitted double glazing for energy efficiency.',
      details: 'Each commercial timber frame project is individually assessed to ensure the glazing upgrade complements the existing architecture.',
    },
    {
      title: 'Residential Timber Frame Gallery 1',
      type: 'Timber Gallery',
      segment: 'Residential',
      filters: ['timber'],
      location: 'Canberra',
      image: resTimber1Image,
      slug: 'residential-timber-1',
      description: 'Timber frame retrofit project showcasing our expertise in preserving heritage aesthetics while delivering modern thermal performance.',
      details: 'This timber frame renovation demonstrates our commitment to quality craftsmanship and attention to detail.',
    },
    {
      title: 'Residential Timber Frame Gallery 2',
      type: 'Timber Gallery',
      segment: 'Residential',
      filters: ['timber'],
      location: 'Canberra',
      image: resTimber2Image,
      slug: 'residential-timber-2',
      description: 'Another exceptional timber frame retrofit showcasing our specialized expertise in heritage frame upgrades.',
      details: 'Each timber frame project is carefully tailored to preserve the original character while improving energy efficiency.',
    },
    {
      title: 'Residential Aluminium Frame Gallery 1',
      type: 'Aluminium Gallery',
      segment: 'Residential',
      filters: ['aluminium'],
      location: 'Canberra',
      image: resAlm1Image,
      slug: 'residential-aluminium-1',
      description: 'Modern aluminium frame retrofit providing contemporary aesthetics with superior thermal control.',
      details: 'Aluminium frame upgrades deliver sleek, modern lines with exceptional performance and durability.',
    },
    {
      title: 'Residential Aluminium Frame Gallery 2',
      type: 'Aluminium Gallery',
      segment: 'Residential',
      filters: ['aluminium'],
      location: 'Canberra',
      image: resAlm2Image,
      slug: 'residential-aluminium-2',
      description: 'Premium aluminium frame installation showcasing clean modern design and high-performance glazing integration.',
      details: 'Our aluminium frame retrofits combine contemporary design principles with proven thermal performance benefits.',
    },
  ],
}
