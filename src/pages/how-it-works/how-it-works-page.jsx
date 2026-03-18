import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { HOW_IT_WORKS_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'

export function HowItWorksPage() {
  const { steps } = HOW_IT_WORKS_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`
  const pageRef = useRef(null)
  const [activeStep, setActiveStep] = useState(steps[0].id)

  useEffect(() => {
    if (!pageRef.current) return undefined

    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.from('.how-hero-reveal', {
        y: 68,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
      })

      gsap.utils.toArray('.story-step').forEach((stepElement) => {
        const image = stepElement.querySelector('[data-step-image]')
        const content = stepElement.querySelector('[data-step-content]')
        const stepId = stepElement.getAttribute('data-step-id')

        gsap.from(stepElement, {
          y: 84,
          autoAlpha: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepElement,
            start: 'top 82%',
          },
        })

        if (content) {
          gsap.from(content, {
            x: -36,
            autoAlpha: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepElement,
              start: 'top 78%',
            },
          })
        }

        if (image) {
          gsap.fromTo(
            image,
            { yPercent: -12, scale: 1.08 },
            {
              yPercent: 12,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: stepElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          )
        }

        ScrollTrigger.create({
          trigger: stepElement,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            if (stepId) setActiveStep(stepId)
          },
          onEnterBack: () => {
            if (stepId) setActiveStep(stepId)
          },
        })
      })
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <div className="bg-surface-sunken pt-28 text-foreground sm:pt-32" ref={pageRef}>
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--container-px)] py-12 lg:py-16">
        <p className="how-hero-reveal type-overline text-black/65">How It Works</p>
        <h1 className="how-hero-reveal mt-4 max-w-5xl type-h1">
          Simple and transparent retrofit process from start to finish.
        </h1>
        <p className="how-hero-reveal mt-5 max-w-3xl text-[length:var(--text-body-lg)] leading-[var(--leading-body)] text-black/72">
          Follow the full storyboard below. Each phase explains what happens, why it matters, and what
          you receive at the end of that step.
        </p>
      </section>

      <section className="mx-auto grid max-w-[var(--container-max)] gap-8 px-[var(--container-px)] pb-16 lg:grid-cols-[240px_1fr] lg:pb-20">
        <aside className="hidden lg:block">
          <div className="sticky top-32 rounded-2xl border border-black/12 bg-white p-5">
            <p className="text-[length:var(--text-overline)] uppercase tracking-[var(--tracking-label)] text-black/60">Story Progress</p>
            <div className="mt-4 grid gap-2">
              {steps.map((step) => (
                <div
                  className={[
                    'rounded-lg px-3 py-2 text-[length:var(--text-overline)] uppercase tracking-[var(--tracking-wide)] transition',
                    activeStep === step.id ? 'bg-black text-white' : 'bg-black/5 text-black/65',
                  ].join(' ')}
                  key={step.id}
                >
                  Step {step.id}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <article
              className="story-step grid gap-5 rounded-2xl border border-black/12 bg-white p-4 sm:p-5 lg:grid-cols-2 lg:gap-6 lg:p-6"
              data-step-id={step.id}
              key={step.id}
            >
              <div
                className={[
                  'overflow-hidden rounded-xl bg-black',
                  index % 2 === 1 ? 'lg:order-2' : '',
                ].join(' ')}
              >
                <img
                  alt={step.title}
                  className="h-72 w-full object-cover sm:h-80 lg:h-full"
                  data-step-image
                  src={step.image}
                />
              </div>
              <div className="flex flex-col justify-center space-y-3" data-step-content>
                <p className="text-[length:var(--text-overline)] uppercase tracking-[var(--tracking-label)] text-black/58">Step {step.id}</p>
                <h2 className="type-h3">
                  {step.title}
                </h2>
                <p className="type-body text-black/74">{step.text}</p>
                <p className="type-label tracking-[var(--tracking-wide)] text-black/62">{step.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="inline-flex rounded-full border border-black px-6 py-2.5 type-label tracking-[var(--tracking-wide)] transition hover:bg-black hover:text-white"
            to="/contact"
          >
            Get Free Quote
          </Link>
          <a
            className="inline-flex rounded-full border border-black/40 px-6 py-2.5 type-label tracking-[var(--tracking-wide)] transition hover:bg-black hover:text-white"
            href={primaryPhoneHref}
          >
            Call {COMPANY.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
