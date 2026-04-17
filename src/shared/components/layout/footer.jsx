import { NavLink } from 'react-router-dom'
import { Facebook, Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY, NAV_LINKS, TRUST_BADGES } from '@/shared/lib/constants'
import { Container } from '@/shared/components/ui/container'

export function Footer() {
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61580443552499'

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
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-(--tracking-overline) text-white/55">Contact</p>
            <div className="space-y-2 text-xs leading-relaxed text-white/80">
              <p className="flex items-start gap-2">
                <Facebook className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/70" />
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Facebook
                </a>
              </p>

              <p className="flex items-start gap-2">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/70" />
                <span>
                  <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="transition hover:text-white">
                    0497 182 848
                  </a>
                  {' / '}
                  <a href={`tel:${COMPANY.phoneAlt.replace(/\s/g, '')}`} className="transition hover:text-white">
                    0415 402 177
                  </a>
                </span>
              </p>

              <p className="flex items-start gap-2">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/70" />
                <a href="mailto:everestdoubleglazing@gmail.com" className="transition hover:text-white">
                  everestdoubleglazing@gmail.com
                </a>
              </p>

              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/70" />
                <span>1/30 Tantalum Street, Beard ACT 2620</span>
              </p>
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
        </div>
      </Container>
    </footer>
  )
}
