'use client'
import type { Contact } from '@/lib/schemas/contact.schema'

import { ProfilePic } from './profile-pic'
import { Highlight, Message } from './texts'
import { Icon } from './ui/icon'

type ContactListItemProps = {
  contact: Contact
  onClick: (contact: Contact) => void
}

export function ContactListItem({ contact, onClick }: ContactListItemProps) {
  const handleMuteClick = () => {
    console.log('Mute')
  }

  const handleCallClick = () => {
    console.log('Call')
  }

  const handleMoreClick = () => {
    console.log('More')
  }

  return (
    <div className="group flex h-16 w-full cursor-pointer items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <ProfilePic width={40} height={40} />
        <div className="flex shrink-0 flex-col">
          <Highlight>{contact.name}</Highlight>
          <Message className="text-secondary">{contact.phone}</Message>
        </div>
      </div>
      <div className="flex w-fit gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex-center h-10 w-10">
          <Icon icon="mute" onClick={handleMuteClick} />
        </div>
        <div className="flex-center h-10 w-10">
          <Icon icon="call" onClick={handleCallClick} />
        </div>
        <div className="flex-center h-10 w-10">
          <Icon icon="more" onClick={handleMoreClick} />
        </div>
      </div>
    </div>
  )
}
