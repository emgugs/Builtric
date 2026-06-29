'use client'

import { SiteFooter } from '@/components/site-footer'
import { SiteNavigation } from '@/components/site-navigation'

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <main className="relative flex w-full flex-1 flex-col items-center">
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 w-full">
          <div className="pointer-events-auto">
            <SiteNavigation />
          </div>
        </div>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
