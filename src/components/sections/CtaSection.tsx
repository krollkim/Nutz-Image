import Button from '@/components/ui/Button'

interface CtaSectionProps {
  text: string
  buttonText: string
  buttonHref: string
}

export default function CtaSection({ text, buttonText, buttonHref }: CtaSectionProps) {
  return (
    <section className="py-16" style={{ background: 'var(--gradient-section)' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="font-rubik text-xl text-gold-bright mb-8">{text}</p>
        <Button variant="primary" size="lg" href={buttonHref}>
          {buttonText}
        </Button>
      </div>
    </section>
  )
}
