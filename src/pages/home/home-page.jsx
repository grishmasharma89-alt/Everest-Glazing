import { useCallback, useEffect, useRef, useState } from 'react'
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
import { LinkButton } from '@/shared/components/ui/link-button'
import { useScrollReveal } from '@/shared/hooks/use-scroll-reveal'

function BeforeAfterCard({ title, location, beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPosition((x / rect.width) * 100)
  }, [])

  const handlePointerDown = useCallback((e) => {
    isDragging.current = true
    containerRef.current?.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }, [updatePosition])

  const handlePointerMove = useCallback((e) => {
    if (!isDragging.current) return
    updatePosition(e.clientX)
  }, [updatePosition])

  const handlePointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <article className="reveal-scale">
      <div
        ref={containerRef}
        className="hover-lift relative overflow-hidden rounded-[1.9rem] bg-white shadow-[var(--shadow-md-val)] cursor-ew-resize touch-none select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <img
          src={beforeImage}
          alt={`${title} before`}
          className="aspect-[16/9.5] w-full object-cover reveal-image"
          width={800}
          height={475}
          loading="lazy"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={afterImage}
            alt={`${title} after`}
            className="h-full w-full object-cover"
            width={800}
            height={475}
            loading="lazy"
            draggable={false}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10"
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        >
          <div className="absolute inset-y-0 w-px bg-white/90" />
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/85 bg-white/95 text-primary shadow-[var(--shadow-md-val)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M5.5 3L1 9l4.5 6M12.5 3L17 9l-4.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
  const pageRef = useScrollReveal()
  const {
    editorialHero,
    showcaseItems,
    reviewItems,
    beforeAfterProjects,
    cta,
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

  const replayHeroAnimation = useCallback(() => {
    if (!pageRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const scope = pageRef.current
    const isMobile = window.innerWidth < 768

    // Reset hero elements to invisible then re-animate
    const heroEls = scope.querySelectorAll('.reveal-hero')
    const staggerParents = scope.querySelectorAll('.home-hero-shell .reveal-stagger')

    if (heroEls.length) {
      gsap.set(heroEls, { autoAlpha: 0, y: 70, ...(isMobile ? {} : { filter: 'blur(6px)' }) })
      gsap.to(heroEls, {
        y: 0,
        autoAlpha: 1,
        ...(isMobile ? {} : { filter: 'blur(0px)', clearProps: 'filter' }),
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.12,
        delay: 0.1,
      })
    }

    staggerParents.forEach((parent) => {
      gsap.set(parent.children, { autoAlpha: 0, y: 40, ...(isMobile ? {} : { filter: 'blur(3px)' }) })
      gsap.to(parent.children, {
        y: 0,
        autoAlpha: 1,
        ...(isMobile ? {} : { filter: 'blur(0px)', clearProps: 'filter' }),
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.3,
      })
    })
  }, [pageRef])

  useEffect(() => {
    if (!pageRef.current) return undefined

    gsap.registerPlugin(ScrollTrigger)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        // Hero background cinematic entrance — scale and fade in
        gsap.fromTo(
          '.home-hero-bg',
          { scale: 1.15, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 2, ease: 'power2.out', delay: 0.3 },
        )

        // Hero background parallax on scroll
        gsap.to('.home-hero-bg', {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: '.home-hero-shell',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        // Overlay gradient breathes in
        gsap.from('.home-hero-overlay', {
          autoAlpha: 0,
          duration: 1.8,
          ease: 'power2.inOut',
          delay: 0.2,
        })
      }
    }, pageRef)

    // Listen for logo-click scroll-to-top to replay hero
    const handleScrolledToTop = () => replayHeroAnimation()
    window.addEventListener('everest:scrolled-to-top', handleScrolledToTop)

    return () => {
      ctx.revert()
      window.removeEventListener('everest:scrolled-to-top', handleScrolledToTop)
    }
  }, [replayHeroAnimation])

  return (
    <div ref={pageRef}>
      <Section spacing="none" className="bg-white pb-14 pt-0">
        <div className="home-hero-shell relative overflow-hidden bg-surface-dark min-h-[88dvh] sm:min-h-[96dvh]">
          <div
            className="home-hero-bg absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url(${editorialHero.backgroundImage})` }}
          />
          <div className="home-hero-overlay absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, rgba(8,18,33,0.86) 0%, rgba(8,18,33,0.68) 38%, rgba(8,18,33,0.38) 64%, rgba(8,18,33,0.42) 100%)' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(70,161,194,0.18),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(255,255,255,0.06),transparent_24%)]" />

          <Container className="relative flex min-h-[88dvh] items-end pb-10 pt-28 sm:min-h-[96dvh] sm:pb-12 sm:pt-32 lg:pb-14 lg:pt-36">
            <div className="max-w-4xl text-white">
                <p className="reveal-hero type-overline text-primary-300">{editorialHero.kicker}</p>
                <h1 className="reveal-hero mt-4 max-w-4xl type-h1 text-white">Everest Double Glazing. Clear choice for comfort.</h1>
                <p className="reveal-hero mt-5 max-w-xl type-body sm:text-[length:var(--text-body-lg)] text-white/78">
                  Energy efficient retrofit glazing for Canberra homes with less disruption, better thermal comfort, and cleaner modern detailing.
                </p>

                <div className="reveal-hero mt-7 flex flex-wrap items-center gap-3">
                  <LinkButton to="/contact" variant="white" size="default" className="hover-press border border-white/18 bg-white/96 text-primary-800 hover:bg-white">
                    Get Free Quote
                  </LinkButton>
                  <LinkButton href={primaryPhoneHref} variant="outline-light" size="default" className="hover-press border-white/45 bg-white/6 backdrop-blur-sm">
                    Call {COMPANY.phone}
                  </LinkButton>
                </div>

                <div className="reveal-stagger mt-9 grid gap-3 grid-cols-1 min-[480px]:grid-cols-3">
                  {heroHighlights.map((item) => (
                    <CardShell key={item.label} className="hover-lift rounded-[1.1rem] border border-white/14 bg-white/8 p-4 text-white shadow-none backdrop-blur-sm">
                      <p className="reveal-counter text-[length:var(--text-body-lg)] font-semibold">{item.value}</p>
                      <p className="mt-2 type-overline text-primary-300">{item.label}</p>
                    </CardShell>
                  ))}
                </div>

                <div className="reveal-hero mt-8 flex flex-wrap items-center gap-5 border-t border-white/14 pt-5 text-white/72">
                  <p className="type-overline text-primary-300">{editorialHero.sequenceLabel}</p>
                  <p className="type-body text-white/72">{editorialHero.leadCaption}</p>
                </div>
              </div>
          </Container>
        </div>
      </Section>

      <Section background="light" className="border-y border-primary-300/20">
        <Container>
          <div className="mx-auto max-w-[calc(var(--container-max)*0.9)]">
            <div className="reveal text-center">
              <p className="type-overline text-primary">Category</p>
              <h2 className="mt-3 type-h2 text-foreground">Choose the right glass for your space</h2>
              <p className="mx-auto mt-4 max-w-3xl type-body sm:text-[length:var(--text-body-lg)] text-foreground/[var(--opacity-muted)]">
               From reliable double glazing to high-performance vacuum glass, we provide solutions that improve insulation, reduce noise, and increase energy efficiency.
              </p>
              <div className="reveal-line mx-auto mt-5 h-px w-full max-w-3xl bg-primary-300/35" />
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6 reveal-stagger">
              {serviceCategories.map((item, index) => (
                <div key={item.title}>
                  <CardShell className="hover-lift rounded-[2rem] border border-primary-300/20 bg-white p-0 shadow-[var(--shadow-md-val)] overflow-hidden">
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="aspect-[16/10.5] w-full object-cover reveal-image reveal-parallax hover-zoom"
                        width={800}
                        height={525}
                        loading="lazy"
                      />
                    </div>
                  </CardShell>
                  <div className="pt-4 text-center">
                    <p className="type-overline text-primary">Type {index + 1}</p>
                    <p className="mt-2 text-[length:var(--text-body-lg)] font-semibold text-foreground">{item.title}</p>
                    <p className="mx-auto mt-2 max-w-md text-[length:var(--text-body-sm)] text-foreground/[var(--opacity-muted)]">{item.description}</p>
                    <div className="mt-5 flex justify-center">
                      <LinkButton to={item.link} variant="primary-outline" size="sm" className="hover-press">
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

      <Section background="white" className="border-b border-primary-300/20">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="reveal text-center">
              <p className="type-overline text-primary">Projects</p>
              <h2 className="mt-3 type-h2 text-foreground">Our work at a glance</h2>
              <p className="mx-auto mt-4 max-w-3xl type-body sm:text-[length:var(--text-body-lg)] text-foreground/[var(--opacity-muted)]">
                Explore a few retrofit transformations and compare how upgraded glazing improves comfort, clarity, and finish.
              </p>
              <div className="reveal-line mx-auto mt-5 h-px w-full max-w-3xl bg-primary-300/35" />
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

            <div className="reveal-scale mt-10 flex justify-center">
              <LinkButton to="/projects" variant="primary-outline" size="default" className="hover-press">
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
    </div>
  )
}
