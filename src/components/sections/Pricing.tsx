import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import StaggerReveal from '@/components/ui/StaggerReveal'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { plans } from '@/data/pricing'

export default function Pricing() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal className="mb-12">
          <SectionLabel>CHOOSE YOUR PATH</SectionLabel>
          <h2 className="font-rubik text-4xl md:text-5xl font-black text-text-primary mt-4 mb-4">
            בחר את המסלול שלך
          </h2>
          <p className="font-rubik text-muted max-w-2xl">
            כל מסלול כולל ליווי אישי מלא. ההבדל - בעומק, במשך, ובמספר שיעורי ה-1:1.
          </p>
        </ScrollReveal>

        <StaggerReveal columns={5} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col gap-4 justify-between ${
                plan.popular ? 'border border-flame shadow-gold lg:col-span-1 scale-105' : ''
              }`}
            >
              <div>
                <h3 className="font-bebas text-sm text-amber mb-1">{plan.label}</h3>
                <p className="font-rubik font-bold text-text-primary text-lg mb-1">{plan.title}</p>
                <p className="font-rubik text-sm text-muted mb-3">{plan.subtitle}</p>
              </div>
              <div>
                <p className="font-bebas text-2xl text-amber mb-4">
                  {plan.price}
                  <span className="text-xs text-muted"> {plan.currency}</span>
                </p>
                {plan.features && plan.features.length > 0 && (
                  <ul className="font-rubik text-sm text-muted mb-4 space-y-1.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                )}
              </div>
              <Button variant="primary" href="/contact" size="sm" className="w-full">
                בחר מסלול
              </Button>
            </Card>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
