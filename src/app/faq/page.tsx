import type { Metadata } from 'next'
import Image from 'next/image'
import FAQ from '@/components/sections/FAQ'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { faqCopy } from '@/data/copy'
import SectionLabel from '@/components/ui/SectionLabel'
import JsonLd from '@/components/seo/JsonLd'
import { faqPageJsonLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'שאלות נפוצות - NUTZ Calisthenics',
  description: 'תשובות על תהליכי הקליסטניקס, ליווי אונליין, מחירים, זמנים, ואיך להתחיל עם ליאב ברודש.',
}

export default function FAQPage() {
  return (
    <main>
      <JsonLd data={faqPageJsonLd} />
      <section className="pt-32 pb-8 lg:pb-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8 lg:mb-12 flex flex-col items-center text-center gap-10 lg:flex-row lg:items-center lg:justify-start lg:text-right lg:gap-16">
            {/* Heading (RTL: right / first) */}
            <div>
              <SectionLabel>FAQ</SectionLabel>
              <h1 className="font-rubik text-5xl md:text-6xl font-black text-text-primary mt-4 mb-4">
                {faqCopy.title}
              </h1>
              <p className="font-rubik text-muted">{faqCopy.subtitle}</p>
            </div>
            {/* Pointing mascot (RTL: left of the heading, pointing toward it) */}
            <div className="w-44 h-44 lg:w-32 lg:h-32 shrink-0">
              <Image
                src="/images/mascot/pointing-avatar.png"
                alt="NUTZ Pointing Mascot"
                width={176}
                height={176}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <ScrollReveal>
        <FAQ category="all" className="bg-surface" showHeading={false} />
      </ScrollReveal>
    </main>
  )
}
