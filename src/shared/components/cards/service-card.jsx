import { memo } from 'react'
import { CardShell } from '@/shared/components/ui/card-shell'
import { LinkButton } from '@/shared/components/ui/link-button'
import { cn } from '@/shared/lib/utils'

/**
 * ServiceCard — displays a single service offering.
 * Memoized for grid lists. Uses CardShell and LinkButton.
 */
export const ServiceCard = memo(function ServiceCard({
  title,
  description,
  icon,
  image,
  link,
  className,
}) {
  return (
    <CardShell hover className={cn(className)}>
      {image && (
        <img src={image} alt={title} className="mb-4 h-44 w-full rounded-xl object-cover" loading="lazy" />
      )}
      {icon && (
        <img src={icon} alt="" width={48} height={48} className="mb-4 h-12 w-12" />
      )}
      <h3 className="text-[length:var(--text-body-lg)] font-semibold">{title}</h3>
      {description && (
        <p className="mt-2 text-[length:var(--text-body-sm)] leading-[var(--leading-body)] text-foreground/[var(--opacity-muted)]">{description}</p>
      )}
      {link && (
        <LinkButton to={link} variant="ghost" size="sm" className="mt-4 -ml-4">
          Learn more →
        </LinkButton>
      )}
    </CardShell>
  )
})
