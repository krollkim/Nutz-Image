import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Hook from '@/components/sections/Hook'
import Method from '@/components/sections/Method'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import ContactForm from '@/components/sections/ContactForm'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { homeCopy } from '@/data/copy'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  title: 'NUTZ - להתחיל ולהתקדם בקליסטניקס באונליין',
  description: 'תהליכי קליסטניקס אונליין עם ליאב ברודש. ליווי 1:1 אישי, שיטה מוכחת, 300+ תהליכים מלאים. הגש מועמדות.',
}

export default function Home() {
  return (
    <main>
      <Hero
        label={homeCopy.hero.label}
        title={homeCopy.hero.title}
        subtitle={homeCopy.hero.subtitle}
        ctaPrimary={{ text: homeCopy.hero.ctaPrimary, href: '/contact' }}
        ctaSecondary={{ text: homeCopy.hero.ctaSecondary, href: '/results' }}
      />
      <Stats stats={homeCopy.stats} />
      <ScrollReveal>
        <Hook quote={homeCopy.hook.quote} />
      </ScrollReveal>
      <Method mode="teaser" />
      <ScrollReveal>
        <About mode="teaser" />
      </ScrollReveal>
      <Testimonials mode="teaser" />
      <ScrollReveal>
        <FAQ category="home" className="bg-bg" />
      </ScrollReveal>
      <ScrollReveal>
        <ContactForm mode="embedded" />
      </ScrollReveal>
    </main>
  )
}
