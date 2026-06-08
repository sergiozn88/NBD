import Container from '../layout/Container'
import SectionHeader from '../layout/SectionHeader'

const personas = [
  {
    initials: 'KM',
    name: 'Khalid Al-Mansoori',
    role: 'Government Official · Abu Dhabi',
    brand: 'EI',
    brandColor: '#2e9e5b',
    goal: 'Sharia-compliant banking with visible Islamic identity in every interaction',
    pain: '"Not easy to navigate. App does not reflect Islamic identity — other banks are more customer friendly."',
    device: 'iPhone 14 Pro · iPad',
    designDecision: 'Islamic geometric watermark + Murabaha labels + Pay Zakat quick action',
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'Project Manager · Dubai Marina',
    brand: 'ENBD',
    brandColor: '#4a7ec0',
    goal: 'Fast remittances to India, Skywards mile accumulation',
    pain: '"This new app complicates the simplest of transactions." 5+ confirmation screens for a basic international transfer.',
    device: 'iPhone 15 · iPad Air (home)',
    designDecision: 'DirectRemit surfaced early + beneficiary quick-scroll + step reduction from 5 to 2 taps',
  },
  {
    initials: 'MA',
    name: 'Mohammed Afifi',
    role: 'Priority Banking Client · Jumeirah',
    brand: 'ENBD',
    brandColor: '#4a7ec0',
    goal: 'Consolidated wealth view — equities, direct portfolio, RM contact',
    pain: '"ENBD X was launched with great fanfare but does not perform as it should." Dashboard feels designed for retail, not wealth management.',
    device: 'iPhone 15 Pro Max · MacBook',
    designDecision: 'Wealth portfolio as dashboard hero + professional chart + RM contact surface',
  },
  {
    initials: 'FZ',
    name: 'Fatima Zayed',
    role: 'Marketing Executive · Business Bay',
    brand: 'EI',
    brandColor: '#2e9e5b',
    goal: 'Discover halal offers, activate deals quickly, minimal friction',
    pain: '"The app is always asking for an update, every week almost twice... it becomes a hassle when I need my card."',
    device: 'iPhone 14 · Apple Watch',
    designDecision: 'Progressive disclosure + plain language labels + card-linked offer filtering',
  },
]

export default function PersonasSection() {
  return (
    <section id="personas" className="bg-[#0c1a2e] section-shell">
      <Container>
        <SectionHeader
          variant="light"
          label="02 / PERSONA DEVELOPMENT"
          title="Understanding Who We Design For"
          aside="Four archetypes derived from UAE retail banking demographics. Not invented — hypothesized from publicly available ENBD & Emirates Islamic customer data."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {personas.map((persona) => (
            <article
              key={persona.initials}
              className="card--dark flex min-w-0 flex-col rounded-3xl border border-white/10 p-6"
            >
              <div
                className="flex size-16 items-center justify-center rounded-full border text-2xl font-bold"
                style={{
                  borderColor: `${persona.brandColor}50`,
                  backgroundColor: `${persona.brandColor}30`,
                  color: persona.brandColor,
                }}
              >
                {persona.initials}
              </div>
              <span
                className="mt-4 inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                style={{
                  backgroundColor: `${persona.brandColor}40`,
                  color: persona.brandColor,
                }}
              >
                {persona.brand}
              </span>
              <h3 className="mt-4 font-['Playfair_Display'] text-xl font-bold text-white">
                {persona.name}
              </h3>
              <p className="mt-1 text-sm text-white/50">{persona.role}</p>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/60">
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-[#c9902b]">Goal</p>
                  <p>{persona.goal}</p>
                </div>
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-[#ff6467]">Pain</p>
                  <p className="italic">{persona.pain}</p>
                </div>
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-white/40">Device</p>
                  <p>{persona.device}</p>
                </div>
              </div>

              <div className="mt-auto rounded-xl border border-white/10 bg-white/5 p-4 pt-6">
                <p className="text-[10px] uppercase tracking-widest text-[#c9902b]">Design Decision</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{persona.designDecision}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
