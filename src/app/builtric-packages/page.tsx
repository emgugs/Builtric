'use client'

import { SiteShell } from '@/components/site-shell'
import { PackagesPageContent } from '@/components/sections/packages-page-sections'

export default function PackagesPage() {
  return (
    <SiteShell>
      <PackagesPageContent />
    </SiteShell>
  )
}
