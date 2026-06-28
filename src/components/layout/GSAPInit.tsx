'use client'

import { useEffect } from 'react'
import { ScrollTrigger } from '@/lib/gsap'

/**
 * Recomputes every ScrollTrigger's start/end AFTER the layout settles.
 *
 * Without this, trigger positions are measured on first render — before the
 * large Hero image and web fonts finish laying out. That shift leaves every
 * trigger firing at the wrong scroll position, which is what made the reveals
 * feel "stuck". Refreshing after paint / fonts / full load fixes the timing.
 *
 * Animations stay one-shot (no scrub) — this only corrects WHEN they fire.
 */
export default function GSAPInit() {
  useEffect(() => {
    // Don't recalc on mobile when the address bar shows/hides (notorious jank).
    ScrollTrigger.config({ ignoreMobileResize: true })

    const refresh = () => ScrollTrigger.refresh()

    // After first paint.
    const raf = requestAnimationFrame(refresh)

    // After web fonts swap in (changes text block heights → shifts positions).
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(refresh)
    }

    // After images (Hero) finish loading.
    window.addEventListener('load', refresh)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('load', refresh)
    }
  }, [])

  return null
}
