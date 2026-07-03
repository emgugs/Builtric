import { pageSeo } from '@/lib/site-metadata'

export const metadata = pageSeo.about

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
