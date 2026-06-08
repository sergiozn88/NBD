import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { FIGMA_ENBD_DASHBOARD_URL } from '../constants/figma'
import Container from '../components/layout/Container'
import Page from '../components/Page'
import Footer from '../components/sections/Footer'

const hierarchyItems = [
  {
    num: 1,
    title: 'Financial position (Hero)',
    desc: 'Total balance and account breakdown so customers immediately understand their position.',
  },
  {
    num: 2,
    title: 'Urgent actions (Right rail — top)',
    desc: 'Anything that requires action now — payments due, approvals needed, expiring offers.',
  },
  {
    num: 3,
    title: 'Quick banking actions (Center)',
    desc: 'Core actions available without leaving the dashboard: Transfer, Pay Bills, Pay Credit Card, Top Up.',
  },
  {
    num: 4,
    title: 'Recent activity & visibility (Center)',
    desc: 'High-level view of accounts, cards, and cashflow so customers stay informed without drilling in.',
  },
  {
    num: 5,
    title: 'Offers & promotions (Center — bottom)',
    desc: 'Personalized offers without pushing them into transactions — visible but not intrusive.',
  },
]

const todayModules = [
  { num: 1, title: 'Accounts', desc: 'Net worth summary & account list' },
  { num: 2, title: 'Cards', desc: 'Card limits, outstanding & next payment' },
  { num: 3, title: 'Wealth', desc: 'Investment portfolio snapshot' },
  { num: 4, title: 'Quick actions', desc: 'Transfer, pay bills, top up' },
  { num: 5, title: 'Urgent actions', desc: 'Payments due, approvals needed' },
  { num: 6, title: 'Recent transactions', desc: 'Latest activity feed' },
  { num: 7, title: 'Offers', desc: 'Personalized promotions (EI: Halal-verified)' },
]

const futureModules = [
  { num: 8, title: 'Loans', desc: 'Mortgage, auto, personal loan status' },
  { num: 9, title: 'Deposits & fixed terms', desc: 'Term deposit maturity & rates' },
  { num: 10, title: 'Insurance', desc: 'Policy coverage summary' },
  { num: 11, title: 'International', desc: 'Remittance status tracker' },
  { num: 12, title: 'Statements', desc: 'Download & e-statement archive' },
  { num: 13, title: 'Goals & savings', desc: 'Savings targets & progress' },
  { num: 14, title: 'RM relationship', desc: 'Priority banker contact card' },
]

const tokenRows = [
  { role: 'Brand Primary', enbd: 'enbd-navy-600 / #1a3a6b', ei: 'ei-green-600 / #146938' },
  { role: 'Background', enbd: '#F8FAFC', ei: '#f6fdf9' },
  { role: 'Accent', enbd: 'Gold #c9a227', ei: 'Gold #c9a227' },
  { role: 'Hero gradient', enbd: 'Navy gradient', ei: 'Green gradient' },
]

const extensibility = [
  {
    title: 'New products',
    desc: 'Loans, insurance, and deposits drop in as new modules using the same card and rail patterns — no layout changes required.',
  },
  {
    title: 'New brands',
    desc: 'A third brand is a new data-brand scope and token set. The component tree and page structure remain untouched.',
  },
  {
    title: 'Localisation & RTL',
    desc: 'Logical flex and grid properties mean the layout mirrors cleanly for Arabic without component rewrites.',
  },
  {
    title: 'Personalisation',
    desc: 'Module visibility and ordering can be driven by customer segment data without architectural changes.',
  },
]

const brandPills = [
  { label: 'Emirates NBD — Navy', color: '#1a3a6b' },
  { label: 'Emirates Islamic — Green', color: '#1b6b3a' },
  { label: 'Shared gold accent', color: '#c9902b' },
]

function SectionBlock({
  num,
  title,
  subtitle,
  intro,
  children,
}: {
  num: string
  title: string
  subtitle: string
  intro?: string
  children: ReactNode
}) {
  return (
    <section className="border-t border-[#e8e4dc] pt-12 first:border-t-0 first:pt-0">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9902b]">{num}</p>
      <h2 className="mt-2 font-['Playfair_Display'] text-2xl font-bold text-[#0c1a2e] md:text-3xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-2 text-base font-medium text-[#0c1a2e]">{subtitle}</p> : null}
      {intro ? <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#64748b]">{intro}</p> : null}
      <div className="mt-8">{children}</div>
    </section>
  )
}

