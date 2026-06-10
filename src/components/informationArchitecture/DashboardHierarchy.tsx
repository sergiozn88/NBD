import { designPrinciples, hierarchyLayers } from '../../data/informationArchitecture'

export default function DashboardHierarchy() {
  return (
    <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 md:p-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_288px]">
        <div className="space-y-3">
          {hierarchyLayers.map((layer) => (
            <div key={layer.step} className={`flex ${layer.indent}`}>
              <div
                className={`flex min-h-12 items-center gap-3 rounded-[14px] px-5 py-3 text-white ${layer.barClass} ${layer.width}`}
              >
                <span className="text-[10px] font-bold text-white/60">{layer.step}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold md:text-[15px]">{layer.title}</p>
                  <p className="mt-0.5 text-[11px] text-white/60">{layer.detail}</p>
                </div>
                <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-[10px] text-white/80">
                  {layer.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-widest text-[#c9902b]">Design Principles</p>
          {designPrinciples.map((principle) => (
            <article
              key={principle.num}
              className="rounded-[14px] border border-white/8 bg-white/5 p-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#c9902b]/20 text-[10px] font-bold text-[#c9902b]">
                  {principle.num}
                </span>
                <h4 className="text-xs font-semibold text-white">{principle.title}</h4>
              </div>
              <p className="mt-2 pl-9 text-[11px] leading-relaxed text-white/50">
                {principle.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
