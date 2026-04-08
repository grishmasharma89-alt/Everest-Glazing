import { SERVICES_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { CardShell } from '@/shared/components/ui/card-shell'
import { OptimizedImage } from '@/shared/components/common/optimized-image'
import { LinkButton } from '@/shared/components/ui/link-button'
import { CTASection } from '@/shared/components/sections/cta-section'
import { useScrollReveal } from '@/shared/hooks/use-scroll-reveal'

export function ServicesPage() {
  const scopeRef = useScrollReveal()
  const categories = SERVICES_CONTENT.categories.filter((cat) => cat.id !== 'specialty-glass')
  const { additionalServices, servicePillars } = SERVICES_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  return (
    <div ref={scopeRef}>
      {/* ── Hero ── */}
      <Section spacing="none" background="white" className="pt-28 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-5xl pb-12 text-center sm:pb-14">
            <p className="reveal type-overline text-primary">Our Services</p>
            <h1 className="reveal mt-3 type-h2 text-foreground sm:type-h1">
              Glass Solutions Built for Canberra Homes
            </h1>
            <p className="reveal mx-auto mt-5 max-w-3xl type-body text-foreground/[var(--opacity-muted)] sm:text-[length:var(--text-body-lg)]">
              From standard double glazing to premium vacuum glass —
              every solution is retrofit-friendly, AS1288 compliant, and backed by a 10-year warranty.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Category Detail Sections — alternating layout ── */}
      {categories.map((cat, index) => {
        const isEven = index % 2 === 0
        return (
          <Section key={cat.id} background={isEven ? 'white' : 'light'} className={isEven ? '' : 'border-y border-primary-300/20'}>
            <Container>
              <div className="mx-auto max-w-6xl">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* Image */}
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-lg-val)]">
                      <OptimizedImage
                        src={cat.image}
                        alt={cat.title}
                        width={700}
                        height={520}
                        className="aspect-[4/3] w-full object-cover"
                        wrapperClassName="bg-secondary"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <p className="type-overline text-primary">{cat.label}</p>
                    <h2 className="mt-3 type-h2 text-foreground">{cat.title}</h2>
                    <p className="mt-5 type-body leading-relaxed text-foreground/[var(--opacity-muted)]">
                      {cat.summary}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {cat.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 type-body text-foreground/[var(--opacity-muted)]">
                          <svg className="mt-1 h-4 w-4 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M2 8.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-5 text-[length:var(--text-body-sm)] font-medium text-foreground/60">
                      Best for: {cat.bestFor}
                    </p>

                    <div className="mt-7">
                      <LinkButton to={cat.cta.to} variant="primary" size="default">
                        {cat.cta.label}
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        )
      })}

      {/* ── Service Pillars — trust strip ── */}
      <Section spacing="none" className="border-b border-primary-300/20 py-10 sm:py-14" style={{ backgroundColor: '#0f2533' }}>
        <Container>
          <div className="mx-auto grid max-w-5xl gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicePillars.map((pillar) => (
              <div key={pillar} className="flex items-center gap-3">
                <svg className="h-4 w-4 shrink-0 text-primary-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M2 8.5l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="type-body-sm text-white/80">{pillar}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Additional Services Grid ── */}
      <Section background="white">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="type-overline text-primary">More Solutions</p>
              <h2 className="mt-3 type-h2 text-foreground">Additional Glazing Services</h2>
              <div className="mx-auto mt-5 h-px w-full max-w-xs bg-primary-300/40" />
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {additionalServices.map((svc) => (
                <CardShell key={svc.title} className="hover-lift overflow-hidden rounded-2xl border-primary-300/15 p-0">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                    width={500}
                    height={312}
                  />
                  <div className="p-6">
                    <h3 className="text-[length:var(--text-body-lg)] font-semibold text-foreground">{svc.title}</h3>
                    <p className="mt-2 type-body-sm text-foreground/[var(--opacity-muted)]">{svc.description}</p>
                  </div>
                </CardShell>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <CTASection
        className="mb-16 sm:mb-20"
        label="Free Quote"
        title="Ready to upgrade your windows?"
        subtitle="Tell us about your home and we'll recommend the best retrofit option — no obligation."
        primaryCta={{ label: 'Get Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
      />
    </div>
  )
}
