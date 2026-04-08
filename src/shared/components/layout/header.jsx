import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/shared/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { HEADER_PRIMARY_LINKS } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { smoothScrollToTop } from '@/shared/hooks/use-smooth-scroll'
import logoImage from '@/shared/data/images/logo.png'

export function Header() {
  const { pathname } = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerShellRef = useRef(null)
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  const isProjectsAliasRoute = pathname.startsWith('/works')

  const handleLogoClick = (event) => {
    if (pathname === '/') {
      event.preventDefault()
      smoothScrollToTop()
    }
  }

  useEffect(() => {
    const closeMenus = () => {
      setIsMobileMenuOpen(false)
    }
    closeMenus()
  }, [pathname])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    const handleOutsideClick = (event) => {
      if (!headerShellRef.current?.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('pointerdown', handleOutsideClick)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('pointerdown', handleOutsideClick)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-(--z-sticky-val)">
      <div
        ref={headerShellRef}
        className={cn(
          'pointer-events-auto w-full border-b border-primary/12 bg-white/95 px-(--container-px) py-3 shadow-sm backdrop-blur-md transition-colors',
        )}
      >
        <div className="mx-auto flex w-full max-w-(--container-max) items-center justify-between gap-4">
          <NavLink className="flex items-center" onClick={handleLogoClick} to="/">
            <img src={logoImage} alt="Everest Double Glazing" className="h-14 w-auto object-contain" />
          </NavLink>
          <nav className="hidden items-center gap-2 lg:flex">
            {HEADER_PRIMARY_LINKS.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-3 py-1.5 type-overline tracking-(--tracking-wide) text-foreground/70 transition',
                    'hover:bg-primary/10 hover:text-primary-700',
                    (isActive || (link.href === '/projects' && isProjectsAliasRoute)) &&
                      'bg-primary text-white hover:bg-primary hover:text-white',
                  )
                }
                key={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                }}
                to={link.href}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              className={cn(
                'rounded-full border border-primary px-4 py-1.5 type-overline tracking-(--tracking-wide) text-primary transition',
                'hover:bg-primary hover:text-white',
              )}
              onClick={() => {
                setIsMobileMenuOpen(false)
              }}
              to="/contact"
            >
              Free Quote
            </NavLink>
            <a
              className={cn(
                'rounded-full border border-primary bg-primary px-4 py-1.5 type-overline tracking-(--tracking-wide) text-white transition',
                'hover:bg-primary-700',
              )}
              href={primaryPhoneHref}
            >
              Call Now
            </a>
          </nav>
          <button
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            type="button"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  'absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200',
                  isMobileMenuOpen && 'translate-y-1.75 rotate-45',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.75 h-0.5 w-5 rounded-full bg-current transition-opacity duration-200',
                  isMobileMenuOpen && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-3.5 h-0.5 w-5 rounded-full bg-current transition-transform duration-200',
                  isMobileMenuOpen && '-translate-y-1.75 -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
        <nav
          className={cn(
            'overflow-hidden transition-all duration-300 lg:hidden',
            isMobileMenuOpen ? 'max-h-[70vh] pt-3 opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <div className="mx-auto grid w-full max-w-(--container-max) gap-1 rounded-lg border border-black/10 bg-white p-2 text-foreground">
            {HEADER_PRIMARY_LINKS.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    'block rounded-md px-3 py-2 type-overline tracking-(--tracking-wide) text-foreground/70 transition',
                    'hover:bg-primary/10 hover:text-primary-700',
                    (isActive || (link.href === '/projects' && isProjectsAliasRoute)) && 'bg-primary text-white hover:bg-primary hover:text-white',
                  )
                }
                key={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                }}
                to={link.href}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 grid gap-2 border-t border-black/10 pt-2">
              <NavLink
                className="block rounded-md border border-primary px-3 py-2 type-overline tracking-(--tracking-wide) text-center text-primary transition hover:bg-primary hover:text-white"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                }}
                to="/contact"
              >
                Get Free Quote
              </NavLink>
              <a
                className="block rounded-md border border-primary bg-primary px-3 py-2 type-overline tracking-(--tracking-wide) text-center text-white transition hover:bg-primary-700"
                href={primaryPhoneHref}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                }}
              >
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
