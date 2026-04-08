import { memo } from 'react'
import { CardShell } from '@/shared/components/ui/card-shell'

const STAR = '★'

/**
 * TestimonialCard — displays a customer review with rating, quote, and attribution.
 * Memoized for list rendering.
 */
export const TestimonialCard = memo(function TestimonialCard({
  quote,
  name,
  location,
  photo,
  rating,
}) {
  return (
    <CardShell className="hover-lift flex flex-col justify-between">
      {rating != null && (
        <div className="mb-3 flex gap-0.5 text-amber-400" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? '' : 'opacity-25'}>{STAR}</span>
          ))}
        </div>
      )}

      <blockquote className="flex-1 text-[length:var(--text-body-sm)] leading-[var(--leading-body)] text-foreground/75 sm:text-[length:var(--text-body)]">
        "{quote}"
      </blockquote>

      <div className="mt-5 flex items-center gap-3">
        {photo && (
          <img
            src={photo}
            alt={name}
            className="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
        )}
        <div>
          <p className="text-[length:var(--text-body-sm)] font-semibold">{name}</p>
          {location && <p className="text-[length:var(--text-caption)] text-foreground/[var(--opacity-subtle)]">{location}</p>}
        </div>
      </div>
    </CardShell>
  )
})
