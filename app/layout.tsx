import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'

import { glysa, lexendDeca } from '@/lib/fonts/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'UX Studio Challenge',
  description: 'UX Studio Challenge',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.variable} ${glysa.variable} font-body font-regular text-body`}>
        {children}
      </body>
    </html>
  )
}
