import type { PropsWithChildren } from 'react'

export default function Title({ children }: PropsWithChildren) {
  return <h1 className="font-heading text-h1 font-medium">{children}</h1>
}
