import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'
import DualCTA from '@/components/ui/DualCTA'
import StaggerReveal from '@/components/ui/StaggerReveal'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { testimonials } from '@/data/testimonials'

interface TestimonialsProps {
  mode?: 'teaser' | 'full'
}

export default function Testimonials({ mode = 'teaser' }: TestimonialsProps) {
  const displayedTestimonials = mode === 'full' ? testimonials : testimonials.slice(0, 2)

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="mb-12">
          <SectionLabel>RESULTS</SectionLabel>
          <h2 className="font-rubik text-4xl md:text-5xl font-black text-text-primary mt-4">
            תוצאות אמיתיות
          </h2>
        </ScrollReveal>

        <StaggerReveal columns={mode === 'full' ? 3 : 2} className={`grid ${
          mode === 'full' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'
        } gap-6 mb-12`}>
          {displayedTestimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <p className="font-rubik text-cream text-sm mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border-color pt-4">
                <p className="font-rubik font-bold text-text-primary text-sm">
                  {testimonial.name}
                  {testimonial.age && <span className="text-muted">, {testimonial.age}</span>}
                </p>
                <p className="font-rubik text-xs text-muted">{testimonial.duration}</p>
                <p className="font-bebas text-xs text-amber mt-2 tracking-wide uppercase">
                  {testimonial.pillar}
                </p>
              </div>
            </Card>
          ))}
        </StaggerReveal>

        {mode === 'teaser' && (
          <DualCTA secondaryText="עוד תוצאות" secondaryHref="/results" />
        )}
      </div>
    </section>
  )
}
