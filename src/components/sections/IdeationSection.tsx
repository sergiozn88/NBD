import clockIcon from '../../assets/crazy8-clock.svg'
import gridIcon from '../../assets/crazy8-grid.svg'
import searchIcon from '../../assets/crazy8-search.svg'
import { sketchComponents } from '../ideation/Crazy8Sketches'
import Container from '../layout/Container'
import SectionHeader from '../layout/SectionHeader'

const concepts = [
  { id: 'C1', label: 'Card-First', selected: false },
  { id: 'C2', label: 'Balance Hero', selected: false },
  { id: 'C3', label: 'Action Grid', selected: false },
  { id: 'C4', label: 'Timeline Feed', selected: false },
  { id: 'C5', label: 'Offers-Led', selected: false },
  { id: 'C6', label: 'AI-Assist ★', selected: true },
  { id: 'C7', label: 'Wealth-Led', selected: false },
  { id: 'C8', label: 'Modular Grid ★', selected: true },
] as const

function SketchCard({
  id,
  label,
  selected,
}: {
  id: keyof typeof sketchComponents
  label: string
  selected: boolean
}) {
  const Sketch = sketchComponents[id]

  return (
    <article
      className={`flex min-w-0 flex-col overflow-hidden rounded-2xl border-2 bg-white p-0.5 ${
        selected
          ? 'border-[#0c1a2e] shadow-[0_0_0_4px_rgba(12,26,46,0.08)]'
          : 'border-[#e8e4dc] opacity-80'
      }`}
    >
      <div className="flex h-8 items-center justify-between bg-[#f0ece4] px-3">
        <div className="flex gap-1" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-[#ef4444]" />
          <span className="size-1.5 rounded-full bg-[#f59e0b]" />
          <span className="size-1.5 rounded-full bg-[#16a34a]" />
        </div>
        <span className="text-[9px] text-[#94a3b8]">1:00</span>
      </div>

      <div className="h-44 p-4">
        <Sketch />
      </div>

      <div className="flex items-center justify-between px-3 pb-3">
        <div>
          <p className="text-[10px] font-bold text-[#0c1a2e]">{id}</p>
          <p className="text-[8px] uppercase tracking-wide text-[#64748b]">{label}</p>
        </div>
        {selected ? (
          <span className="rounded bg-[#0c1a2e] px-2 py-1 text-[9px] font-bold text-white">
            SELECTED
          </span>
        ) : null}
      </div>
    </article>
  )
}

export default function IdeationSection() {
  return (
    <section id="ideation" className="bg-[#fafaf8] section-shell">
      <Container>
        <SectionHeader
          label="05 / IDEATION"
          title="Crazy 8s — Quantity Before Quality"
        />

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0c1a2e] px-4 py-2">
          <img src={clockIcon} alt="" className="size-3" aria-hidden="true" />
          <span className="text-[10px] uppercase tracking-widest text-white">
            8 sketches · 8 minutes · 1 min each
          </span>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {concepts.map((concept) => (
            <SketchCard
              key={concept.id}
              id={concept.id}
              label={concept.label}
              selected={concept.selected}
            />
          ))}
        </div>

        <aside className="mt-12 flex flex-col gap-8 rounded-3xl bg-[#0c1a2e] p-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="shrink-0">
            <p className="font-['Playfair_Display'] text-4xl font-black text-white">C6 + C8</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-white/50">
              Hybrid Direction Selected
            </p>
          </div>

          <div className="hidden h-16 w-px shrink-0 bg-white/10 lg:block" aria-hidden="true" />

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-3 rounded-[14px] border border-white/10 bg-white/5 px-5 py-3 text-xs font-medium text-white/80">
              <img src={searchIcon} alt="" className="size-5" aria-hidden="true" />
              AI Assist Bar
            </span>
            <span className="inline-flex items-center gap-3 rounded-[14px] border border-white/10 bg-white/5 px-5 py-3 text-xs font-medium text-white/80">
              <img src={gridIcon} alt="" className="size-5" aria-hidden="true" />
              Modular Tile Grid
            </span>
          </div>

          <p className="text-sm leading-relaxed text-white/60 lg:max-w-sm">
            An AI-assist search hero combined with a modular tile grid — a dashboard that anticipates
            needs while remaining fully configurable.
          </p>
        </aside>
      </Container>
    </section>
  )
}
