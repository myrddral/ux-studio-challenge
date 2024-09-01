import type { InputProps } from '@/components/ui/input'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { forwardRef } from 'react'

export const inputTypes = {
  TEXT: 'text',
  EMAIL: 'email',
  TEL: 'tel',
} as const

type InputWithLabelProps = InputProps & {
  type?: (typeof inputTypes)[keyof typeof inputTypes]
  name: string
  label: string
  placeholder?: string
}

export const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ label, name, type = 'text', ...props }, ref) => (
    <div className="grid w-full max-w-[390px] items-center gap-1">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} id={name} name={name} ref={ref} {...props} />
    </div>
  )
)

InputWithLabel.displayName = 'InputWithLabel'
