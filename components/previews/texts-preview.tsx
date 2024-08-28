import { Highlight, Message, Subtitle, Title } from '../texts'

export function TextsPreview() {
  return (
    <section className="flex w-full flex-col gap-2 py-6">
      <Subtitle className="underline decoration-dashed decoration-1 underline-offset-2">Texts</Subtitle>
      <Title>This is a title</Title>
      <Subtitle>This is a subtitle</Subtitle>
      <Highlight>This is a highlight</Highlight>
      <p>This is a default body text</p>
      <Message>This is a message</Message>
    </section>
  )
}
