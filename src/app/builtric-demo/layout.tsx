import { pageSeo } from '@/lib/site-metadata'

export const metadata = pageSeo.demo

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children
}
