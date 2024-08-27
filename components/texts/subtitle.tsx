import type { PropsWithChildren } from 'react'

export default function Subtitle({ children }: PropsWithChildren) {
  return <h2 className="font-heading text-h2 font-medium">{children}</h2>
}
