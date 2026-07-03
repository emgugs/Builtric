import { pageSeo } from '@/lib/site-metadata'

export const metadata = pageSeo.legal

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children
}
