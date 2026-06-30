'use client'

import Link from 'next/link'

const CTA_SHADOW =
  '0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)'

const NORTHEAST_ARROW_MASK = `url("data:image/svg+xml,%3Csvg display='block' role='presentation' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 5 0 L 5 2 L 11.59 2 L 0 13.59 L 1.41 15 L 13 3.41 L 13 10 L 15 10 L 15 0 Z' fill='black' transform='translate(4.5 4.5)'/%3E%3C/svg%3E") center / contain no-repeat`

function NortheastArrow({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        WebkitMask: NORTHEAST_ARROW_MASK,
        mask: NORTHEAST_ARROW_MASK,
      }}
      aria-hidden
    />
  )
}

export type BuiltricButtonVariant = 'primary' | 'cta' | 'try-black'
export type BuiltricButtonSize = 'default' | 'lg' | 'xl'

type BuiltricButtonProps = {
  label: string
  href: string
  variant?: BuiltricButtonVariant
  size?: BuiltricButtonSize
  /** Use on dark backgrounds — stroke hover uses white instead of black */
  onDark?: boolean
  className?: string
}

const SIZE_STYLES = {
  default: {
    height: 'h-[38px]',
    text: 'text-[14px]',
    ctaWidth: 'w-[138px]',
    primaryPadding: 'px-4',
    arrowWidth: 'w-[33px]',
    arrowIcon: 'h-[21px] w-[21px]',
    arrowOffset: '-top-[7px] bottom-[-7px]',
  },
  lg: {
    height: 'h-[48px]',
    text: 'text-base',
    ctaWidth: 'w-[174px]',
    primaryPadding: 'px-6',
    arrowWidth: 'w-[42px]',
    arrowIcon: 'h-[26px] w-[26px]',
    arrowOffset: '-top-[9px] bottom-[-9px]',
  },
  xl: {
    height: 'h-[54px] min-[1280px]:h-[60px]',
    text: 'text-lg min-[1280px]:text-xl',
    ctaWidth: 'w-[200px] min-[1280px]:w-[228px]',
    primaryPadding: 'px-8 min-[1280px]:px-9',
    arrowWidth: 'w-[46px] min-[1280px]:w-[52px]',
    arrowIcon: 'h-[28px] w-[28px] min-[1280px]:h-[32px] min-[1280px]:w-[32px]',
    arrowOffset: '-top-[10px] bottom-[-10px] min-[1280px]:-top-[11px] min-[1280px]:bottom-[-11px]',
  },
} as const

/** Pixel-matched to Framer Button component (El0p7dvjB) Try Yellow variant */
export function BuiltricButton({
  label,
  href,
  variant = 'primary',
  size = 'default',
  onDark = false,
  className = '',
}: BuiltricButtonProps) {
  const s = SIZE_STYLES[size]

  if (variant === 'try-black') {
    return (
      <Link
        href={href}
        className={`group relative inline-flex ${s.height} ${s.ctaWidth} items-center overflow-visible rounded-[4px] bg-primary-black px-[5px] font-inter ${s.text} font-semibold leading-none text-hero-yellow no-underline transition-colors duration-300 hover:bg-hero-yellow hover:text-primary-black ${className}`}
        style={{ boxShadow: CTA_SHADOW }}
      >
        <span className="relative flex min-w-0 flex-1 items-center justify-start gap-[17px] overflow-visible pl-1.5">
          <span
            className={`absolute -right-px ${s.arrowOffset} z-[1] flex ${s.arrowWidth} items-center justify-center rounded-[3px] bg-hero-yellow transition-colors duration-300 group-hover:bg-primary-black`}
            aria-hidden
          >
            <NortheastArrow className={`${s.arrowIcon} bg-primary-black transition-all duration-300 group-hover:rotate-45 group-hover:bg-hero-yellow`} />
          </span>
          <span className="relative whitespace-nowrap">{label}</span>
        </span>
      </Link>
    )
  }

  if (variant === 'cta') {
    return (
      <Link
        href={href}
        className={`group relative inline-flex ${s.height} ${s.ctaWidth} items-center overflow-visible rounded-[4px] bg-hero-yellow px-[5px] font-inter ${s.text} font-semibold leading-none text-primary-black no-underline transition-colors duration-300 hover:bg-primary-black hover:text-hero-yellow ${className}`}
        style={{ boxShadow: CTA_SHADOW }}
      >
        <span className="relative flex min-w-0 flex-1 items-center justify-start gap-[17px] overflow-visible pl-1.5">
          <span
            className={`absolute -right-px ${s.arrowOffset} z-[1] flex ${s.arrowWidth} items-center justify-center rounded-[3px] bg-primary-black transition-colors duration-300 group-hover:bg-hero-yellow`}
            aria-hidden
          >
            <NortheastArrow className={`${s.arrowIcon} bg-hero-yellow transition-all duration-300 group-hover:rotate-45 group-hover:bg-primary-black`} />
          </span>
          <span className="relative whitespace-nowrap">{label}</span>
        </span>
      </Link>
    )
  }

  const strokeHover = onDark
    ? 'hover:border-primary-black hover:bg-transparent hover:text-primary-black'
    : 'hover:border-primary-black hover:bg-transparent hover:text-primary-black'

  return (
    <Link
      href={href}
      className={`inline-flex ${s.height} items-center justify-center whitespace-nowrap rounded-[4px] border-2 border-transparent bg-primary-black ${s.primaryPadding} font-inter ${s.text} font-semibold leading-none text-white no-underline transition-all duration-300 ${strokeHover} ${className}`}
    >
      {label}
    </Link>
  )
}

export function BuiltricButtonGroup({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 pr-1 ${className}`}>{children}</div>
  )
}
