import type { Dict } from './ru';

export const en: Dict = {
  meta: {
    title: 'GOATS — websites and apps for business in Kazakhstan',
    description:
      'We build websites, catalogues, mobile apps and Telegram bots end to end. Launch from 7 days, fixed price, 6 products live right now.',
    ogTitle: 'GOATS — we build products people actually use',
  },

  nav: {
    services: 'Services',
    prices: 'Pricing',
    cases: 'Work',
    process: 'Process',
    contact: 'Contact',
  },

  common: {
    discuss: 'Discuss a project',
    ourWork: 'See our work',
    telegram: 'Message on Telegram',
    whatsapp: 'Message on WhatsApp',
    menu: 'Menu',
    skip: 'Skip to content',
    home: 'Back to home',
    language: 'Language',
    from: 'from',
    currency: '₸',
  },

  hero: {
    eyebrow: 'Development studio · Aktau',
    titleStart: 'A website that',
    titleAccent: 'brings you clients',
    titleEnd: 'not one that just exists.',
    sub: 'We build websites, catalogues, mobile apps and Telegram bots for businesses in Kazakhstan. We take the idea, design it, ship it and stay around after launch.',
    trust: 'First call is free — we scope the work and give you a timeline and a price',
  },

  facts: [
    { value: '6', label: 'products shipped and running' },
    { value: 'from 7 days', label: 'to the first version going live' },
    { value: 'App Store', label: 'app published' },
    { value: 'Web · iOS · Android', label: 'platforms we build for' },
  ],

  pain: {
    eyebrow: 'Sound familiar?',
    title: 'The business exists —\nonline, nobody can find it.',
    items: [
      {
        title: 'Clients only find you by word of mouth',
        text: 'You are not in search results, and Instagram is just photos. A new client from across town will never hear about you.',
      },
      {
        title: 'Your catalogue and prices live in PDFs and chats',
        text: 'Every enquiry means resending a file, explaining it again and recalculating. Some leads get lost in the thread.',
      },
      {
        title: 'Bookings are collected by hand in spreadsheets',
        text: 'Appointments, payments and reservations are reconciled manually. Mistakes and forgotten clients are a matter of time.',
      },
      {
        title: 'You have a website, but it does not sell',
        text: 'A nice picture you cannot call from, book from, or order anything through.',
      },
    ],
    bridge: 'We do not build "a website" — we build a tool for a specific job. Here is how.',
  },

  services: {
    eyebrow: 'What we do',
    title: 'Five directions,\none way of working.',
    items: [
      {
        title: 'Websites and landing pages',
        text: 'A page that explains your offer and walks the visitor through to an enquiry or a call.',
      },
      {
        title: 'Catalogues and online stores',
        text: 'Products, services and prices you update yourself — no developer, no reprinting the menu.',
      },
      {
        title: 'Mobile apps',
        text: 'iOS and Android. We take it all the way to the App Store and Google Play, not to a folder of source code.',
      },
      {
        title: 'Telegram bots and automation',
        text: 'Enquiries, bookings, payments and internal processes run without you in the loop.',
      },
      {
        title: 'AI integrations and end-to-end builds',
        text: 'We embed AI into the product and run the whole project: design, development, launch, support.',
      },
    ],
  },

  packages: {
    eyebrow: 'What it costs',
    title: 'A clear price\nand a date to start.',
    note: 'The price is fixed before work begins. The exact figure depends on scope — we name it after the first call.',
    termLabel: 'Timeline',
    includes: 'What is included',
    cta: 'Discuss this package',
    popular: 'Most popular',
    items: {
      landing: {
        title: 'Landing page',
        for: 'One service or offer — you need enquiries coming in quickly.',
        term: '7–10 days',
        features: [
          'Design built around your business, no templates',
          'Responsive on phone and tablet',
          'WhatsApp and Telegram buttons',
          'Basic SEO setup and domain connection',
        ],
      },
      catalog: {
        title: 'Catalogue site',
        for: 'Hotel, sports centre, shop — you need to show rooms, services or products.',
        term: '2–3 weeks',
        features: [
          'Everything in the Landing page',
          'Catalogue with categories, photos and prices',
          'Admin panel — you edit the content yourself',
          'Booking or enquiry form with a messenger notification',
          'Multiple languages if you need them',
        ],
      },
      product: {
        title: 'End-to-end product',
        for: 'A service, a client portal, an app or a bot — something off-the-shelf tools cannot do.',
        term: 'from 1 month',
        features: [
          'Discovery and a written specification',
          'Web service, mobile app or bot',
          'Integrations: payments, CRM, AI, external services',
          'Publishing to the App Store and Google Play',
          'Support and further development after launch',
        ],
      },
    },
  },

  cases: {
    eyebrow: 'Selected work',
    title: 'Products that are\nlive right now.',
    note: 'Below: the problem the client came with, and what came out of it.',
    task: 'Problem',
    result: 'Outcome',
    open: 'Open project',
    appStore: 'App Store',
    items: {
      triathlon: {
        title: 'Aktau Triathlon Fest',
        kind: 'Web · Events',
        task: 'Fill the region’s first triathlon and move registration out of spreadsheets and DMs.',
        value: '70',
        label: 'athletes registered online — lists and payments collected themselves',
      },
      carte: {
        title: 'CARTE — QR menu',
        kind: 'iOS · Android',
        task: 'Kill the paper menu: the venue had to change dishes and prices itself, without a designer or a print shop.',
        value: 'App Store',
        label: 'app published — the menu updates without reprinting a single copy',
      },
      nutrient: {
        title: 'Nutrient',
        kind: 'Web · AI',
        task: 'Calculate intake and build meal plans automatically — by hand this took the specialist hours.',
        value: '1 minute',
        label: 'for a personal meal plan, instead of an hour of manual calculation',
      },
      aquagym: {
        title: 'AquaGym',
        kind: 'Web · SEO',
        task: 'Give the complex in Aktau a digital presence: until then clients only found it through friends and Instagram.',
        value: 'Top 3',
        label: 'in search for pool-related queries in Aktau — bookings go straight to WhatsApp',
      },
      gep: {
        title: 'Global Export Partners',
        kind: 'Web',
        task: 'Present industrial equipment supply from China so that a plant can see exactly who it is dealing with.',
        value: 'Inbound leads',
        label: 'instead of a PDF deck and deals done through personal contacts',
      },
      smartziyatker: {
        title: 'Smart Ziyatker',
        kind: 'EdTech · Web',
        task: 'Move teaching online: materials, assignments and student progress lived in chats and loose files.',
        value: 'One portal',
        label: 'for students and teachers, instead of chats and spreadsheets',
      },
    },
  },

  process: {
    eyebrow: 'How we work',
    title: 'Four steps from\nbrief to launch.',
    youGet: 'You get',
    steps: [
      {
        title: 'We discuss the problem',
        text: 'We work out who your client is and what action they should take on the site.',
        deliverable: 'A timeline and price estimate — free',
      },
      {
        title: 'We plan the solution',
        text: 'We lock the scope, the page structure and the stack, and agree on them before development starts.',
        deliverable: 'A quote and a stage-by-stage plan',
      },
      {
        title: 'We build',
        text: 'You watch progress on a live link. Changes go in as we go, not at the very end.',
        deliverable: 'Access to the work-in-progress build',
      },
      {
        title: 'We launch',
        text: 'We connect the domain, set up search and analytics, and show you how to manage the content.',
        deliverable: 'A working product and a handover guide',
      },
    ],
    about:
      'We are a small team. The people you discuss the brief with are the people who build it — no layer of account managers, no handoffs between departments.',
  },

  why: {
    eyebrow: 'Why us',
    title: 'What you get\nbesides the website.',
    items: [
      {
        title: 'A fixed price',
        text: 'We name the figure before we start and do not revisit it mid-project unless the scope changes.',
      },
      {
        title: 'You talk to the developer directly',
        text: 'You explain the task to the person building it. Nothing gets lost on the way.',
      },
      {
        title: 'The site stays yours',
        text: 'Domain, hosting and code are registered in your name. We do not hold projects hostage.',
      },
      {
        title: 'Support after launch',
        text: 'We stay reachable and fix small things after handover — we do not disappear on launch day.',
      },
    ],
  },

  stack: {
    eyebrow: 'Stack',
    note: 'We pick the technology to fit the problem, not the other way round.',
  },

  faq: {
    eyebrow: 'Questions',
    title: 'What people usually\nask before starting.',
    items: [
      {
        q: 'How long will my project take?',
        a: 'A landing page takes 7–10 days, a catalogue site 2–3 weeks, an end-to-end product a month or more. We give an exact date after the first call, once the scope is clear.',
      },
      {
        q: 'Will I be able to change prices and photos myself?',
        a: 'Yes. The Catalogue site and End-to-end product packages include an admin panel: products, services, prices and photos are yours to edit, with no involvement from us and no extra charge.',
      },
      {
        q: 'I have no copy and no photos. What now?',
        a: 'That is normal. We lay out the structure and tell you exactly what to shoot and write. We help with the copy where it is needed.',
      },
      {
        q: 'How does payment work?',
        a: 'Usually in two parts: a deposit before we start and the balance on handover. We work under a contract, with full accounting documents for companies.',
      },
      {
        q: 'Do you only work with clients in Aktau?',
        a: 'No. We work remotely across Kazakhstan and beyond — a call, a chat thread and a shared live link to the project.',
      },
      {
        q: 'What happens after launch?',
        a: 'We show you how to run the site and stay in touch. Small fixes are free; further development and new sections are agreed separately.',
      },
    ],
  },

  cta: {
    title: 'Got an idea\nor a problem?',
    text: 'Tell us what you need built. We will estimate the timeline and the cost — free, with no commitment.',
    reply: 'We usually reply within a day',
    contactsLabel: 'Reach us whichever way suits you',
  },

  footer: {
    tagline: 'end-to-end product development',
  },
};
