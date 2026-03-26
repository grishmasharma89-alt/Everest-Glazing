import { NavLink } from 'react-router-dom'
import { COMPANY, NAV_LINKS, TRUST_BADGES } from '@/shared/lib/constants'
import { Container } from '@/shared/components/ui/container'

export function Footer() {
  return (
    <footer className="border-t border-primary-300/18 bg-primary-800 text-white">
      <Container as="div" className="py-8 sm:py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <p className="text-2xl font-semibold leading-(--leading-display) tracking-tight">Everest</p>
            <p className="text-xs uppercase tracking-(--tracking-overline) text-white/70">Double Glazing</p>
            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              {COMPANY.tagline}. {COMPANY.description}.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-(--tracking-overline) text-white/55">Quick Links</p>
            <div className="grid gap-1 text-xs uppercase tracking-(--tracking-wide)">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  className="text-white/80 transition hover:text-white"
                  to={link.href}
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink className="text-white/80 transition hover:text-white" to="/legals">
                Legals
              </NavLink>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-(--tracking-overline) text-white/55">Contact</p>
            <div className="space-y-1 text-xs leading-relaxed text-white/80">
              <p>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="transition hover:text-white">
                  {COMPANY.phone}
                </a>
                {' / '}
                <a href={`tel:${COMPANY.phoneAlt.replace(/\s/g, '')}`} className="transition hover:text-white">
                  {COMPANY.phoneAlt}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="transition hover:text-white">
                  {COMPANY.email}
                </a>
              </p>
              <p>
                <a
                  href={`https://${COMPANY.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {COMPANY.website}
                </a>
              </p>
              <p>{COMPANY.address}</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-(--tracking-overline) text-white/55">Trust</p>
            <div className="grid gap-1 text-xs leading-relaxed text-white/80">
              {TRUST_BADGES.map((badge) => (
                <p key={badge}>{badge}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-primary-300/18 pt-4 text-[10px] uppercase tracking-(--tracking-wide) text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-3">
            <NavLink className="transition hover:text-white/80" to="/legals">
              Privacy
            </NavLink>
            <NavLink className="transition hover:text-white/80" to="/legals">
              Terms
            </NavLink>
          </div>
        </div>
      </Container>
    </footer>
  )
}
