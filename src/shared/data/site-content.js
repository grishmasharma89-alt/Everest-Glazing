import heroPrimaryImage from '@/shared/data/images/imgi_186_what-is-double-glazing-hero-1440x700.jpg'
import heroSidePlanningImage from '@/shared/data/images/imgi_176_aluminium-glass-glazing.jpg'
import heroSideShowroomImage from '@/shared/data/images/imgi_233_IMG_4258.jpg'
import heroStatementImage from '@/shared/data/images/imgi_173_Double-glazed-window.jpg'
import showcaseSpecialtyImage from '@/shared/data/images/imgi_188_667223738bf091ecb2c42305.webp'
import doubleGlazeCategoryImage from '@/shared/data/images/doubleglaze.png'
import vacuumGlassCategoryImage from '@/shared/data/images/vaccumglass.png'
import projectBeforeImageOne from '@/shared/data/images/image1.png'
import projectAfterImageOne from '@/shared/data/images/image2.png'
import windowHeroPrimaryImage from '@/shared/data/images/window_hero1.jpg'
import windowHeroSecondaryImage from '@/shared/data/images/window_hero2.jpg'

export const HEADER_PRIMARY_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Category' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export const HEADER_SECONDARY_LINKS = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/why-choose-us', label: 'Why Choose Us' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/service-areas', label: 'Service Areas' },
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
        'Two layers of glass with an insulated gap that helps reduce heat loss and outside noise.',
      image: doubleGlazeCategoryImage,
      link: '/services',
    },
    {
      title: 'Vaccum Glass',
      description:
        'Ultra-thin glass with a vacuum-sealed gap that delivers superior insulation and maximum energy efficiency.',
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
        'The house stayed warmer through winter and street noise dropped immediately. The retrofit approach saved us from major replacement costs.',
      person: 'Homeowner, Gungahlin',
    },
    {
      quote:
        'Quick measure, clear quote, and very clean install. We noticed lower heating usage within weeks.',
      person: 'Homeowner, Belconnen',
    },
    {
      quote:
        'Professional team and great communication from start to finish. The upgraded windows look premium.',
      person: 'Homeowner, Queanbeyan',
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
    'Canberra',
    'Queanbeyan',
    'Googong',
    'Gungahlin',
    'Belconnen',
    'Woden',
    'Tuggeranong',
    'Regional NSW',
  ],
  beforeAfterProjects: [
    {
      id: 'retrofit-living',
      title: 'Canberra Retrofit Transformation',
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
      location: 'Belconnen Retrofit Project',
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
        'Noise from outside reduced significantly and winter heating feels more effective after the retrofit.',
      person: 'Priya S. • Canberra',
      profile: 'Homeowner',
      avatar: 'https://i.pravatar.cc/120?img=47',
      tag: 'Noise Reduction',
    },
    {
      quote:
        'Professional team, clear communication, and clean installation. The home feels warmer immediately.',
      person: 'James L. • Belconnen',
      profile: 'Homeowner',
      avatar: 'https://i.pravatar.cc/120?img=12',
      tag: 'Winter Warmth',
    },
    {
      quote:
        'Excellent value compared to full window replacement. Great result and tidy finish.',
      person: 'Mina T. • Queanbeyan',
      profile: 'Homeowner',
      avatar: 'https://i.pravatar.cc/120?img=32',
      tag: 'Value and Finish',
    },
  ],
  supportReviews: [
    {
      quote:
        'The retrofit process was straightforward and much less disruptive than we expected.',
      person: 'Rohan K. • Gungahlin',
      profile: 'Homeowner',
      avatar: 'https://i.pravatar.cc/120?img=15',
    },
    {
      quote: 'We noticed less condensation and better room comfort within days.',
      person: 'Amelia R. • Woden',
      profile: 'Homeowner',
      avatar: 'https://i.pravatar.cc/120?img=5',
    },
    {
      quote: 'The quote was clear and the installation was completed on schedule.',
      person: 'Daniel P. • Tuggeranong',
      profile: 'Homeowner',
      avatar: 'https://i.pravatar.cc/120?img=21',
    },
    {
      quote: 'Very happy with the result. The upgraded windows look premium and modern.',
      person: 'Sara M. • ACT',
      profile: 'Homeowner',
      avatar: 'https://i.pravatar.cc/120?img=36',
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
      title: 'Canberra Retrofit Transformation',
      type: 'Before and After',
      segment: 'Residential',
      filters: ['retrofit', 'before-and-after', 'double-glazing'],
      location: 'Canberra',
      image:
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80',
      slug: 'canberra-retrofit-transformation',
      description: 'This comprehensive retrofit project demonstrates the dramatic impact of modern double glazing on an older home. The installation was completed with minimal disruption to the existing frame architecture, preserving the character of the original structure. The homeowners reported a 30% reduction in heating costs during the first winter season.',
      details: 'Our team assessed the property over two days, taking precise measurements of every window opening before producing the custom insulated glass units off-site. The installation itself took just three days, with residents able to remain in the home throughout. Post-installation thermal imaging confirmed a dramatic reduction in cold-spot drafts along all treated frames, and the homeowners have since noted a quieter indoor environment due to the acoustic dampening properties of the new double-glazed units.',
    },
    {
      title: 'Timber Frame Upgrade',
      type: 'Timber Upgrade',
      segment: 'Residential',
      filters: ['timber', 'retrofit', 'double-glazing'],
      location: 'Queanbeyan',
      image:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80',
      slug: 'timber-frame-upgrade',
      description: 'Our team successfully retrofitted heritage timber frames with high-performance double glazing units. The project required custom manufacturing to match the original frame dimensions while incorporating modern thermal performance. The result seamlessly blends historical aesthetics with contemporary comfort and energy efficiency.',
      details: 'Preserving the integrity of the original 1960s timber joinery was a key priority for this project. We worked closely with the homeowner to source matching timber beading and used slim-profile insulated glass units that sit neatly within the existing rebate depth. The final result retains the warm, classic character of the original windows while delivering a thermal performance improvement that meets current Australian energy standards — a testament to what thoughtful retrofitting can achieve.',
    },
    {
      title: 'Aluminium Window Refresh',
      type: 'Aluminium Upgrade',
      segment: 'Commercial',
      filters: ['aluminium', 'low-e', 'retrofit'],
      location: 'Belconnen',
      image:
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
      slug: 'aluminium-window-refresh',
      description: 'This aluminium frame installation showcases our expertise in contemporary window systems. We installed advanced Low-E glazing that maintains the sleek modern look while providing superior thermal insulation. The upgrade has significantly improved the home\'s climate control efficiency throughout the year.',
      details: 'The existing aluminium frames were in excellent structural condition, making them ideal candidates for a glazing-only upgrade rather than full frame replacement — a more cost-effective and less disruptive approach. New thermally broken gaskets were fitted alongside the Low-E units to eliminate condensation on the inner pane, a common issue in Canberra\'s cold winters. The homeowner reported that their ducted heating system now cycles far less frequently, providing measurable savings on quarterly energy bills.',
    },
    {
      title: 'Frosted Privacy Glass Installation',
      type: 'Frosted Glass',
      segment: 'Commercial',
      filters: ['frosted', 'privacy', 'acoustic'],
      location: 'Gungahlin',
      image:
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1600&q=80',
      slug: 'frosted-privacy-glass-installation',
      description: 'This project featured specialized frosted glass for enhanced privacy in sensitive areas. Our team combined aesthetic frosting patterns with acoustic glass technology to create functional and stylish boundaries. The homeowner now enjoys increased privacy without compromising natural light or thermal performance.',
      details: 'The bathroom and ensuite windows of this Gungahlin property faced a neighbouring property with minimal setback, making privacy glass an essential rather than optional upgrade. We specified a satin acid-etch pattern applied to the inner pane of a double-glazed unit, which diffuses vision while still transmitting excellent natural light throughout the day. The result is a bathroom that feels open and bright without any compromise on personal privacy, and the thermal performance of the double-glazed unit provides an added benefit during the colder months.',
    },
    {
      title: 'Winter Warmth Retrofit',
      type: 'Comfort Upgrade',
      segment: 'Residential',
      filters: ['timber', 'retrofit', 'argon-filled'],
      location: 'Woden',
      image:
        'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1600&q=80',
      slug: 'winter-warmth-retrofit',
      description: 'Designed specifically to combat Canberra\'s harsh winters, this retrofitting project prioritized thermal retention and comfort. We installed premium argon-filled insulated glass units that maintain steady indoor temperatures throughout cold months. The homeowners reported noticeably reduced drafts and improved comfort levels immediately after installation.',
      details: 'The Woden property had single-glazed timber windows that were allowing significant heat loss, with the lounge room frequently dropping to uncomfortable temperatures overnight. We replaced all living area and bedroom glazing with 6-12-6 argon-filled units featuring a warm-edge spacer bar to minimise thermal bridging at the perimeter seal. Within the first week of Canberra\'s cold snap, the homeowners observed that their morning indoor temperature was consistently three to four degrees warmer than before, reducing their reliance on overnight heating and noticeably improving sleep quality.',
    },
    {
      title: 'Low-E Double Glazing Replacement',
      type: 'Energy Efficiency',
      segment: 'Commercial',
      filters: ['low-e', 'energy-efficient', 'double-glazing'],
      location: 'Tuggeranong',
      image:
        'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80',
      slug: 'low-e-double-glazing-replacement',
      description: 'This energy-focused project centered on installing advanced Low-E coated glass that reflects heat while maintaining clarity. The upgrade delivers dual benefits of winter warmth retention and summer heat rejection. The homeowner now experiences optimal energy efficiency and reduced reliance on heating and cooling systems.',
      details: 'The north-facing living areas of this Tuggeranong home were experiencing significant solar heat gain in summer while losing warmth rapidly in winter — a classic challenge for Australian homes with large glazed openings. By specifying a high-performance Low-E coating on the inner pane, we created a glass assembly that selectively reflects long-wave infrared radiation, keeping interiors cooler in summer and warmer in winter. The homeowner has since reported a consistent indoor temperature range throughout the year and a marked reduction on their energy bills across all four seasons.',
    },
  ],
}
