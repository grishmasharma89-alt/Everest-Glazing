import { forwardRef } from 'react'
import { cn } from '@/shared/lib/utils'

/**
 * Textarea — multiline text input with consistent styling.
 * Used for message fields in contact/quote forms.
 */
export const Textarea = forwardRef(function Textarea(
  { className, rows = 4, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        'flex w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition',
        'placeholder:text-muted-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
})
