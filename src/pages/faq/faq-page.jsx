import { FAQ_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { Accordion } from '@/shared/components/ui/accordion'
import { CTASection } from '@/shared/components/sections/cta-section'

export function FaqPage() {
  const { faqs } = FAQ_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  return (
    <>
      <Section background="white" className="pt-28 sm:pt-32">
        <Container>
          <Heading
            label="FAQ"
            title="Frequently asked questions about retrofit double glazing"
            level="h1"
            maxWidth="max-w-4xl"
          />
        </Container>
      </Section>

      <Section background="white" className="pt-0">
        <Container>
          <Accordion
            items={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
          />
        </Container>
      </Section>

      <CTASection
        label="Still unsure?"
        title="Talk to our team about your specific windows"
        subtitle="We can inspect your current setup and provide a practical recommendation."
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
      />
    </>
  )
}
