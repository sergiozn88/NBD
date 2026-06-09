export const collectionLayers = [
  {
    title: 'Primitive',
    subtitle: 'Raw values only',
    bg: '#0c1a2e',
    items: [
      'Typography (Inter / SF Pro)',
      'Font Size (18 steps: 4XS → 10XL)',
      'Font Weight (Regular–Bold)',
      'Line Height (12 steps)',
      'Spacing (4pt grid)',
      'Radius (None → Full)',
      'Opacity (0–100, 11 steps)',
      'Border Width (Thin / Medium / Thick)',
      'Elevation (0–5)',
    ],
    footnote: 'No modes · No brand meaning',
  },
  {
    title: 'Brand',
    subtitle: 'Semantic color aliases',
    bg: '#1a3a6b',
    modes: ['ENBD', 'EI'],
    items: [
      'Primary / Primary Hover / Primary Pressed',
      'Surface / Surface Hover',
      'Text Primary / Text Secondary',
      'Border Default',
      'Success / Warning / Error',
    ],
    footnote: 'Aliases Primitive only · Never raw values',
  },
  {
    title: 'Component',
    subtitle: 'Aliases Brand tokens',
    bg: '#1b6b3a',
    items: [
      'Button/Primary/BG → Brand/Primary',
      'Button/Primary/Text → Brand/Text Inverse',
      'Input/Border → Brand/Border Default',
      'Card/BG → Brand/Surface',
      'Nav/Active → Brand/Primary',
    ],
    footnote: 'Never references Primitive directly',
  },
  {
    title: 'Semantic Typography',
    subtitle: 'Web + iOS modes',
    bg: '#64748b',
    modes: ['Web', 'iOS'],
    items: [
      'Display/Large · Heading/H1–H4',
      'Body/Large · Medium · Small',
      'Label/Large · Medium · Small',
      'Caption/Medium',
      'Numeric/Display · Large · Medium · Small',
    ],
    footnote: 'Aliases Primitive Typography',
  },
  {
    title: 'Semantic Layout',
    subtitle: 'Spacing, radius, elevation',
    bg: '#475569',
    items: [
      'Page Padding / Section Gap / Content Gap',
      'Button Radius / Card Radius / Modal Radius',
      'Card Elevation / Modal Elevation',
      'Disabled Opacity / Overlay Opacity',
    ],
    footnote: 'Never raw values in components',
  },
] as const

export const threeRules = [
  'Do not bypass layers',
  'Do not hardcode values',
  'Always use variables and aliases',
]

export type TypographyPlatform = 'Web' | 'iOS'

type TypographySpec = {
  size: string
  lineH: string
  weight: string
}

type TypographyRow = {
  style: string
  sample: string
  sampleClass: string
  web: TypographySpec
  ios: TypographySpec
}

export const typographyRows: TypographyRow[] = [
  {
    style: 'Display/Large',
    sample: 'AED 1,172,789',
    sampleClass: 'font-bold',
    web: { size: '9XL', lineH: '9XL', weight: 'Bold' },
    ios: { size: '4XL', lineH: '4XL', weight: 'Bold' },
  },
  {
    style: 'Display/Medium',
    sample: 'Portfolio Overview',
    sampleClass: 'font-bold',
    web: { size: '8XL', lineH: '8XL', weight: 'Bold' },
    ios: { size: '3XL', lineH: '3XL', weight: 'Bold' },
  },
  {
    style: 'Display/Small',
    sample: 'Good morning',
    sampleClass: 'font-bold',
    web: { size: '7XL', lineH: '7XL', weight: 'Bold' },
    ios: { size: '2XL', lineH: '2XL', weight: 'Bold' },
  },
  {
    style: 'Heading/H1',
    sample: 'Dashboard Overview',
    sampleClass: 'font-bold',
    web: { size: '6XL', lineH: '6XL', weight: 'Bold' },
    ios: { size: 'XL', lineH: 'XL', weight: 'Semibold' },
  },
  {
    style: 'Heading/H2',
    sample: 'Accounts & Cards',
    sampleClass: 'font-semibold',
    web: { size: '5XL', lineH: '5XL', weight: 'Semibold' },
    ios: { size: 'L', lineH: 'L', weight: 'Semibold' },
  },
  {
    style: 'Heading/H3',
    sample: 'Recent Transactions',
    sampleClass: 'font-semibold',
    web: { size: '3XL', lineH: '3XL', weight: 'Semibold' },
    ios: { size: 'M', lineH: 'M', weight: 'Semibold' },
  },
  {
    style: 'Heading/H4',
    sample: 'Current Account',
    sampleClass: 'font-semibold',
    web: { size: 'XL', lineH: 'XL', weight: 'Semibold' },
    ios: { size: 'S', lineH: 'S', weight: 'Semibold' },
  },
  {
    style: 'Body/Large',
    sample: 'Your balance is updated in real time.',
    sampleClass: 'font-normal',
    web: { size: 'M', lineH: 'M', weight: 'Regular' },
    ios: { size: 'XS', lineH: 'XS', weight: 'Regular' },
  },
  {
    style: 'Body/Medium',
    sample: 'Transfer sent successfully to Hassan al-Massari.',
    sampleClass: 'font-normal',
    web: { size: 'XS', lineH: 'XS', weight: 'Regular' },
    ios: { size: '2XS', lineH: '2XS', weight: 'Regular' },
  },
  {
    style: 'Body/Small',
    sample: 'Completed · Today · AED 245.00',
    sampleClass: 'font-normal',
    web: { size: '2XS', lineH: '2XS', weight: 'Regular' },
    ios: { size: '3XS', lineH: '3XS', weight: 'Regular' },
  },
  {
    style: 'Label/Large',
    sample: 'QUICK ACTIONS',
    sampleClass: 'font-semibold uppercase tracking-wide',
    web: { size: 'XS', lineH: 'XS', weight: 'Semibold' },
    ios: { size: '2XS', lineH: '2XS', weight: 'Semibold' },
  },
  {
    style: 'Label/Medium',
    sample: 'CURRENT ACCOUNT',
    sampleClass: 'font-semibold uppercase tracking-wide',
    web: { size: '2XS', lineH: '2XS', weight: 'Semibold' },
    ios: { size: '3XS', lineH: '3XS', weight: 'Semibold' },
  },
  {
    style: 'Label/Small',
    sample: 'VIEW ALL ›',
    sampleClass: 'font-semibold uppercase',
    web: { size: '3XS', lineH: '3XS', weight: 'Semibold' },
    ios: { size: '4XS', lineH: '3XS', weight: 'Semibold' },
  },
  {
    style: 'Caption/Medium',
    sample: 'Last updated 2 hours ago',
    sampleClass: 'text-[#64748b]',
    web: { size: '3XS', lineH: '3XS', weight: 'Regular' },
    ios: { size: '3XS', lineH: '3XS', weight: 'Regular' },
  },
  {
    style: 'Numeric/Display',
    sample: 'AED 1,172,789.33',
    sampleClass: 'font-bold font-["Playfair_Display"]',
    web: { size: '6XL', lineH: '6XL', weight: 'Bold' },
    ios: { size: 'XL', lineH: 'XL', weight: 'Bold' },
  },
  {
    style: 'Numeric/Large',
    sample: 'AED 24,500.00',
    sampleClass: 'font-bold font-["Playfair_Display"]',
    web: { size: '5XL', lineH: '5XL', weight: 'Bold' },
    ios: { size: 'L', lineH: 'L', weight: 'Bold' },
  },
  {
    style: 'Numeric/Medium',
    sample: 'AED 3,240',
    sampleClass: 'font-semibold',
    web: { size: 'M', lineH: 'M', weight: 'Semibold' },
    ios: { size: 'XS', lineH: 'XS', weight: 'Semibold' },
  },
  {
    style: 'Numeric/Small',
    sample: 'AED 180.50',
    sampleClass: 'font-medium',
    web: { size: 'XS', lineH: 'XS', weight: 'Medium' },
    ios: { size: '2XS', lineH: '2XS', weight: 'Medium' },
  },
]

