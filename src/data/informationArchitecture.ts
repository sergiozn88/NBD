export type SitemapItem = {
  label: string
  level: 2 | 3
  brandOnly?: boolean
}

export type SitemapSection = {
  label: string
  level: 2
  brandOnly?: boolean
  children?: SitemapItem[]
}

export type SitemapColumn = {
  title: string
  headerClass: string
  titleClass?: string
  sections: (SitemapItem | SitemapSection)[]
}

export type SitemapBrand = 'enbd' | 'ei'

export const navStats = [
  {
    value: '5',
    label: 'Primary Tabs',
    detail: 'Home · Wealth · Transfer · Services · Explore',
    highlight: false,
  },
  {
    value: '3',
    label: 'Max Tap Depth',
    detail: 'Any feature reachable in ≤3 taps',
    highlight: true,
  },
  {
    value: '27',
    label: 'Total Screens',
    detail: 'Mobile + Desktop combined',
    highlight: false,
  },
  {
    value: '150+',
    label: 'Services Accessible',
    detail: 'All via global search',
    highlight: true,
  },
  {
    value: '1',
    label: 'Toggle for 2 Brands',
    detail: '0 duplicate screens',
    highlight: false,
  },
] as const

export const sitemapColumnsEnbd: SitemapColumn[] = [
  {
    title: 'DASHBOARD',
    headerClass: 'bg-[#1a3a6b]/60',
    sections: [
      { label: 'Financial Overview', level: 2 },
      { label: 'Quick Actions', level: 2 },
      { label: 'Recent Transactions', level: 2 },
      { label: 'Offers Strip', level: 2 },
      { label: 'Messages', level: 2 },
    ],
  },
  {
    title: 'ACCOUNTS & CARDS',
    headerClass: 'bg-[#2d5fa8]/60',
    sections: [
      {
        label: 'Accounts',
        level: 2,
        children: [
          { label: 'Current Account', level: 3 },
          { label: 'Savings Account', level: 3 },
          { label: 'Call Account', level: 3 },
        ],
      },
      {
        label: 'Credit Cards',
        level: 2,
        children: [
          { label: 'Card Overview', level: 3 },
          { label: 'Statements', level: 3 },
          { label: 'Skywards Miles', level: 3, brandOnly: true },
        ],
      },
      {
        label: 'Card Controls',
        level: 2,
        children: [
          { label: 'Lock / Unlock', level: 3 },
          { label: 'Change PIN', level: 3 },
          { label: 'Limit Settings', level: 3 },
        ],
      },
    ],
  },
  {
    title: 'WEALTH',
    headerClass: 'bg-[#1b6b3a]/60',
    sections: [
      { label: 'Portfolio Overview', level: 2 },
      { label: 'UAE Equities', level: 2 },
      { label: 'Global Equities', level: 2 },
      { label: 'Mutual Funds', level: 2, brandOnly: true },
      { label: 'Orders', level: 2 },
      { label: 'Markets', level: 2 },
    ],
  },
  {
    title: 'TRANSFER & PAY',
    headerClass: 'bg-[#b07d2a]/60',
    sections: [
      {
        label: 'Transfers',
        level: 2,
        children: [
          { label: 'Between Accounts', level: 3 },
          { label: 'Local UAEFTS', level: 3 },
          { label: 'International', level: 3 },
          { label: 'DirectRemit ⚡', level: 3, brandOnly: true },
        ],
      },
      {
        label: 'Payments',
        level: 2,
        children: [
          { label: 'Pay Bills', level: 3 },
          { label: 'Credit Card Payment', level: 3 },
          { label: 'Standing Orders', level: 3 },
        ],
      },
      { label: 'Beneficiaries', level: 2 },
    ],
  },
  {
    title: 'OFFERS',
    headerClass: 'bg-[#c9902b]/60',
    sections: [
      {
        label: 'All Deals',
        level: 2,
        children: [
          { label: 'Travel', level: 3 },
          { label: 'Dining', level: 3 },
          { label: 'Shopping', level: 3 },
          { label: '0% IPP', level: 3 },
        ],
      },
      { label: 'Card Extras', level: 2 },
      {
        label: 'Skywards Rewards',
        level: 2,
        brandOnly: true,
        children: [
          { label: 'Earn Miles', level: 3, brandOnly: true },
          { label: 'Redeem Miles', level: 3, brandOnly: true },
        ],
      },
    ],
  },
  {
    title: 'SERVICES',
    headerClass: 'bg-[#475569]/60',
    sections: [
      {
        label: 'Service Requests',
        level: 2,
        children: [
          { label: 'Authenticated Statement', level: 3 },
          { label: 'Block / Replace Card', level: 3 },
          { label: 'Request History', level: 3 },
        ],
      },
      {
        label: 'Support',
        level: 2,
        children: [
          { label: 'Live Chat', level: 3 },
          { label: 'Call Centre', level: 3 },
          { label: 'Branch Finder', level: 3 },
        ],
      },
      {
        label: 'Settings',
        level: 2,
        children: [
          { label: 'Profile', level: 3 },
          { label: 'Security', level: 3 },
          { label: 'Notifications', level: 3 },
        ],
      },
    ],
  },
]

