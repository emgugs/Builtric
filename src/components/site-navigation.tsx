'use client'

import Link from 'next/link'
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
  { label: 'News', href: '/builtric-news' },
] as const

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-inter text-sm font-medium leading-8 tracking-[-0.01em] text-primary-black no-underline transition-colors hover:text-[#696969]"
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
      className={`inline-flex h-[42px] min-w-[132px] items-center justify-center rounded-[4px] border-2 border-primary-black bg-transparent px-4 font-inter text-sm font-semibold leading-none text-primary-black no-underline transition-colors hover:bg-primary-black/5 ${className}`}
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="w-full bg-transparent px-3 py-3">
      <nav
        className="mx-auto flex w-full max-w-[1200px] flex-col rounded-[9px] bg-hero-yellow min-[810px]:h-14 min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-5 min-[810px]:px-2 min-[810px]:py-5"
        style={{ boxShadow: NAV_SHADOW }}
        aria-label="Main navigation"
      >
        <div className="flex h-11 w-full items-center justify-between min-[810px]:h-auto min-[810px]:w-auto min-[810px]:shrink-0">
          <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            <BuiltricLogo priority />
          </Link>

          <button
            type="button"
            className="flex items-center justify-center min-[810px]:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <div
          id="site-mobile-menu"
          className={`flex w-full flex-col gap-3 overflow-hidden min-[810px]:flex-1 min-[810px]:flex-row min-[810px]:items-center min-[810px]:justify-end min-[810px]:gap-9 ${
            menuOpen ? 'max-h-[calc(100dvh-5rem)] pb-3 pt-3' : 'max-h-0 min-[810px]:max-h-none'
          }`}
        >
          <div className="flex flex-col gap-3 min-[810px]:flex-1 min-[810px]:flex-row min-[810px]:flex-wrap min-[810px]:items-center min-[810px]:justify-end min-[810px]:gap-[26px]">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} {...link} onClick={closeMenu} />
            ))}
          </div>

          <div className="flex flex-col gap-1.5 min-[810px]:shrink-0 min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-1.5">
            <BuiltricButton
              label="Try Now"
              href="/builtric-demo"
              variant="try-black"
              className="w-full min-[810px]:w-[141px]"
            />
            <LoginButton className="w-full min-[810px]:w-[132px]" />
          </div>
        </div>
      </nav>
    </header>
  )
}
