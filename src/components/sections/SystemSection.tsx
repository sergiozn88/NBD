import Container from '../layout/Container'
import SectionHeader from '../layout/SectionHeader'

const pipeline = [
  { step: '01', title: 'Research', subtitle: 'Personas & Journeys', next: 'Hypotheses' },
  { step: '02', title: 'Define', subtitle: 'Pain Points & Insights', next: 'Ideation' },
  { step: '03', title: 'Design', subtitle: 'Tokens & Components', next: 'Prototype' },
  { step: '04', title: 'Deliver', subtitle: 'Screens & System', next: 'Test' },
]

const insights = [
  {
    quote:
      '"International transfers require too many screens and confirmations... Priyanka feels the friction."',
    solution: 'DirectRemit Surface',
    detail:
      'Reduced transfer flow from 7 steps to 4. Integrated currency conversion early in the path to minimize bounce.',
    accent: '#1a3a6b',
  },
  {
    quote: '"Wants Sharia clarity... Khalid needs to feel the cultural distinction in the UI."',
    solution: 'Islamic Identity Tokens',
    detail:
      'Murabaha labels, Zakat quick action, and dynamic geometric watermarks that only trigger in EI mode.',
    accent: '#1b6b3a',
  },
  {
    quote: '"Dashboard feels too retail... Mohammed needs a private banking experience."',
    solution: 'Wealth Management View',
    detail:
      "Introduced a 'Portfolio' hero card with high-density stats and direct RM contact integration for Priority users.",
    accent: '#c9902b',
  },
]

export default function SystemSection() {
  return (
    <section id="system" className="bg-[#fafaf8] section-shell">
      <Container>
        <SectionHeader
          label="06 / SYSTEM ARCHITECTURE"
          title="From Research to Reality"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pipeline.map((item, i) => (
            <article key={item.step} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#f0ece4] text-lg font-bold text-[#0c1a2e]">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#0c1a2e]">{item.title}</h3>
              <p className="mt-1 text-sm text-[#64748b]">{item.subtitle}</p>
              {i < pipeline.length - 1 ? (
                <p className="mt-2 hidden text-[10px] uppercase tracking-widest text-[#99a1af] lg:block">
                  {item.next} →
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-16 space-y-0 overflow-hidden rounded-2xl border border-[#e8e4dc] bg-white">
          {insights.map((row, i) => (
            <div
              key={row.solution}
              className={`grid gap-6 border-[#e8e4dc] p-6 md:grid-cols-2 md:items-center md:p-8 ${
                i < insights.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="min-w-0 bg-[#fafaf8]/50 md:pr-4">
                <p className="text-[10px] uppercase tracking-widest text-[#c9902b]">The Insight</p>
                <blockquote className="mt-4 font-['Playfair_Display'] text-lg italic leading-snug text-[#0c1a2e]">
                  {row.quote}
                </blockquote>
              </div>
              <div className="flex min-w-0 gap-4 md:pl-4">
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${row.accent}15` }}
                  aria-hidden="true"
                >
                  <span className="text-lg" style={{ color: row.accent }}>
                    ✓
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-[#0c1a2e]">{row.solution}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{row.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
