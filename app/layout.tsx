import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'

import { glysa, lexendDeca } from '@/lib/fonts/fonts'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'UX Studio Challenge',
  description: 'UX Studio Challenge',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${lexendDeca.variable} ${glysa.variable} bg-background font-body text-body text-primary`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
