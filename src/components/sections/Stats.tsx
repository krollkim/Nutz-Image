import AnimatedCounter from '@/components/ui/AnimatedCounter'
import StaggerReveal from '@/components/ui/StaggerReveal'

interface Stat {
  value: number
  suffix: string
  label: string
}

interface StatsProps {
  stats: Stat[]
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section id="stats" className="py-20" style={{ background: 'var(--gradient-section)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <StaggerReveal className="flex flex-col md:grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className={`font-bebas text-4xl md:text-5xl mb-2 ${index === 0 ? 'text-flame' : 'text-amber'}`}>
                <AnimatedCounter
                  to={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                />
              </p>
              <p className="font-rubik text-muted">{stat.label}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
