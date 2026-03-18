import { useParams } from 'react-router-dom'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { CardShell } from '@/shared/components/ui/card-shell'
import { CTASection } from '@/shared/components/sections/cta-section'
import { COMPANY } from '@/shared/lib/constants'

/**
 * Individual Project Detail Page
 */
export function ProjectDetailPage() {
  const { slug } = useParams()
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  return (
    <>
      <Section background="white" className="pt-28 sm:pt-32">
        <Container>
          <Heading
            label="Project Detail"
            title={`Project: ${slug}`}
            subtitle="Detailed before/after breakdown, scope, and installation outcomes."
            level="h1"
          />
          <CardShell className="mt-8">
            <p className="type-body text-black/72">
              This route is ready for detailed project data wiring. It can be fed by a CMS or
              project JSON and rendered using the same card and section system.
            </p>
          </CardShell>
        </Container>
      </Section>

      <CTASection
        label="Your project"
        title="Want similar results at your property?"
        primaryCta={{ label: 'Get Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
      />
    </>
  )
}
