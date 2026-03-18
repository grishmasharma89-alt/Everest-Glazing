import { memo } from 'react'
import { CardShell } from '@/shared/components/ui/card-shell'

/**
 * BenefitCard — displays a single benefit with optional icon.
 * Memoized for grid performance. Uses CardShell flat variant.
 */
export const BenefitCard = memo(function BenefitCard({ icon, title, description }) {
  return (
    <CardShell variant="flat">
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background">
          {typeof icon === 'string' ? (
            <img src={icon} alt="" className="h-6 w-6" />
          ) : (
            icon
          )}
        </div>
      )}
      <h3 className="text-[length:var(--text-body)] font-semibold">{title}</h3>
      {description && (
        <p className="mt-2 text-[length:var(--text-body-sm)] leading-[var(--leading-body)] text-foreground/[var(--opacity-muted)]">{description}</p>
      )}
    </CardShell>
  )
})
