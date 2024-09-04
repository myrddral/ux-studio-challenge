import { getContacts } from '@/app/actions'
import { getImageUrls } from '@/app/s3-actions'
import { useQuery } from '@tanstack/react-query'

// TODO: prefetch the contacts
export function useQueries() {
  const { data: contacts = [], isLoading: isContactsLoading } = useQuery({
    queryKey: ['get-contacts-server-action'],
    queryFn: async () => await getContacts(),
  })

  const keys = contacts.map((c) => (!c.avatar ? null : `${c.avatar}_thumbnail.webp`))

  // TODO: optimize - cache the thumbnails
  const { data: thumbnails = [] } = useQuery({
    queryKey: ['get-image-urls-s3-action', keys],
    queryFn: async () => await getImageUrls(keys),
    enabled: contacts.length > 0,
  })

  return {
    contacts,
    isContactsLoading,
    thumbnails,
  }
}
