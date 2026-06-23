import type { Metadata } from 'next'
import { Rubik, Bebas_Neue } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingCTA from '@/components/layout/FloatingCTA'
import AccessibilityWidget from '@/components/layout/AccessibilityWidget'
import JsonLd from '@/components/seo/JsonLd'
import { siteGraph } from '@/lib/schema'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/site'

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  variable: '--font-rubik',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'NUTZ Calisthenics',
  description: 'קליסטניקס אונליין עם ליאב ברודש',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og/og-image.jpg',
        width: 1036,
        height: 1168,
        alt: 'NUTZ Calisthenics — לוגו',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/images/og/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${rubik.variable} ${bebasNeue.variable}`}>
        <JsonLd data={siteGraph} />
        <Header />
        {children}
        <Footer />
        {/* Bottom action bar — both pinned to the same line, each in its corner (RTL: a11y right, CTA left) */}
        <div className="fixed inset-x-6 bottom-6 z-[60] flex items-center justify-between pointer-events-none">
          <AccessibilityWidget />
          <FloatingCTA />
        </div>
      </body>
    </html>
  )
}
