import type { PropsWithChildren } from 'react'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { QueryClientProvider } from './query-client-provider'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
      <QueryClientProvider>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}
