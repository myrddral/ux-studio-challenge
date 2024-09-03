import localFont from 'next/font/local'
import { Lexend_Deca } from 'next/font/google'

export const glysa = localFont({
  src: './Glysa.otf',
  display: 'swap',
  variable: '--font-glysa',
})

export const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend-deca',
})
