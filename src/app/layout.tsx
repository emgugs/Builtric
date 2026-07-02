import { Archivo, Inter } from 'next/font/google'
import type { Metadata } from 'next'
import '@/framer/styles.css'
import './globals.css'
import { GoogleAnalytics } from '@/components/google-analytics'
import { Providers } from '@/components/providers'

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
  title: 'Builtric — Construction Management Software',
  description:
    'Get total control of your construction projects to protect your margins, schedules, and mission-critical risks.',
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
        <GoogleAnalytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