export const spacingScale = [4, 8, 12, 16, 24, 32, 40, 48, 64] as const

export const spacingTokens = [
  { label: 'Page Padding', value: '32px / 40px' },
  { label: 'Section Gap', value: '48px / 64px' },
  { label: 'Content Gap', value: '16px / 24px' },
] as const

export const radiusScale = [
  { label: 'None', radius: '0' },
  { label: 'XS', radius: '4px' },
  { label: 'S', radius: '6px' },
  { label: 'M', radius: '8px' },
  { label: 'L', radius: '16px' },
  { label: 'XL', radius: '20px' },
  { label: 'Full', radius: '9999px' },
] as const

export const radiusTokens = [
  { label: 'Button Radius', value: 'M · 8px' },
  { label: 'Card Radius', value: 'L · 16px' },
  { label: 'Modal Radius', value: 'XL · 20px' },
] as const

export const elevationScale = [
  { level: 0, shadow: 'none' },
  { level: 1, shadow: '0 1px 3px rgba(0,0,0,0.06)' },
  { level: 2, shadow: '0 4px 12px rgba(0,0,0,0.08)' },
  { level: 3, shadow: '0 8px 24px rgba(0,0,0,0.10)' },
  { level: 4, shadow: '0 16px 40px rgba(0,0,0,0.12)' },
  { level: 5, shadow: '0 24px 64px rgba(0,0,0,0.14)' },
] as const

export const brandTokens = [
  { token: 'Primary', enbd: '#1A3A6B', ei: '#1B6B3A', alias: 'color-blue-700 / color-green-700' },
  { token: 'Primary Hover', enbd: '#14305A', ei: '#155A30', alias: 'color-blue-800 / color-green-800' },
  { token: 'Primary Pressed', enbd: '#0C1B4D', ei: '#0F4025', alias: 'color-blue-900 / color-green-900' },
  { token: 'Surface', enbd: '#FFFFFF', ei: '#FFFFFF', alias: 'color-white' },
  { token: 'Surface Hover', enbd: '#F8F9FA', ei: '#F0FDF4', alias: 'color-neutral-50 / color-green-50' },
  { token: 'Text Primary', enbd: '#0C1A2E', ei: '#0C1A2E', alias: 'color-neutral-900 (shared)' },
  { token: 'Text Secondary', enbd: '#64748B', ei: '#64748B', alias: 'color-neutral-500 (shared)' },
  { token: 'Border Default', enbd: '#E2E8F0', ei: '#D1FAE5', alias: 'color-neutral-200 / color-green-100' },
  { token: 'Success', enbd: '#16A34A', ei: '#16A34A', alias: 'color-green-600' },
  { token: 'Warning', enbd: '#F59E0B', ei: '#F59E0B', alias: 'color-amber-500' },
  { token: 'Error', enbd: '#EF4444', ei: '#EF4444', alias: 'color-red-500' },
  { token: 'Brand/Accent', enbd: '#C9902B', ei: '#C9902B', alias: 'color-gold-500' },
] as const
