import { tapDepthAfter, tapDepthBefore } from '../../data/informationArchitecture'

function TapDots({ count, variant }: { count: number; variant: 'before' | 'after' }) {
  const dotClass =
    variant === 'before'
      ? 'bg-red-950/50 text-[#ffa2a2]'
      : 'bg-[#1b6b3a]/50 text-[#7fbfa0]'

  return (
    <div className="flex shrink-0 gap-1">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={`flex size-7 items-center justify-center rounded-full text-[10px] font-bold ${dotClass}`}
        >
          {i + 1}
        </span>
      ))}
    </div>
  )
}

export default function TapDepthComparison() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <article className="rounded-2xl border border-red-900/30 bg-red-950/30 p-8">
        <p className="text-xs font-bold uppercase tracking-wider text-[#ff6467]">
          ✗ Before — Current App
        </p>
        <div className="mt-5 space-y-4">
          {tapDepthBefore.tasks.map((task) => (
            <div key={task.path} className="flex gap-3">
              <TapDots count={task.taps} variant="before" />
              <p className="text-xs leading-relaxed text-white/60">{task.path}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[11px] text-[#ff6467]">{tapDepthBefore.average}</p>
        <p className="mt-1 text-[10px] text-white/30">{tapDepthBefore.footnote}</p>
      </article>

      <article className="rounded-2xl border border-[#1b6b3a]/30 bg-[#1b6b3a]/20 p-8">
        <p className="text-xs font-bold uppercase tracking-wider text-[#2e9e5b]">
          ✓ After — Redesigned
        </p>
        <div className="mt-5 space-y-4">
          {tapDepthAfter.tasks.map((task) => (
            <div key={task.path} className="flex gap-3">
              <TapDots count={task.taps} variant="after" />
              <p className="text-xs leading-relaxed text-white/60">{task.path}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[11px] text-[#2e9e5b]">{tapDepthAfter.average}</p>
        <p className="mt-1 text-[10px] text-[#c9902b]">{tapDepthAfter.footnote}</p>
      </article>
    </div>
  )
}
