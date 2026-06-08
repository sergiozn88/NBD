import Container from '../layout/Container'
import SectionHeader from '../layout/SectionHeader'

const sources = ['App Store Reviews', 'Google Play Reviews', 'Trustpilot', 'PwC Middle East UAE Banking Report 2024']

const appAudits = [
  {
    title: 'ENBD X',
    theme: 'navy',
    platform: 'App Store / Google Play',
    ratings: '4.7 ★ / 4.7 ★',
    reviews: '4K iOS / 63K Android',
    quotes: [
      'The user interface is exceptionally challenging to navigate, resulting in confusion and frustration.',
      'ENBD X was launched with great fanfare but it does not perform the way it is supposed to perform... This new app complicates the simplest of transactions.',
      'I cannot login using biometrics. If I choose that option, it will crash.',
    ],
  },
  {
    title: 'EI +',
    theme: 'green',
    platform: 'App Store / Google Play',
    ratings: '4.6 ★ / 4.6 ★',
    reviews: '4K iOS / 63K Android',
    quotes: [
      'The app is full of issues and the bank has the worst customer support experience.',
      'Mobile app is full of bugs and has a very frustrating user experience. Basic tasks are not smooth.',
      'Not easy to navigate. Not easy to figure out what the outstanding credit balance is before you have to pay interest.',
    ],
  },
]

const sentiment = [
  { label: 'Customer Service', value: '78% negative' },
  { label: 'App Performance', value: '65% negative' },
  { label: 'Transfer Issues', value: '71% negative' },
  { label: 'Security Concerns', value: '45% flagged' },
  { label: 'Positive Interactions', value: '22% positive' },
]

const websites = [
  {
    domain: 'emiratesnbd.com',
    brand: 'ENBD',
    strengths: [
      'Clean geometric typeface — consistent with modern banking aesthetic',
      'Navy and gold color language conveys trust and premium positioning',
      'Strong photography: Dubai skyline, aspirational UAE lifestyle',
    ],
    gaps: [
      'Website visual language NOT reflected in app UI',
      'App navigation conflicts with website mental model',
      'No consistent design token system linking web and mobile',
    ],
    insight: 'The website has been rebranded. The app has not. Users experience two completely different brands from the same bank.',
  },
  {
    domain: 'emiratesislamic.ae',
    brand: 'EI',
    strengths: [
      'Distinct green identity clearly differentiates from conventional banking',
      'Islamic geometric patterns signal cultural authenticity',
      'Sharia-compliant product naming visible on website',
    ],
    gaps: [
      'App does not leverage Islamic geometric brand identity — generic UI',
      'Murabaha/Sukuk terminology absent from app account labels',
      'Arabic RTL support inconsistent — app primarily left-to-right',
    ],
    insight: "Emirates Islamic's most powerful brand differentiator — Islamic identity — is invisible inside the app.",
  },
]

const industryStats = [
  { value: '108,488', label: 'Online banking conversations in UAE in 2023', note: '+10.7% YoY' },
  { value: '57.1%', label: 'Priority conversations receiving a bank response', note: 'Below benchmark' },
  { value: '21%', label: 'Customers cited app crashes as reason for switching', note: 'KPMG CX Report' },
  { value: '#1', label: 'Top complaint: Navigation confusion + unclear hierarchy', note: 'Across ENBD & EI' },
]

const hypotheses = [
  {
    initials: 'KM',
    name: 'Khalid Al-Mansoori',
    evidence: '"Not easy to navigate. App does not reflect Islamic identity" — App Store UK, EI+ Review',
    hypothesis: 'Islamic geometric watermark + Murabaha labels + Pay Zakat quick action creates cultural authenticity EI currently lacks in-app',
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    evidence: '"This new app complicates the simplest of transactions... too many confirmations" — ENBD X App Store',
    hypothesis: 'DirectRemit surfaced early + beneficiary quick-scroll + step reduction from 5 to 2 taps directly addresses Priya\'s core pain',
  },
  {
    initials: 'MA',
    name: 'Mohammed Afifi',
    evidence: '"ENBD X was launched with great fanfare but it does not perform" — Priority Banking customer, Trustpilot',
    hypothesis: 'Wealth portfolio as dashboard hero element + premium chart design signals Priority Banking caliber — not retail afterthought',
  },
  {
    initials: 'FZ',
    name: 'Fatima Zayed',
    evidence: '"Always asking for update... every week almost twice" — Masarif.ae EI+ Review',
    hypothesis: 'Progressive disclosure + plain language labels + offer discovery first reduces cognitive load for digital-native users',
  },
]

