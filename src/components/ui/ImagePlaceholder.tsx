interface ImagePlaceholderProps {
  label: string
  aspectRatio?: string
  className?: string
}

export default function ImagePlaceholder({
  label,
  aspectRatio = 'aspect-video',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} ${className} bg-gradient-card border-2 border-dashed border-[var(--border-strong)] rounded-card flex items-center justify-center`}
      style={{ backgroundImage: 'var(--gradient-card)' }}
    >
      <p className="font-rubik text-sm text-[var(--text-faint)] text-center px-4">
        {label}
      </p>
    </div>
  )
}
