import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-gradient-card border border-[var(--border-subtle)] rounded-card p-6 transition-all duration-200 hover:border-[var(--border-mid)] hover:-translate-y-0.5 hover:shadow-gold ${className}`}
    >
      {children}
    </div>
  )
}