export default function EvidenceSection() {
  return (
    <section id="evidence" className="bg-[#0c1a2e] section-shell">
      <Container>
        <SectionHeader
          variant="light"
          label="02.5 / SECONDARY RESEARCH"
          title="The Evidence for Change"
          description="Before a single wireframe was drawn, we gathered evidence from 4 primary secondary research sources to understand the true state of Emirates NBD and Emirates Islamic's digital experience."
        />

        <ul className="mt-8 flex flex-wrap gap-3">
          {sources.map((source) => (
            <li
              key={source}
              className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/60"
            >
              {source}
            </li>
          ))}
        </ul>

        <h3 className="mt-16 text-lg font-bold text-white">App Store & Google Play Audit</h3>
        <p className="mt-2 text-sm text-white/40">
          Source: Apple App Store & Google Play Store — Publicly available ratings as of 2025
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {appAudits.map((app) => (
            <article
              key={app.title}
              className="card--dark min-w-0 rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-white">{app.title}</h4>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-widest ${
                    app.theme === 'green' ? 'bg-[#1b6b3a]/30 text-[#05df72]' : 'bg-[#1a3a6b]/30 text-[#7fa3d4]'
                  }`}
                >
                  {app.platform}
                </span>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-white/40">Ratings</dt>
                  <dd className="font-semibold text-white">{app.ratings}</dd>
                </div>
                <div>
                  <dt className="text-white/40">Reviews</dt>
                  <dd className="font-semibold text-white">{app.reviews}</dd>
                </div>
              </dl>
              <ul className="mt-4 space-y-3">
                {app.quotes.map((q) => (
                  <li key={q} className="border-l-2 border-[#c9902b]/50 pl-3 text-sm italic text-white/60">
                    {q}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="card--dark min-w-0 rounded-2xl border border-white/10 p-6 lg:col-span-1">
            <h4 className="text-lg font-bold text-white">Trustpilot Sentiment</h4>
            <p className="mt-1 text-xs text-white/40">emiratesnbd.com & emiratesislamic.ae</p>
            <ul className="mt-6 space-y-3">
              {sentiment.map((s) => (
                <li key={s.label} className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-white/60">{s.label}</span>
                  <span className="shrink-0 font-semibold text-white">{s.value}</span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-6 border-t border-white/10 pt-4 text-sm italic text-white/50">
              "Only 57.1% of priority customer conversations received a bank response"
              <footer className="mt-2 not-italic text-xs text-white/30">
                — PwC Middle East UAE Banking Sentiment Index 2024
              </footer>
            </blockquote>
          </article>
        </div>

        <h3 className="mt-16 text-lg font-bold text-white">Website Audit</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {websites.map((site) => (
            <article key={site.domain} className="card--dark min-w-0 rounded-2xl border border-white/10 p-6">
              <div className="flex items-center gap-3">
                <span className="rounded bg-white/10 px-2 py-1 text-[10px] uppercase tracking-widest text-white/60">
                  {site.brand}
                </span>
                <span className="text-sm text-white/80">{site.domain}</span>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#05df72]">Brand Strengths</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/60">
                    {site.strengths.map((s) => (
                      <li key={s}>✓ {s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#ff6467]">Digital App Gaps</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/60">
                    {site.gaps.map((g) => (
                      <li key={g}>✗ {g}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 rounded-xl border border-[#c9902b]/30 bg-[#c9902b]/10 p-4 text-sm text-[#c9902b]">
                ⚡ {site.insight}
              </p>
            </article>
          ))}
        </div>

        <h3 className="mt-16 text-lg font-bold text-white">Industry Context</h3>
        <p className="mt-2 text-sm text-white/40">
          UAE Banking Sentiment Index — PwC Middle East × DataEQ, 2024
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industryStats.map((stat) => (
            <article key={stat.value} className="card--dark min-w-0 rounded-2xl border border-white/10 p-6 text-center">
              <p className="font-['Playfair_Display'] text-3xl font-black text-[#c9902b]">{stat.value}</p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              <p className="mt-1 text-xs text-white/30">{stat.note}</p>
            </article>
          ))}
        </div>

        <blockquote className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm italic leading-relaxed text-white/60 md:p-8">
          "Investing in digitalisation alone is not enough; banks must enhance their responsiveness and
          integrate customer feedback into their broader strategies."
          <footer className="mt-4 not-italic text-xs text-white/30">
            — PwC Middle East UAE Banking Sentiment Index / KPMG Banking CX Report 2024
          </footer>
        </blockquote>

        <h3 className="mt-16 text-lg font-bold text-white">From Evidence to Hypotheses</h3>
        <p className="mt-2 text-sm text-white/50">How Secondary Research Shaped Our 4 Personas</p>
        <div className="mt-8 space-y-4">
          {hypotheses.map((h) => (
            <article
              key={h.initials}
              className="grid min-w-0 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-[auto_1fr_1fr]"
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-[#c9902b]/20 font-bold text-[#c9902b]">
                {h.initials}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-white">{h.name}</p>
                <p className="mt-2 text-[10px] uppercase tracking-widest text-[#c9902b]">Evidence</p>
                <p className="mt-1 text-sm italic text-white/60">{h.evidence}</p>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-[#05df72]">Design Hypothesis</p>
                <p className="mt-1 text-sm text-white/70">{h.hypothesis}</p>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-16 border-t border-white/10 pt-10 text-center">
          <p className="text-lg text-white/80">
            The data is unambiguous. Users want a simpler, faster, more brand-coherent experience.
          </p>
          <a href="#personas" className="mt-4 inline-block text-sm text-[#c9902b] hover:underline">
            Next: Building the Personas →
          </a>
        </footer>
      </Container>
    </section>
  )
}
