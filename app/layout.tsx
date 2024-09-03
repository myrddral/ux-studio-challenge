import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { Providers } from '@/components/providers/providers'
import { glysa, lexendDeca } from '@/lib/fonts/fonts'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: 'noindex, nofollow',
  authors: [
    {
      name: 'Attila Béli',
      url: 'https://github.com/myrddral',
    },
  ],
  creator: 'Attila Béli',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${lexendDeca.variable} ${glysa.variable} mx-auto font-body text-body`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
