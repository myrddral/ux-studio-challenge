import Subtitle from '@/components/texts/subtitle'
import Title from '@/components/texts/title'
import Highlight from '@/components/texts/highlight'
import Message from '@/components/texts/message'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Title>UX Studio Challenge</Title>
      <Subtitle>This is a subtitle</Subtitle>
      <Highlight>This is a highlight</Highlight>
      <p>This is a default body text</p>
      <Message>This is a message</Message>
    </main>
  )
}
