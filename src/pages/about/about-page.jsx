import { ABOUT_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { CardShell } from '@/shared/components/ui/card-shell'
import { BenefitsSection } from '@/shared/components/sections/benefits-section'
import { CTASection } from '@/shared/components/sections/cta-section'

export function AboutPage() {
  const { highlights } = ABOUT_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  return (
    <>
      <Section background="light" className="pt-28 sm:pt-32">
        <Container>
          <Heading
            label="About Us"
            title="Everest Double Glazing brings warmth, quiet, and sophistication to Canberra homes."
            level="h1"
            maxWidth="max-w-5xl"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
            <CardShell>
              <p className="type-body-lg text-black/75">
                We are a Canberra-based team delivering premium retrofit double-glazing solutions using
                Australian-made products. Local sourcing means faster lead times, stronger quality
                control, and better value for homeowners.
              </p>
              <p className="mt-4 type-body-lg text-black/75">
                With over 5 years of glazing experience, we combine craftsmanship and practical design
                thinking to upgrade comfort, reduce outside noise, and improve everyday energy
                efficiency.
              </p>
            </CardShell>

            <CardShell>
              <p className="type-label text-black/55">Mission</p>
              <p className="mt-2 type-body text-black/75">
                Deliver practical, premium retrofit glazing solutions that improve comfort, efficiency,
                and long-term property value.
              </p>
              <p className="mt-5 type-label text-black/55">Vision</p>
              <p className="mt-2 type-body text-black/75">
                Expand trusted retrofit services across ACT, NSW, and Victoria while maintaining honest
                pricing and high workmanship standards.
              </p>
            </CardShell>
          </div>
        </Container>
      </Section>

      <BenefitsSection
        label="Highlights"
        title="What clients can expect from our team"
        benefits={highlights.map((highlight) => ({ title: highlight }))}
        background="white"
      />

      <CTASection
        label="Talk to us"
        title="Planning a retrofit upgrade?"
        subtitle="Our team can inspect your current frames and provide a clear recommendation."
        primaryCta={{ label: 'Get Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
      />
    </>
  )
}
