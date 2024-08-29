import { ProfilePic } from './profile-pic'
import { Highlight, Message } from './texts'
import { Icon } from './ui/icon'

type Contact = {
  id: number
  name: string
  email: string
  phone: string
}

export function ContactListItem({ contact }: { contact: Contact }) {
  return (
    <div className="flex h-16 w-full items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <ProfilePic />
        <div className="flex shrink-0 flex-col">
          <Highlight>{contact.name}</Highlight>
          <Message className="text-secondary">{contact.phone}</Message>
        </div>
      </div>
      <div className="flex w-fit gap-2">
        <div className="flex-center h-10 w-10">
          <Icon icon="mute" />
        </div>
        <div className="flex-center h-10 w-10">
          <Icon icon="call" />
        </div>
        <div className="flex-center h-10 w-10">
          <Icon icon="more" />
        </div>
      </div>
    </div>
  )
}
