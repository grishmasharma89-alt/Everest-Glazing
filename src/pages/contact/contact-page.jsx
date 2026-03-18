import { CONTACT_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { CardShell } from '@/shared/components/ui/card-shell'
import { TrustBadges } from '@/shared/components/common/trust-badges'
import { ContactForm } from '@/shared/components/sections/contact-form'
import { CTASection } from '@/shared/components/sections/cta-section'

export function ContactPage() {
  const { trustItems } = CONTACT_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  return (
    <>
      <Section background="light" className="pt-28 sm:pt-32">
        <Container>
          <Heading
            label="Contact / Free Quote"
            title="Get a clear quote for retrofit double glazing in Canberra and ACT"
            subtitle="Tell us about your windows and we will provide a practical recommendation and transparent pricing."
            level="h1"
            maxWidth="max-w-5xl"
          />
        </Container>
      </Section>

      <Section background="light" className="pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
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
                  <p>Website: {COMPANY.website}</p>
                  <p>Warehouse: {COMPANY.address}</p>
                </div>
              </CardShell>

              <CardShell>
                <p className="type-label text-black/55">Trust and Compliance</p>
                <TrustBadges className="mt-4" items={trustItems} />
              </CardShell>
            </div>

            <CardShell>
              <p className="type-label text-black/55">Free Quote Form</p>
              <ContactForm className="mt-5" />
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
      />
    </>
  )
}
