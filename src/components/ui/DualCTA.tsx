import Button from '@/components/ui/Button'

interface DualCTAProps {
  /** Secondary "learn more" link text (e.g. "עוד על השיטה") */
  secondaryText: string
  /** Secondary link target (e.g. "/method") */
  secondaryHref: string
}

/**
 * Paired call-to-action: a dominant "הגשת מועמדות" (primary/filled) button
 * alongside a secondary "learn more" (outline) button.
 * Used at each homepage section transition. RTL: primary sits first (right).
 */
export default function DualCTA({ secondaryText, secondaryHref }: DualCTAProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button variant="primary" size="lg" href="/contact">
        הגשת מועמדות
      </Button>
      <Button variant="secondary" size="lg" href={secondaryHref}>
        {secondaryText}
      </Button>
    </div>
  )
}
