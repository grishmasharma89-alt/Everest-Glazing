import { forwardRef } from 'react'
import { cn } from '@/shared/lib/utils'

/**
 * Select — native dropdown with consistent styling.
 * Used for service type, suburb selectors in forms.
 */
export const Select = forwardRef(function Select(
  { className, children, ...props },
  ref,
) {
  return (
    <select
      ref={ref}
      className={cn(
        'flex h-11 w-full appearance-none rounded-lg border border-input bg-background px-4 text-[length:var(--text-body-sm)] transition',
        'text-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
})
