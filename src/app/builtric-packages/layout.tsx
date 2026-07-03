import { pageSeo } from '@/lib/site-metadata'

export const metadata = pageSeo.packages

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children
}
