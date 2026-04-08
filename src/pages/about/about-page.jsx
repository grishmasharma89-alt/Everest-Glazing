import { COMPANY } from '@/shared/lib/constants'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { CardShell } from '@/shared/components/ui/card-shell'
import { OptimizedImage } from '@/shared/components/common/optimized-image'
import { CTASection } from '@/shared/components/sections/cta-section'
import { LinkButton } from '@/shared/components/ui/link-button'
import { useScrollReveal } from '@/shared/hooks/use-scroll-reveal'
import aboutImage from '@/shared/data/images/pexels-kseniachernaya-5768107.jpg'

export function AboutPage() {
  const scopeRef = useScrollReveal()
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  const stats = [
    { value: '5+', label: 'Years of Glazing Experience' },
    { value: '140+', label: 'Retrofit Projects Delivered' },
    { value: '700+', label: 'Happy Homeowners' },
    { value: '10yr', label: 'Written Warranty Included' },
  ]

  const values = [
    {
      title: 'Precision Over Speed',
      text: 'Every window is measured twice with laser accuracy. We schedule tight, communicate early, and deliver finishes that look like they were always there.',
    },
    {
      title: 'Honest Guidance',
      text: 'We recommend what your home actually needs — not the most expensive option. Clear advice, realistic timelines, and upfront pricing from the first call.',
    },
    {
      title: 'Complete Ownership',
      text: 'From initial inspection to final sign-off, one team handles everything. No subcontractors, no handoffs, no finger-pointing.',
    },
    {
      title: 'Australian-Made Glass',
      text: 'We use locally manufactured, AS1288-compliant glass and hardware — specced for Canberra\'s climate extremes, not imported to a price.',
    },
  ]

  return (
    <div ref={scopeRef}>
      {/* ── 1. Cinematic Hero — full-bleed image with subtle cool tint ── */}
      <Section spacing="none" className="relative overflow-hidden bg-surface-dark">
        <div
          className="reveal-parallax absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1e2a]/85 via-[#0f2533]/65 to-[#132d3d]/40" />

        <Container className="relative flex min-h-[70dvh] flex-col justify-end pb-14 pt-32 sm:min-h-[80dvh] sm:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <p className="reveal type-overline text-primary-300/80">About Everest</p>
            <h1 className="reveal mt-4 type-h1 text-white">
              We make homes quieter, warmer, and built to last.
            </h1>
            <p className="reveal mt-6 max-w-2xl text-[length:var(--text-body-lg)] leading-relaxed text-white/70">
              Canberra-based retrofit double glazing specialists.
              We combine practical performance upgrades with cleaner finishes and a process
              that respects both your home and your time.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-4">
              <LinkButton to="/contact" variant="white" size="lg" className="border border-white/20">
                Get a Free Quote
              </LinkButton>
              <LinkButton to="/services" variant="outline-light" size="lg">
                View Services
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 2. Stats strip — dark with subtle blue tint ── */}
      <Section spacing="none" className="border-b border-white/8 py-10 sm:py-14" style={{ backgroundColor: '#0f2533' }}>
        <Container>
          <div className="reveal-stagger mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{item.value}</p>
                <p className="mt-2 type-overline text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 3. Story — asymmetric split with editorial weight ── */}
      <Section background="white">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-3">
                <p className="reveal type-overline text-primary">Our Story</p>
                <h2 className="reveal mt-4 type-h2 text-foreground">
                  Started with a simple question — why do Canberra homes still have single-pane glass?
                </h2>
                <div className="reveal mt-6 space-y-5 text-[length:var(--text-body)] leading-relaxed text-foreground/[var(--opacity-muted)]">
                  <p>
                    We saw homeowners dealing with freezing winters, scorching summers, and energy bills
                    that didn't make sense — all because of outdated glazing that was never designed
                    for this climate.
                  </p>
                  <p>
                    So we built a company around one focus: retrofit double glazing that's measured precisely,
                    installed cleanly, and backed by a 10-year written warranty. No gimmicks, no upselling —
                    just practical upgrades that make a noticeable difference from day one.
                  </p>
                </div>
                <div className="reveal mt-8">
                  <LinkButton to="/how-it-works" variant="primary-outline" size="default">
                    See How It Works
                  </LinkButton>
                </div>
              </div>

              <div className="reveal-scale lg:col-span-2">
                <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-lg-val)]">
                  <OptimizedImage
                    src={aboutImage}
                    alt="Retrofit double glazing installation in progress"
                    width={600}
                    height={750}
                    className="aspect-[3/4] w-full object-cover"
                    wrapperClassName="bg-secondary"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 4. Editorial statement — big quote ── */}
      <Section background="light" className="border-y border-primary-300/20">
        <Container>
          <div className="reveal mx-auto max-w-4xl text-center">
            <svg className="mx-auto h-8 w-8 text-primary/30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.17 11 15c0 1.933-1.567 3.5-3.5 3.5-1.17 0-2.266-.55-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.17 21 15c0 1.933-1.567 3.5-3.5 3.5-1.17 0-2.266-.55-2.917-1.179z" />
            </svg>
            <blockquote className="mt-6 text-[length:var(--text-h3)] font-normal leading-snug tracking-tight text-foreground/80">
              We don't just replace glass — we upgrade how your home feels, sounds, and performs across every season.
            </blockquote>
            <p className="mt-6 type-overline text-primary">Everest Double Glazing Team</p>
          </div>
        </Container>
      </Section>

      {/* ── 5. Values — numbered grid ── */}
      <Section background="white">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="reveal text-center">
              <p className="type-overline text-primary">What Drives Us</p>
              <h2 className="mt-3 type-h2 text-foreground">Built on principles, not promises</h2>
              <div className="reveal-line mx-auto mt-5 h-px w-full max-w-xs bg-primary-300/40" />
            </div>

            <div className="reveal-stagger mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2">
              {values.map((item, i) => (
                <div key={item.title} className="bg-white p-8 sm:p-10">
                  <span className="text-4xl font-light tracking-tighter text-primary/25">0{i + 1}</span>
                  <h3 className="mt-4 text-[length:var(--text-body-lg)] font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 type-body text-foreground/[var(--opacity-muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 6. Mission + Vision — side-by-side cards with accent strip ── */}
      <Section background="light" className="border-y border-primary-300/20">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="reveal-stagger grid gap-6 lg:grid-cols-2">
              <CardShell className="hover-lift relative overflow-hidden rounded-[2rem] border-0 bg-white p-8 shadow-[var(--shadow-md-val)] sm:p-10">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                <p className="type-overline text-primary">Mission</p>
                <h3 className="mt-4 type-h3 text-foreground">
                  Deliver practical, premium glazing upgrades
                </h3>
                <p className="mt-4 type-body text-foreground/[var(--opacity-muted)]">
                  Improve comfort, efficiency, and long-term property value — with clear guidance,
                  reliable timelines, and workmanship that homeowners can trust for years.
                </p>
              </CardShell>

              <CardShell className="hover-lift relative overflow-hidden rounded-[2rem] border-0 bg-white p-8 shadow-[var(--shadow-md-val)] sm:p-10">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary-400" />
                <p className="type-overline text-primary">Vision</p>
                <h3 className="mt-4 type-h3 text-foreground">
                  Set the standard for retrofit glazing
                </h3>
                <p className="mt-4 type-body text-foreground/[var(--opacity-muted)]">
                  Expand trusted retrofit services across ACT, NSW, and Victoria
                  while maintaining honest pricing, high workmanship standards,
                  and a benchmark for visual quality and customer experience.
                </p>
              </CardShell>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 7. CTA — dark, proper ── */}
      <CTASection
        className="mb-16 sm:mb-20"
        label="Talk to us"
        title="Planning a retrofit upgrade?"
        subtitle="Our team can inspect your current frames and provide a clear recommendation — no obligation."
        primaryCta={{ label: 'Get Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
      />
    </div>
  )
}
