import eiPattern from '../../assets/moodboard-ei-pattern.png'
import eiStar from '../../assets/moodboard-ei-star.svg'
import Container from '../layout/Container'
import SectionHeader from '../layout/SectionHeader'

const columns = [
  { id: 'enbd', label: 'Emirates NBD' },
  { id: 'ei', label: 'Emirates Islamic' },
  { id: 'shared', label: 'Shared DNA' },
  { id: 'avoid', label: 'Avoid' },
] as const

const colorRows = {
  enbd: ['#0c1b4d', '#1a3a6b', '#c9902b'],
  ei: ['#0f4025', '#1b6b3a', '#b8860b'],
  shared: ['#ffffff', '#f8f9fa', null],
  avoid: ['#000000', '#e7000b', '#e9d4ff'],
} as const

const imageryRows = {
  enbd: {
    title: 'Dubai Skyline',
    desc: 'Professional photography, cool blue tones, architectural geometry.',
    bg: '#e8eef8',
    titleColor: '#1a3a6b',
    descColor: 'rgba(26,58,107,0.7)',
  },
  ei: {
    title: 'Islamic Geometry',
    desc: 'Warm natural light, cultural heritage, organic complexity.',
    bg: '#e8f2ec',
    titleColor: '#1b6b3a',
    descColor: 'rgba(27,107,58,0.7)',
  },
  shared: {
    title: 'Human Context',
    desc: 'Hands with devices, UAE context, aspirational lifestyles.',
    bg: '#faf0dc',
    titleColor: '#c9902b',
    descColor: 'rgba(201,144,43,0.7)',
  },
  avoid: {
    title: 'Stock Clichés',
    desc: 'Western generic smiles, flat office lighting, fake interactions.',
    bg: '#fef2f2',
    titleColor: '#c10007',
    descColor: 'rgba(231,0,11,0.7)',
  },
} as const

const typeRows = {
  enbd: { sample: 'ABC', desc: 'Geometric Sans. Modern, authoritative, and clean.' },
  ei: { sample: 'الخط العربي', desc: 'Dual-script ready. Arabic-Latin harmony.' },
  shared: { sample: 'Inter', desc: 'Readability above personality. Consistent hierarchy.' },
  avoid: {
    sample: 'Avoid',
    desc: 'Script fonts or poor Arabic rendering.',
    muted: true,
    script: true,
  },
} as const

const keywords = [
  'Trustworthy',
  'Premium',
  'Culturally Rooted',
  'Digitally Native',
  'Minimal Complexity',
  'Bold Typography',
  'Geometric Precision',
  'Warm Authority',
  'Accessible Luxury',
  'Islamic Heritage',
  'UAE Pride',
  'Progressive',
]

