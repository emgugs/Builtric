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

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/builtric/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/builtric.official/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
] as const

function FooterSocialLinks() {
  return (
    <div className="flex flex-col items-center gap-2.5 md:items-start">
      <p className={FOOTER_HEADING_CLASS}>Follow us</p>
      <div className="flex items-center gap-4">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-primary-white/80 transition-colors hover:text-primary-white"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

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
          <FooterSocialLinks />
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
