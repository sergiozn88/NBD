import { useState } from 'react'
import Container from '../layout/Container'
import SectionHeader from '../layout/SectionHeader'
import CollectionHierarchy from '../tokenArchitecture/CollectionHierarchy'
import {
  brandTokens,
  elevationScale,
  radiusScale,
  radiusTokens,
  spacingScale,
  spacingTokens,
  typographyRows,
  type TypographyPlatform,
} from '../../data/tokenArchitecture'

function ColorSwatch({ color }: { color: string }) {
  return (
    <span
      className="inline-block size-5 shrink-0 rounded border border-black/10"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  )
}

export default function TokenArchitectureSection() {
  const [typographyPlatform, setTypographyPlatform] = useState<TypographyPlatform>('Web')
  const typographyKey = typographyPlatform === 'Web' ? 'web' : 'ios'

  return (
    <section id="token-architecture" className="bg-white section-shell">
      <Container>
        <SectionHeader
          label="G.5 / DESIGN SYSTEM ARCHITECTURE"
          title="Enterprise-Grade Token Architecture"
          description="A five-collection token system built for multi-brand Web and iOS — every value aliases upward, never hardcoded."
        />

        <CollectionHierarchy />

        {/* Typography System */}
        <div className="mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#64748b]">
                Typography System
              </h3>
              <p className="mt-2 max-w-xl text-sm text-[#64748b]">
                Semantic typography tokens alias Primitive values — components never reference raw
                font sizes.
              </p>
            </div>
            <div className="flex rounded-lg border border-[#e8e4dc] p-1">
              {(['Web', 'iOS'] as const).map((platform) => (
                <button
                  key={platform}
                  type="button"
                  onClick={() => setTypographyPlatform(platform)}
                  className={`rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    typographyPlatform === platform
                      ? 'bg-[#0c1a2e] text-white'
                      : 'text-[#64748b] hover:text-[#0c1a2e]'
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-[#e8e4dc]">
            <div className="flex items-center justify-between border-b border-[#e8e4dc] bg-[#fafaf8] px-5 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#64748b]">
                Primitive aliases · {typographyPlatform} mode
              </p>
              <span className="rounded-md bg-[#0c1a2e] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                {typographyPlatform}
              </span>
            </div>
            <table key={typographyPlatform} className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#e8e4dc] bg-white text-[10px] uppercase tracking-widest text-[#64748b]">
                  <th className="px-5 py-3 font-semibold">Style</th>
                  <th className="px-5 py-3 font-semibold">Font Size ({typographyPlatform})</th>
                  <th className="px-5 py-3 font-semibold">Line Height ({typographyPlatform})</th>
                  <th className="px-5 py-3 font-semibold">Weight</th>
                  <th className="px-5 py-3 font-semibold">Sample</th>
                </tr>
              </thead>
              <tbody>
                {typographyRows.map((row) => {
                  const spec = row[typographyKey]
                  return (
                  <tr key={row.style} className="border-b border-[#e8e4dc] last:border-b-0">
                    <td className="px-5 py-4 font-mono text-xs text-[#64748b]">{row.style}</td>
                    <td className="px-5 py-4 font-mono text-xs text-[#0c1a2e]">{spec.size}</td>
                    <td className="px-5 py-4 font-mono text-xs text-[#0c1a2e]">{spec.lineH}</td>
                    <td className="px-5 py-4 text-xs text-[#64748b]">{spec.weight}</td>
                    <td className="px-5 py-4 text-[#0c1a2e]">
                      <span className={row.sampleClass}>{row.sample}</span>
                    </td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Primitive Scales */}
        <div className="mt-16">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#64748b]">
            Primitive Scales
          </h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {/* Spacing */}
            <article className="rounded-xl border border-[#e8e4dc] p-6">
              <h4 className="text-sm font-bold text-[#0c1a2e]">Spacing</h4>
              <p className="mt-1 text-xs text-[#64748b]">4pt grid · 9 steps</p>
              <div className="mt-6 space-y-3">
                {spacingScale.map((px) => (
                  <div key={px} className="flex items-center gap-3">
                    <span className="w-8 shrink-0 font-mono text-[10px] text-[#64748b]">{px}</span>
                    <div
                      className="h-3 rounded-sm bg-[#1a3a6b]"
                      style={{ width: `${Math.min(px * 2, 128)}px` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2 border-t border-[#e8e4dc] pt-4">
                {spacingTokens.map((t) => (
                  <div key={t.label} className="flex justify-between text-[11px]">
                    <span className="text-[#64748b]">{t.label}</span>
                    <span className="font-mono text-[#0c1a2e]">{t.value}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Radius */}
            <article className="rounded-xl border border-[#e8e4dc] p-6">
              <h4 className="text-sm font-bold text-[#0c1a2e]">Radius</h4>
              <p className="mt-1 text-xs text-[#64748b]">7 steps · None → Full</p>
              <div className="mt-6 flex flex-wrap items-end gap-4">
                {radiusScale.map((r) => (
                  <div key={r.label} className="flex flex-col items-center gap-2">
                    <div
                      className="size-12 border-2 border-[#1a3a6b] bg-[#fafaf8]"
                      style={{ borderRadius: r.radius === '9999px' ? '9999px' : r.radius }}
                    />
                    <span className="text-[10px] text-[#64748b]">{r.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2 border-t border-[#e8e4dc] pt-4">
                {radiusTokens.map((t) => (
                  <div key={t.label} className="flex justify-between text-[11px]">
                    <span className="text-[#64748b]">{t.label}</span>
                    <span className="font-mono text-[#0c1a2e]">{t.value}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Elevation */}
            <article className="rounded-xl border border-[#e8e4dc] p-6">
              <h4 className="text-sm font-bold text-[#0c1a2e]">Elevation</h4>
              <p className="mt-1 text-xs text-[#64748b]">0–5 · shadow tokens</p>
              <div className="mt-6 space-y-4">
                {elevationScale.map((e) => (
                  <div key={e.level} className="flex items-center gap-4">
                    <span className="w-4 shrink-0 font-mono text-[10px] text-[#64748b]">
                      {e.level}
                    </span>
                    <div
                      className="h-10 flex-1 rounded-lg bg-white"
                      style={{ boxShadow: e.shadow }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2 border-t border-[#e8e4dc] pt-4 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Card Elevation</span>
                  <span className="font-mono text-[#0c1a2e]">→ 2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Modal Elevation</span>
                  <span className="font-mono text-[#0c1a2e]">→ 4</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Brand Collection — Dual Mode */}
        <div className="mt-16">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#64748b]">
            Brand Collection — Dual Mode
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-[#e8e4dc]">
            <div className="flex flex-col gap-4 border-b border-[#e8e4dc] bg-[#fafaf8] p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-sm text-[#64748b]">
                The Brand collection contains zero raw values. Every token aliases a Primitive
                color — ENBD and EI modes swap at the Brand layer only.
              </p>
              <div className="flex shrink-0 gap-2">
                <span className="rounded-md bg-[#1a3a6b] px-4 py-2 text-xs font-semibold text-white">
                  ENBD
                </span>
                <span className="rounded-md bg-[#1b6b3a] px-4 py-2 text-xs font-semibold text-white">
                  EI
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-[#e8e4dc] bg-white text-[10px] uppercase tracking-widest text-[#64748b]">
                    <th className="px-5 py-3 font-semibold">Brand Token</th>
                    <th className="px-5 py-3 font-semibold">ENBD Value</th>
                    <th className="px-5 py-3 font-semibold">EI Value</th>
                    <th className="px-5 py-3 font-semibold">Primitive Alias</th>
                  </tr>
                </thead>
                <tbody>
                  {brandTokens.map((row) => (
                    <tr key={row.token} className="border-b border-[#e8e4dc] last:border-b-0">
                      <td className="px-5 py-4 font-medium text-[#0c1a2e]">{row.token}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <ColorSwatch color={row.enbd} />
                          <span className="font-mono text-xs text-[#0c1a2e]">{row.enbd}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <ColorSwatch color={row.ei} />
                          <span className="font-mono text-xs text-[#0c1a2e]">{row.ei}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 font-mono text-xs text-[#64748b]">{row.alias}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <blockquote className="flex gap-4 border-t border-[#e8e4dc] bg-[#fafaf8] p-6">
              <span className="font-['Playfair_Display'] text-3xl leading-none text-[#c9902b]">
                "
              </span>
              <p className="text-sm leading-relaxed text-[#0c1a2e]">
                One Brand collection. Two modes. The component never knows which brand is active —
                it only references Brand tokens, and the mode switch happens at the collection
                level.
              </p>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  )
}