export const sitemapColumnsEi: SitemapColumn[] = [
  {
    title: 'DASHBOARD',
    headerClass: 'bg-[#1b6b3a]/60',
    sections: [
      { label: 'Financial Overview', level: 2 },
      { label: 'Quick Actions', level: 2 },
      { label: 'Recent Transactions', level: 2 },
      { label: 'Islamic Offers Strip', level: 2, brandOnly: true },
      { label: 'Messages', level: 2 },
    ],
  },
  {
    title: 'ACCOUNTS & CARDS',
    headerClass: 'bg-[#1b6b3a]/50',
    sections: [
      {
        label: 'Accounts',
        level: 2,
        children: [
          { label: 'Current (Murabaha)', level: 3, brandOnly: true },
          { label: 'Savings (Murabaha)', level: 3, brandOnly: true },
          { label: 'Murabaha Deposit', level: 3, brandOnly: true },
        ],
      },
      {
        label: 'Credit Cards',
        level: 2,
        children: [
          { label: 'Card Overview', level: 3 },
          { label: 'Statements', level: 3 },
          { label: 'EI Reward Points', level: 3, brandOnly: true },
        ],
      },
      {
        label: 'Card Controls',
        level: 2,
        children: [
          { label: 'Lock / Unlock', level: 3 },
          { label: 'Change PIN', level: 3 },
          { label: 'Limit Settings', level: 3 },
        ],
      },
    ],
  },
  {
    title: 'INVEST',
    headerClass: 'bg-[#1b6b3a]/60',
    titleClass: 'text-[#e8c278]',
    sections: [
      { label: 'Portfolio Overview', level: 2 },
      { label: 'UAE Equities', level: 2 },
      { label: 'Global Equities', level: 2 },
      { label: 'Sukuk', level: 2, brandOnly: true },
      { label: 'Murabaha Term Deposits', level: 2, brandOnly: true },
      { label: 'Orders', level: 2 },
      { label: 'Markets', level: 2 },
    ],
  },
  {
    title: 'TRANSFER & PAY',
    headerClass: 'bg-[#b07d2a]/60',
    sections: [
      {
        label: 'Transfers',
        level: 2,
        children: [
          { label: 'Between Accounts', level: 3 },
          { label: 'Local UAEFTS', level: 3 },
          { label: 'International', level: 3 },
          { label: 'DirectRemit ⚡', level: 3 },
        ],
      },
      {
        label: 'Payments',
        level: 2,
        children: [
          { label: 'Pay Bills', level: 3 },
          { label: 'Credit Card Payment', level: 3 },
          { label: 'Standing Orders', level: 3 },
        ],
      },
      {
        label: 'Pay Zakat 🌙',
        level: 2,
        brandOnly: true,
        children: [
          { label: 'Calculate Zakat', level: 3, brandOnly: true },
          { label: 'Zakat History', level: 3, brandOnly: true },
        ],
      },
      { label: 'Beneficiaries', level: 2 },
    ],
  },
  {
    title: 'OFFERS',
    headerClass: 'bg-[#c9902b]/60',
    sections: [
      {
        label: 'All Deals',
        level: 2,
        children: [
          { label: 'Travel', level: 3 },
          { label: 'Dining', level: 3 },
          { label: 'Shopping', level: 3 },
          { label: '0% IPP', level: 3 },
        ],
      },
      {
        label: 'Halal Verified Deals',
        level: 2,
        brandOnly: true,
        children: [
          { label: 'Food & Beverage (Halal)', level: 3, brandOnly: true },
          { label: 'Lifestyle (Halal)', level: 3, brandOnly: true },
        ],
      },
      { label: 'Card Extras', level: 2 },
      { label: 'Ramadan Specials', level: 2, brandOnly: true },
    ],
  },
  {
    title: 'SERVICES',
    headerClass: 'bg-[#475569]/60',
    sections: [
      {
        label: 'Service Requests',
        level: 2,
        children: [
          { label: 'Authenticated Statement', level: 3 },
          { label: 'Block / Replace Card', level: 3 },
          { label: 'Request History', level: 3 },
        ],
      },
      { label: 'Islamic Finance Advisor', level: 2, brandOnly: true },
      { label: 'Zakat Calculator', level: 2, brandOnly: true },
      {
        label: 'Support',
        level: 2,
        children: [
          { label: 'Live Chat', level: 3 },
          { label: 'Call Centre', level: 3 },
          { label: 'Branch Finder', level: 3 },
        ],
      },
      {
        label: 'Settings',
        level: 2,
        children: [
          { label: 'Profile', level: 3 },
          { label: 'Prayer Time Settings', level: 3, brandOnly: true },
          { label: 'Arabic / English Toggle', level: 3, brandOnly: true },
          { label: 'Security', level: 3 },
        ],
      },
    ],
  },
]

