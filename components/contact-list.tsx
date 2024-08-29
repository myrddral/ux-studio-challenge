import { ContactListItem } from './contact-list-item'

type Contact = {
  id: number
  name: string
  email: string
  phone: string
}

export function ContactList({ contacts }: { contacts: Contact[] }) {
  return (
    <ul className="flex flex-col">
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}
