import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TOGGLE = 'play reverse play reverse'

// Detect mobile/low-end for lighter animations (no blur filters = massive perf win)
const IS_MOBILE = typeof window !== 'undefined' && window.innerWidth < 768
const IS_LOW_END = typeof navigator !== 'undefined' && navigator.hardwareConcurrency <= 4

// On mobile/low-end: skip blur() filters entirely (forces GPU rasterization per element)
const BLUR_IN = IS_MOBILE || IS_LOW_END ? {} : { filter: 'blur(4px)' }
const BLUR_OUT = IS_MOBILE || IS_LOW_END ? {} : { filter: 'blur(0px)', clearProps: 'filter' }
const BLUR_HEAVY_IN = IS_MOBILE || IS_LOW_END ? {} : { filter: 'blur(12px)' }
const BLUR_LIGHT_IN = IS_MOBILE || IS_LOW_END ? {} : { filter: 'blur(3px)' }
const BLUR_HERO_IN = IS_MOBILE || IS_LOW_END ? {} : { filter: 'blur(6px)' }
const BLUR_HERO_OUT = IS_MOBILE || IS_LOW_END ? {} : { filter: 'blur(0px)', clearProps: 'filter' }

export function useScrollReveal(deps = []) {
  const scopeRef = useRef(null)

  useEffect(() => {
    if (!scopeRef.current) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const ctx = gsap.context(() => {
      // ── Hero reveals — cinematic orchestrated entrance (one-time) ──
      const heroEls = gsap.utils.toArray('.reveal-hero')
      if (heroEls.length) {
        gsap.timeline({ delay: 0.15 }).from(heroEls, {
          y: 70,
          autoAlpha: 0,
          ...BLUR_HERO_IN,
          duration: 1.3,
          ease: 'expo.out',
          stagger: 0.14,
          ...BLUR_HERO_OUT,
        })
      }

      // ── Standard scroll reveals — bidirectional fade-up with blur ──
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 48, autoAlpha: 0, ...BLUR_IN },
          {
            y: 0,
            autoAlpha: 1,
            ...BLUR_OUT,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 10%',
              toggleActions: TOGGLE,
            },
          },
        )
      })

      // ── Stagger groups — bidirectional ──
      gsap.utils.toArray('.reveal-stagger').forEach((parent) => {
        gsap.fromTo(
          parent.children,
          { y: 40, autoAlpha: 0, ...BLUR_LIGHT_IN },
          {
            y: 0,
            autoAlpha: 1,
            ...BLUR_OUT,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: parent,
              start: 'top 90%',
              end: 'top 10%',
              toggleActions: TOGGLE,
            },
          },
        )
      })

      // ── Clip-path wipe reveal ──
      gsap.utils.toArray('.reveal-clip').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.3,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              end: 'top 10%',
              toggleActions: TOGGLE,
            },
          },
        )
      })

      // ── Scale reveal ──
      gsap.utils.toArray('.reveal-scale').forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.88, autoAlpha: 0, ...BLUR_IN },
          {
            scale: 1,
            autoAlpha: 1,
            ...BLUR_OUT,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              end: 'top 10%',
              toggleActions: TOGGLE,
            },
          },
        )
      })

      // ── Slide from left ──
      gsap.utils.toArray('.reveal-slide-left').forEach((el) => {
        gsap.fromTo(
          el,
          { x: -80, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              end: 'top 10%',
              toggleActions: TOGGLE,
            },
          },
        )
      })

      // ── Slide from right ──
      gsap.utils.toArray('.reveal-slide-right').forEach((el) => {
        gsap.fromTo(
          el,
          { x: 80, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              end: 'top 10%',
              toggleActions: TOGGLE,
            },
          },
        )
      })

      // ── Image zoom-out reveal ──
      gsap.utils.toArray('.reveal-image').forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.18 },
          {
            scale: 1,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              end: 'top 10%',
              toggleActions: TOGGLE,
            },
          },
        )
      })

      // ── Horizontal line grow ──
      gsap.utils.toArray('.reveal-line').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'center center',
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              end: 'top 10%',
              toggleActions: TOGGLE,
            },
          },
        )
      })

      // ── Pure fade (no transform) ──
      gsap.utils.toArray('.reveal-fade').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 10%',
              toggleActions: TOGGLE,
            },
          },
        )
      })

      // ── Fade with blur dissolve ──
      gsap.utils.toArray('.reveal-blur').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, ...BLUR_HEAVY_IN },
          {
            autoAlpha: 1,
            ...BLUR_OUT,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 10%',
              toggleActions: TOGGLE,
            },
          },
        )
      })

      // ── Word-by-word reveal ──
      gsap.utils.toArray('.reveal-word').forEach((parent) => {
        const words = parent.querySelectorAll('span')
        if (!words.length) return
        gsap.fromTo(
          words,
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.04,
            scrollTrigger: {
              trigger: parent,
              start: 'top 88%',
              end: 'top 10%',
              toggleActions: TOGGLE,
            },
          },
        )
      })

      // ── Counter animation ──
      gsap.utils.toArray('.reveal-counter').forEach((el) => {
        const text = el.textContent || ''
        const match = text.match(/(\d+)/)
        if (!match) return
        const target = parseInt(match[1], 10)
        const prefix = text.slice(0, match.index)
        const suffix = text.slice(match.index + match[1].length)
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            end: 'top 10%',
            toggleActions: 'play reverse play reverse',
            onReverseComplete() {
              obj.val = 0
              el.textContent = `${prefix}0${suffix}`
            },
          },
          onUpdate() {
            el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`
          },
        })
      })

      // ── Parallax depth (always scrub-based, not toggled) ──
      // Lighter parallax on mobile — less movement, no scale
      const pxYPercent = IS_MOBILE ? 4 : 8
      const pxScale = IS_MOBILE ? 1.02 : 1.06
      gsap.utils.toArray('.reveal-parallax').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -pxYPercent, scale: pxScale },
          {
            yPercent: pxYPercent,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })
    }, scopeRef)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return scopeRef
}
