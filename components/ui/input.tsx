import type { InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md px-3 py-2',
        'bg-input-background border border-border text-input placeholder:text-disabled hover:border-grey-30',
        'focus-visible:border-grey-10 focus-visible:bg-grey-60 focus-visible:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
