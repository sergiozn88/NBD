import Page from '../components/Page'
import DesignRationaleBanner from '../components/sections/DesignRationaleBanner'
import DeliverablesSection from '../components/sections/DeliverablesSection'
import EvidenceSection from '../components/sections/EvidenceSection'
import Footer from '../components/sections/Footer'
import Hero from '../components/sections/Hero'
import IdeationSection from '../components/sections/IdeationSection'
import InformationArchitectureSection from '../components/sections/InformationArchitectureSection'
import JourneySection from '../components/sections/JourneySection'
import OverviewSection from '../components/sections/OverviewSection'
import PersonasSection from '../components/sections/PersonasSection'
import SystemSection from '../components/sections/SystemSection'
import TokenArchitectureSection from '../components/sections/TokenArchitectureSection'
import VisualLanguageSection from '../components/sections/VisualLanguageSection'

export default function HomePage() {
  return (
    <Page>
      <Hero />
      <main id="content">
        <OverviewSection />
        <EvidenceSection />
        <PersonasSection />
        <JourneySection />
        <VisualLanguageSection />
        <IdeationSection />
        <InformationArchitectureSection />
        <SystemSection />
        <TokenArchitectureSection />
        <DesignRationaleBanner />
        <DeliverablesSection />
      </main>
      <Footer />
    </Page>
  )
}
