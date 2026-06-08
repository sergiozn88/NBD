import { EmotionArcEi, EmotionArcEnbd } from '../journey/EmotionArcCharts'
import Container from '../layout/Container'
import SectionHeader from '../layout/SectionHeader'

type Step = { label: string; emotion: string; keyAction?: boolean }

type PainInsight = {
  type: 'pain'
  title: string
  desc: string
  attribution: string
  source: string
}

type DelightInsight = {
  type: 'delight'
  title: string
  desc: string
  action: string
}

type OpportunityInsight = {
  type: 'opportunity'
  title: string
  desc: string
  action: string
}

type Insight = PainInsight | DelightInsight | OpportunityInsight

type Journey = {
  id: string
  name: string
  initials: string
  persona: string
  archetype: string
  bank: string
  color: string
  accentDot: string
  emotionChart: 'enbd' | 'ei'
  emotionLeft: string
  emotionRight: string
  emotionTint: string
  steps: Step[]
  current: string[]
  redesign: string[]
  insights: Insight[]
}

const journeys: Journey[] = [
  {
    id: 'transfer',
    name: 'Check & Transfer',
    initials: 'PS',
    persona: 'Priya Sharma',
    archetype: 'The Global Connector',
    bank: 'Emirates NBD',
    color: '#1a3a6b',
    accentDot: '#c9902b',
    emotionChart: 'enbd',
    emotionLeft: 'Delighted',
    emotionRight: 'Frustrated',
    emotionTint: 'rgba(26,58,107,0.04)',
    steps: [
      { label: 'Open App', emotion: '😐' },
      { label: 'Face ID Login', emotion: '🙂' },
      { label: 'Dashboard', emotion: '😊', keyAction: true },
      { label: 'See Balance', emotion: '😊' },
      { label: 'Tap Transfer', emotion: '🙂', keyAction: true },
      { label: 'Select Beneficiary', emotion: '😕' },
      { label: 'Enter Amount', emotion: '😐' },
      { label: 'View FX Rate', emotion: '😟' },
      { label: 'Confirm', emotion: '⚡' },
      { label: 'Success', emotion: '🎉', keyAction: true },
    ],
    current: [
      '5+ confirmation screens to complete transfer',
      'FX rate shown with no context — users abandon',
      'DirectRemit buried 3 levels deep',
      'No beneficiary recency sorting',
      'Loading timeout on Android (confirmed in 207K Google Play reviews)',
    ],
    redesign: [
      '2-tap transfer flow — beneficiary → amount → confirm',
      'DirectRemit badge at step 1 with "Instant & Free" label',
      'FX preview card inline — no context-switching',
      'Recent beneficiaries with country flag + bank type',
      'Skeleton loading states — perceived speed improvement',
    ],
    insights: [
      {
        type: 'pain',
        title: 'FX Rate Confusion',
        desc: 'Users hesitate after seeing the AED-to-foreign exchange rate. Clear DirectRemit badge eliminates fee anxiety at this step.',
        attribution: 'Priya Sharma',
        source: '— Source: ENBD X App Store (293K ratings)',
      },
      {
        type: 'pain',
        title: 'Too Many Confirmations',
        desc: '3 separate confirmation screens before transfer completes. Cognitive load causes abandonment, especially for new users.',
        attribution: 'Priya Sharma',
        source: '— Source: ENBD X App Store + Google Play (207K reviews)',
      },
      {
        type: 'pain',
        title: 'Beneficiary Discovery',
        desc: 'Finding an international beneficiary requires scrolling past domestic contacts. No smart recency sorting.',
        attribution: 'Priya Sharma',
        source: '— Source: UX heuristic analysis of live app',
      },
      {
        type: 'delight',
        title: 'DirectRemit Badge ⚡',
        desc: 'Instant transfer processing badge appears — users report immediate confidence boost. This is the #1 retention moment in the flow.',
        action: '→ Surface early in flow',
      },
      {
        type: 'opportunity',
        title: 'Success Animation 🎉',
        desc: 'Transfer confirmation screen. The most emotionally positive moment. Users screenshot and share. Design for this peak.',
        action: '→ Invest in motion design',
      },
    ],
  },
  {
    id: 'offers',
    name: 'Offer Discovery',
    initials: 'FZ',
    persona: 'Fatima Zayed',
    archetype: 'The Digital Native',
    bank: 'Emirates Islamic',
    color: '#1b6b3a',
    accentDot: '#faf0dc',
    emotionChart: 'ei',
    emotionLeft: 'Excited',
    emotionRight: 'Skeptical',
    emotionTint: 'rgba(27,107,58,0.04)',
    steps: [
      { label: 'Push Notif', emotion: '😊' },
      { label: 'Open App', emotion: '😕' },
      { label: 'Banner', emotion: '😐', keyAction: true },
      { label: 'Tap Offers', emotion: '🎉', keyAction: true },
      { label: 'Filter', emotion: '😐' },
      { label: 'See Deal', emotion: '😊' },
      { label: 'Activate', emotion: '🎉', keyAction: true },
    ],
    current: [
      'Push notification has no halal-compliance indicator',
      '6 filter categories shown simultaneously — no personalization',
      "Offer card doesn't show which card activates the deal",
      'App UI shows zero Islamic identity — contradicts website brand',
      'Source: App Store UK EI Review + emiratesislamic.ae audit',
    ],
    redesign: [
      '🌙 Halal-verified badge on EI offers — zero extra taps',
      'Card-linked offer filtering — only shows deals for your cards',
      '2 smart default filters: Near Me + Your Cards',
      'Islamic geometric header on EI offers section',
      'Offer activation inline — no navigation to separate screen',
    ],
    insights: [
      {
        type: 'pain',
        title: 'Notification Ambiguity',
        desc: "Push notification doesn't clarify if offer is halal-certified. Islamic banking users skip unclear offers entirely rather than risk non-compliant spending.",
        attribution: 'Fatima Al Zaabi',
        source: '— Source: Cultural hypothesis + EI brand audit',
      },
      {
        type: 'pain',
        title: 'Filter Overload',
        desc: '6 filter categories visible simultaneously overwhelms digital-native users who expect smart, personalized defaults.',
        attribution: 'Fatima Al Zaabi',
        source: '— Source: Masarif.ae EI+ reviews (3+ month bug reports)',
      },
      {
        type: 'pain',
        title: 'Card Linking Confusion',
        desc: "Offer activation requires knowing which card qualifies. Users don't memorize card names — use card artwork instead.",
        attribution: 'Fatima Al Zaabi',
        source: '— Source: AppRecs EI+ Review: "no way to pay credit card through app"',
      },
      {
        type: 'delight',
        title: 'Halal Badge 🌙',
        desc: 'Adding a small crescent-star verified badge on EI offers removes all hesitation for Islamic banking users. Zero extra steps, massive trust signal.',
        action: '→ EI-exclusive badge component',
      },
      {
        type: 'opportunity',
        title: 'Personalized Deals ✦',
        desc: "Deals filtered to the user's actual card portfolio. Fatima only sees offers she can use — reduces junk, increases activation.",
        action: '→ Card-linked offer filtering',
      },
    ],
  },
]

