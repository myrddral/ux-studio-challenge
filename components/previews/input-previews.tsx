import { InputWithLabel } from '@/components/ui/input-with-label'
import { Subtitle } from '../texts'

export function InputPreviews() {
  return (
    <section className="flex w-full flex-col gap-4 py-6">
      <Subtitle className="underline decoration-dashed decoration-1 underline-offset-2">Inputs</Subtitle>
      <div className="flex flex-col gap-4">
        <InputWithLabel label="Label" name="example1" placeholder="Example" className="w-[390px]" />
      </div>
    </section>
  )
}
