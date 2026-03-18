import { memo } from 'react'
import { CardShell } from '@/shared/components/ui/card-shell'
import { Badge } from '@/shared/components/ui/badge'

/**
 * SpecCard — displays product specifications (U-Value, thickness, acoustic, etc.).
 * Memoized. Uses CardShell + Badge for labels.
 */
export const SpecCard = memo(function SpecCard({ name, specs, price, badge }) {
  return (
    <CardShell>
      <div className="mb-4 flex items-start justify-between gap-2">
        <h3 className="text-[length:var(--text-body-lg)] font-semibold">{name}</h3>
        {badge && <Badge variant="dark">{badge}</Badge>}
      </div>

      <ul className="space-y-2.5">
        {specs?.map((spec, idx) => (
          <li key={idx} className="flex justify-between text-[length:var(--text-body-sm)]">
            <span className="text-foreground/[var(--opacity-muted)]">{spec.label}</span>
            <span className="font-medium">{spec.value}</span>
          </li>
        ))}
      </ul>

      {price && (
        <p className="mt-5 border-t border-border pt-4 text-[length:var(--text-body-lg)] font-semibold">
          From ${price}
        </p>
      )}
    </CardShell>
  )
})
