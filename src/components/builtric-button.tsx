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

type BuiltricButtonProps = {
  label: string
  href: string
  variant?: BuiltricButtonVariant
  className?: string
}

/** Pixel-matched to Framer Button component (El0p7dvjB) Try Yellow variant */
export function BuiltricButton({
  label,
  href,
  variant = 'primary',
  className = '',
}: BuiltricButtonProps) {
  if (variant === 'try-black') {
    return (
      <Link
        href={href}
        className={`group relative inline-flex h-[38px] w-[138px] items-center overflow-visible rounded-[4px] bg-primary-black px-[5px] font-inter text-[14px] font-semibold leading-none text-hero-yellow no-underline transition-opacity hover:opacity-95 ${className}`}
        style={{ boxShadow: CTA_SHADOW }}
      >
        <span className="relative flex min-w-0 flex-1 items-center justify-start gap-[17px] overflow-visible pl-1.5">
          <span
            className="absolute -right-px -top-[7px] bottom-[-7px] z-[1] flex w-[33px] items-center justify-center rounded-[3px] bg-hero-yellow"
            aria-hidden
          >
            <NortheastArrow className="h-[21px] w-[21px] bg-primary-black transition-transform duration-300 group-hover:rotate-45" />
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
        className={`group relative inline-flex h-[38px] w-[138px] items-center overflow-visible rounded-[4px] bg-hero-yellow px-[5px] font-inter text-[14px] font-semibold leading-none text-primary-black no-underline transition-opacity hover:opacity-95 ${className}`}
        style={{ boxShadow: CTA_SHADOW }}
      >
        <span className="relative flex min-w-0 flex-1 items-center justify-start gap-[17px] overflow-visible pl-1.5">
          <span
            className="absolute -right-px -top-[7px] bottom-[-7px] z-[1] flex w-[33px] items-center justify-center rounded-[3px] bg-primary-black"
            aria-hidden
          >
            <NortheastArrow className="h-[21px] w-[21px] bg-hero-yellow transition-transform duration-300 group-hover:rotate-45" />
          </span>
          <span className="relative whitespace-nowrap">{label}</span>
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={`inline-flex h-[38px] items-center justify-center whitespace-nowrap rounded-[4px] bg-primary-black px-4 font-inter text-[14px] font-semibold leading-none text-white no-underline transition-colors hover:bg-[rgb(54,62,71)] ${className}`}
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
