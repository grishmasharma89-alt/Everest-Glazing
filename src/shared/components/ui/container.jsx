import { cn } from '@/shared/lib/utils'

/**
 * Container — max-width wrapper with consistent horizontal padding.
 * Used on every page section to keep content aligned.
 */
export function Container({ className, as, ...props }) {
  const Comp = as || 'div'
  return (
    <Comp
      className={cn('mx-auto w-full max-w-[var(--container-max)] px-[var(--container-px)]', className)}
      {...props}
    />
  )
}
