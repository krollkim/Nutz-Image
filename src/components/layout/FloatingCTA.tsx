'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'

export default function FloatingCTA() {
  const [heroVisible, setHeroVisible] = useState(true)
  const [footerVisible, setFooterVisible] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    // Two-way logic (no latch): hidden while the Hero is in view, visible once
    // scrolled below it. The Hero already has its own DualCTA. Tracking live
    // visibility means scrolling back up to the Hero hides the button again.
    const hero = document.getElementById('hero')
    if (hero) {
      const obs = new IntersectionObserver(
        ([entry]) => setHeroVisible(entry.isIntersecting),
        { threshold: 0 }
      )
      obs.observe(hero)
      observers.push(obs)
    } else {
      // No Hero on this page → don't keep it hidden.
      setHeroVisible(false)
    }

    // Hide when the footer enters view (avoid duplicate CTAs).
    const footer = document.getElementById('site-footer')
    if (footer) {
      const obs = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        { threshold: 0 }
      )
      obs.observe(footer)
      observers.push(obs)
    }

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const isHidden = heroVisible || footerVisible

  return (
    <div
      className={`pointer-events-auto md:hidden transition-opacity duration-300 ${
        isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <Button variant="primary" size="sm" href="/contact" className="px-6 py-2.5 text-base">
        הגשת מועמדות
      </Button>
    </div>
  )
}
