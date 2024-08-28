import type { InputProps } from '@/components/ui/input'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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

export function InputWithLabel({ label, name, type = 'text', ...props }: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-[390px] items-center gap-1">
      <Label htmlFor={name}>
        {label}
      </Label>
      <Input type={type} id={name} {...props} />
    </div>
  )
}
