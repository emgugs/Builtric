import type { Metadata } from 'next'
import { ArticleStructuredData } from '@/components/structured-data'
import { newsArticles } from '@/data/news'
import { newsArticleMetadata } from '@/lib/site-metadata'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: Pick<LayoutProps, 'params'>): Promise<Metadata> {
  const { slug } = await params
  return newsArticleMetadata(slug)
}

export default async function NewsArticleLayout({ children, params }: LayoutProps) {
  const { slug } = await params
  const article = newsArticles.find((item) => item.slug === slug)

  return (
    <>
      {article ? (
        <ArticleStructuredData
          title={article.title}
          description={article.excerpt}
          slug={slug}
        />
      ) : null}
      {children}
    </>
  )
}
