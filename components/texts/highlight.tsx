import type { PropsWithChildren } from 'react'

export default function Highlight({ children }: PropsWithChildren) {
  return <span className="font-body font-regular text-h3">{children}</span>
}
