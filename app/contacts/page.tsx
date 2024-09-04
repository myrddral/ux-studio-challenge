'use client'
import { ContactList } from '@/components/contact-list'
import { Loading } from '@/components/ui/loading'
import { useQueries } from '@/hooks/queries'

export default function ContactsPage() {
  const { contacts, isContactsLoading } = useQueries()

  return (
    <main className='flex w-full flex-col'>
      {isContactsLoading ? <Loading /> : <ContactList contacts={contacts} />}
    </main>
  )
}
