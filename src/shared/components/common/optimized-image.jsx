import { memo, useCallback, useState } from 'react'
import { cn } from '@/shared/lib/utils'

/**
 * OptimizedImage — lazy-loaded image with blur-up fade-in effect.
 * Handles loading state, error fallback, responsive srcSet.
 * Memoized to prevent re-renders in card lists.
 */
export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
  loading = 'lazy',
  objectFit = 'cover',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => setIsLoaded(true), [])
  const handleError = useCallback(() => setHasError(true), [])

  if (hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground',
          wrapperClassName,
        )}
        role="img"
        aria-label={alt}
      >
        <span className="type-overline">Image unavailable</span>
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-foreground/5" aria-hidden="true" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-500',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className,
        )}
        {...props}
      />
    </div>
  )
})
