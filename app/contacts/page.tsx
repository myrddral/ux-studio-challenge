'use client'
import { ContactList } from '@/components/contact-list'
import { getContacts } from '../actions'
import { useQuery } from '@tanstack/react-query'
import { Loading } from '@/components/ui/loading'

const fetchContacts = async () => {
  return await getContacts()
}

export default function ContactsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-contacts-server-action'],
    queryFn: fetchContacts,
  })

  return (
    <main className="flex w-full flex-col">
      {isLoading ? <Loading /> : <ContactList contacts={data ?? []} />}
    </main>
  )
}
