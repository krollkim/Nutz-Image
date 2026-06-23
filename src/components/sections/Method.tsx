import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'
import DualCTA from '@/components/ui/DualCTA'
import StaggerReveal from '@/components/ui/StaggerReveal'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { methodCopy } from '@/data/copy'

interface MethodProps {
  mode?: 'teaser' | 'full'
}

export default function Method({ mode = 'teaser' }: MethodProps) {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="mb-12">
          <SectionLabel>THE NUTZ METHOD</SectionLabel>
          <h2 className="font-rubik text-4xl md:text-5xl font-black text-text-primary mt-4 mb-8">
            השיטה לשליטה
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {methodCopy.steps.map((step) => (
            <Card key={step.number}>
              <div className="font-bebas text-2xl text-flame mb-4">שלב {step.number}</div>
              <h3 className="font-rubik text-lg font-bold text-text-primary mb-2">{step.title}</h3>
              <p className="font-rubik text-muted text-base leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </StaggerReveal>

        {mode === 'full' && (
          <ScrollReveal className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-[70vh] max-h-96 md:max-h-[70vh] rounded-card overflow-hidden order-2 md:order-1">
              <Image
                src="/images/exrecises/liav-planch.png"
                alt="ליאב ברודש מבצע תרגיל פלאנש (Planche) באימון קליסטניקס"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-rubik text-2xl font-bold text-text-primary mb-4">הדרך לתרגול</h3>
              <p className="font-rubik text-muted mb-4">כאן תוכל ללמוד על כל השלבים של השיטה שלנו ואיך הם עובדים יחד ליצור תוצאות מדהימות.</p>
            </div>
          </ScrollReveal>
        )}

        {mode === 'full' && (
          <ScrollReveal>
            <Card className="mb-12">
              <h3 className="font-bebas text-amber text-lg mb-4 tracking-wide uppercase">
                {methodCopy.powerup.title}
              </h3>
              <p className="font-rubik text-muted">{methodCopy.powerup.text}</p>
            </Card>
          </ScrollReveal>
        )}

        {mode === 'teaser' && (
          <DualCTA secondaryText="עוד על השיטה" secondaryHref="/method" />
        )}
      </div>
    </section>
  )
}
