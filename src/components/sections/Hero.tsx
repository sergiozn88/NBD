import Container from '../layout/Container'

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-[#0c1a2e] section-shell pb-16 pt-20 md:pt-28">
      <div
        className="pointer-events-none absolute -left-24 top-20 size-72 rounded-full bg-[rgba(26,58,107,0.3)] blur-3xl md:size-96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-32 size-72 rounded-full bg-[rgba(27,107,58,0.2)] blur-3xl md:size-96"
        aria-hidden="true"
      />

      <Container>
        <div className="relative max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-px w-10 shrink-0 bg-[#c9902b]" aria-hidden="true" />
            <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.2em] text-[#c9902b]">
              Design Process Documentation
            </p>
            <span className="rounded-full border border-[rgba(201,144,43,0.4)] px-2.5 py-0.5 text-xs text-[#c9902b]">
              2026
            </span>
          </div>

          <h1 className="mt-8 font-['Playfair_Display'] font-black leading-[1.05]">
            <span className="block text-[clamp(2.25rem,6vw,5.5rem)] text-white">
              <span className="text-[#c9902b]">ENBD X</span>
              <span className="text-white/60"> & </span>
              <span className="text-[#05df72]">EI</span>
              <span> Rebranding</span>
            </span>
            <span className="mt-1 block text-[clamp(2.25rem,6vw,5.5rem)] italic text-[#c9902b]">
              Two Identities,
            </span>
            <span className="mt-1 block text-[clamp(2.25rem,6vw,5.5rem)] text-white/90">
              One System.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            A complete design thinking process — from user research and persona development through
            moodboards, information architecture, and the final dual-brand digital banking platform.
          </p>

          <p className="mt-4 text-sm text-white/45">Work done by Serag Alzentani</p>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-8">
            <div>
              <dt className="sr-only">Design Tokens</dt>
              <dd className="font-['Playfair_Display'] text-3xl font-black text-white sm:text-5xl">
                149
              </dd>
              <dd className="mt-1 text-[10px] uppercase tracking-wider text-white/40 sm:text-xs">
                Design Tokens
              </dd>
            </div>
            <div>
              <dt className="sr-only">Brand Identities</dt>
              <dd className="font-['Playfair_Display'] text-3xl font-black text-[#c9902b] sm:text-5xl">
                2
              </dd>
              <dd className="mt-1 text-[10px] uppercase tracking-wider text-white/40 sm:text-xs">
                Brand Identities
              </dd>
            </div>
            <div>
              <dt className="sr-only">Screens Designed</dt>
              <dd className="font-['Playfair_Display'] text-3xl font-black text-white sm:text-5xl">
                4
              </dd>
              <dd className="mt-1 text-[10px] uppercase tracking-wider text-white/40 sm:text-xs">
                Screens Designed
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-16 flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/30">
          <div
            className="h-3 w-px"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgb(201,144,43) 100%)',
            }}
            aria-hidden="true"
          />
          <p>Scroll to explore</p>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#c9902b]" aria-hidden="true" />
    </header>
  )
}
