'use client'

import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { SiteShell } from '@/components/site-shell'
import { newsArticles } from '@/data/news'

export default function NewsArticlePage() {
  const params = useParams<{ slug: string }>()
  const slug = params.slug
  const article = newsArticles.find((item) => item.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <SiteShell>
      <article className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-24">
        <Link href="/builtric-news" className="text-sm font-medium text-dark-grey hover:underline">
          ← Back to news
        </Link>
        <h1 className="font-archivo text-4xl font-bold md:text-5xl">{article.title}</h1>
        <p className="text-lg text-dark-grey">{article.excerpt}</p>
        <div className="space-y-4 text-base leading-relaxed text-dark-grey">
          <p>
            This article is synced from the Builtric Framer CMS. Replace this placeholder body with
            CMS content when Payload is connected.
          </p>
          <p>
            Builtric helps construction teams unify procurement, finance, project delivery, and
            reporting into one intelligence platform—so leaders can act early and stay in control from
            planning to handover.
          </p>
        </div>
      </article>
    </SiteShell>
  )
}
