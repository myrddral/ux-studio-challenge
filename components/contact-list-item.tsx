'use client'
import type { Contact } from '@/lib/schemas/contact.schema'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useRouter } from 'next/navigation'
import { CallIcon } from './icons/call'
import { DeleteIcon } from './icons/delete'
import { FavouriteIcon } from './icons/favourite'
import { MoreIcon } from './icons/more'
import { MuteIcon } from './icons/mute'
import { SettingsIcon } from './icons/settings'
import { ProfilePic } from './profile-pic'
import { Highlight, Message } from './texts'
import { Button } from './ui/button'
import { useMutations } from '@/hooks/useMutations'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type ContactListItemProps = {
  contact: Contact
}

export function ContactListItem({ contact }: ContactListItemProps) {
  const { deleteContactMutation } = useMutations()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleMuteClick = () => {
    alert('Mute')
  }

  const handleCallClick = () => {
    alert('Call')
  }

  const handleFavouriteClick = () => {
    alert('Favourite')
  }

  const handleEditClick = () => {
    router.push(`?action=edit&id=${contact.id}`)
  }

  const handleDeleteClick = () => {
    deleteContactMutation.mutate(contact.id)
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
      <div
        className={cn(
          'flex w-fit gap-2 transition-opacity duration-300 group-hover:opacity-100',
          open ? 'opacity-100' : 'opacity-0'
        )}
      >
        <Button variant='iconOnly' intent='secondary' icon={<MuteIcon />} onClick={handleMuteClick} />
        <Button variant='iconOnly' intent='secondary' icon={<CallIcon />} onClick={handleCallClick} />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='iconOnly'
              intent='secondary'
              icon={<MoreIcon />}
              className={open ? 'bg-secondary-button-active' : ''}
            />
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
