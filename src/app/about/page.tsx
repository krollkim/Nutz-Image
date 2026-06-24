import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import FAQ from '@/components/sections/FAQ'
import CtaSection from '@/components/sections/CtaSection'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { aboutCopy } from '@/data/copy'

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: 'ליאב ברודש - NUTZ Calisthenics',
  description: '14+ שנות קליסטניקס, 300+ תהליכים באונליין, רקע בספורטתרפיה. הסיפור מאחורי NUTZ.',
}

export default function AboutPage() {
  return (
    <main>
      <Hero
        title={aboutCopy.hero.title}
        subtitle={aboutCopy.hero.subtitle}
      />
      <ScrollReveal>
        <About mode="full" />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ category="about" />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection
          text="רוצה להתאמן איתי?"
          buttonText="הגשת מועמדות"
          buttonHref="/contact"
        />
      </ScrollReveal>
    </main>
  )
}
