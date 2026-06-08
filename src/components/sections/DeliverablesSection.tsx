import { FIGMA_ENBD_DASHBOARD_URL } from '../../constants/figma'
import imgEnbdDesktopDashboard from '../../assets/enbd-desktop-dashboard.png'
import imgEnbdMobileDashboard from '../../assets/enbd-mobile-dashboard.png'
import Container from '../layout/Container'
import SectionHeader from '../layout/SectionHeader'

const FIGMA_ENBD_DESIGN_URL = FIGMA_ENBD_DASHBOARD_URL

const deliverables = [
  { num: '01', title: 'Proto-Personas', tag: 'Research', color: '#ffb900' },
  { num: '02', title: 'User Journey Maps', tag: 'Synthesis', color: '#51a2ff' },
  { num: '03', title: 'Crazy 8s Wireframes', tag: 'Ideation', color: '#c27aff' },
  { num: '04', title: 'Moodboard & Brand Audit', tag: 'Branding', color: '#c9902b' },
  { num: '05', title: 'Design System Explorer', tag: 'Foundation', color: '#99a1af' },
  { num: '06', title: 'ENBD Mobile Dashboard', tag: 'Mobile', color: '#05df72', href: FIGMA_ENBD_DESIGN_URL },
  { num: '07', title: 'Emirates Islamic Mobile', tag: 'Mobile', color: '#05df72' },
  { num: '08', title: 'ENBD X Desktop Dashboard', tag: 'Desktop', color: '#1a3a6b', href: FIGMA_ENBD_DESIGN_URL },
  { num: '09', title: 'EI Desktop Dashboard', tag: 'Desktop', color: '#1a3a6b' },
]

const previews = [
  {
    label: 'Desktop UI',
    title: 'ENBD X Desktop Dashboard',
    image: imgEnbdDesktopDashboard,
    alt: 'ENBD X desktop dashboard showing accounts, balances, and recent activity',
    href: FIGMA_ENBD_DESIGN_URL,
  },
  {
    label: 'Mobile UI',
    title: 'ENBD Mobile Dashboard',
    image: imgEnbdMobileDashboard,
    alt: 'ENBD mobile dashboard showing accounts, quick actions, and recent activity',
    href: FIGMA_ENBD_DESIGN_URL,
  },
]

export default function DeliverablesSection() {
  return (
    <section id="deliverables" className="bg-[#0c1a2e] section-shell">
      <Container>
        <SectionHeader
          variant="light"
          label="07 / DELIVERABLES"
          title="What We Built"
        />

        <div className="grid-cards mt-12 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => {
            const card = (
              <>
                <span className="text-xs text-[#c9902b]">{item.num}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className="size-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                      aria-hidden="true"
                    />
                    <span className="text-[10px] uppercase tracking-widest text-white/40">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <span className="text-white/30" aria-hidden="true">
                  →
                </span>
              </>
            )

            return item.href ? (
              <a
                key={item.num}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card--dark flex min-w-0 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-[#c9902b]/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9902b]"
                aria-label={`Open ${item.title} in Figma (opens in new tab)`}
              >
                {card}
              </a>
            ) : (
              <article
                key={item.num}
                className="card--dark flex min-w-0 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                {card}
              </article>
            )
          })}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {previews.map((preview) => (
            <a
              key={preview.title}
              href={preview.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block min-w-0 overflow-hidden rounded-3xl bg-[#0c1a2e] transition hover:ring-2 hover:ring-[#c9902b]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9902b]"
              aria-label={`Open ${preview.title} in Figma (opens in new tab)`}
            >
              <div className="aspect-square w-full bg-[#0c1a2e] p-4">
                <img
                  src={preview.image}
                  alt={preview.alt}
                  className="size-full object-contain object-center transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0c1a2e] via-[#0c1a2e]/80 to-transparent p-8 pt-24">
                <p className="text-[10px] uppercase tracking-widest text-white/50">
                  {preview.label}
                </p>
                <p className="mt-1 font-['Playfair_Display'] text-xl font-bold text-white md:text-2xl">
                  {preview.title}
                </p>
                <p className="mt-2 text-xs text-[#c9902b] opacity-0 transition group-hover:opacity-100">
                  View in Figma →
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-16 text-center">
          <p className="font-['Playfair_Display'] text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-tight text-white">
            One toggle.
          </p>
          <p className="font-['Playfair_Display'] text-[clamp(2.5rem,8vw,6rem)] font-black italic leading-none tracking-tight text-[#c9902b]">
            Two identities.
          </p>
          <p className="font-['Playfair_Display'] text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-tight text-white/10">
            Zero compromises.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-white/50">
            <div className="flex items-center gap-3">
              <span className="size-3 rounded-full bg-[#1a3a6b]" aria-hidden="true" />
              Emirates NBD · Navy #1A3A6B
            </div>
            <div className="flex items-center gap-3">
              <span className="size-3 rounded-full bg-[#1b6b3a]" aria-hidden="true" />
              Emirates Islamic · Green #1B6B3A
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
