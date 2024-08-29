import { ContactList } from '@/components/contact-list'

const getContacts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

export default async function ContactsPage() {
  const contacts = await getContacts()

  return (
    <main className="flex flex-col w-full">
      <ContactList contacts={contacts} />
    </main>
  )
}
