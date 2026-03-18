import { Link } from 'react-router-dom'
import { cn } from '@/shared/lib/utils'

/**
 * LinkButton — styled anchor or router Link for CTA navigation.
 * Used everywhere a CTA link is needed that looks like a button: hero, CTA sections, cards.
 */
export function LinkButton({
  href,
  to,
  variant = 'default',
  size = 'default',
  className,
  children,
  external = false,
  ...props
}) {
  const styles = cn(
    'inline-flex items-center justify-center rounded-full font-medium tracking-[var(--tracking-button)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    variantMap[variant],
    sizeMap[size],
    className,
  )

  if (external && href) {
    return (
      <a
        href={href}
        className={styles}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to || '/'} className={styles} {...props}>
      {children}
    </Link>
  )
}

const variantMap = {
  default: 'bg-foreground text-background hover:bg-foreground/85',
  outline: 'border border-foreground text-foreground hover:bg-foreground hover:text-background',
  'outline-light': 'border border-white text-white hover:bg-white hover:text-black',
  white: 'bg-white text-foreground hover:bg-white/90',
  ghost: 'text-foreground hover:bg-accent',
}

const sizeMap = {
  sm: 'h-9 px-4 text-[length:var(--text-overline)]',
  default: 'h-11 px-6 text-[length:var(--text-body-sm)]',
  lg: 'h-12 px-8 text-[length:var(--text-body-sm)]',
}
