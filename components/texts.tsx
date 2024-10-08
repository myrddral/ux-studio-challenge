import type { PropsWithChildren } from 'react'

function Title({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <h1 className={`font-heading text-h1 ${className}`}>{children}</h1>
}

function Subtitle({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <h2 className={`font-heading text-h2 ${className}`}>{children}</h2>
}

function Highlight({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <p className={`text-highlight font-body ${className}`}>{children}</p>
}

function Message({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <p className={`font-body text-message ${className}`}>{children}</p>
}

export { Title, Subtitle, Highlight, Message }
