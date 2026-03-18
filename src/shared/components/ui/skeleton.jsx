import { cn } from '@/shared/lib/utils'

/**
 * Skeleton — animated placeholder shown during loading.
 * Custom-built: block, text, image, card, section variants.
 */
export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-foreground/8', className)}
      aria-hidden="true"
      {...props}
    />
  )
}

/** Single line of text placeholder */
export function TextSkeleton({ lines = 3, className }) {
  return (
    <div className={cn('space-y-2.5', className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn('h-4', i === lines - 1 ? 'w-3/4' : 'w-full')}
        />
      ))}
    </div>
  )
}

/** Image placeholder with aspect ratio */
export function ImageSkeleton({ className }) {
  return (
    <Skeleton
      className={cn('aspect-[4/3] w-full rounded-xl', className)}
    />
  )
}

/** Full card placeholder (image + text) */
export function CardSkeleton({ className }) {
  return (
    <div className={cn('space-y-4 rounded-2xl border border-border bg-white p-4', className)} aria-hidden="true">
      <ImageSkeleton />
      <div className="space-y-3 px-1">
        <Skeleton className="h-5 w-2/3" />
        <TextSkeleton lines={2} />
      </div>
    </div>
  )
}

/** Full section placeholder (heading + grid of cards) */
export function SectionSkeleton({ cards = 3, className }) {
  return (
    <div className={cn('space-y-8', className)} aria-hidden="true">
      <div className="space-y-3">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-10 w-80 max-w-full" />
        <Skeleton className="h-5 w-96 max-w-full" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: cards }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