export const sitemapBrandConfigs = {
  enbd: {
    rootLabel: 'ENBD X',
    rootClass: 'bg-[#1a3a6b]',
    tabAccent: '#1a3a6b',
    tabBadge: 'ENBD',
    sharedScreens: 18,
    brandOnlyCount: 9,
    brandOnlyLabel: 'ENBD-only nodes',
    brandOnlyIcon: '⚡',
    differentiatorLegend: 'ENBD Differentiators',
    l1LegendClass: 'bg-[#1a3a6b]/60',
    calloutBorder: 'border-[#1a3a6b]/30',
    calloutBg: 'bg-[#1a3a6b]/20',
    columns: sitemapColumnsEnbd,
  },
  ei: {
    rootLabel: 'EI+',
    rootClass: 'bg-[#1b6b3a]',
    tabAccent: '#1b6b3a',
    tabBadge: 'EI',
    sharedScreens: 18,
    brandOnlyCount: 11,
    brandOnlyLabel: 'EI-only nodes',
    brandOnlyIcon: '🌙',
    differentiatorLegend: 'EI Differentiators',
    l1LegendClass: 'bg-[#1b6b3a]/60',
    calloutBorder: 'border-[#1b6b3a]/30',
    calloutBg: 'bg-[#1b6b3a]/20',
    columns: sitemapColumnsEi,
  },
} as const satisfies Record<
  SitemapBrand,
  {
    rootLabel: string
    rootClass: string
    tabAccent: string
    tabBadge: string
    sharedScreens: number
    brandOnlyCount: number
    brandOnlyLabel: string
    brandOnlyIcon: string
    differentiatorLegend: string
    l1LegendClass: string
    calloutBorder: string
    calloutBg: string
    columns: SitemapColumn[]
  }
>

/** @deprecated Use sitemapColumnsEnbd */
export const sitemapColumns = sitemapColumnsEnbd

export const enbdDifferentiators = [
  "⚡ DirectRemit — ENBD's signature instant transfer",
  '🎟 Skywards Miles rewards ecosystem',
  '👤 Priority Relationship Manager contact',
  '💳 Emirates Skywards Visa brand language',
]

