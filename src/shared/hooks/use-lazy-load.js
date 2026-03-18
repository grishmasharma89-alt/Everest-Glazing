import { useEffect, useRef } from 'react'

/**
 * Hook for lazy loading with Intersection Observer
 * Usage: const ref = useLazyLoad()
 */
export function useLazyLoad(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0')
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
      ...options,
    })

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [options])

  return ref
}
