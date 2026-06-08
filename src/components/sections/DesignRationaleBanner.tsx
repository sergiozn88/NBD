import { Link } from 'react-router-dom'
import Container from '../layout/Container'

const brandPills = [
  { label: 'Emirates NBD — Navy', color: '#1a3a6b' },
  { label: 'Emirates Islamic — Green', color: '#1b6b3a' },
  { label: 'Shared gold accent', color: '#c9902b' },
]

export default function DesignRationaleBanner() {
  return (
    <section id="design-rationale" className="bg-[#fafaf8] section-shell pt-0">
      <Container>
        <Link
          to="/design-rationale"
          className="group block overflow-hidden rounded-3xl bg-[#0c1a2e] p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition hover:ring-2 hover:ring-[#c9902b]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9902b] md:p-10 lg:p-12"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#c9902b]">
            Design Rationale
          </p>
          <h2 className="mt-4 max-w-3xl font-['Playfair_Display'] text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-white">
            One dashboard architecture, two banking identities.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            Instead of rebuilding separate dashboard concepts for ENBD and EI, we designed one
            information architecture and one token system that serves both brands — structure
            stays identical while visual identity switches without changing layout or behaviour.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {brandPills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
              >
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: pill.color }}
                  aria-hidden="true"
                />
                {pill.label}
              </span>
            ))}
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#c9902b] transition group-hover:gap-3">
            Read the full design rationale
            <span aria-hidden="true">→</span>
          </p>
        </Link>
      </Container>
    </section>
  )
}
