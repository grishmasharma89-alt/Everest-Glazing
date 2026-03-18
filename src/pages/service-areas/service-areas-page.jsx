import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { SERVICE_AREAS_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'

export function ServiceAreasPage() {
  const { coreAreas, regionBlocks, travelHighlights } = SERVICE_AREAS_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`
  const pageRef = useRef(null)

  useEffect(() => {
    if (!pageRef.current) return undefined

    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.from('.areas-hero-reveal', {
        y: 70,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
      })

      gsap.fromTo(
        '.areas-hero-bg',
        { scale: 1.13, yPercent: -10 },
        {
          scale: 1,
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: '.areas-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        },
      )

      gsap.from('.area-tile-reveal', {
        y: 56,
        autoAlpha: 0,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.area-grid',
          start: 'top 84%',
        },
      })

      gsap.utils.toArray('.region-card').forEach((card, index) => {
        const image = card.querySelector('[data-region-image]')

        gsap.from(card, {
          y: 72,
          autoAlpha: 0,
          duration: 0.95,
          ease: 'power3.out',
          delay: index * 0.07,
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
          },
        })

        if (image) {
          gsap.fromTo(
            image,
            { yPercent: -12, scale: 1.08 },
            {
              yPercent: 12,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          )
        }
      })

      gsap.from('.travel-reveal', {
        y: 48,
        autoAlpha: 0,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: '.travel-section',
          start: 'top 84%',
        },
      })
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <div className="bg-surface-sunken pt-28 text-foreground sm:pt-32" ref={pageRef}>
      <section className="areas-hero relative min-h-[72vh] overflow-hidden bg-black text-white">
        <img
          alt="Service area background"
          className="areas-hero-bg absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2200&q=80"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(255,130,60,0.2),transparent_44%)]" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[var(--container-max)] flex-col justify-end px-[var(--container-px)] pb-14 lg:pb-18">
          <p className="areas-hero-reveal type-overline text-white/72">Service Areas</p>
          <h1 className="areas-hero-reveal mt-4 max-w-5xl type-h1">
            ACT and NSW coverage for retrofit double glazing projects.
          </h1>
          <p className="areas-hero-reveal mt-4 max-w-3xl text-[length:var(--text-body-lg)] leading-[var(--leading-body)] text-white/82">
            We service Canberra metro and selected NSW surrounds with planned, high-quality retrofit
            installations.
          </p>
        </div>
      </section>

      <section className="area-grid mx-auto max-w-[var(--container-max)] px-[var(--container-px)] py-12 lg:py-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {coreAreas.map((area, index) => (
            <article
              className={[
                'area-tile-reveal rounded-xl border border-black/12 bg-white p-4',
                index % 4 === 1 ? 'lg:-mt-2' : '',
              ].join(' ')}
              key={area.name}
            >
              <p className="text-[length:var(--text-body-sm)] font-semibold uppercase tracking-[var(--tracking-label)] text-black/86">{area.name}</p>
              <p className="mt-2 text-[length:var(--text-body-sm)] text-black/58">{area.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-max)] px-[var(--container-px)] pb-12 lg:pb-16">
        <div className="grid gap-5 lg:grid-cols-2">
          {regionBlocks.map((block, index) => (
            <article className={['region-card overflow-hidden rounded-2xl border border-black/12 bg-white', index === 1 ? 'lg:mt-10' : ''].join(' ')} key={block.title}>
              <div className="overflow-hidden">
                <img
                  alt={block.title}
                  className="h-64 w-full object-cover sm:h-72"
                  data-region-image
                  src={block.image}
                />
              </div>
              <div className="p-6">
                <h2 className="type-h3">
                  {block.title}
                </h2>
                <p className="mt-3 type-body text-black/72">{block.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="travel-section bg-surface-dark py-14 text-white sm:py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-px)]">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="travel-reveal type-overline text-white/70">Coverage Promise</p>
              <h2 className="travel-reveal mt-3 max-w-4xl type-h2">
                Local logistics, transparent lead times, and consistent quality.
              </h2>
              <div className="travel-reveal mt-5 grid gap-2 sm:grid-cols-2">
                {travelHighlights.map((item) => (
                  <div
                    className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-[length:var(--text-body-sm)] uppercase tracking-[var(--tracking-wide)] text-white/86"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="travel-reveal flex flex-wrap gap-3">
              <Link
                className="inline-flex rounded-full border border-white px-6 py-2.5 type-label tracking-[var(--tracking-wide)] transition hover:bg-white hover:text-black"
                to="/contact"
              >
                Request Service Visit
              </Link>
              <a
                className="inline-flex rounded-full border border-white/65 px-6 py-2.5 type-label tracking-[var(--tracking-wide)] transition hover:bg-white hover:text-black"
                href={primaryPhoneHref}
              >
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-10 bg-surface-sunken sm:h-14" />
    </div>
  )
}
