import { AddIcon } from '../icons/add'
import { Subtitle } from '../texts'
import { Button } from '../ui/button'

export function ButtonPreview() {
  const intents = ['primary', 'secondary', 'special'] as const
  const variants = ['iconOnly', 'default', 'iconButton'] as const
  const sizes = ['normal'] as const

  return (
    <section className='flex w-full flex-col gap-4 py-6'>
      <Subtitle className='underline decoration-dashed decoration-1 underline-offset-2'>Buttons</Subtitle>
      <div className='flex flex-wrap gap-x-8 gap-y-2'>
        {intents.map((intent) => (
          <div
            key={intent}
            className='flex flex-col gap-2 rounded-md border-2 border-grey-50 bg-background px-4 py-3'
          >
            <p className='mb-2 italic'>intent: {intent}</p>
            {variants
              .map((variant) =>
                sizes.map((size) => (
                  <Button
                    key={`${intent}-${variant}-${size}`}
                    intent={intent}
                    variant={variant === 'default' ? 'iconButton' : variant}
                    size={size}
                    icon={variant === 'iconButton' ? <AddIcon /> : undefined}
                  >
                    {variant === 'iconOnly' ? <AddIcon /> : 'Add new'}
                  </Button>
                ))
              )
              .flat()}
          </div>
        ))}
      </div>
    </section>
  )
}
