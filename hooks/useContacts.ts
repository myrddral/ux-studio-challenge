import type { Contact } from '@/lib/schemas/contact.schema'

import { getContacts } from '@/app/actions'
import { getImageUrls } from '@/app/s3-actions'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export function useContacts() {
  const {
    data: contacts,
    error: contactsError,
    isLoading: contactsLoading,
  } = useQuery({
    queryKey: ['get-contacts'],
    queryFn: async () => await getContacts(),
    staleTime: Infinity,
  })

  const keys = useMemo(() => {
    if (!contacts) return []
    return contacts.map((contact) => contact.avatar)
  }, [contacts])

  const {
    data: avatarsSrcs,
    error: avatarsError,
    isLoading: avatarsLoading,
  } = useQuery({
    queryKey: ['get-avatar-urls', keys],
    queryFn: async () => await getImageUrls(keys),
    enabled: keys && keys.length > 0,
    staleTime: Infinity,
  })

  const contactsWithAvatars = contacts?.map((contact, index) => ({
    ...contact,
    avatar: avatarsSrcs?.[index],
  })) as Contact[]

  return {
    contactsWithAvatars,
    isLoading: contactsLoading || avatarsLoading,
    error: contactsError || avatarsError,
  }
}
