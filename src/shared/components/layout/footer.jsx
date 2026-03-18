import { NavLink } from 'react-router-dom'
import { COMPANY, NAV_LINKS, TRUST_BADGES } from '@/shared/lib/constants'
import { Container } from '@/shared/components/ui/container'

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-surface-darker text-white">
      <Container as="div" className="py-[var(--section-spacing-md)]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="text-3xl font-semibold leading-[var(--leading-display)] tracking-tight">Everest</p>
            <p className="text-[length:var(--text-body-sm)] uppercase tracking-[var(--tracking-overline)] text-white/70">Double Glazing</p>
            <p className="max-w-xs type-body text-white/75">
              {COMPANY.tagline}. {COMPANY.description}.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-[length:var(--text-overline)] uppercase tracking-[var(--tracking-overline)] text-white/55">Quick Links</p>
            <div className="grid gap-2 text-[length:var(--text-body-sm)] uppercase tracking-[var(--tracking-wide)]">
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

          <div className="space-y-3">
            <p className="text-[length:var(--text-overline)] uppercase tracking-[var(--tracking-overline)] text-white/55">Contact</p>
            <div className="space-y-2 text-[length:var(--text-body-sm)] text-white/80">
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

          <div className="space-y-3">
            <p className="text-[length:var(--text-overline)] uppercase tracking-[var(--tracking-overline)] text-white/55">Trust</p>
            <div className="grid gap-2 text-[length:var(--text-body-sm)] text-white/80">
              {TRUST_BADGES.map((badge) => (
                <p key={badge}>{badge}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-5 text-[length:var(--text-overline)] uppercase tracking-[var(--tracking-wide)] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-4">
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
