import { pageSeo } from '@/lib/site-metadata'

export const metadata = pageSeo.news

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
