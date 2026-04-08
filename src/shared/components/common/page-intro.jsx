import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

/**
 * PageIntro — cinematic opening curtain animation.
 * Two panels slide apart revealing the page, with a brand accent line.
 * Plays once per session using sessionStorage.
 */
export function PageIntro({ children }) {
  const overlayRef = useRef(null)
  const [isDone, setIsDone] = useState(() => {
    try { return sessionStorage.getItem('everest-intro-done') === '1' }
    catch { return false }
  })

  useEffect(() => {
    if (isDone || !overlayRef.current) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsDone(true)
      try { sessionStorage.setItem('everest-intro-done', '1') } catch {}
      return undefined
    }

    // Lock scroll during intro
    document.body.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete() {
          setIsDone(true)
          document.body.style.overflow = ''
          try { sessionStorage.setItem('everest-intro-done', '1') } catch {}
        },
      })

      // Accent line draws in
      tl.fromTo(
        '.intro-accent',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: 'power3.inOut' },
        0,
      )

      // Hold briefly
      tl.to({}, { duration: 0.3 })

      // Panels slide apart
      tl.to('.intro-panel-left', {
        xPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut',
      }, '>')
      tl.to('.intro-panel-right', {
        xPercent: 100,
        duration: 0.9,
        ease: 'power4.inOut',
      }, '<')

      // Accent fades
      tl.to('.intro-accent', {
        autoAlpha: 0,
        duration: 0.3,
        ease: 'power2.in',
      }, '<0.4')
    }, overlayRef)

    return () => {
      ctx.revert()
      document.body.style.overflow = ''
    }
  }, [isDone])

  if (isDone) return children

  return (
    <>
      {children}
      <div ref={overlayRef} className="fixed inset-0 z-[100] pointer-events-none">
        {/* Left panel */}
        <div className="intro-panel-left absolute inset-y-0 left-0 w-1/2 bg-surface-dark" />
        {/* Right panel */}
        <div className="intro-panel-right absolute inset-y-0 right-0 w-1/2 bg-surface-dark" />
        {/* Center accent line */}
        <div
          className="intro-accent absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 -translate-y-1/2 origin-center bg-primary"
        />
      </div>
    </>
  )
}
