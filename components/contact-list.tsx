import type { Contact } from '@/lib/schemas/contact.schema'

import { ContactListItem } from './contact-list-item'
import { getImageUrls } from '@/app/s3-actions'
import { useQuery } from '@tanstack/react-query'
import { Loading } from './ui/loading'

export function ContactList({ contacts }: { contacts: Contact[] }) {
  const { data: avatarUrls = [], isLoading } = useQuery({
    queryKey: ['get-image-urls', contacts],
    queryFn: async () => {
      const keys = contacts.map((contact) => contact.avatar).filter(Boolean)
      return await getImageUrls(keys)
    },
    enabled: contacts.length > 0,
  })

  if (isLoading) return <Loading />
  if (!contacts.length) return 'No contacts found'

  return (
    <ul className="flex flex-col">
      {contacts.map((contact, index) => (
        <ContactListItem key={contact.id} contact={{ ...contact, avatar: avatarUrls[index] || '' }} />
      ))}
    </ul>
  )
}
