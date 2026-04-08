import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

/**
 * PageTransition — wraps page content and plays a fade/slide
 * transition whenever the route changes.
 */
export function PageTransition({ children }) {
  const location = useLocation()
  const wrapperRef = useRef(null)
  const [displayChildren, setDisplayChildren] = useState(children)
  const [displayLocation, setDisplayLocation] = useState(location)
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      gsap.fromTo(
        wrapperRef.current,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      )
      return
    }

    if (location.key === displayLocation.key) return

    // Animate out
    gsap.to(wrapperRef.current, {
      autoAlpha: 0,
      y: -8,
      duration: 0.25,
      ease: 'power2.in',
      onComplete() {
        setDisplayChildren(children)
        setDisplayLocation(location)
        // Animate in
        gsap.fromTo(
          wrapperRef.current,
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        )
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  // Keep children in sync when location hasn't changed (re-renders)
  useEffect(() => {
    if (location.key === displayLocation.key) {
      setDisplayChildren(children)
    }
  }, [children, location.key, displayLocation.key])

  return (
    <div ref={wrapperRef} style={{ willChange: 'transform, opacity' }}>
      {displayChildren}
    </div>
  )
}
