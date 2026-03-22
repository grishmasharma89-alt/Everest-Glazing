import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HOME_CONTENT, FAQ_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { CardShell } from '@/shared/components/ui/card-shell'
import { TestimonialsSection } from '@/shared/components/sections/testimonials-section'
import { Accordion } from '@/shared/components/ui/accordion'
import { CTASection } from '@/shared/components/sections/cta-section'
import { ContactForm } from '@/shared/components/sections/contact-form'
import { Badge } from '@/shared/components/ui/badge'
import { LinkButton } from '@/shared/components/ui/link-button'

function BeforeAfterCard({ title, location, beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <article className="glance-section-reveal">
      <div className="relative overflow-hidden rounded-[1.9rem] bg-white shadow-[var(--shadow-md-val)]">
        <img
          src={beforeImage}
          alt={`${title} before`}
          className="aspect-[16/9.5] w-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={afterImage}
            alt={`${title} after`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <input
          aria-label={`${title} before and after comparison`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          max="100"
          min="0"
          onChange={(event) => setSliderPosition(Number(event.target.value))}
          type="range"
          value={sliderPosition}
        />

        <div
          className="pointer-events-none absolute inset-y-0 z-10"
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        >
          <div className="absolute inset-y-0 w-px bg-white/90" />
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/85 bg-white/95 text-primary shadow-[var(--shadow-md-val)]">
            <span className="text-sm font-semibold">↔</span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-4 top-4 z-10 flex items-center justify-between text-white">
          <span className="rounded-full bg-black/35 px-3 py-1 type-overline backdrop-blur-sm">Before</span>
          <span className="rounded-full bg-black/35 px-3 py-1 type-overline backdrop-blur-sm">After</span>
        </div>
      </div>

      <div className="pt-4 text-center">
        <p className="text-[length:var(--text-body-lg)] font-semibold text-foreground">{title}</p>
        <p className="mt-1 type-overline text-primary">{location}</p>
      </div>
    </article>
  )
}

export function HomePage() {
  const pageRef = useRef(null)
  const {
    editorialHero,
    showcaseItems,
    reviewItems,
    serviceAreas,
    beforeAfterProjects,
    cta,
    contactPreview,
  } = HOME_CONTENT
  const { faqs } = FAQ_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`
  const heroHighlights = [
    { value: '5+ Years', label: 'Glazing Experience' },
    { value: 'AS1288', label: 'Compliance Standard' },
    { value: '10-Year', label: 'Written Warranty' },
  ]
  const serviceCategories = showcaseItems.slice(0, 2)
  const workAtGlanceItems = [...beforeAfterProjects, ...beforeAfterProjects].slice(0, 4)

  useEffect(() => {
    if (!pageRef.current) return undefined

    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.from('.home-hero-reveal', {
        y: 56,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
      })

      gsap.fromTo(
        '.home-hero-bg',
        { scale: 1.08, yPercent: -6 },
        {
          scale: 1,
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: '.home-hero-shell',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        },
      )

      gsap.from('.service-section-reveal', {
        y: 52,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: '.service-section-trigger',
          start: 'top 78%',
        },
      })

      gsap.from('.home-hero-stats', {
        y: 52,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.35,
      })

      gsap.from('.glance-section-reveal', {
        y: 48,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: '.glance-section-trigger',
          start: 'top 78%',
        },
      })
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <div ref={pageRef}>
      <Section spacing="none" className="bg-white pb-14 pt-0">
        <div className="home-hero-shell relative overflow-hidden bg-surface-dark min-h-[88vh] sm:min-h-[96vh]">
          <div
            className="home-hero-bg absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(90deg, rgba(8,18,33,0.86) 0%, rgba(8,18,33,0.68) 38%, rgba(8,18,33,0.38) 64%, rgba(8,18,33,0.42) 100%), url(${editorialHero.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(70,161,194,0.18),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(255,255,255,0.06),transparent_24%)]" />

          <Container className="relative flex min-h-[88vh] items-end pb-10 pt-28 sm:min-h-[96vh] sm:pb-12 sm:pt-32 lg:pb-14 lg:pt-36">
            <div className="max-w-4xl text-white">
                <p className="home-hero-reveal type-overline text-primary-300">{editorialHero.kicker}</p>
                <h1 className="home-hero-reveal mt-4 max-w-4xl type-h1 text-white">Everest Double Glazing. Clear choice for comfort.</h1>
                <p className="home-hero-reveal mt-5 max-w-xl type-body sm:text-[length:var(--text-body-lg)] text-white/78">
                  Energy efficient retrofit glazing for Canberra homes with less disruption, better thermal comfort, and cleaner modern detailing.
                </p>

                <div className="home-hero-reveal mt-7 flex flex-wrap items-center gap-3">
                  <LinkButton to="/contact" variant="white" size="default" className="border border-white/18 bg-white/96 text-primary-800 hover:bg-white">
                    Get Free Quote
                  </LinkButton>
                  <LinkButton href={primaryPhoneHref} variant="outline-light" size="default" className="border-white/45 bg-white/6 backdrop-blur-sm">
                    Call {COMPANY.phone}
                  </LinkButton>
                </div>

                <div className="home-hero-stats mt-9 grid gap-3 sm:grid-cols-3">
                  {heroHighlights.map((item) => (
                    <CardShell key={item.label} className="rounded-[1.1rem] border border-white/14 bg-white/8 p-4 text-white shadow-none backdrop-blur-sm">
                      <p className="text-[length:var(--text-body-lg)] font-semibold">{item.value}</p>
                      <p className="mt-2 type-overline text-primary-300">{item.label}</p>
                    </CardShell>
                  ))}
                </div>

                <div className="home-hero-reveal mt-8 flex flex-wrap items-center gap-5 border-t border-white/14 pt-5 text-white/72">
                  <p className="type-overline text-primary-300">{editorialHero.sequenceLabel}</p>
                  <p className="type-body text-white/72">{editorialHero.leadCaption}</p>
                </div>
              </div>
          </Container>
        </div>
      </Section>

      <Section spacing="none" background="light" className="service-section-trigger border-y border-primary-300/20 pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12">
        <Container>
          <div className="mx-auto max-w-[calc(var(--container-max)*0.9)]">
            <div className="service-section-reveal text-center">
              <p className="type-overline text-primary">Category</p>
              <h2 className="mt-3 type-h2 text-foreground">Choose the right glass for your space</h2>
              <p className="mx-auto mt-4 max-w-3xl type-body sm:text-[length:var(--text-body-lg)] text-foreground/[var(--opacity-muted)]">
               From reliable double glazing to high-performance vacuum glass, we provide solutions that improve insulation, reduce noise, and increase energy efficiency.
              </p>
              <div className="mx-auto mt-5 h-px w-full max-w-3xl bg-primary-300/35" />
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
              {serviceCategories.map((item, index) => (
                <div key={item.title} className="service-section-reveal">
                  <CardShell className="overflow-hidden rounded-[2rem] border border-primary-300/20 bg-white p-0 shadow-[var(--shadow-md-val)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[16/10.5] w-full object-cover"
                      loading="lazy"
                    />
                  </CardShell>
                  <div className="pt-4 text-center">
                    <p className="type-overline text-primary">Type {index + 1}</p>
                    <p className="mt-2 text-[length:var(--text-body-lg)] font-semibold text-foreground">{item.title}</p>
                    <p className="mx-auto mt-2 max-w-md text-[length:var(--text-body-sm)] text-foreground/[var(--opacity-muted)]">{item.description}</p>
                    <div className="mt-5 flex justify-center">
                      <LinkButton to={item.link} variant="primary-outline" size="sm">
                        Learn more
                      </LinkButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="none" background="white" className="glance-section-trigger border-b border-primary-300/20 pb-[var(--section-spacing-md)] pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="glance-section-reveal text-center">
              <p className="type-overline text-primary">Projects</p>
              <h2 className="mt-3 type-h2 text-foreground">Our work at a glance</h2>
              <p className="mx-auto mt-4 max-w-3xl type-body sm:text-[length:var(--text-body-lg)] text-foreground/[var(--opacity-muted)]">
                Explore a few retrofit transformations and compare how upgraded glazing improves comfort, clarity, and finish.
              </p>
              <div className="mx-auto mt-5 h-px w-full max-w-3xl bg-primary-300/35" />
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:gap-10">
              {workAtGlanceItems.map((project, index) => (
                <BeforeAfterCard
                  key={`${project.id}-${index}`}
                  title={project.title}
                  location={project.location}
                  beforeImage={project.fallbackBefore}
                  afterImage={project.fallbackAfter}
                />
              ))}
            </div>

            <div className="glance-section-reveal mt-10 flex justify-center">
              <LinkButton to="/projects" variant="primary-outline" size="default">
                Explore more
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      <TestimonialsSection
        label="Reviews"
        title="What clients say after retrofit upgrades"
        testimonials={reviewItems.map((item) => ({
          quote: item.quote,
          name: item.person,
          rating: 5,
        }))}
        background="light"
      />

      <CTASection
        label={cta.label}
        title={cta.title}
        subtitle={cta.subtitle}
        primaryCta={cta.primaryCta}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
      />

      <Section background="white">
        <Container>
          <Heading
            label="FAQ"
            title="Answers to common double glazing questions"
            level="h2"
          />
          <Accordion
            className="mt-8"
            items={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
          />
        </Container>
      </Section>

      <Section background="light">
        <Container>
          <Heading
            label={contactPreview.label}
            title={contactPreview.title}
            subtitle={contactPreview.subtitle}
            level="h2"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.35fr]">
            <div className="space-y-6">
              <CardShell>
                <p className="type-label text-black/55">Direct Contact</p>
                <div className="mt-4 space-y-3 type-body text-black/78">
                  <p>
                    Phone:{' '}
                    <a className="font-medium hover:underline" href={primaryPhoneHref}>
                      {COMPANY.phone}
                    </a>{' '}
                    /{' '}
                    <a className="font-medium hover:underline" href={`tel:${COMPANY.phoneAlt.replace(/\s/g, '')}`}>
                      {COMPANY.phoneAlt}
                    </a>
                  </p>
                  <p>
                    Email:{' '}
                    <a className="font-medium hover:underline" href={`mailto:${COMPANY.email}`}>
                      {COMPANY.email}
                    </a>
                  </p>
                  <p>Warehouse: {COMPANY.address}</p>
                </div>
              </CardShell>

              <CardShell>
                <p className="type-label text-black/55">Primary Service Areas</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {serviceAreas.map((area) => (
                    <Badge key={area} variant="outline">{area}</Badge>
                  ))}
                </div>
              </CardShell>
            </div>

            <CardShell>
              <p className="type-label text-black/55">Free Quote Form</p>
              <ContactForm className="mt-5" />
            </CardShell>
          </div>
        </Container>
      </Section>
    </div>
  )
}
