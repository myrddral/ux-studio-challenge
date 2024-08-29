'use client'
import type { HTMLAttributes } from 'react'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

// prettier-ignore
export const iconNames = ['add', 'back-arrow', 'call', 'change', 'delete', 'favourite', 'light-mode', 'more', 'mute', 'profile', 'search', 'settings'] as const

export type IconProps = HTMLAttributes<HTMLImageElement> & {
  icon: (typeof iconNames)[number]
  size?: number
}

export const Icon = forwardRef<HTMLImageElement, IconProps>(({ icon, size = 24, ...props }, ref) => {
  return (
    <div className={cn('flex-center')}>
      <Image
        className={cn('object-contain', props.className)}
        src={`/icons/${icon}.svg`}
        alt={icon}
        width={size}
        height={size}
        ref={ref}
        {...props}
      />
    </div>
  )
})

Icon.displayName = 'Icon'
