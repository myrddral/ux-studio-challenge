import type { Contact } from '@/lib/schemas/contact.schema'

import { ContactListItem } from './contact-list-item'

export function ContactList({ contacts }: { contacts: Contact[] }) {
  if (!contacts.length) return 'No contacts found'

  return (
    <ul className="flex flex-col">
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}
