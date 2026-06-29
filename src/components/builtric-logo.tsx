import Image from 'next/image'

type BuiltricLogoProps = {
  className?: string
  variant?: 'dark' | 'light'
  priority?: boolean
}

const LOGO = {
  dark: '/images/Logo Longform Dark.svg',
  light: '/images/Logo Longform White.svg',
} as const

/** Longform wordmark from brand assets (840×232 viewBox, displayed at 36px height). */
export function BuiltricLogo({
  className = '',
  variant = 'dark',
  priority = false,
}: BuiltricLogoProps) {
  return (
    <Image
      src={LOGO[variant]}
      alt="Builtric"
      width={130}
      height={36}
      priority={priority}
      className={`h-9 w-auto ${className}`}
    />
  )
}
