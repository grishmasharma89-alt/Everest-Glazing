import { Container } from '@/shared/components/ui/container'
import { LinkButton } from '@/shared/components/ui/link-button'
import { Badge } from '@/shared/components/ui/badge'
import { cn } from '@/shared/lib/utils'

/**
 * HeroSection — full-width hero with background image, headline, subtitle, CTAs.
 * Used on Home and landing pages. Supports dark overlayed content.
 */
export function HeroSection({
  label,
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
  trustItems = [],
  className,
  minHeight = 'min-h-[85vh]',
}) {
  return (
    <section className={cn('relative overflow-hidden bg-foreground', minHeight, className)}>
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        </>
      )}

      <Container className={cn('relative z-10 flex items-end pb-16 sm:pb-20', minHeight)}>
        <div className="max-w-3xl text-white">
          {label && (
            <p className="type-overline text-white/70">
              {label}
            </p>
          )}
          <h1 className="type-h1">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl type-body text-white/80 sm:text-[length:var(--text-body-lg)]">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
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
          )}
          {trustItems.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2.5">
              {trustItems.map((item) => (
                <Badge key={item} variant="light">{item}</Badge>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
