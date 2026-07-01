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
    <footer className="relative z-10 -mt-8 w-full overflow-hidden bg-primary-black px-site pb-12 pt-28 text-primary-white md:-mt-10 md:min-h-[373px] md:pb-9 md:pt-32">
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

      <div className="site-container relative flex flex-col gap-7 md:gap-[18px]">
        <Link href="/" aria-label="Builtric home" className="w-fit self-center md:self-auto">
          <BuiltricLogo variant="light" />
        </Link>

        <div className="flex w-full flex-col items-center gap-11 md:flex-row md:items-start md:gap-[106px] md:py-3.5">
          <FooterColumn title="New to Builtric?" links={NEW_TO_BUILTRIC_LINKS} />
          <FooterColumn title="About Builtric" links={ABOUT_BUILTRIC_LINKS} />
        </div>

        <div className="flex flex-col items-center gap-9 border-t border-white/10 pt-9 md:flex-row md:items-center md:justify-between md:gap-14 md:pt-10">
          <p className="text-center font-inter text-[10px] font-normal leading-[1.3] text-primary-white/80 md:text-left">
            A product built by{' '}
            <a
              href="https://lmkr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary-white no-underline transition-colors hover:text-primary-white/90"
            >
              LMKR
            </a>
          </p>

          <Link
            href="/builtric-legal"
            className="font-inter text-[11px] font-light leading-[1.3] text-primary-white/90 no-underline transition-colors hover:text-primary-white md:text-[10px]"
          >
            Privacy Policy and Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
