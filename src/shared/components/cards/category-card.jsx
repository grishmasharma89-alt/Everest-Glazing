import { memo } from 'react'
import { CardShell } from '@/shared/components/ui/card-shell'
import { Badge } from '@/shared/components/ui/badge'
import { LinkButton } from '@/shared/components/ui/link-button'
import { Check } from 'lucide-react'

export const CategoryCard = memo(function CategoryCard({
  title,
  label,
  summary,
  benefits,
  bestFor,
  image,
  cta,
}) {
  return (
    <CardShell
      hover
      className="flex flex-col overflow-hidden p-0"
    >
      <div className="relative">
        <img
          src={image}
          alt={`${title} — retrofit glazing solution`}
          className="aspect-[16/10] w-full object-cover"
          loading="lazy"
        />
        {label && (
          <Badge variant="dark" className="absolute top-4 left-4">
            {label}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="type-h4 text-foreground">{title}</h3>
        <p className="mt-2.5 type-body text-foreground/[var(--opacity-muted)]">
          {summary}
        </p>

        {benefits?.length > 0 && (
          <ul className="mt-5 space-y-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2.5 type-body-sm text-foreground/75"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        {bestFor && (
          <p className="mt-5 rounded-lg bg-surface-sunken px-4 py-2.5 type-body-sm text-foreground/70">
            <span className="font-medium text-foreground/85">Best for:</span>{' '}
            {bestFor}
          </p>
        )}

        {cta && (
          <div className="mt-6 pt-1">
            <LinkButton to={cta.to} href={cta.href} size="default">
              {cta.label}
            </LinkButton>
          </div>
        )}
      </div>
    </CardShell>
  )
})
