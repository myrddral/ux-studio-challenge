import { ButtonPreview } from '@/components/previews/button-preview'
import { ColorsPreview } from '@/components/previews/colors-preview'
import { IconsPreview } from '@/components/previews/icons-preview'
import { InputPreviews } from '@/components/previews/input-previews'
import { TextsPreview } from '@/components/previews/texts-preview'
import { Title } from '@/components/texts'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container w-full rounded-md border-2 border-dotted border-grey-20 bg-grey-40 dark:bg-grey-90">
      {children}
    </div>
  )
}

export default function ComponentsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-6 md:p-24">
      <Title className="mb-4">Components</Title>
      <Container>
        <TextsPreview />
      </Container>
      <Container>
        <ColorsPreview />
      </Container>
      <Container>
        <ButtonPreview />
      </Container>
      <Container>
        <IconsPreview />
      </Container>
      <Container>
        <InputPreviews />
      </Container>
    </main>
  )
}
