import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CtaSection from '@/components/sections/CtaSection'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { resultsCopy } from '@/data/copy'

export const metadata: Metadata = {
  title: 'תוצאות - NUTZ Calisthenics',
  description: 'מאפס לעמידת ידיים. ממקום אחרון לראשון. תוצאות אמיתיות ממתאמנים אמיתיים בתהליך עם ליאב ברודש.',
}

export default function ResultsPage() {
  return (
    <main>
      <Hero title={resultsCopy.hero.title} subtitle={resultsCopy.hero.subtitle} />
      <Testimonials mode="full" />
      <ScrollReveal>
        <FAQ category="results" />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection
          text="רוצה להיות הסיפור הבא?"
          buttonText="הגשת מועמדות"
          buttonHref="/contact"
        />
      </ScrollReveal>
    </main>
  )
}
