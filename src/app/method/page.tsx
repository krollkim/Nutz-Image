import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Method from '@/components/sections/Method'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import CtaSection from '@/components/sections/CtaSection'
import ScrollReveal from '@/components/ui/ScrollReveal'
import JsonLd from '@/components/seo/JsonLd'
import { serviceJsonLd } from '@/lib/schema'
import { methodCopy } from '@/data/copy'

export const metadata: Metadata = {
  alternates: { canonical: '/method' },
  title: 'השיטה לשליטה - NUTZ Calisthenics',
  description: 'שלושה שלבים: אבחון אישי, תוכנית מותאמת, שליטה בגוף. מסלולי 90, 180 ו-360 ימים עם ליווי צמוד מליאב.',
}

export default function MethodPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd} />
      <Hero
        label={methodCopy.hero.label}
        title={methodCopy.hero.title}
        subtitle={methodCopy.hero.subtitle}
      />
      <Method mode="full" />
      <Pricing />
      <ScrollReveal>
        <FAQ category="method" />
      </ScrollReveal>
      <ScrollReveal>
        <CtaSection
          text="מוכן להתחיל? בואו נמצא לך את המסלול המתאים."
          buttonText="הגשת מועמדות"
          buttonHref="/contact"
        />
      </ScrollReveal>
    </main>
  )
}
