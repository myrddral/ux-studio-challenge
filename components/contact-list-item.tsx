'use client'
import type { Contact } from '@/lib/schemas/contact.schema'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ProfilePic } from './profile-pic'
import { Highlight, Message } from './texts'
import { Icon } from './ui/icon'
import { Button } from './ui/button'
import { deleteContact } from '@/app/actions'
import { useEffect, useState } from 'react'
import { getImageUrl } from '@/app/s3-actions'

type ContactListItemProps = {
  contact: Contact
}

export function ContactListItem({ contact }: ContactListItemProps) {
  const { avatar } = contact
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    if (avatar) {
      getImageUrl(avatar).then((url) => setImageUrl(url))
    }
  }, [avatar])

  const handleMuteClick = () => {
    console.log('Mute')
  }

  const handleCallClick = () => {
    console.log('Call')
  }

  const handleMoreClick = () => {
    console.log('More')
  }

  const handleEditClick = () => {
    console.log('Edit')
  }

  const handleFavouriteClick = () => {
    console.log('Favourite')
  }

  const handleDeleteClick = () => {
    deleteContact(contact.id)
  }

  return (
    <div className="group flex h-16 w-full items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <ProfilePic width={40} height={40} url={imageUrl} />
        <div className="flex shrink-0 flex-col">
          <Highlight>{contact.name}</Highlight>
          <Message className="text-secondary">{contact.phone}</Message>
        </div>
      </div>
      <div className="flex w-fit gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Button variant="iconOnly" intent="secondary" icon={<Icon icon="mute" />} onClick={handleMuteClick} />
        <Button variant="iconOnly" intent="secondary" icon={<Icon icon="call" />} onClick={handleCallClick} />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="iconOnly"
              intent="secondary"
              icon={<Icon icon="more" />}
              onClick={handleMoreClick}
            />
          </PopoverTrigger>
          <PopoverContent align="start" className="flex flex-col p-0">
            <Button
              variant="iconButton"
              intent="popover"
              icon={<Icon icon="settings" />}
              onClick={handleEditClick}
            >
              Edit
            </Button>
            <Button
              variant="iconButton"
              intent="popover"
              icon={<Icon icon="favourite" />}
              onClick={handleFavouriteClick}
            >
              Favourite
            </Button>
            <Button
              variant="iconButton"
              intent="popover"
              icon={<Icon icon="delete" />}
              onClick={handleDeleteClick}
            >
              Remove
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
