import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-surface border-t border-[var(--border-subtle)]">
      {/* Unified container for entire footer */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Three boxes in one row (RTL) */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-14">
          {/* Box 1 (right/RTL) - Brand card + CTA (spans 2 cols) */}
          <div className="md:col-span-2 flex items-center justify-center gap-5 bg-gradient-card border border-[var(--border-subtle)] rounded-card px-5 py-4">
            {/* Right half (RTL): tagline + CTA, centered */}
            <div className="flex flex-col items-center text-center gap-3">
              <p className="text-muted font-rubik text-sm">להתחיל ולהתקדם בקליסטניקס באונליין</p>
              <Button variant="primary" size="md" href="/contact">
                הגשת מועמדות
              </Button>
            </div>

            {/* Left half (RTL): super-avatar, centered */}
            <div className="flex items-center justify-center shrink-0">
              <Image
                src="/images/mascot/super-avatar.png"
                alt="NUTZ Mascot"
                width={96}
                height={96}
                className="w-20 h-20 sm:w-24 sm:h-24"
              />
            </div>
          </div>

          {/* Box 2 (middle/RTL) - THE NUTZ METHOD links */}
          <div className="md:col-span-1">
            <h3 className="font-bebas text-amber mb-4">THE NUTZ METHOD</h3>
            <ul className="font-rubik text-muted space-y-2">
              <li>
                <Link href="/method" className="hover:text-text-primary transition-colors">
                  תהליך 90 יום
                </Link>
              </li>
              <li>
                <Link href="/method" className="hover:text-text-primary transition-colors">
                  Power-Up
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-text-primary transition-colors">
                  תוצאות
                </Link>
              </li>
            </ul>
          </div>

          {/* Box 3 (left/RTL) - NUTZ links */}
          <div className="md:col-span-1">
            <h3 className="font-bebas text-amber mb-4">NUTZ</h3>
            <ul className="font-rubik text-muted space-y-2">
              <li>
                <Link href="/" className="hover:text-text-primary transition-colors">
                  בית
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-text-primary transition-colors">
                  עלי
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-text-primary transition-colors">
                  צור קשר
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-text-primary transition-colors">
                  שאלות נפוצות
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Copyright + Links (same container) */}
        <div className="border-t border-[var(--border-subtle)] py-4 sm:py-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:items-center font-rubik text-xs sm:text-sm text-muted">
          <p>© 2025 NUTZ - כל הזכויות שמורות</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-text-primary transition-colors">
              פרטיות
            </Link>
            <Link href="/terms" className="hover:text-text-primary transition-colors">
              תנאים
            </Link>
            <Link href="/accessibility" className="hover:text-text-primary transition-colors">
              נגישות
            </Link>
            <a
              href="https://www.instagram.com/liavbrodash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
