import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { LinkButton } from '@/shared/components/ui/link-button'

/**
 * CTASection — full-width call-to-action with dark background.
 * Used at the bottom of most pages to drive contact/quote conversions.
 */
export function CTASection({
  label,
  title = 'Ready to Get Started?',
  subtitle,
  primaryCta = { label: 'Get a Free Quote', to: '/contact' },
  secondaryCta,
}) {
  return (
    <Section background="black" spacing="lg">
      <Container className="text-center">
        <Heading
          label={label}
          title={title}
          subtitle={subtitle}
          align="center"
          light
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {primaryCta && (
            <LinkButton to={primaryCta.to} href={primaryCta.href} variant="white" size="lg">
              {primaryCta.label}
            </LinkButton>
          )}
          {secondaryCta && (
            <LinkButton
              to={secondaryCta.to}
              href={secondaryCta.href}
              variant="outline-light"
              size="lg"
            >
              {secondaryCta.label}
            </LinkButton>
          )}
        </div>
      </Container>
    </Section>
  )
}
