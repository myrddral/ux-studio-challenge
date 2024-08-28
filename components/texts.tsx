import type { PropsWithChildren } from 'react'

function Title({ children }: PropsWithChildren) {
  return <h1 className="font-heading text-h1">{children}</h1>
}

function Subtitle({ children }: PropsWithChildren) {
  return <h2 className="font-heading text-h2">{children}</h2>
}

function Highlight({ children }: PropsWithChildren) {
  return <h3 className="font-body text-h3">{children}</h3>
}

function Message({ children }: PropsWithChildren) {
  return <h4 className="font-body text-message">{children}</h4>
}

export { Title, Subtitle, Highlight, Message }
