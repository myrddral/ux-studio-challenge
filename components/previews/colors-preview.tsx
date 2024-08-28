import { cn } from '@/lib/utils'
import { Subtitle } from '../texts'

export function ColorsPreview() {
  return (
    <>
      <section className="flex w-full flex-col gap-4 pt-6">
        <Subtitle className="underline decoration-dashed decoration-1 underline-offset-2">
          Grey shades
        </Subtitle>
        <div className="flex gap-2">
          {['100', '90', '80', '70', '60', '50', '40', '30', '20', '10'].map((shade) => (
            <div
              key={shade}
              className={cn(
                'flex h-16 w-16 items-center justify-center rounded-md border border-grey-50',
                `bg-grey-${shade}`
              )}
            >
              {shade}
            </div>
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col gap-4 pb-12 pt-6">
        <Subtitle className="underline decoration-dashed decoration-1 underline-offset-2">
          Text colors
        </Subtitle>
        <div className="flex gap-2">
          {['primary', 'secondary', 'disabled'].map((variant) => (
            <div
              key={variant}
              className={cn(
                'relative flex h-16 w-28 items-center justify-center rounded-md border border-grey-50',
                `bg-${variant}`
              )}
            >
              <span className="absolute -bottom-5 text-message text-primary">{variant}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
