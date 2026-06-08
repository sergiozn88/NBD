type SectionHeaderProps = {
  label: string
  title: string
  description?: string
  variant?: 'light' | 'dark'
  aside?: string
}

export default function SectionHeader({
  label,
  title,
  description,
  variant = 'dark',
  aside,
}: SectionHeaderProps) {
  const titleClass =
    variant === 'light' ? 'section-title section-title--light' : 'section-title section-title--dark'
  const bodyClass =
    variant === 'light' ? 'section-body section-body--light' : 'section-body'

  return (
    <header
      className={
        aside
          ? 'flex flex-col gap-6 md:flex-row md:items-end md:justify-between'
          : 'max-w-3xl'
      }
    >
      <div>
        <p className="section-label">{label}</p>
        <h2 className={`${titleClass} mt-4`}>{title}</h2>
        <div className="section-accent" aria-hidden="true" />
        {description ? <p className={bodyClass}>{description}</p> : null}
      </div>
      {aside ? (
        <p className="max-w-xs text-sm leading-relaxed text-white/40 md:pb-2">{aside}</p>
      ) : null}
    </header>
  )
}
