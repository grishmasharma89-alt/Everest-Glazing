import { cn } from '@/shared/lib/utils'

/**
 * Heading — heading block with optional subtitle/label.
 * Enforces consistent heading hierarchy and spacing across all pages.
 *
 * Typography roles:
 *   label    → type-overline (0.75rem, uppercase, wide tracking)
 *   title    → type-h2 by default, override via `level` prop
 *   subtitle → type-body, responsive to type-body-lg
 *
 * Props:
 *   level     — 'h1' | 'h2' | 'h3' controls both the HTML tag (unless `as` is set) and size
 *   as        — override HTML tag independently from size
 *   light     — use light text colors (for dark backgrounds)
 *   align     — 'left' | 'center'
 *   maxWidth  — constrain title width (e.g. 'max-w-5xl')
 */
export function Heading({
  label,
  title,
  subtitle,
  as,
  level = 'h2',
  align = 'left',
  className,
  titleClassName,
  maxWidth,
  light = false,
}) {
  const TitleTag = as || level
  return (
    <div className={cn(alignMap[align], className)}>
      {label && (
        <p
          className={cn(
            'type-overline',
            light ? 'text-primary-300' : 'text-primary',
          )}
        >
          {label}
        </p>
      )}
      <TitleTag
        className={cn(
          'mt-3',
          levelMap[level],
          align === 'center' && 'mx-auto',
          maxWidth,
          titleClassName,
        )}
      >
        {title}
      </TitleTag>
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-2xl type-body sm:text-[length:var(--text-body-lg)]',
            light ? 'text-white/75' : 'text-foreground/[var(--opacity-muted)]',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

const alignMap = {
  left: 'text-left',
  center: 'text-center',
}

const levelMap = {
  h1: 'type-h1',
  h2: 'type-h2',
  h3: 'type-h3',
}
