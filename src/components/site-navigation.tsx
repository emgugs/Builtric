'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BuiltricButton } from '@/components/builtric-button'
import { BuiltricLogo } from '@/components/builtric-logo'

const NAV_SHADOW =
  '0px 0.6021873017743928px 0.6021873017743928px -1.25px rgba(0, 0, 0, 0.18), 0px 2.288533303243457px 2.288533303243457px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/builtric-features' },
  { label: 'Packages', href: '/builtric-packages' },
  { label: 'Who We Serve', href: '/builtric-who-we-serve' },
  { label: 'About', href: '/builtric-about' },
  { label: 'Contact', href: '/builtric-contact' },
] as const

function NavLink({
  href,
  label,
  onClick,
  mobile = false,
}: {
  href: string
  label: string
  onClick?: () => void
  mobile?: boolean
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={
        mobile
          ? 'flex h-14 w-full items-center font-inter text-sm font-medium tracking-[-0.01em] text-primary-black no-underline transition-colors hover:text-[#696969]'
          : 'font-inter text-sm font-medium leading-8 tracking-[-0.01em] text-primary-black no-underline transition-colors hover:text-[#696969]'
      }
    >
      {label}
    </Link>
  )
}

function LoginButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="https://app.builtric.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-[42px] min-w-0 items-center justify-center rounded-[4px] border-2 border-primary-black bg-transparent px-4 font-inter text-sm font-semibold leading-none text-primary-black no-underline transition-colors hover:bg-primary-black/5 ${className}`}
    >
      Login
    </a>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-11 w-11 items-center justify-center" aria-hidden>
      <span
        className={`absolute h-0.5 w-5 rounded-full bg-primary-black transition-transform duration-200 ${
          open ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
        }`}
      />
      <span
        className={`absolute h-0.5 w-5 rounded-full bg-primary-black transition-opacity duration-200 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`absolute h-0.5 w-5 rounded-full bg-primary-black transition-transform duration-200 ${
          open ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
        }`}
      />
    </span>
  )
}

export function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="px-site w-full bg-transparent py-4 min-[810px]:py-3">
      <nav
        className={`mx-auto flex w-full max-w-[1200px] flex-col overflow-hidden rounded-[9px] bg-hero-yellow px-4 py-3 transition-[max-height] duration-300 ease-out min-[810px]:h-14 min-[810px]:max-h-none min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-5 min-[810px]:px-2 min-[810px]:py-5 ${
          menuOpen ? 'max-h-[calc(100dvh-2rem)]' : 'max-h-20 min-[810px]:overflow-visible'
        }`}
        style={{ boxShadow: NAV_SHADOW }}
        aria-label="Main navigation"
      >
        {/* Mobile / tablet top bar: logo + hamburger */}
        <div className="flex h-14 w-full shrink-0 items-center justify-between min-[810px]:h-auto min-[810px]:w-auto">
          <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            <BuiltricLogo priority />
          </Link>

          <button
            type="button"
            className="flex shrink-0 items-center justify-center min-[810px]:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {/* Desktop links + CTAs */}
        <div className="hidden min-[810px]:flex min-[810px]:flex-1 min-[810px]:flex-row min-[810px]:items-center min-[810px]:justify-end min-[810px]:gap-9">
          <div className="flex flex-1 flex-row flex-wrap items-center justify-end gap-[26px]">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>

          <div className="flex shrink-0 flex-row items-center gap-1.5">
            <BuiltricButton label="Try Now" href="/builtric-demo" variant="try-black" />
            <LoginButton className="w-[132px]" />
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          id="site-mobile-menu"
          className={`min-h-0 flex-col min-[810px]:hidden ${
            menuOpen ? 'flex flex-1' : 'hidden'
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overscroll-contain px-1 pb-4 pt-2">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} {...link} mobile onClick={closeMenu} />
            ))}
          </div>

          <div className="flex shrink-0 flex-row items-center gap-2 pb-2 pt-4">
            <BuiltricButton
              label="Try Now"
              href="/builtric-demo"
              variant="try-black"
              className="!h-[42px] min-w-0 flex-1 !w-auto"
            />
            <LoginButton className="min-w-0 flex-1" />
          </div>
        </div>
      </nav>
    </header>
  )
}
