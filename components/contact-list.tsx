import type { Contact } from '@/lib/schemas/contact.schema'

import { ContactListItem } from './contact-list-item'
import { useQueries } from '@/hooks/queries'

export function ContactList({ contacts }: { contacts: Contact[] }) {
  const { thumbnails } = useQueries()

  const contactsWithThumbnails = contacts.map((contact, index) => ({
    ...contact,
    avatar: thumbnails[index] || null,
  }))

  if (!contacts.length) return 'No contacts found'

  return (
    <ul className='flex flex-col'>
      {contactsWithThumbnails.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}
