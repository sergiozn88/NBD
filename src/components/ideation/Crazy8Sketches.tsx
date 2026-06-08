import chartIcon from '../../assets/crazy8-chart.svg'

const sketchBox = 'rounded border border-dashed border-[#94a3b8] bg-[#f0ece4]'
const fillBox = 'rounded bg-[#f0ece4]'

export function SketchC1() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className={`${sketchBox} h-12 w-full shrink-0`} />
      <div className="grid flex-1 grid-cols-2 gap-2">
        <div className={`${sketchBox} min-h-[4.5rem]`} />
        <div className={`${sketchBox} min-h-[4.5rem]`} />
      </div>
    </div>
  )
}

export function SketchC2() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className={`${fillBox} flex h-12 w-24 items-center justify-center rounded-[10px]`}>
        <span className="text-[10px] font-bold text-[#94a3b8]">AED 000k</span>
      </div>
      <div className={`${fillBox} h-1 w-full`} />
      <div className={`${fillBox} h-1 w-full`} />
    </div>
  )
}

export function SketchC3() {
  return (
    <div className="grid h-full grid-cols-2 gap-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={`${sketchBox} flex items-center justify-center min-h-[4.25rem]`}>
          <span className="size-4 rounded-full border border-[#94a3b8]" aria-hidden="true" />
        </div>
      ))}
    </div>
  )
}

export function SketchC4() {
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className={`${fillBox} size-6 shrink-0 rounded-full`} aria-hidden="true" />
          <span className={`${fillBox} h-3 flex-1`} aria-hidden="true" />
        </div>
      ))}
    </div>
  )
}

export function SketchC5() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div
        className="h-10 w-full shrink-0 rounded"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #f0ece4 0%, #ede9e1 33%, #ebe7df 67%, #e8e4dc 100%)',
        }}
        aria-hidden="true"
      />
      <div className={`${sketchBox} flex-1 min-h-[2.75rem]`} />
      <div className={`${sketchBox} flex-1 min-h-[2.75rem]`} />
    </div>
  )
}

export function SketchC6() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex h-[22px] w-full items-center rounded-full border border-[rgba(26,58,107,0.2)] bg-[rgba(26,58,107,0.1)] px-3">
        <span className="size-3 rounded-full border border-[rgba(26,58,107,0.4)]" aria-hidden="true" />
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2">
        <div className={`${fillBox} min-h-[5.875rem]`} />
        <div className={`${fillBox} min-h-[5.875rem]`} />
      </div>
      <div className={`${fillBox} h-2.5 w-full rounded-t-[10px]`} />
    </div>
  )
}

export function SketchC7() {
  return (
    <div className="flex h-full flex-col gap-2">
      <img src={chartIcon} alt="" className="h-12 w-full object-contain object-left" aria-hidden="true" />
      <div className="grid grid-cols-3 gap-2">
        <div className={`${fillBox} h-6`} />
        <div className={`${fillBox} h-6`} />
        <div className={`${fillBox} h-6`} />
      </div>
    </div>
  )
}

export function SketchC8() {
  return (
    <div className="relative h-full">
      <div className={`${fillBox} absolute left-0 top-0 h-[48%] w-[66%]`} />
      <div className={`${fillBox} absolute right-0 top-0 h-[48%] w-[32%]`} />
      <div className={`${fillBox} absolute bottom-0 left-0 h-[48%] w-[32%]`} />
      <div
        className={`absolute bottom-0 right-0 h-[48%] w-[66%] rounded border border-dashed border-[rgba(26,58,107,0.3)] bg-[rgba(26,58,107,0.1)]`}
      />
    </div>
  )
}

export const sketchComponents = {
  C1: SketchC1,
  C2: SketchC2,
  C3: SketchC3,
  C4: SketchC4,
  C5: SketchC5,
  C6: SketchC6,
  C7: SketchC7,
  C8: SketchC8,
} as const
