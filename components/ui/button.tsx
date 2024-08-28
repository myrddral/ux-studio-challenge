import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md !text-button ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      intent: {
        // TODO: investigates why secondary needs 125% brightness to achieve the same 2% lightness change in HSL as primary needs 110% brightness
        primary: 'bg-primary-button text-primary hover:brightness-110 active:brightness-125',
        secondary: 'bg-secondary-button text-primary hover:brightness-125 active:brightness-150',
        special: 'btn-grad rounded-full border border-transparent hover:brightness-110 active:brightness-125',
      },
      variant: {
        default: 'px-4 py-2',
        iconOnly: 'w-10 p-2',
        iconButton: 'gap-2 py-2 pl-3 pr-4',
      },
      size: {
        normal: 'h-10 max-w-fit',
      },
    },
    defaultVariants: {
      intent: 'primary',
      variant: 'default',
      size: 'normal',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, variant, size, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ intent, variant, size, className }))} ref={ref} {...props}>
        {icon}
        {children}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
