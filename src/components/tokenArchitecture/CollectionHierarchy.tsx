import {
  collectionLayers,
  goldenRules,
  hierarchyConnectors,
  hierarchyStats,
  type CollectionLayerTheme,
} from '../../data/tokenArchitecture'

const themeStyles: Record<
  CollectionLayerTheme,
  {
    card: string
    step: string
    title: string
    subtitle: string
    divider: string
    iconWrap: string
    pill: string
    modeActive: string
    modeIdle: string
  }
> = {
  dark: {
    card: 'bg-[#0c1a2e] text-white',
    step: 'text-white/50',
    title: 'text-white',
    subtitle: 'text-white/50',
    divider: 'bg-white/20',
    iconWrap: 'bg-white/10',
    pill: 'bg-white/10 text-white',
    modeActive: 'bg-white/20 text-white',
    modeIdle: 'bg-white/10 text-white',
  },
  brand: {
    card: 'bg-[#1a3a6b] text-white',
    step: 'text-white/50',
    title: 'text-white',
    subtitle: 'text-white/50',
    divider: 'bg-white/20',
    iconWrap: 'bg-white/15',
    pill: 'bg-white/15 text-white',
    modeActive: 'bg-white/20 text-white',
    modeIdle: 'bg-[#1b6b3a]/80 text-white',
  },
  gold: {
    card: 'border border-[#c9902b]/20 bg-[#faf0dc] text-[#0c1a2e]',
    step: 'text-[#0c1a2e]/50',
    title: 'text-[#0c1a2e]',
    subtitle: 'text-[#64748b]',
    divider: 'bg-[#0c1a2e]/20',
    iconWrap: 'bg-[#c9902b]/15',
    pill: 'bg-[#c9902b]/10 text-[#7a5c1e]',
    modeActive: 'bg-[#c9902b]/20 text-[#7a5c1e]',
    modeIdle: 'bg-[#c9902b]/10 text-[#7a5c1e]',
  },
  blue: {
    card: 'border border-[#1a3a6b]/10 bg-[#e8eef8] text-[#1a3a6b]',
    step: 'text-[#1a3a6b]/50',
    title: 'text-[#1a3a6b]',
    subtitle: 'text-[#64748b]',
    divider: 'bg-[#1a3a6b]/20',
    iconWrap: 'bg-[#1a3a6b]/10',
    pill: 'bg-[#1a3a6b]/10 text-[#1a3a6b]',
    modeActive: 'bg-[#1a3a6b]/20 text-[#1a3a6b]',
    modeIdle: 'bg-[#1a3a6b]/10 text-[#1a3a6b]',
  },
  sand: {
    card: 'border border-[#e8e4dc] bg-[#f0ece4] text-[#0c1a2e]',
    step: 'text-[#0c1a2e]/50',
    title: 'text-[#0c1a2e]',
    subtitle: 'text-[#64748b]',
    divider: 'bg-[#0c1a2e]/20',
    iconWrap: 'bg-[#0c1a2e]/8',
    pill: 'bg-[#0c1a2e]/8 text-[#334155]',
    modeActive: 'bg-[#0c1a2e]/12 text-[#334155]',
    modeIdle: 'bg-[#0c1a2e]/8 text-[#334155]',
  },
}

function LayerIcon({ theme }: { theme: CollectionLayerTheme }) {
  const className = 'size-6'
  switch (theme) {
    case 'dark':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      )
    case 'brand':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <circle cx="8.5" cy="10" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="10" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="12" cy="15.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'gold':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="4" y="4" width="7" height="7" rx="1.5" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" />
        </svg>
      )
    case 'blue':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M4 7V4h16v3" />
          <path d="M9 20h6" />
          <path d="M12 4v16" />
        </svg>
      )
    case 'sand':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )
  }
}

function RuleIcon({ id }: { id: (typeof goldenRules)[number]['id'] }) {
  const className = 'size-3.5 shrink-0 text-white/70'
  if (id === 'layers') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  }
  if (id === 'hardcode') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    )
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  )
}

