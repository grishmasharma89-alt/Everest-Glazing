import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/shared/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { HEADER_PRIMARY_LINKS, HEADER_SECONDARY_LINKS } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'

export function Header() {
  const { pathname } = useLocation()
  const [useLightHeader, setUseLightHeader] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeTimerRef = useRef(0)
  const headerShellRef = useRef(null)
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  useEffect(() => {
    const updateHeaderTheme = () => {
      if (pathname !== '/') {
        setUseLightHeader(true)
        return
      }

      const heroThreshold = window.innerHeight * 0.72
      setUseLightHeader(window.scrollY > heroThreshold)
    }

    updateHeaderTheme()
    window.addEventListener('scroll', updateHeaderTheme, { passive: true })
    window.addEventListener('resize', updateHeaderTheme)

    return () => {
      window.removeEventListener('scroll', updateHeaderTheme)
      window.removeEventListener('resize', updateHeaderTheme)
    }
  }, [pathname])

  const textColorClass = useLightHeader ? 'text-black' : 'text-white'
  const mutedTextColorClass = useLightHeader ? 'text-black/80' : 'text-white/95'
  const isMoreActive = HEADER_SECONDARY_LINKS.some((link) => pathname.startsWith(link.href))
  const isProjectsAliasRoute = pathname.startsWith('/works')

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  const openMoreMenu = () => {
    window.clearTimeout(closeTimerRef.current)
    setIsMoreOpen(true)
  }

  const closeMoreMenu = () => {
    window.clearTimeout(closeTimerRef.current)
    closeTimerRef.current = window.setTimeout(() => setIsMoreOpen(false), 130)
  }

  useEffect(() => {
    const closeMenus = () => {
      setIsMoreOpen(false)
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
    if (!isMobileMenuOpen && !isMoreOpen) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setIsMoreOpen(false)
      }
    }

    const handleOutsideClick = (event) => {
      if (!headerShellRef.current?.contains(event.target)) {
        setIsMobileMenuOpen(false)
        setIsMoreOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('pointerdown', handleOutsideClick)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('pointerdown', handleOutsideClick)
    }
  }, [isMobileMenuOpen, isMoreOpen])

  useEffect(
    () => () => {
      window.clearTimeout(closeTimerRef.current)
    },
    [],
  )

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[var(--z-sticky-val)] px-[var(--container-px)] pt-5 sm:pt-6">
      <div
        ref={headerShellRef}
        className={cn(
          'pointer-events-auto rounded-xl px-3 py-2 transition-all duration-[var(--duration-slower)]',
          textColorClass,
          useLightHeader && 'border border-black/10 bg-white/78 shadow-[var(--shadow-sm-val)] backdrop-blur-md',
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <NavLink className="leading-[var(--leading-display)] tracking-tight" onClick={handleLogoClick} to="/">
            <p className="text-[length:var(--text-h4)] font-semibold">Everest</p>
            <p className="text-[length:var(--text-caption)] uppercase tracking-[var(--tracking-overline)] opacity-80">Double Glazing</p>
          </NavLink>
          <nav className="hidden items-center gap-6 lg:flex">
            {HEADER_PRIMARY_LINKS.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-3 py-1.5 text-[length:var(--text-body-sm)] uppercase tracking-[var(--tracking-wide)] transition',
                    mutedTextColorClass,
                    useLightHeader
                      ? 'hover:bg-black/8 hover:text-black'
                      : 'hover:bg-white/10 hover:text-white',
                    (isActive || (link.href === '/projects' && isProjectsAliasRoute)) &&
                      (useLightHeader
                        ? 'bg-black text-white hover:bg-black hover:text-white'
                        : 'bg-white text-black hover:bg-white hover:text-black'),
                  )
                }
                key={link.href}
                onClick={() => {
                  setIsMoreOpen(false)
                  setIsMobileMenuOpen(false)
                }}
                to={link.href}
              >
                {link.label}
              </NavLink>
            ))}
            <div
              className="relative"
              onMouseEnter={openMoreMenu}
              onMouseLeave={closeMoreMenu}
            >
              <button
                className={cn(
                    'rounded-full px-3 py-1.5 text-[length:var(--text-body-sm)] uppercase tracking-[var(--tracking-wide)] transition',
                  mutedTextColorClass,
                  useLightHeader
                    ? 'hover:bg-black/8 hover:text-black'
                    : 'hover:bg-white/10 hover:text-white',
                  isMoreActive &&
                    (useLightHeader
                      ? 'bg-black text-white hover:bg-black hover:text-white'
                      : 'bg-white text-black hover:bg-white hover:text-black'),
                )}
                onClick={() => setIsMoreOpen((previous) => !previous)}
                type="button"
              >
                More
              </button>
              <div
                className={cn(
                  'absolute right-0 top-full min-w-52 rounded-xl border p-2 shadow-[var(--shadow-lg-val)] transition duration-[var(--duration-normal)]',
                  isMoreOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
                  useLightHeader
                    ? 'border-black/12 bg-white text-black'
                    : 'border-white/25 bg-black/90 text-white backdrop-blur-md',
                )}
              >
                {HEADER_SECONDARY_LINKS.map((link) => (
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        'block rounded-lg px-3 py-2 type-overline tracking-[var(--tracking-wide)] transition',
                        useLightHeader
                          ? 'text-black/80 hover:bg-black/6 hover:text-black'
                          : 'text-white/85 hover:bg-white/10 hover:text-white',
                        isActive && (useLightHeader ? 'bg-black/8 text-black' : 'bg-white/15 text-white'),
                      )
                    }
                    key={link.href}
                    onClick={() => {
                      setIsMoreOpen(false)
                      setIsMobileMenuOpen(false)
                    }}
                    to={link.href}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink
              className={cn(
                'rounded-full border px-4 py-1.5 text-[length:var(--text-overline)] uppercase tracking-[var(--tracking-wide)] transition',
                useLightHeader
                  ? 'border-black/30 text-black hover:bg-black hover:text-white'
                  : 'border-white/40 text-white hover:bg-white hover:text-black',
              )}
              onClick={() => {
                setIsMoreOpen(false)
                setIsMobileMenuOpen(false)
              }}
              to="/contact"
            >
              Free Quote
            </NavLink>
            <a
              className={cn(
                'rounded-full border px-4 py-1.5 text-[length:var(--text-overline)] uppercase tracking-[var(--tracking-wide)] transition',
                useLightHeader
                  ? 'border-black bg-black text-white hover:bg-black/90'
                  : 'border-white bg-white text-black hover:bg-white/90',
              )}
              href={primaryPhoneHref}
            >
              Call Now
            </a>
          </nav>
          <button
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className={cn('inline-flex h-9 w-9 items-center justify-center rounded-md lg:hidden', mutedTextColorClass)}
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
          <div className="grid gap-1 rounded-lg border border-black/10 bg-white p-2 text-black">
            {[...HEADER_PRIMARY_LINKS, ...HEADER_SECONDARY_LINKS].map((link) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    'block rounded-md px-3 py-2 type-overline tracking-[var(--tracking-wide)] transition',
                    'text-black hover:bg-black hover:text-white',
                    (isActive || (link.href === '/projects' && isProjectsAliasRoute)) && 'bg-black text-white hover:bg-black hover:text-white',
                  )
                }
                key={link.href}
                onClick={() => {
                  setIsMoreOpen(false)
                  setIsMobileMenuOpen(false)
                }}
                to={link.href}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 grid gap-2 border-t border-black/10 pt-2">
              <NavLink
                className="block rounded-md border border-black px-3 py-2 type-overline tracking-[var(--tracking-wide)] text-center text-black transition hover:bg-black hover:text-white"
                onClick={() => {
                  setIsMoreOpen(false)
                  setIsMobileMenuOpen(false)
                }}
                to="/contact"
              >
                Get Free Quote
              </NavLink>
              <a
                className="block rounded-md border border-black bg-black px-3 py-2 type-overline tracking-[var(--tracking-wide)] text-center text-white transition hover:bg-black/90"
                href={primaryPhoneHref}
                onClick={() => {
                  setIsMoreOpen(false)
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
