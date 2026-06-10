import { Link } from 'react-router-dom'
import Container from '../layout/Container'

const navLinks = [
  { label: 'Process', to: '/#overview' },
  { label: 'Personas', to: '/#personas' },
  { label: 'Journey', to: '/#journey' },
  { label: 'IA', to: '/#information-architecture' },
  { label: 'System', to: '/#system' },
  { label: 'Tokens', to: '/#token-architecture' },
  { label: 'Rationale', to: '/design-rationale' },
] as const

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0c1a2e] py-12">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/60">Work done by Serag Alzentani</p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-[10px] uppercase tracking-widest text-white/40 transition-colors hover:text-white/70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  )
}
