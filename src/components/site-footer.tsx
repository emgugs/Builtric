'use client'

import Link from 'next/link'
import { BuiltricLogo } from '@/components/builtric-logo'

const FOOTER_LINK_CLASS =
  'font-inter text-sm font-light leading-[1.3] text-primary-white/90 no-underline transition-colors hover:text-primary-white'

const FOOTER_HEADING_CLASS =
  'font-archivo text-sm font-semibold leading-[1.3] tracking-[-0.01em] text-primary-white'

const NEW_TO_BUILTRIC_LINKS = [
  { label: 'Features', href: '/builtric-features' },
  { label: 'Try Builtric', href: '/builtric-demo' },
  { label: 'Packages', href: '/builtric-packages' },
] as const

const ABOUT_BUILTRIC_LINKS = [
  { label: 'About Us', href: '/builtric-about' },
  { label: 'Contact', href: '/builtric-contact' },
  { label: 'Legal', href: '/builtric-legal' },
] as const

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: ReadonlyArray<{ label: string; href: string }>
}) {
  return (
    <div className="flex flex-col items-center gap-2.5 md:items-start">
      <p className={FOOTER_HEADING_CLASS}>{title}</p>
      <ul className="flex flex-col items-center gap-5 md:items-start md:gap-[5px]">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className={FOOTER_LINK_CLASS}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-primary-black px-site py-12 text-primary-white md:min-h-[373px] md:py-9">
      <div
        className="pointer-events-none absolute left-[-120px] top-[-57px] h-[525px] w-[575px] opacity-[0.23] md:left-auto md:right-0 md:top-0 md:h-full md:w-[min(60%,574px)]"
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 574.983 525"
          className="h-full w-full"
          preserveAspectRatio="xMaxYMin slice"
        >
          <path
            d="M459.428 137.566L405.952 251.27 509.551 251.27 574.983 388.836 510.943 525 446.899 388.836 0 388.836 65.434 251.27 384.825 251.27 331.346 137.568 4.174 137.568 69.609 0 393.996 0Z"
            fill="rgb(59, 65, 71)"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-7 md:gap-[18px]">
        <Link href="/" aria-label="Builtric home" className="w-fit">
          <BuiltricLogo variant="light" />
        </Link>

        <div className="flex w-full flex-col items-center gap-11 md:flex-row md:items-start md:gap-[106px] md:py-3.5">
          <FooterColumn title="New to Builtric?" links={NEW_TO_BUILTRIC_LINKS} />
          <FooterColumn title="About Builtric" links={ABOUT_BUILTRIC_LINKS} />
        </div>

        <div className="flex flex-col items-center gap-9 border-t border-white/10 pt-9 md:flex-row md:items-center md:justify-between md:gap-14 md:pt-10">
          <p className="text-center font-inter text-[10px] font-normal leading-[1.3] text-primary-white/80 md:text-left">
            A product built by <strong className="font-bold text-primary-white">LMKR</strong>
          </p>

          <div className="flex items-center gap-6 md:gap-10">
            <Link
              href="/builtric-legal"
              className="font-inter text-[11px] font-light leading-[1.3] text-primary-white/90 no-underline transition-colors hover:text-primary-white md:text-[10px]"
            >
              Privacy Notice
            </Link>
            <span className="h-[13px] w-px bg-white/20" aria-hidden />
            <Link
              href="/builtric-legal"
              className="font-inter text-[11px] font-light leading-[1.3] text-primary-white/90 no-underline transition-colors hover:text-primary-white md:text-[10px]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
