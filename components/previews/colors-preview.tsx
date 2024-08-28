import { cn } from '@/utils/cn'

export function ColorsPreview() {
  return (
    <>
      <section className="flex w-full flex-col gap-4 p-6">
        <p className="text-h3 underline underline-offset-2">Grey shades</p>
        <div className="flex gap-2">
          {['100', '90', '80', '70', '60', '50', '40', '30', '20', '10'].map((shade) => (
            <div
              key={shade}
              className={cn(
                'flex h-16 w-16 items-center justify-center border border-grey-50',
                `bg-grey-${shade}`
              )}
            >
              {shade}
            </div>
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col gap-4 p-6">
        <p className="text-h3 underline underline-offset-2">Variants</p>
        <div className="flex gap-2">
          {['primary', 'secondary', 'disabled'].map((variant) => (
            <div
              key={variant}
              className={cn(
                'flex h-16 w-28 items-center justify-center border border-grey-50',
                `bg-${variant}`
              )}
            >
              <p className={cn(`text-${variant}-foreground`)}>{variant}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