function HierarchyConnector({ label }: { label: string }) {
  return (
    <div className="flex w-10 shrink-0 flex-col items-center justify-center gap-1 self-stretch py-8 md:w-14">
      <div className="h-8 w-px bg-[#0c1a2e]/20" aria-hidden="true" />
      <svg className="size-5 text-[#c9902b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M9 6l6 6-6 6" />
      </svg>
      <span className="text-[9px] uppercase tracking-wider text-[#94a3b8]">{label}</span>
      <div className="h-8 w-px bg-[#0c1a2e]/20" aria-hidden="true" />
    </div>
  )
}

export default function CollectionHierarchy() {
  return (
    <div className="mt-16 rounded-3xl border border-[#e8e4dc] bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.04)] md:p-10">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-[#64748b]">
        Collection Hierarchy
      </h3>

      <div className="mt-6 -mx-2 overflow-x-auto px-2 pb-2">
        <div className="flex min-w-max items-stretch">
          {collectionLayers.map((layer, i) => {
            const styles = themeStyles[layer.theme]
            return (
              <div key={layer.step} className="flex items-stretch">
                <article
                  className={`flex w-[176px] min-h-[320px] flex-col rounded-2xl p-5 ${styles.card}`}
                >
                  <p className={`text-[10px] font-bold uppercase tracking-[0.25em] ${styles.step}`}>
                    {layer.step}
                  </p>
                  <div className={`mx-auto mt-3 flex size-12 items-center justify-center rounded-[14px] ${styles.iconWrap}`}>
                    <LayerIcon theme={layer.theme} />
                  </div>
                  <h4 className={`mt-3 text-center font-['Playfair_Display'] text-lg font-bold ${styles.title}`}>
                    {layer.title}
                  </h4>
                  <p className={`mt-1 text-center text-[11px] ${styles.subtitle}`}>{layer.subtitle}</p>
                  <div className={`mx-auto mt-4 h-px w-10 ${styles.divider}`} aria-hidden="true" />
                  <ul className="mt-4 flex flex-1 flex-col gap-1.5">
                    {layer.pills.map((pill) => (
                      <li key={pill}>
                        <span
                          className={`block rounded-full px-3 py-1.5 text-center text-[10px] font-semibold ${styles.pill}`}
                        >
                          {pill}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {layer.modes ? (
                    <div className="mt-3 flex justify-center gap-1">
                      {layer.modes.map((mode) => {
                        let modeClass = styles.modeIdle
                        if (layer.theme === 'brand') {
                          modeClass =
                            mode.label === 'EI'
                              ? 'bg-[#1b6b3a]/80 text-white'
                              : 'bg-white/20 text-white'
                        } else if (layer.theme === 'blue') {
                          modeClass =
                            mode.label === 'Web'
                              ? 'bg-[#1a3a6b]/20 text-[#1a3a6b]'
                              : 'bg-[#1a3a6b]/10 text-[#1a3a6b]'
                        }
                        return (
                          <span
                            key={mode.label}
                            className={`rounded-full px-2 py-0.5 text-[9px] ${modeClass}`}
                          >
                            {mode.label}
                          </span>
                        )
                      })}
                    </div>
                  ) : null}
                </article>
                {i < hierarchyConnectors.length ? (
                  <HierarchyConnector label={hierarchyConnectors[i]} />
                ) : null}
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-[#0c1a2e] px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3">
          {goldenRules.map((rule) => (
            <span
              key={rule.id}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[11px] text-white/60"
            >
              <RuleIcon id={rule.id} />
              {rule.text}
            </span>
          ))}
        </div>
        <p className="shrink-0 text-[11px] italic text-white/30 lg:text-right">
          The golden rule of this design system
        </p>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {hierarchyStats.map((stat) => (
          <article
            key={stat.title}
            className="rounded-2xl border border-[#e8e4dc] bg-white p-6"
          >
            <p
              className="font-['Playfair_Display'] text-5xl font-black leading-none"
              style={{ color: stat.accent }}
            >
              {stat.value}
            </p>
            <p className="mt-1 text-[13px] font-semibold text-[#0c1a2e]">{stat.title}</p>
            <p className="mt-2 text-[11px] leading-relaxed text-[#94a3b8]">{stat.description}</p>
            <div
              className="mt-4 h-1 rounded-full"
              style={{ backgroundColor: stat.accent }}
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
    </div>
  )
}
