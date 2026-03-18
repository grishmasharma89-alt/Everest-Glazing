import { cn } from '@/shared/lib/utils'

/**
 * Badge — small label/tag pill used for trust indicators, categories, status.
 * Reused across cards, headers, trust sections, spec labels.
 */
export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 type-overline tracking-[var(--tracking-wide)]',
        variantMap[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

const variantMap = {
  default: 'border border-border bg-secondary text-secondary-foreground',
  dark: 'bg-foreground text-background',
  outline: 'border border-foreground/20 text-foreground/75',
  light: 'border border-white/20 bg-white/10 text-white',
  success: 'border border-green-200 bg-green-50 text-green-800',
}
