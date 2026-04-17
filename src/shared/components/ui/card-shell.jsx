import { cn } from '@/shared/lib/utils'

/**
 * CardShell — reusable card wrapper providing consistent border, radius, padding.
 * Used as the base for ServiceCard, TestimonialCard, BenefitCard, SpecCard, etc.
 */
export function CardShell({
  className,
  as,
  variant = 'default',
  hover = false,
  ...props
}) {
  const Comp = as || 'article'
  return (
    <Comp
      className={cn(
        'rounded-2xl',
        variantMap[variant],
        hover && 'transition-shadow duration-[var(--duration-normal)] hover:shadow-[var(--shadow-lg-val)]',
        className,
      )}
      {...props}
    />
  )
}

const variantMap = {
  default: 'border border-border bg-white p-[calc(1.5rem*0.95)]',
  ghost: 'p-[calc(1.5rem*0.95)]',
  dark: 'border border-white/12 bg-white/5 p-[calc(1.5rem*0.95)] text-white',
  flat: 'bg-secondary p-[calc(1.5rem*0.95)]',
}
