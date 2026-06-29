'use client'

import { useRouter } from 'next/navigation'
import { UnframerProvider } from 'unframer'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return <UnframerProvider navigate={router.push}>{children}</UnframerProvider>
}