export default function DesignRationalePage() {
  return (
    <Page>
      <header className="border-b border-[#e8e4dc] bg-[#fafaf8] py-4">
        <Container className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-sm text-[#64748b] transition hover:text-[#0c1a2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9902b]"
          >
            ← Back to case study
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-[#c9902b]">Design Rationale</p>
        </Container>
      </header>

      <main className="bg-[#fafaf8] section-shell">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-[#0c1a2e] p-8 md:p-10 lg:p-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#c9902b]">
              Design Rationale
            </p>
            <h1 className="mt-4 max-w-3xl font-['Playfair_Display'] text-[clamp(2rem,5vw,3rem)] font-bold leading-tight text-white">
              One dashboard architecture, two banking identities.
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/60 md:text-base">
              Instead of rebuilding separate dashboard concepts for ENBD and EI, we designed one
              dashboard information architecture and one token system that serves both brands.
              Structure is identical; visual identity switches brand without changing layout,
              hierarchy, or behaviour.
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
          </div>

          <div className="mt-16 space-y-16">
            <SectionBlock
              num="01 Information Hierarchy"
              title="Money first, decisions second, everything else in service of them."
              subtitle=""
              intro="Both ENBD and EI dashboards share the same page layout. The order mirrors how customers actually make decisions."
            >
              <ol className="space-y-0 overflow-hidden rounded-2xl border border-[#e8e4dc] bg-white">
                {hierarchyItems.map((item, i) => (
                  <li
                    key={item.num}
                    className={`flex gap-4 p-5 md:gap-6 md:p-6 ${
                      i < hierarchyItems.length - 1 ? 'border-b border-[#e8e4dc]' : ''
                    }`}
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f0ece4] text-sm font-bold text-[#0c1a2e]">
                      {item.num}
                    </span>
                    <div>
                      <p className="font-bold text-[#0c1a2e]">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#64748b]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </SectionBlock>

            <SectionBlock
              num="02 Scalability Approach"
              title="Every section is a self-contained, reusable module."
              subtitle=""
              intro="Each dashboard zone is an independent module with its own data contract. New products plug in without touching existing layout."
            >
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-[#e8e4dc] bg-white">
                  <div className="border-b border-[#e8e4dc] bg-[#f0ece4] px-5 py-3">
                    <span className="rounded bg-[#1a3a6b] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                      Today
                    </span>
                  </div>
                  <ul className="divide-y divide-[#e8e4dc]">
                    {todayModules.map((mod) => (
                      <li key={mod.num} className="flex gap-4 px-5 py-4">
                        <span className="text-xs font-bold text-[#c9902b]">{mod.num}</span>
                        <div>
                          <p className="text-sm font-bold text-[#0c1a2e]">{mod.title}</p>
                          <p className="text-xs text-[#64748b]">{mod.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[#e8e4dc] bg-white">
                  <div className="border-b border-[#e8e4dc] bg-[#f0ece4] px-5 py-3">
                    <span className="rounded bg-[#64748b] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                      Drops in next
                    </span>
                  </div>
                  <ul className="divide-y divide-[#e8e4dc]">
                    {futureModules.map((mod) => (
                      <li key={mod.num} className="flex gap-4 px-5 py-4">
                        <span className="text-xs font-bold text-[#99a1af]">{mod.num}</span>
                        <div>
                          <p className="text-sm font-bold text-[#0c1a2e]">{mod.title}</p>
                          <p className="text-xs text-[#64748b]">{mod.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionBlock>

            <SectionBlock
              num="03 Variable Strategy"
              title="Two brands from one DOM, switched by a single attribute."
              subtitle=""
              intro="The interface uses a five-layer token chain: Primitive → Brand → Semantic → Component → Instance. Changing one attribute on the container re-skins the entire UI."
            >
              <div className="overflow-x-auto rounded-2xl border border-[#e8e4dc] bg-white">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#e8e4dc] bg-[#fafaf8]">
                      <th className="px-5 py-3 font-bold text-[#0c1a2e]">Role</th>
                      <th className="px-5 py-3 font-bold text-[#1a3a6b]">ENBD</th>
                      <th className="px-5 py-3 font-bold text-[#1b6b3a]">EI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tokenRows.map((row) => (
                      <tr key={row.role} className="border-b border-[#e8e4dc] last:border-0">
                        <td className="px-5 py-3 font-medium text-[#0c1a2e]">{row.role}</td>
                        <td className="px-5 py-3 text-[#64748b]">{row.enbd}</td>
                        <td className="px-5 py-3 text-[#64748b]">{row.ei}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <pre className="mt-4 overflow-x-auto rounded-2xl bg-[#0c1a2e] p-5 text-xs leading-relaxed text-white/80">
                <code>{`<!-- One component tree, one layout -->
<div data-brand="enbd">...</div>  <!-- Emirates NBD (navy) -->
<div data-brand="ei">...</div>    <!-- Emirates Islamic (green) -->`}</code>
              </pre>
            </SectionBlock>

            <SectionBlock
              num="04 Future Extensibility"
              title="What this architecture absorbs without a redesign."
              subtitle=""
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {extensibility.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-[#e8e4dc] bg-white p-6"
                  >
                    <h3 className="font-bold text-[#0c1a2e]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{item.desc}</p>
                  </article>
                ))}
              </div>
            </SectionBlock>
          </div>

          <div className="mt-16 border-t border-[#e8e4dc] pt-10">
            <p className="max-w-2xl text-sm leading-relaxed text-[#64748b]">
              The component system and tokens from Section 06 are built on this rationale — no
              hardcoded values, no page-level brand overrides.
            </p>
            <a
              href={FIGMA_ENBD_DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#1a3a6b] transition hover:text-[#c9902b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9902b]"
            >
              Open the dashboard
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Container>
      </main>

      <Footer />
    </Page>
  )
}
