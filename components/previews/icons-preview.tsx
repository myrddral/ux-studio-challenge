'use client'

import { Icon, iconNames } from '../ui/icon'
import { Subtitle } from '../texts'

export function IconsPreview() {
  return (
    <section className="flex w-full flex-col gap-4 py-6">
      <Subtitle className="underline decoration-dashed decoration-1 underline-offset-2">Icons</Subtitle>
      <div className="flex flex-wrap gap-4">
        {iconNames.map((icon) => (
          <Icon key={icon} icon={icon} size={24} />
        ))}
      </div>
    </section>
  )
}
