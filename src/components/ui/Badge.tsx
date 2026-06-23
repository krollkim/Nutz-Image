import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-4 py-1.5 bg-surface text-amber font-bebas text-xs tracking-widest rounded-pill border border-[var(--border-strong)] ${className}`}
    >
      {children}
    </span>
  )
}
