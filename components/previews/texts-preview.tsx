import { Highlight, Message, Subtitle, Title } from '../texts'

export function TextsPreview() {
  return (
    <section className="flex w-full flex-col gap-4 p-6">
      <p className="text-h3 underline underline-offset-2">Texts</p>
      <Title>UX Studio Challenge</Title>
      <Subtitle>This is a subtitle</Subtitle>
      <Highlight>This is a highlight</Highlight>
      <p>This is a default body text</p>
      <Message>This is a message</Message>
    </section>
  )
}
