import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'

import { glysa, lexendDeca } from '@/lib/fonts/fonts'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'UX Studio Challenge | Attila Béli',
  description: 'This is a solution to the UX Studio Challenge by Attila Béli.',
  creator: 'Attila Béli',
  openGraph: {
    type: 'website',
    url: 'https://uxstudio-challenge.vercel.app/',
    title: 'UX Studio Challenge | Attila Béli',
    description: 'This is a solution to the UX Studio Challenge by Attila Béli.',
    siteName: 'UX Studio Challenge',
    images: [
      {
        url: 'https://dynamic-og-image-generator.vercel.app/api/generate?title=UX+Studio+Challenge&author=Attila+B%C3%A9li&websiteUrl=https%3A%2F%2Fuxstudio-challenge.vercel.app%2F&avatar=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRlQE4Q7T5S7zR47fVlpqJmElUdobrdkbrZRg%26s&theme=default',
      },
    ],
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${lexendDeca.variable} ${glysa.variable} font-body text-body`}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
