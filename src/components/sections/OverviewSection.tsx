import Container from '../layout/Container'
import SectionHeader from '../layout/SectionHeader'

const methodology = ['Empathize', 'Define', 'Ideate', 'Prototype', 'Test'] as const

const processCards = [
  {
    num: '01',
    title: 'Stakeholder Brief Analysis',
    body: 'Decode the design brief, identify success criteria, define brand constraints for Emirates NBD and Emirates Islamic.',
    tag: 'DISCOVERY',
  },
  {
    num: '02',
    title: 'Proto-Persona Development',
    body: 'Define 4 user archetypes based on UAE banking demographics — nationals, expats, HNW investors, and digital natives.',
    tag: 'RESEARCH',
  },
  {
    num: '03',
    title: 'User Journey Mapping',
    body: 'Plot key task flows (Transfer, Wealth, Offers) revealing pain points and moments of delight across touchpoints.',
    tag: 'SYNTHESIS',
  },
  {
    num: '04',
    title: 'Crazy 8s Ideation',
    body: 'Generate 8 layout concepts in 8 minutes — rapid sketching to diverge before converging on the C6+C8 hybrid direction.',
    tag: 'IDEATION',
  },
  {
    num: '05',
    title: 'Moodboard & Brand Audit',
    body: 'Extract visual DNA from emiratesnbd.com and emiratesislamic.ae — typography, color language, photography style.',
    tag: 'BRANDING',
  },
  {
    num: '06',
    title: 'Token System Architecture',
    body: 'Design the variable system: primitives → semantic tokens → component tokens. One toggle, two complete identities.',
    tag: 'SYSTEMS',
  },
]

export default function OverviewSection() {
  return (
    <section id="overview" className="bg-[#fafaf8] section-shell">
      <Container>
        <div className="split-layout">
          <aside>
            <SectionHeader
              label="01 / OVERVIEW"
              title="How We Got Here"
              description="Before a single screen was designed, we followed a rigorous design thinking methodology — five phases that transform user needs into a scalable, token-driven interface system."
            />

            <div className="card mt-10">
              <p className="text-[10px] uppercase tracking-widest text-[#c9902b]">Methodology</p>
              <ol className="mt-6 space-y-0">
                {methodology.map((step, i) => (
                  <li key={step} className="flex items-center gap-4 py-2">
                    <span
                      className={`inline-block size-3 shrink-0 rotate-45 ${
                        i === 4
                          ? 'border border-[#e8e4dc]'
                          : i === 3
                            ? 'bg-[#c9902b]'
                            : 'bg-[#0c1a2e]'
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-sm font-semibold ${i === 4 ? 'text-[#94a3b8]' : 'text-[#0c1a2e]'}`}
                    >
                      {step}
                    </span>
                    {i < methodology.length - 1 ? (
                      <span
                        className="ml-2 hidden h-6 border-l border-dashed border-[#e8e4dc] sm:block"
                        aria-hidden="true"
                      />
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="grid-cards grid-cards--2 min-w-0">
            {processCards.map((card) => (
              <article key={card.num} className="card relative min-w-0 overflow-hidden">
                <span
                  className="pointer-events-none absolute right-4 top-2 font-['Playfair_Display'] text-5xl font-black text-[rgba(12,26,46,0.05)]"
                  aria-hidden="true"
                >
                  {card.num}
                </span>
                <div className="flex size-8 items-center justify-center rounded-full bg-[#0c1a2e] text-xs font-bold text-white">
                  {card.num}
                </div>
                <h3 className="mt-3 text-base font-bold text-[#0c1a2e]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{card.body}</p>
                <span className="tag mt-4">{card.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
