import { cn } from '@/shared/lib/utils'

/**
 * Section — semantic section wrapper with consistent vertical spacing.
 * Accepts background color variants. Used to wrap every page section.
 */
export function Section({
  className,
  as,
  spacing = 'default',
  background = 'default',
  ...props
}) {
  const Comp = as || 'section'
  return (
    <Comp
      className={cn(
        spacingMap[spacing],
        backgroundMap[background],
        className,
      )}
      {...props}
    />
  )
}

const spacingMap = {
  none: '',
  sm: 'py-[var(--section-spacing-sm)]',
  default: 'py-[var(--section-spacing-md)]',
  lg: 'py-[var(--section-spacing-lg)]',
}

const backgroundMap = {
  default: '',
  white: 'bg-white',
  light: 'bg-surface-sunken',
  dark: 'bg-surface-dark text-white',
  black: 'bg-black text-white',
}
