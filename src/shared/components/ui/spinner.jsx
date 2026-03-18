import { cn } from '@/shared/lib/utils'

/**
 * Spinner — simple CSS-only loading indicator.
 * Used inline or as page-level loader. No external dependency.
 */
export function Spinner({ className, size = 'default', ...props }) {
  return (
    <span
      className={cn(
        'inline-block animate-spin rounded-full border-2 border-current border-t-transparent',
        sizeMap[size],
        className,
      )}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </span>
  )
}

const sizeMap = {
  sm: 'h-4 w-4',
  default: 'h-6 w-6',
  lg: 'h-8 w-8',
}
