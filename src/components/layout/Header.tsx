'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'בית', href: '/' },
    { label: 'השיטה', href: '/method' },
    { label: 'תוצאות', href: '/results' },
    { label: 'עלי', href: '/about' },
    { label: 'שאלות', href: '/faq' },
  ]

  return (
    <header
      className="fixed top-0 w-full border-b border-[var(--border-subtle)] z-50"
      style={{ background: 'rgba(18, 12, 6, 0.92)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo (Right/RTL) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/nutz-logo.png"
            alt="NUTZ Logo"
            width={52}
            height={52}
            priority
            className="w-auto"
            style={{ height: '52px' }}
          />
        </Link>

        {/* Desktop Nav (Center) */}
        <nav className="hidden md:flex gap-8 flex-1 justify-center font-rubik">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-primary hover:text-amber transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Left/RTL) */}
        <div className="hidden md:block">
          <Button variant="primary" size="md" href="/contact">
            להתחיל תהליך
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-surface p-4 flex flex-col gap-4 font-rubik">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-primary hover:text-amber transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="primary"
            size="md"
            href="/contact"
            className="w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            להתחיל תהליך
          </Button>
        </nav>
      )}
    </header>
  )
}
