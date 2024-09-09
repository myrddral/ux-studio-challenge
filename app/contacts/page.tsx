'use client'
import { ContactList } from '@/components/contact-list'
import { Loading } from '@/components/ui/loading'
import { useContacts } from '@/hooks/useContacts'

export default function ContactsPage() {
  const { contactsWithAvatars, isLoading, error } = useContacts()

  return (
    <main className='flex w-full flex-col'>
      {error && <p>Error: {error.message}</p>}
      {isLoading ? <Loading /> : <ContactList contacts={contactsWithAvatars} />}
    </main>
  )
}
