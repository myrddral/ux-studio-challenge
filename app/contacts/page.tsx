import { ContactList } from '@/components/contact-list'
import { getContacts } from '../actions'

export default async function ContactsPage() {
  const contacts = await getContacts()

  return (
    <main className="flex w-full flex-col">
      <ContactList contacts={contacts} />
    </main>
  )
}
