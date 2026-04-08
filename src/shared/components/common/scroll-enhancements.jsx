import { useEffect, useRef, useState } from 'react'
import { smoothScrollToTop } from '@/shared/hooks/use-smooth-scroll'

/**
 * ScrollProgressBar — thin progress indicator at the very top of the viewport.
 * Uses requestAnimationFrame for buttery scroll tracking.
 */
export function ScrollProgressBar() {
  const barRef = useRef(null)

  useEffect(() => {
    let rafId = null

    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      if (barRef.current) {
        barRef.current.style.width = `${progress}%`
      }
    }

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={barRef} className="scroll-progress-bar" aria-hidden="true" />
}

/**
 * BackToTopButton — floating button that appears after scrolling past fold.
 * Uses Lenis smooth scroll to animate back up.
 */
export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let rafId = null

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setVisible(window.scrollY > 500)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={smoothScrollToTop}
      className={`back-to-top-btn hover-press flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white/95 text-primary shadow-lg backdrop-blur-sm${visible ? ' visible' : ''}`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 14V4m0 0L4 9m5-5l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
