import { cn } from '@/shared/lib/utils'

/**
 * FormField — label + input + error message wrapper.
 * Composes with Input, Textarea, Select for consistent form layout.
 */
export function FormField({ label, error, required, className, labelClassName, errorClassName, children }) {
  return (
    <div className={cn('grid gap-1.5', className)}>
      {label && (
        <label className={cn('text-[length:var(--text-body-sm)] font-medium text-foreground', labelClassName)}>
          {label}
          {required && <span className="ml-0.5 text-destructive">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className={cn('text-[length:var(--text-overline)] text-destructive', errorClassName)} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
