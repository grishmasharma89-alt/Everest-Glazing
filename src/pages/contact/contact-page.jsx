import { CONTACT_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { CardShell } from '@/shared/components/ui/card-shell'
import { ContactForm } from '@/shared/components/sections/contact-form'
import { useScrollReveal } from '@/shared/hooks/use-scroll-reveal'

export function ContactPage() {
  const scopeRef = useScrollReveal()
  const { trustItems } = CONTACT_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  return (
    <div ref={scopeRef}>
      <Section spacing="none" background="white" className="min-h-[100dvh] pt-16 sm:pt-20">
        <Container className="max-w-none px-4 sm:px-6 lg:px-10">
          <div className="pb-8 sm:pb-10">
            <div className="text-center">
              <p className="type-overline text-primary">Contact</p>
              <h1 className="mt-3 text-6xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
                Let&apos;s plan your glazing upgrade
              </h1>
              <p className="mx-auto mt-5 max-w-5xl text-xl leading-relaxed text-foreground/72 sm:text-2xl">
                Tell us about your home and comfort goals. We&apos;ll provide practical recommendations,
                clear next steps, and transparent quote guidance.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {['Free Measure & Quote', 'AS1288 Compliant', '10-Year Warranty'].map((pill) => (
                  <span key={pill} className="rounded-full border border-primary-300/30 bg-primary/5 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary sm:text-base">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <CardShell className="mt-8 overflow-hidden rounded-[2rem] border border-primary-300/20 bg-white p-0 shadow-[var(--shadow-lg-val)]">
              <div className="grid min-h-[calc(100dvh-17rem)] lg:grid-cols-[1fr_1.9fr]">
                <aside className="relative overflow-hidden bg-primary p-8 text-white sm:p-10 lg:p-12">
                  <div className="relative z-10">
                    <p className="text-4xl font-semibold leading-tight sm:text-5xl">Contact Information</p>
                    <p className="mt-4 text-xl leading-relaxed text-white/88 sm:text-2xl">
                      Reach us directly and we will guide you to the fastest next step for your project.
                    </p>

                    <div className="mt-9 space-y-6 text-xl text-white/95 sm:text-2xl">
                      <p>
                        Phone:{' '}
                        <a className="font-medium text-white hover:underline" href={primaryPhoneHref}>
                          {COMPANY.phone}
                        </a>{' '}
                        /{' '}
                        <a className="font-medium text-white hover:underline" href={`tel:${COMPANY.phoneAlt.replace(/\s/g, '')}`}>
                          {COMPANY.phoneAlt}
                        </a>
                      </p>
                      <p>
                        Email:{' '}
                        <a className="font-medium text-white hover:underline" href={`mailto:${COMPANY.email}`}>
                          {COMPANY.email}
                        </a>
                      </p>
                      <p>Website: {COMPANY.website}</p>
                      <p>Warehouse: {COMPANY.address}</p>
                    </div>

                    <div className="mt-10 border-t border-white/25 pt-6">
                      <p className="text-sm font-semibold tracking-[0.2em] text-white/80 sm:text-base">TRUST</p>
                      <div className="mt-4 space-y-3 text-lg text-white/90 sm:text-xl">
                        {trustItems.map((item) => (
                          <p key={item}>• {item}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-[1px]" />
                </aside>

                <div className="bg-white p-8 sm:p-10 lg:p-14">
                  <p className="text-sm font-semibold tracking-[0.2em] text-black/55 sm:text-base">CONTACT FORM</p>
                  <p className="mt-3 text-lg text-foreground/62 sm:text-xl">
                    Submissions are sent directly to our team email.
                  </p>
                  <ContactForm className="mt-6" />
                </div>
              </div>
            </CardShell>
          </div>
        </Container>
      </Section>
    </div>
  )
}
