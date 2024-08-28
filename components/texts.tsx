import type { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

function Title({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <h1 className={cn('font-heading text-h1', className)}>{children}</h1>
}

function Subtitle({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <h2 className={cn('font-heading text-h2', className)}>{children}</h2>
}

function Highlight({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <p className={cn('text-highlight font-body', className)}>{children}</p>
}

function Message({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <p className={cn('font-body text-message', className)}>{children}</p>
}

export { Title, Subtitle, Highlight, Message }
