'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'

interface AnimatedCounterProps {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  to,
  suffix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = counterRef.current
    if (!element || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const obj = { value: 0 }
          gsap.to(obj, {
            value: to,
            duration,
            snap: { value: 1 },
            onUpdate() {
              if (element) {
                element.textContent = Math.floor(obj.value) + suffix
              }
            },
          })
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [to, suffix, duration, hasAnimated])

  return (
    <span ref={counterRef} className={className}>
      0{suffix}
    </span>
  )
}
