import { Archivo, Inter } from 'next/font/google'
import type { Metadata } from 'next'
import '@/framer/styles.css'
import './globals.css'
import { GoogleAnalytics } from '@/components/google-analytics'
import { OrganizationStructuredData, SoftwareApplicationStructuredData } from '@/components/structured-data'
import { Providers } from '@/components/providers'
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site-metadata'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Builtric — Construction Management Software',
    template: '%s | Builtric',
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Builtric — Construction Management Software',
    description: DEFAULT_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME,
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} construction management software`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Builtric — Construction Management Software',
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${archivo.variable} antialiased`}>
        <OrganizationStructuredData />
        <SoftwareApplicationStructuredData />
        <GoogleAnalytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
