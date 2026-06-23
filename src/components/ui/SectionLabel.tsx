import { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div
      className={`inline-block font-bebas text-sm tracking-widest text-amber uppercase mb-3 border-r-4 border-flame pr-3 ${className}`}
    >
      {children}
    </div>
  )
}
