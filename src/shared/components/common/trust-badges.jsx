import { memo } from 'react'
import { TRUST_BADGES } from '@/shared/lib/constants'
import { cn } from '@/shared/lib/utils'

const ICONS = {
  'Fully Insured': '🛡️',
  'AS1288 Compliant': '✓',
  'Australian Standard Glass': '🇦🇺',
  '10-Year Written Warranty': '⭐',
  'Completion Certificate Provided': '📋',
}

/**
 * TrustBadges — horizontal strip of trust indicators.
 * Pulls data from constants. Supports light variant for dark backgrounds.
 */
export const TrustBadges = memo(function TrustBadges({ className, light = false, items = TRUST_BADGES }) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {items.map((label) => (
        <div
          key={label}
          className={cn(
            'flex items-center gap-2 rounded-full px-4 py-2 text-[length:var(--text-caption)] font-medium uppercase tracking-[var(--tracking-wide)]',
            light
              ? 'border border-white/15 bg-white/8 text-white/85'
              : 'border border-border bg-secondary text-foreground/75',
          )}
        >
          <span aria-hidden="true">{ICONS[label] || '✓'}</span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
})
