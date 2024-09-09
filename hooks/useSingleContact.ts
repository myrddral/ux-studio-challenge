import type { Contact } from '@/lib/schemas/contact.schema'
import { useQueryClient } from '@tanstack/react-query'

export function useSingleContact(contactId: number): Contact | undefined {
  const queryClient = useQueryClient()
  const cachedContacts = queryClient.getQueryData<Contact[]>(['get-contacts'])
  const keys = cachedContacts?.map((contact) => contact.avatar)
  const cachedAvatars = queryClient.getQueryData<string[]>(['get-avatar-urls', keys])

  if (!cachedContacts) return

  const contact = cachedContacts.find((contact) => contact.id === contactId)

  if (!contact) return

  const contactIdx = cachedContacts.findIndex((contact) => contact.id === contactId)
  const avatar = cachedAvatars?.[contactIdx] || null

  const contactWithAvatar = { ...contact, avatar }

  return contactWithAvatar
}
