import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { LinkButton } from '@/shared/components/ui/link-button'
import { cn } from '@/shared/lib/utils'

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
  background = 'primary-dark',
  spacing = 'lg',
  light = true,
  primaryVariant = 'white',
  secondaryVariant = 'outline-light',
  className,
}) {
  return (
    <Section background={background} spacing={spacing} className={cn('cta-gradient-animate', className)} style={{ backgroundImage: 'linear-gradient(135deg, var(--primary-800), oklch(0.22 0.03 220), var(--primary-800), oklch(0.18 0.02 230))' }}>
      <Container className="text-center">
        <div className="reveal">
          <Heading
            label={label}
            title={title}
            subtitle={subtitle}
            align="center"
            light={light}
          />
        </div>
        <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
          {primaryCta && (
            <LinkButton to={primaryCta.to} href={primaryCta.href} variant={primaryVariant} size="lg" className="hover-press">
              {primaryCta.label}
            </LinkButton>
          )}
          {secondaryCta && (
            <LinkButton
              to={secondaryCta.to}
              href={secondaryCta.href}
              variant={secondaryVariant}
              size="lg"
              className="hover-press"
            >
              {secondaryCta.label}
            </LinkButton>
          )}
        </div>
      </Container>
    </Section>
  )
}
