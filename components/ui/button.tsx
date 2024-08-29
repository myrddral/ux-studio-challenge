import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const buttonVariants = cva(
  'duration-250 inline-flex items-center justify-center whitespace-nowrap rounded-md !text-button ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      intent: {
        primary: 'bg-primary-button text-primary transition hover:brightness-110 active:brightness-125',
        secondary: 'bg-secondary-button text-primary transition hover:brightness-125 active:brightness-150',
        special:
          'btn-grad rounded-full border border-transparent transition hover:brightness-125 active:brightness-150',
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

type ButtonVariants = VariantProps<typeof buttonVariants>

type IconRequiredVariants = 'iconOnly' | 'iconButton'
type IconNotAllowedVariants = Exclude<ButtonVariants['variant'], IconRequiredVariants>

type ButtonPropsBase = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    asChild?: boolean
    children: ReactNode
  }

type ButtonPropsWithIcon = ButtonPropsBase & {
  variant: IconRequiredVariants
  icon: ReactNode
}

type ButtonPropsWithoutIcon = ButtonPropsBase & {
  variant?: IconNotAllowedVariants | 'default'
  icon?: never
}

type ButtonProps = ButtonPropsWithIcon | ButtonPropsWithoutIcon

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