export const eiDifferentiators = [
  '🌙 Pay Zakat — Islamic obligation as a core quick action',
  '📜 Sukuk + Murabaha — Sharia-compliant instrument naming',
  '✔ Halal Verified — offer filtering and trust badge system',
  '🕌 Zakat Calculator + Islamic Finance Advisor',
  '🌙 Ramadan Specials — seasonal Islamic campaign hub',
  '🔄 Prayer Time Settings + enhanced Arabic/RTL toggle',
]

export const hierarchyLayers = [
  {
    step: '01',
    title: 'Financial Position',
    detail: 'Total balance · Portfolio · Accounts summary',
    badge: 'HERO',
    barClass: 'bg-gradient-to-r from-[#c9902b] to-[#a37322]',
    width: 'w-full',
    indent: '',
  },
  {
    step: '02',
    title: 'Urgent Actions',
    detail: 'Payment due · Pending approvals · Alerts',
    badge: 'ABOVE FOLD',
    barClass: 'bg-[#1a3a6b]',
    width: 'w-[90%]',
    indent: 'pl-[50px]',
  },
  {
    step: '03',
    title: 'Quick Banking Actions',
    detail: 'Transfer · Pay · Wealth · Services',
    badge: 'TAP 1',
    barClass: 'bg-[#2d6a9f]',
    width: 'w-[78%]',
    indent: 'pl-[110px]',
  },
  {
    step: '04',
    title: 'Recent Activity',
    detail: 'Transactions · Accounts · Cards',
    badge: 'SCROLL 1',
    barClass: 'bg-[#1b5e85]',
    width: 'w-[64%]',
    indent: 'pl-[180px]',
  },
  {
    step: '05',
    title: 'Offers & Promotions',
    detail: 'Max 3 tiles · Never dominant',
    badge: 'SCROLL 2',
    barClass: 'border border-white/15 bg-white/10',
    width: 'w-[50%]',
    indent: 'pl-[250px]',
  },
] as const

export const designPrinciples = [
  {
    num: 1,
    title: 'Money is always visible',
    detail:
      'Balance shown by default. Hide requires intent. Reversed from current app behavior.',
  },
  {
    num: 2,
    title: 'Urgency over discovery',
    detail: 'Payment due, cheque expiry and fraud alerts live above quick actions.',
  },
  {
    num: 3,
    title: 'One tap to most tasks',
    detail: 'Transfer, Pay, Wealth are permanent fixtures below the hero — never buried.',
  },
  {
    num: 4,
    title: 'Context-rich activity',
    detail: 'Transactions grouped with account context, not just a raw list.',
  },
  {
    num: 5,
    title: 'Offers are a reward, not a push',
    detail: 'Promotional content always last, always capped, always card-linked.',
  },
] as const

export const tapDepthBefore = {
  average: 'Average: 4.5 taps to primary action',
  footnote: '— Derived from ENBD X app navigation audit',
  tasks: [
    {
      taps: 5,
      path: 'International Transfer: Dashboard → Transfer tab → Transfer type → International → Beneficiary list → Form',
    },
    {
      taps: 4,
      path: 'Pay credit card: Dashboard → Cards → Card detail → Payment screen',
    },
    {
      taps: 4,
      path: 'View wealth: Dashboard → More → Invest → Portfolio',
    },
    {
      taps: 3,
      path: 'Find an offer: Dashboard → Explore → Deals → Filter',
    },
  ],
} as const

export const tapDepthAfter = {
  average: 'Average: 2.25 taps to primary action',
  footnote: '→ 50% reduction in navigation depth',
  tasks: [
    {
      taps: 3,
      path: 'International Transfer: Dashboard Quick Action → Transfer hub → Select beneficiary → Confirm',
    },
    {
      taps: 2,
      path: 'Pay credit card: Dashboard Payment Due tile → [Pay Now] → Confirm',
    },
    {
      taps: 2,
      path: 'View wealth: Dashboard Wealth widget → [View Full] → Portfolio',
    },
    {
      taps: 2,
      path: 'Find an offer: Dashboard Offers strip → [View All] → Filter',
    },
  ],
} as const
