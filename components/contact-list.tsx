import type { Contact } from '@/lib/schemas/contact.schema'

import { ContactListItem } from './contact-list-item'
import { useEffect, useState } from 'react'
import { getImageUrls } from '@/app/s3-actions'

export function ContactList({ contacts }: { contacts: Contact[] }) {
  const [avatarUrls, setAvatarUrls] = useState<string[]>([])

  useEffect(() => {
    const keys = contacts.map((contact) => `${contact.avatar?.split('.')[0]}_thumbnail.webp`)
    getImageUrls(keys)
      .then((urls) => setAvatarUrls(urls))
      .catch((err) => console.error('Error fetching avatar URLs:', err))
  }, [contacts])

  if (!contacts.length) return 'No contacts found'

  return (
    <ul className="flex flex-col">
      {contacts.map((contact, index) => (
        <ContactListItem key={contact.id} contact={{ ...contact, avatar: avatarUrls[index] }} />
      ))}
    </ul>
  )
}
