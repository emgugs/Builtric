import type { MetadataRoute } from 'next'
import { SITE_URL, staticRoutes } from '@/lib/site-metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return staticRoutes.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: path === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: path === '/' ? 1 : 0.8,
  }))
}
