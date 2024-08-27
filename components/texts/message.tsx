import type { PropsWithChildren } from 'react'

export default function Message({ children }: PropsWithChildren) {
  return <p className="font-body font-regular text-message">{children}</p>
}
