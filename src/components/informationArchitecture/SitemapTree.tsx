import { useState } from 'react'
import {
  sitemapBrandConfigs,
  type SitemapBrand,
  type SitemapItem,
  type SitemapSection,
} from '../../data/informationArchitecture'

type SitemapTreeProps = {
  brand?: SitemapBrand
  onBrandChange?: (brand: SitemapBrand) => void
}

function isSection(item: SitemapItem | SitemapSection): item is SitemapSection {
  return 'children' in item && item.children !== undefined
}

function L2Chip({ label, brandOnly }: { label: string; brandOnly?: boolean }) {
  if (brandOnly) {
    return (
      <div className="flex h-8 w-full items-center justify-center rounded-[10px] border border-[#c9902b]/50 bg-[#c9902b]/15 px-2">
        <span className="truncate text-[10px] font-medium text-[#f0d08a]">{label}</span>
      </div>
    )
  }

  return (
    <div className="flex h-8 w-full items-center justify-center rounded-[10px] border border-white/15 bg-white/12 px-2">
      <span className="truncate text-[10px] font-medium text-white/90">{label}</span>
    </div>
  )
}

function L3Chip({ label, brandOnly }: { label: string; brandOnly?: boolean }) {
  if (brandOnly) {
    return (
      <div className="flex h-7 w-full items-center justify-center rounded-lg border border-[#c9902b]/45 bg-[#c9902b]/12 px-2">
        <span className="truncate text-[9px] font-medium text-[#f0d08a]">{label}</span>
      </div>
    )
  }

  return (
    <div className="flex h-7 w-full items-center justify-center rounded-lg border border-white/12 bg-white/8 px-2">
      <span className="truncate text-[9px] font-medium text-white/75">{label}</span>
    </div>
  )
}

function ColumnStack({ sections }: { sections: (SitemapItem | SitemapSection)[] }) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      {sections.map((item) => {
        if (isSection(item)) {
          return (
            <div key={item.label} className="flex w-full flex-col gap-1">
              <L2Chip label={item.label} brandOnly={item.brandOnly} />
              {item.children ? (
                <div className="flex w-full flex-col gap-1 pl-2">
                  {item.children.map((child) => (
                    <L3Chip key={child.label} label={child.label} brandOnly={child.brandOnly} />
                  ))}
                </div>
              ) : null}
            </div>
          )
        }

        return (
          <L2Chip key={item.label} label={item.label} brandOnly={item.brandOnly} />
        )
      })}
    </div>
  )
}

export default function SitemapTree({ brand: controlledBrand, onBrandChange }: SitemapTreeProps) {
  const [internalBrand, setInternalBrand] = useState<SitemapBrand>('enbd')
  const brand = controlledBrand ?? internalBrand

  const setBrand = (next: SitemapBrand) => {
    if (controlledBrand === undefined) {
      setInternalBrand(next)
    }
    onBrandChange?.(next)
  }

  const config = sitemapBrandConfigs[brand]

  const brandTabs = [
    { id: 'enbd' as const, label: 'Emirates NBD', activeClass: 'bg-[#1a3a6b] text-white' },
    { id: 'ei' as const, label: 'Emirates Islamic', activeClass: 'bg-[#1b6b3a] text-white' },
  ]

  return (
    <div className="overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03]">
      <div className="flex flex-col gap-4 border-b border-white/8 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex rounded-lg border border-white/10 p-1">
          {brandTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setBrand(tab.id)}
              className={`rounded-md px-3 py-2 text-xs font-semibold transition-colors sm:px-4 ${
                brand === tab.id
                  ? tab.activeClass
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[10px] text-white/40">
            <span aria-hidden="true">⊞</span>
            {config.sharedScreens} shared screens
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c9902b]/20 bg-[#c9902b]/10 px-3 py-1.5 text-[10px] text-[#e8c278]">
            <span aria-hidden="true">{config.brandOnlyIcon}</span>
            {config.brandOnlyCount} {config.brandOnlyLabel}
          </span>
        </div>
      </div>

      <div className="px-4 py-6 sm:px-6 sm:py-8">
        <div className="relative mb-6 flex flex-col items-center">
          <div className={`rounded-[14px] px-5 py-2 ${config.rootClass}`}>
            <span className="text-[11px] font-bold text-white">{config.rootLabel}</span>
          </div>
          <div className="h-3 w-px bg-white/15" aria-hidden="true" />
          <div className="h-px w-full bg-white/15" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-3 sm:gap-x-3 lg:grid-cols-6 lg:gap-x-2 xl:gap-x-3">
          {config.columns.map((column) => (
            <div key={column.title} className="flex min-w-0 flex-col items-center">
              <div className="mb-2 h-3 w-px bg-white/15" aria-hidden="true" />

              <div
                className={`flex h-9 w-full items-center justify-center rounded-[14px] px-1 ${column.headerClass}`}
              >
                <span
                  className={`text-center text-[9px] font-bold leading-tight sm:text-[10px] ${
                    column.titleClass ?? 'text-white'
                  }`}
                >
                  {column.title}
                </span>
              </div>

              <div className="my-2 h-3 w-px bg-white/15" aria-hidden="true" />

              <ColumnStack sections={column.sections} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/8 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-white/40">
            <span className="inline-flex items-center gap-2">
              <span
                className={`size-4 shrink-0 rounded ${config.l1LegendClass}`}
                aria-hidden="true"
              />
              L1 Primary Navigation
            </span>
            <span className="inline-flex items-center gap-2">
              <span
                className="size-4 shrink-0 rounded-lg border border-white/15 bg-white/12"
                aria-hidden="true"
              />
              L2 Section Pages
            </span>
            <span className="inline-flex items-center gap-2">
              <span
                className="size-3 shrink-0 rounded border border-white/12 bg-white/8"
                aria-hidden="true"
              />
              L3 Features & Actions
            </span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <span className="rounded-full border border-[#c9902b]/40 bg-[#c9902b]/8 px-3 py-1 text-[10px] text-[#e8c278]">
              {config.brandOnlyIcon} {config.differentiatorLegend}
            </span>
            <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[10px] text-white/40">
              = Shared across both brands
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
