import Hero from './components/sections/Hero'
import Page from './components/Page'
import DeliverablesSection from './components/sections/DeliverablesSection'
import EvidenceSection from './components/sections/EvidenceSection'
import Footer from './components/sections/Footer'
import IdeationSection from './components/sections/IdeationSection'
import JourneySection from './components/sections/JourneySection'
import OverviewSection from './components/sections/OverviewSection'
import PersonasSection from './components/sections/PersonasSection'
import SystemSection from './components/sections/SystemSection'
import VisualLanguageSection from './components/sections/VisualLanguageSection'

export default function App() {
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
        <SystemSection />
        <DeliverablesSection />
      </main>
      <Footer />
    </Page>
  )
}
