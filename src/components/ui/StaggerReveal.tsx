'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from '@/lib/gsap'

interface StaggerRevealProps {
  children: ReactNode
  className?: string
  /** Delay between each child reveal (seconds). */
  stagger?: number
}

/**
 * Reveals its direct children in a staggered "wave" (fade-up) when scrolled
 * into view. Use as the grid/flex container itself (pass the layout classes via
 * `className`) so its children are the cards.
 *
 * Trigger: a plain IntersectionObserver (fires once when ~15% of the section is
 * visible), not GSAP ScrollTrigger — this matches AnimatedCounter and avoids
 * stale-position / refresh issues that made the reveal feel janky on the page.
 *
 * RTL note: GSAP staggers in DOM order (0,1,2…). In an RTL grid the first DOM
 * child sits on the right, so the default order produces a natural right→left
 * wave — matching Hebrew reading direction. No reversal needed.
 *
 * Performance: animates transform + opacity only (no layout thrashing), once.
 */
export default function StaggerReveal({
  children,
  className = '',
  stagger = 0.28,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const items = Array.from(el.children)
    if (items.length === 0) return

    // Initial hidden state up front so cards never flash visible (FOUC) before
    // the observer fires.
    gsap.set(items, { opacity: 0, y: 36 })

    let played = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played) {
          played = true
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            stagger, // DOM order → right→left in RTL
          })
          observer.disconnect() // once
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
