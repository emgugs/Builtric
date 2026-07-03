import type { MetadataRoute } from 'next'
import { newsArticles } from '@/data/news'
import { SITE_URL, staticRoutes } from '@/lib/site-metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: path === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: path === '/' ? 1 : 0.8,
  }))

  const newsEntries = newsArticles.map((article) => ({
    url: `${SITE_URL}/builtric-news/${article.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...newsEntries]
}
