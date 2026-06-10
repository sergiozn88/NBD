import { useState } from 'react'
import Container from '../layout/Container'
import SectionHeader from '../layout/SectionHeader'
import DashboardHierarchy from '../informationArchitecture/DashboardHierarchy'
import SitemapTree from '../informationArchitecture/SitemapTree'
import TapDepthComparison from '../informationArchitecture/TapDepthComparison'
import {
  eiDifferentiators,
  enbdDifferentiators,
  navStats,
  sitemapBrandConfigs,
  type SitemapBrand,
} from '../../data/informationArchitecture'

export default function InformationArchitectureSection() {
  const [sitemapBrand, setSitemapBrand] = useState<SitemapBrand>('enbd')
  const sitemapConfig = sitemapBrandConfigs[sitemapBrand]
  const differentiators =
    sitemapBrand === 'ei' ? eiDifferentiators : enbdDifferentiators

  return (
    <section id="information-architecture" className="bg-[#0c1a2e] section-shell">
      <Container>
        <SectionHeader
          label="F.5 / INFORMATION ARCHITECTURE"
          title="Structure Before Style."
          description="Before screens were designed, we mapped every node in the banking platform — both what exists today and what the redesign rationalises. The sitemap informed navigation depth, tab structure, and the decision to collapse Transfer & Pay into a single hub."
          variant="light"
        />

        <div className="mt-12">
          <p className="text-xs uppercase tracking-widest text-[#c9902b]">Navigation Depth</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {navStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p
                  className={`font-['Playfair_Display'] text-5xl font-black ${
                    stat.highlight ? 'text-[#c9902b]' : 'text-white'
                  }`}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/40">{stat.label}</p>
                <p className="mt-2 text-[10px] text-white/30">{stat.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-widest text-[#c9902b]">
            Sitemap — Full Banking Platform
          </p>
          <div className="mt-6">
            <SitemapTree brand={sitemapBrand} onBrandChange={setSitemapBrand} />
          </div>
          <div
            className={`mt-6 rounded-[14px] border p-5 ${sitemapConfig.calloutBorder} ${sitemapConfig.calloutBg}`}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
              <div>
                <p className="font-['Playfair_Display'] text-4xl font-black text-white/80">
                  {sitemapConfig.brandOnlyCount}
                </p>
                <p className="text-[10px] text-white/40">{sitemapConfig.brandOnlyLabel}</p>
              </div>
              <ul className="space-y-1 text-[11px] text-white/50">
                {differentiators.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-widest text-[#c9902b]">
            Information Hierarchy — Dashboard Screen
          </p>
          <p className="mt-4 max-w-2xl text-sm text-white/40">
            How content is prioritized on the dashboard home screen. Size and position encode urgency.
          </p>
          <div className="mt-8">
            <DashboardHierarchy />
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-widest text-[#c9902b]">Tap Depth Reduction</p>
          <div className="mt-6">
            <TapDepthComparison />
          </div>
        </div>
      </Container>
    </section>
  )
}
