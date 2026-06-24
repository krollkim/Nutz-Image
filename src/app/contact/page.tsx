import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'הגשת מועמדות - NUTZ Calisthenics',
  description: 'מוכן להתחיל תהליך קליסטניקס באונליין? מלא את הטופס וליאב יחזור אליך תוך 24 שעות.',
}

export default function ContactPage() {
  return (
    <main>
      <ContactForm mode="standalone" />
      <FAQ category="contact" />
    </main>
  )
}
