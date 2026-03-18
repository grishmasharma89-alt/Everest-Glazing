import { cn } from '@/shared/lib/utils'

/**
 * FormField — label + input + error message wrapper.
 * Composes with Input, Textarea, Select for consistent form layout.
 */
export function FormField({ label, error, required, className, children }) {
  return (
    <div className={cn('grid gap-1.5', className)}>
      {label && (
        <label className="text-[length:var(--text-body-sm)] font-medium text-foreground">
          {label}
          {required && <span className="ml-0.5 text-destructive">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="text-[length:var(--text-overline)] text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
