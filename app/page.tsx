import { ColorsPreview } from '@/components/previews/colors-preview'
import { TextsPreview } from '@/components/previews/texts-preview'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <TextsPreview />
      <ColorsPreview />
    </main>
  )
}
