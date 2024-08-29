'use client'
import type { Contact } from '@/lib/schemas/contact.schema'

import { ContactListItem } from './contact-list-item'

export function ContactList({ contacts }: { contacts: Contact[] }) {
  const handleContactClick = (contact: Contact) => {
    console.log(contact)
  }

  return (
    <ul className="flex flex-col">
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} onClick={handleContactClick} />
      ))}
    </ul>
  )
}