function ColorSwatches({
  colors,
  avoid = false,
}: {
  colors: readonly (string | null)[]
  avoid?: boolean
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${avoid ? 'opacity-40' : ''}`}>
      {colors.map((color, index) =>
        color ? (
          <div
            key={color}
            className={`flex size-12 shrink-0 items-center justify-center rounded-[14px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] ${
              color === '#ffffff' || color === '#f8f9fa' ? 'border border-[#e8e4dc]' : ''
            }`}
            style={{ backgroundColor: color }}
            aria-hidden="true"
          >
            {avoid ? <span className="text-base text-white">×</span> : null}
          </div>
        ) : (
          <span key={`label-${index}`} className="text-[10px] text-[#64748b]">
            Clean neutrals
          </span>
        ),
      )}
    </div>
  )
}

function BrandMatrix() {
  return (
    <div className="mt-12 min-w-0">
      <div className="hidden border-b border-[#e8e4dc] pb-3 lg:grid lg:grid-cols-4 lg:gap-6">
        {columns.map((col) => (
          <p
            key={col.id}
            className="text-[10px] uppercase tracking-widest text-[#64748b]"
          >
            {col.label}
          </p>
        ))}
      </div>

      {(['color', 'imagery', 'type'] as const).map((row) => (
        <div
          key={row}
          className="border-b border-[#e8e4dc] py-6 lg:grid lg:grid-cols-4 lg:gap-6 lg:py-8"
        >
          <p className="mb-4 text-[10px] uppercase tracking-widest text-[#94a3b8] lg:mb-0 lg:hidden">
            {row}
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:contents">
            {columns.map((col) => (
              <div key={`${row}-${col.id}`} className="min-w-0">
                <p className="mb-3 text-[10px] uppercase tracking-widest text-[#64748b] lg:hidden">
                  {col.label}
                </p>

                {row === 'color' ? (
                  <ColorSwatches
                    colors={colorRows[col.id]}
                    avoid={col.id === 'avoid'}
                  />
                ) : null}

                {row === 'imagery' ? (
                  <div
                    className="rounded-[14px] p-4"
                    style={{ backgroundColor: imageryRows[col.id].bg }}
                  >
                    <p
                      className="text-sm font-bold"
                      style={{ color: imageryRows[col.id].titleColor }}
                    >
                      {imageryRows[col.id].title}
                    </p>
                    <p
                      className="mt-2 text-[11px] italic leading-relaxed"
                      style={{ color: imageryRows[col.id].descColor }}
                    >
                      {imageryRows[col.id].desc}
                    </p>
                  </div>
                ) : null}

                {row === 'type' ? (
                  <div className={col.id === 'avoid' ? 'opacity-40' : ''}>
                    <p
                      className={`text-lg font-bold text-[#0c1a2e] ${
                        col.id === 'avoid' ? 'font-serif italic' : ''
                      }`}
                    >
                      {typeRows[col.id].sample}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#64748b]">
                      {typeRows[col.id].desc}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function MoodboardCollage() {
  return (
    <div className="mt-16 overflow-hidden rounded-3xl bg-[#0c1a2e] p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] md:p-2">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:grid-rows-[minmax(200px,280px)_minmax(200px,280px)_minmax(120px,146px)]">
        {/* ENBD Navy — spans top two rows on desktop */}
        <div
          className="relative min-h-[280px] overflow-hidden rounded-2xl md:col-start-1 md:row-span-2 md:row-start-1 md:min-h-0"
          style={{
            backgroundImage:
              'linear-gradient(141deg, #1a3a6b 0%, #193768 8%, #173566 17%, #163263 25%, #153061 33%, #142d5e 42%, #122a5c 50%, #112859 58%, #103557 67%, #0f3254 75%, #0e3052 83%, #0d2d4f 92%, #0c1b4d 100%)',
          }}
        >
          <p
            className="pointer-events-none absolute -left-12 top-8 select-none text-[clamp(6rem,18vw,12rem)] font-bold leading-none tracking-[-0.05em] text-white/10"
            aria-hidden="true"
          >
            NBD
          </p>
          <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6 md:min-h-0 md:justify-center md:pb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">Emirates</p>
            <p className="font-['Playfair_Display'] text-[clamp(3rem,10vw,6rem)] font-black leading-none text-white">
              NBD
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex gap-1 bg-gradient-to-t from-black/50 to-transparent px-4 pb-4 pt-10">
            <span className="h-2 w-8 bg-[#1a3a6b]" aria-hidden="true" />
            <span className="h-2 w-8 bg-[#c9902b]" aria-hidden="true" />
            <span className="h-2 w-8 bg-white" aria-hidden="true" />
            <p className="ml-auto text-[10px] text-white/60">Primary Brand · Navy Confidence</p>
          </div>
        </div>

        {/* EI Green */}
        <div className="relative min-h-[200px] overflow-hidden rounded-2xl bg-[#1b6b3a] md:col-start-2 md:row-start-1">
          <img
            src={eiStar}
            alt=""
            className="pointer-events-none absolute -right-4 top-1/2 size-48 -translate-y-1/2 rotate-12 opacity-15"
            aria-hidden="true"
          />
          <p className="absolute bottom-4 left-4 text-[10px] text-white/80">Emirates Islamic</p>
        </div>

        {/* Portfolio Balance */}
        <div className="flex min-h-[200px] flex-col justify-center rounded-2xl bg-[#faf0dc] p-6 md:col-start-3 md:row-start-1">
          <p className="text-[10px] uppercase text-[#c9902b]">Portfolio Balance</p>
          <p className="mt-2 font-['Playfair_Display'] text-[clamp(1.5rem,4vw,1.875rem)] font-black text-[#0c1a2e]">
            AED 1,172,789
          </p>
          <div className="mt-4 flex gap-1" aria-hidden="true">
            <span className="size-1 rounded-full bg-[#c9902b]" />
            <span className="size-1 rounded-full bg-[#c9902b]" />
            <span className="size-1 rounded-full bg-[#c9902b]" />
          </div>
        </div>

        {/* Gold Accent */}
        <div className="relative min-h-[200px] overflow-hidden rounded-2xl bg-[#c9902b] p-6 md:col-start-2 md:row-start-2">
          <p
            className="pointer-events-none absolute -right-2 top-0 font-['Playfair_Display'] text-[7rem] font-black leading-none text-white/20"
            aria-hidden="true"
          >
            01
          </p>
          <div className="relative mt-auto flex h-full flex-col justify-end">
            <p className="text-[10px] font-bold text-white">ACCENT · GOLD</p>
            <p className="text-[10px] text-white/70">#C9902B</p>
          </div>
        </div>

        {/* EI Pattern Watermark */}
        <div className="relative min-h-[120px] overflow-hidden rounded-2xl bg-white md:col-start-1 md:row-start-3">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${eiPattern})`,
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />
          <div className="relative flex h-full min-h-[120px] items-center justify-center px-4">
            <span className="rounded-full border border-[#e8e4dc] bg-white/80 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[#1b6b3a]">
              EI Pattern Watermark
            </span>
          </div>
          <p className="absolute bottom-3 left-4 text-[10px] text-[#94a3b8]">
            Cultural Identity · Subtle 7%
          </p>
        </div>

        {/* UI Specimen */}
        <div className="flex min-h-[120px] flex-col justify-center rounded-2xl bg-white p-4 md:col-start-2 md:row-start-3">
          <div className="overflow-hidden rounded-[14px] border border-[#e8e4dc] shadow-sm">
            <div className="flex items-center gap-1 bg-[#1a3a6b] px-2 py-1">
              <span className="size-1 rounded-full bg-white/40" aria-hidden="true" />
              <span className="size-1 rounded-full bg-white/40" aria-hidden="true" />
            </div>
            <div className="space-y-2 p-2">
              <div className="h-1 w-36 rounded bg-[#f0ece4]" aria-hidden="true" />
              <div className="h-3 w-full rounded bg-[rgba(26,58,107,0.1)]" aria-hidden="true" />
              <div className="flex gap-1">
                <span className="size-3 rounded bg-[rgba(201,144,43,0.2)]" aria-hidden="true" />
                <span className="size-3 rounded bg-[rgba(26,58,107,0.2)]" aria-hidden="true" />
              </div>
            </div>
          </div>
          <p className="mt-3 text-[9px] uppercase tracking-wide text-[#94a3b8]">UI Specimen · Tokens</p>
        </div>
      </div>
    </div>
  )
}

function KeywordTags() {
  return (
    <ul className="mt-12 flex flex-wrap justify-center gap-2 md:gap-3">
      {keywords.map((word) => (
        <li
          key={word}
          className="rounded-full border border-[#e8e4dc] bg-[#f0ece4] px-5 py-2 text-sm font-medium text-[#0c1a2e]"
        >
          {word}
        </li>
      ))}
    </ul>
  )
}

export default function VisualLanguageSection() {
  return (
    <section id="moodboard" className="bg-[#fafaf8] section-shell">
      <Container>
        <SectionHeader
          label="04 / MOODBOARD"
          title="Visual Language"
          description="Visual DNA extracted from emiratesnbd.com and emiratesislamic.ae — translated into a digital design language."
        />

        <BrandMatrix />
        <MoodboardCollage />
        <KeywordTags />
      </Container>
    </section>
  )
}
