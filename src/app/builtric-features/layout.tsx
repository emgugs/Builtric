import { pageSeo } from '@/lib/site-metadata'

export const metadata = pageSeo.features

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children
}
