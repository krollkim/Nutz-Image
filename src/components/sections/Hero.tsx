'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { gsap } from '@/lib/gsap'

interface HeroProps {
  label?: string
  title: string
  subtitle: string
  ctaPrimary?: { text: string; href: string }
  ctaSecondary?: { text: string; href: string }
}

export default function Hero({
  label,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  const labelRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = [
      { ref: labelRef, delay: 0 },
      { ref: titleRef, delay: 0.15 },
      { ref: subtitleRef, delay: 0.3 },
      { ref: ctasRef, delay: 0.45 },
    ]
    items.forEach(({ ref, delay }) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, delay }
        )
      }
    })
  }, [])

  return (
    <section
      id="hero"
      className="pt-20 lg:pt-0 lg:h-screen"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* RTL: first child (image) sits right, text sits left on desktop. Mobile: image on top. Full-bleed grid (no max-width) so image touches screen edge. */}
      <div className="lg:grid lg:grid-cols-2 lg:h-full">
        {/* Image column (right in RTL) — full-bleed, edge-to-edge */}
        <div className="relative h-[60vh] lg:h-full w-full">
          <Image
            src="/images/hero/hero-image.JPG"
            alt="ליאב ברודש"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: '50% 25%' }}
          />
        </div>

        {/* Text column (left in RTL) */}
        <div className="flex flex-col justify-center text-right px-6 py-10 lg:px-12 lg:py-0">
          {label && (
            <div className="mb-6" ref={labelRef}>
              <Badge>{label}</Badge>
            </div>
          )}
          <h1
            ref={titleRef}
            className="font-rubik text-5xl md:text-7xl font-black text-gold-bright mb-6"
          >
            {title}
          </h1>
          <p
            ref={subtitleRef}
            className="font-rubik text-lg text-cream mb-8 max-w-xl"
          >
            {subtitle}
          </p>
          <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center">
            {ctaPrimary && (
              <Button variant="primary" size="lg" href={ctaPrimary.href}>
                {ctaPrimary.text}
              </Button>
            )}
            {ctaSecondary && (
              <Button variant="secondary" size="lg" href={ctaSecondary.href}>
                {ctaSecondary.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
