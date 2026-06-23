import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  disabled?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-cta text-[#2A1606] font-semibold rounded-pill shadow-cta hover:brightness-110 hover:-translate-y-0.5',
  secondary: 'border border-[var(--border-strong)] text-cream rounded-pill hover:bg-[rgba(212,162,78,0.08)]',
  ghost: 'text-muted hover:text-text-primary',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-2.5 text-base',
  lg: 'px-10 py-3.5 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'font-rubik rounded transition-all duration-200 font-medium hover:scale-[1.02]'
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${combinedStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )
}
