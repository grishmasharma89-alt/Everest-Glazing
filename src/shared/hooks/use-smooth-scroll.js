import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance = null

/**
 * useSmoothScroll — initializes Lenis smooth scrolling and syncs with GSAP ScrollTrigger.
 * Call once in your root layout. Returns the Lenis instance ref.
 */
export function useSmoothScroll() {
  const lenisRef = useRef(null)

  useEffect(() => {
    if (lenisInstance) {
      lenisRef.current = lenisInstance
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    lenisInstance = lenis
    lenisRef.current = lenis

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(lenis.raf)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  return lenisRef
}

/** Scroll to top instantly — use on route changes */
export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true })
  } else {
    window.scrollTo(0, 0)
  }
}

/**
 * Smooth scroll to top with animation.
 * Dispatches 'everest:scrolled-to-top' event when complete so hero can re-animate.
 */
export function smoothScrollToTop() {
  const currentScroll = window.scrollY || document.documentElement.scrollTop
  if (currentScroll < 10) {
    // Already at top — just fire event for re-animation
    window.dispatchEvent(new CustomEvent('everest:scrolled-to-top'))
    return
  }

  if (lenisInstance) {
    lenisInstance.scrollTo(0, {
      duration: Math.min(1.8, currentScroll / 1200),
      easing: (t) => 1 - (1 - t) ** 4,
      onComplete() {
        window.dispatchEvent(new CustomEvent('everest:scrolled-to-top'))
      },
    })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Approximate when scroll finishes
    const checkDone = setInterval(() => {
      if (window.scrollY < 10) {
        clearInterval(checkDone)
        window.dispatchEvent(new CustomEvent('everest:scrolled-to-top'))
      }
    }, 100)
  }
}