function JourneyLegend() {
  return (
    <aside className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-[#e8e4dc] bg-white px-6 py-4 text-xs text-[#99a1af]">
      <span className="flex items-center gap-2">
        <span className="size-4 rounded-full bg-[#1a3a6b]" aria-hidden="true" />
        Key action step
      </span>
      <span className="flex items-center gap-2">
        <span
          className="size-4 rounded-full border border-[rgba(26,58,107,0.3)] bg-[rgba(26,58,107,0.2)]"
          aria-hidden="true"
        />
        Standard step
      </span>
      <span className="flex items-center gap-2">
        <span className="size-4 rounded border border-[#ffa2a2] bg-[#ffe2e2]" aria-hidden="true" />
        Pain point
      </span>
      <span className="flex items-center gap-2">
        <span
          className="size-4 rounded border border-[rgba(201,144,43,0.3)] bg-[#faf0dc]"
          aria-hidden="true"
        />
        Delight / Opportunity
      </span>
      <span className="flex items-center gap-1.5 text-[#0c1a2e]">
        <span aria-hidden="true">😊</span>
        <span aria-hidden="true">→</span>
        <span aria-hidden="true">😟</span>
        <span aria-hidden="true">→</span>
        <span aria-hidden="true">🎉</span>
        <span className="ml-1 text-[#99a1af]">User emotion arc</span>
      </span>
    </aside>
  )
}

function StepTimeline({ steps, brandColor }: { steps: Step[]; brandColor: string }) {
  const stepTint = brandColor === '#1b6b3a' ? 'rgba(27,107,58,0.15)' : 'rgba(26,58,107,0.15)'
  const stepBorder = brandColor === '#1b6b3a' ? 'rgba(27,107,58,0.25)' : 'rgba(26,58,107,0.25)'
  const count = steps.length

  return (
    <div className="relative mt-4 w-full px-5">
      <div
        className="pointer-events-none absolute top-5 flex h-0.5"
        style={{
          left: `calc(100% / ${count} / 2 + 1.25rem)`,
          right: `calc(100% / ${count} / 2 + 1.25rem)`,
        }}
        aria-hidden="true"
      >
        {steps.slice(0, -1).map((step, index) => (
          <span
            key={`connector-${index}`}
            className="h-full flex-1"
            style={{ backgroundColor: step.keyAction ? brandColor : '#e5e7eb' }}
          />
        ))}
      </div>

      <ol
        className="relative grid w-full"
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {steps.map((step, index) => (
          <li key={step.label} className="flex min-w-0 flex-col items-center">
            <div
              className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full text-xs ${
                step.keyAction ? 'font-bold text-white shadow-[0_4px_3px_rgba(0,0,0,0.1)]' : 'font-semibold'
              }`}
              style={
                step.keyAction
                  ? { backgroundColor: brandColor }
                  : {
                      backgroundColor: stepTint,
                      border: `1px solid ${stepBorder}`,
                      color: brandColor,
                    }
              }
            >
              {index + 1}
            </div>

            <span className="mt-1 text-lg leading-none" aria-hidden="true">
              {step.emotion}
            </span>
            <span className="mt-1 w-full px-0.5 text-center text-[9px] font-medium leading-tight text-[#6a7282] sm:text-[10px]">
              {step.label}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function EmotionArc({
  chart,
  left,
  right,
  tint,
  steps,
  brandColor,
}: {
  chart: 'enbd' | 'ei'
  left: string
  right: string
  tint: string
  steps: Step[]
  brandColor: string
}) {
  const Chart = chart === 'enbd' ? EmotionArcEnbd : EmotionArcEi

  return (
    <div className="overflow-hidden rounded-2xl pb-5 pt-4" style={{ backgroundColor: tint }}>
      <div className="flex items-center justify-between px-5 text-[10px] uppercase tracking-wide text-[#99a1af]">
        <span className="text-[#d1d5dc]">{left}</span>
        <span>Emotion Arc</span>
        <span>{right}</span>
      </div>
      <div className="mt-3 aspect-[1326/84] w-full min-w-0 px-5">
        <Chart />
      </div>
      <StepTimeline steps={steps} brandColor={brandColor} />
    </div>
  )
}

function ComparePanel({ current, redesign }: { current: string[]; redesign: string[] }) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-[#e8e4dc]">
      <div className="grid md:grid-cols-2">
        <div className="border-b border-[#fecaca] bg-[#fee2e2] p-4 md:border-b-0 md:border-r">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#b91c1c]">
            ✗ Current State
          </p>
          <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-[#7f1d1d]">
            {current.map((item) => (
              <li key={item}>→ {item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#dcfce7] p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#15803d]">
            ✓ Our Redesign
          </p>
          <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-[#14532d]">
            {redesign.map((item) => (
              <li key={item}>→ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function PainCard({ insight }: { insight: PainInsight }) {
  return (
    <article className="min-w-[220px] flex-1 rounded-[14px] border border-[#ffc9c9] bg-[#fef2f2] p-[17px] sm:min-w-[240px] lg:min-w-0">
      <div className="flex items-center gap-2">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#ffe2e2] text-xs font-bold text-[#e7000b]">
          !
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#fb2c36]">
          Pain Point
        </span>
      </div>
      <h4 className="mt-2 text-sm font-bold text-[#9f0712]">{insight.title}</h4>
      <p className="mt-1 text-xs leading-relaxed text-[#e7000b]">{insight.desc}</p>
      <span className="mt-3 inline-block rounded-full bg-[#ffe2e2] px-2 py-0.5 text-[10px] text-[#e7000b]">
        {insight.attribution}
      </span>
      <p className="mt-2 text-[10px] leading-snug text-[rgba(255,100,103,0.7)]">{insight.source}</p>
    </article>
  )
}

function GoldInsightCard({
  insight,
}: {
  insight: DelightInsight | OpportunityInsight
}) {
  const label = insight.type === 'delight' ? 'Delight Moment' : 'Opportunity'

  return (
    <article className="min-w-[220px] flex-1 rounded-[14px] border border-[rgba(201,144,43,0.3)] bg-[#faf0dc] p-[17px] sm:min-w-[240px] lg:min-w-0">
      <div className="flex items-center gap-2">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(201,144,43,0.2)] text-xs font-bold text-[#c9902b]">
          ✦
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9902b]">
          {label}
        </span>
      </div>
      <h4 className="mt-2 text-sm font-bold text-[#7a5c1e]">{insight.title}</h4>
      <p className="mt-1 text-xs leading-relaxed text-[#a37322]">{insight.desc}</p>
      <span className="mt-3 inline-block rounded-full bg-[rgba(201,144,43,0.1)] px-2 py-0.5 text-[10px] text-[#c9902b]">
        {insight.action}
      </span>
    </article>
  )
}

function InsightCards({ insights }: { insights: Insight[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible">
      {insights.map((insight) =>
        insight.type === 'pain' ? (
          <PainCard key={insight.title} insight={insight} />
        ) : (
          <GoldInsightCard key={insight.title} insight={insight} />
        ),
      )}
    </div>
  )
}

function JourneyCard({ journey }: { journey: Journey }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#e8e4dc] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
      <header className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-10" style={{ backgroundColor: journey.color }}>
        <div className="flex min-w-0 flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[11px] font-bold text-white">
              {journey.initials}
            </span>
            <div>
              <p className="text-sm font-bold text-white">{journey.persona}</p>
              <p className="text-[10px] uppercase tracking-wide text-white/50">{journey.archetype}</p>
            </div>
          </div>
          <span className="hidden h-10 w-px bg-white/10 sm:block" aria-hidden="true" />
          <h3 className="font-['Playfair_Display'] text-xl font-bold text-white md:text-2xl">
            {journey.name}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-white/40">{journey.bank}</span>
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: journey.accentDot }}
            aria-hidden="true"
          />
        </div>
      </header>

      <div className="space-y-8 px-6 py-8 md:px-10">
        <EmotionArc
          chart={journey.emotionChart}
          left={journey.emotionLeft}
          right={journey.emotionRight}
          tint={journey.emotionTint}
          steps={journey.steps}
          brandColor={journey.color}
        />

        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#99a1af]">
            Pain Points &amp; Opportunities
          </p>
          <div className="mt-3 space-y-4">
            <ComparePanel current={journey.current} redesign={journey.redesign} />
            <InsightCards insights={journey.insights} />
          </div>
        </div>
      </div>
    </article>
  )
}

export default function JourneySection() {
  return (
    <section id="journey" className="bg-[#fafaf8] section-shell">
      <Container>
        <SectionHeader label="03 / JOURNEY MAPPING" title="From Intent to Action" />

        <div className="mt-12 space-y-6">
          {journeys.map((journey, index) => (
            <div key={journey.id} className="space-y-6">
              <JourneyCard journey={journey} />
              {index === 0 ? <JourneyLegend /> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
