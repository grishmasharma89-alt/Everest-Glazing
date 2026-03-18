import { SERVICES_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { HeroSection } from '@/shared/components/sections/hero-section'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { SpecCard } from '@/shared/components/cards/spec-card'
import { ServiceCard } from '@/shared/components/cards/service-card'
import { BenefitsSection } from '@/shared/components/sections/benefits-section'
import { CTASection } from '@/shared/components/sections/cta-section'

export function ServicesPage() {
  const { additionalServices, servicePillars, glassSpecs } = SERVICES_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  return (
    <>
      <HeroSection
        image="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=2000&q=80"
        title="Double Glazing Retrofit Services Built for Canberra Conditions"
        subtitle="Upgrade your existing windows and doors with high-performance glazing without replacing the full frames."
        primaryCta={{ label: 'Get Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
        className="pt-20"
      />

      <Section background="light">
        <Container>
          <Heading
            label="Main Service"
            title="Double Glazing Retrofit for Existing Frames"
            subtitle="Lower cost than full replacement, faster installation, and less disruption to your property."
            level="h2"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <SpecCard
              name="Standard Retrofit Build"
              badge="Recommended"
              specs={[
                { label: 'Overall thickness', value: '16mm' },
                { label: 'Outer pane', value: '4mm toughened glass' },
                { label: 'Spacer', value: '8mm argon gas spacer' },
                { label: 'Inner pane', value: '4mm Low-E toughened glass' },
              ]}
            />
            <SpecCard
              name="Performance Outcome"
              specs={glassSpecs.map((item) => ({ label: 'Specification', value: item }))}
            />
          </div>
        </Container>
      </Section>

      <Section background="dark">
        <Container>
          <Heading
            label="Additional Services"
            title="Complete glazing support for repairs, privacy, and performance"
            level="h2"
            light
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </Container>
      </Section>

      <BenefitsSection
        label="Why Everest"
        title="Reliable, local, and quality-first service delivery"
        benefits={servicePillars.map((item) => ({ title: item }))}
        background="white"
      />

      <CTASection
        label="Free Quote"
        title="Book your free measure and quote today"
        subtitle="Tell us what you need and we will provide a practical recommendation with transparent pricing."
        primaryCta={{ label: 'Get Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
      />
    </>
  )
}
