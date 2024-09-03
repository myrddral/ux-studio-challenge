import type { Contact } from '@/lib/schemas/contact.schema'

import { deleteContact } from '@/app/actions'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CallIcon } from './icons/call'
import { DeleteIcon } from './icons/delete'
import { FavouriteIcon } from './icons/favourite'
import { MoreIcon } from './icons/more'
import { MuteIcon } from './icons/mute'
import { SettingsIcon } from './icons/settings'
import { ProfilePic } from './profile-pic'
import { Highlight, Message } from './texts'
import { Button } from './ui/button'

type ContactListItemProps = {
  contact: Contact
}

export function ContactListItem({ contact }: ContactListItemProps) {
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
    <div className='group flex h-16 w-full items-center justify-between gap-4'>
      <div className='flex items-center gap-4'>
        <ProfilePic width={40} height={40} url={contact.avatar} />
        <div className='flex shrink-0 flex-col'>
          <Highlight>{contact.name}</Highlight>
          <Message className='text-secondary'>{contact.phone}</Message>
        </div>
      </div>
      <div className='flex w-fit gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        <Button variant='iconOnly' intent='secondary' icon={<MuteIcon />} onClick={handleMuteClick} />
        <Button variant='iconOnly' intent='secondary' icon={<CallIcon />} onClick={handleCallClick} />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='iconOnly' intent='secondary' icon={<MoreIcon />} onClick={handleMoreClick} />
          </PopoverTrigger>
          <PopoverContent align='start' className='flex flex-col p-0'>
            <Button variant='iconButton' intent='popover' icon={<SettingsIcon />} onClick={handleEditClick}>
              Edit
            </Button>
            <Button
              variant='iconButton'
              intent='popover'
              icon={<FavouriteIcon />}
              onClick={handleFavouriteClick}
            >
              Favourite
            </Button>
            <Button variant='iconButton' intent='popover' icon={<DeleteIcon />} onClick={handleDeleteClick}>
              Remove
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
