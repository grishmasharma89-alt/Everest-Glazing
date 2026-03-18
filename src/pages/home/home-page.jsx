import { HOME_CONTENT, FAQ_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { HeroSection } from '@/shared/components/sections/hero-section'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { ServiceCard } from '@/shared/components/cards/service-card'
import { BenefitsSection } from '@/shared/components/sections/benefits-section'
import { SpecCard } from '@/shared/components/cards/spec-card'
import { CardShell } from '@/shared/components/ui/card-shell'
import { TrustBadges } from '@/shared/components/common/trust-badges'
import { TestimonialsSection } from '@/shared/components/sections/testimonials-section'
import { Accordion } from '@/shared/components/ui/accordion'
import { CTASection } from '@/shared/components/sections/cta-section'
import { ContactForm } from '@/shared/components/sections/contact-form'
import { Badge } from '@/shared/components/ui/badge'

export function HomePage() {
  const {
    hero,
    showcaseItems,
    benefits,
    technicalHighlight,
    trustSection,
    reviewItems,
    serviceAreas,
    cta,
    contactPreview,
  } = HOME_CONTENT
  const { faqs } = FAQ_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  return (
    <>
      <HeroSection
        label={hero.label}
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        primaryCta={hero.primaryCta}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
        trustItems={hero.trustItems}
        className="pt-20"
      />

      <Section background="white">
        <Container>
          <Heading
            label="Services"
            title="Glazing services built for existing homes"
            subtitle="From retrofit double glazing to specialty glass upgrades, we deliver practical solutions with minimal disruption."
            level="h2"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {showcaseItems.map((item) => (
              <ServiceCard
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
        </Container>
      </Section>

      <BenefitsSection
        label="Benefits"
        title="Why homeowners choose Everest Double Glazing"
        subtitle="Retrofit your existing windows and get year-round comfort without replacing your frames."
        benefits={benefits}
        columns={4}
        background="light"
      />

      <Section background="white">
        <Container>
          <Heading
            label={technicalHighlight.label}
            title={technicalHighlight.title}
            subtitle={technicalHighlight.subtitle}
            level="h2"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <SpecCard
              name={technicalHighlight.buildSpec.name}
              badge={technicalHighlight.buildSpec.badge}
              specs={technicalHighlight.buildSpec.specs}
            />
            <SpecCard
              name="Performance Outcomes"
              specs={technicalHighlight.outcomes.map((item) => ({
                label: 'Outcome',
                value: item,
              }))}
            />
          </div>
        </Container>
      </Section>

      <Section background="dark">
        <Container>
          <Heading
            label={trustSection.label}
            title={trustSection.title}
            subtitle={trustSection.subtitle}
            level="h2"
            light
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <CardShell variant="dark">
              <div className="grid gap-4 sm:grid-cols-2">
                {trustSection.stats.map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/12 bg-white/3 p-4">
                    <p className="type-h3">{item.value}</p>
                    <p className="mt-2 type-label text-white/70">{item.label}</p>
                  </div>
                ))}
              </div>
            </CardShell>

            <CardShell variant="dark">
              <p className="type-label text-white/70">Proof Points</p>
              <TrustBadges className="mt-4" items={trustSection.trustItems} light />
              <div className="mt-6 flex flex-wrap gap-2.5">
                {serviceAreas.slice(0, 6).map((area) => (
                  <Badge key={area} variant="light">{area}</Badge>
                ))}
              </div>
            </CardShell>
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
    </>
  )
}
