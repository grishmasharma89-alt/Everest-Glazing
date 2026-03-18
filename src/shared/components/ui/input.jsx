import { forwardRef } from 'react'
import { cn } from '@/shared/lib/utils'

/**
 * Input — base text input with consistent styling.
 * Used standalone or inside FormField. Forwards ref for form libraries.
 */
export const Input = forwardRef(function Input(
  { className, type = 'text', ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        'flex h-11 w-full rounded-lg border border-input bg-background px-4 text-[length:var(--text-body-sm)] transition',
        'placeholder:text-muted-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
})
