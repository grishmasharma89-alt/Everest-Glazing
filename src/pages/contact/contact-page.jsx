import { CONTACT_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { CardShell } from '@/shared/components/ui/card-shell'
import { ContactForm } from '@/shared/components/sections/contact-form'
import { CTASection } from '@/shared/components/sections/cta-section'

export function ContactPage() {
  const { trustItems } = CONTACT_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  return (
    <>
      <Section spacing="none" background="white" className="pt-20 sm:pt-20">
        <Container>
          <div className="rounded-[2.25rem] bg-surface-sunken/70 px-5 pb-7 pt-8 shadow-sm sm:px-8 sm:pb-10 sm:pt-10 lg:px-12 lg:pb-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="type-overline text-primary">Contact</p>
              <h1 className="mt-3 type-h2 text-foreground sm:type-h1">Get In Touch</h1>
              <p className="mx-auto mt-4 max-w-2xl type-body text-foreground/70">
                Tell us about your home and upgrade goals. We will provide a practical recommendation,
                clear next steps, and transparent quote guidance.
              </p>
            </div>

            <CardShell className="mt-10 overflow-hidden rounded-3xl border border-primary-300/20 bg-white p-0 shadow-lg">
              <div className="grid lg:grid-cols-[0.95fr_1.7fr]">
                <aside className="relative overflow-hidden bg-primary p-7 text-white sm:p-8">
                  <div className="relative z-10">
                    <p className="text-(length:--text-h5) font-semibold">Contact Information</p>
                    <p className="mt-3 text-sm text-white/80">
                      Reach us directly and we will guide you to the fastest next step for your project.
                    </p>

                    <div className="mt-8 space-y-4 text-sm text-white/90">
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

                    <div className="mt-8 border-t border-white/25 pt-5">
                      <p className="type-overline text-white/80">Trust</p>
                      <div className="mt-3 space-y-1.5 text-sm text-white/88">
                        {trustItems.map((item) => (
                          <p key={item}>• {item}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-[1px]" />
                </aside>

                <div className="bg-white p-7 sm:p-8 lg:p-9">
                  <p className="type-label text-black/55">Free Quote Form</p>
                  <ContactForm className="mt-5" />
                </div>
              </div>
            </CardShell>
          </div>
        </Container>
      </Section>

      <CTASection
        label="Urgent Requests"
        title="Need urgent replacement or repair support?"
        subtitle="Call us directly and we will guide you on the fastest next step."
        primaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
        secondaryCta={{ label: 'Submit Online Quote', to: '/contact' }}
        background="white"
        light={false}
        primaryVariant="primary"
        secondaryVariant="primary-outline"
      />
    </>
  )
}
