import { createContact, deleteContact, updateContact } from '@/app/actions'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useMutations() {
  const q = useQueryClient()
  const invalidateContactList = () => q.invalidateQueries({ queryKey: ['get-contacts-server-action'] })
  const handleError = (e: unknown) => alert(e)

  const createContactMutation = useMutation({
    mutationKey: ['create-contact-server-action'],
    mutationFn: createContact,
    onSuccess: invalidateContactList,
    onError: handleError,
  })

  const updateContactMutation = useMutation({
    mutationKey: ['update-contact-server-action'],
    mutationFn: updateContact,
    onSuccess: invalidateContactList,
    onError: handleError,
  })

  const deleteContactMutation = useMutation({
    mutationKey: ['delete-contact-server-action'],
    mutationFn: deleteContact,
    onSuccess: invalidateContactList,
    onError: handleError,
  })

  return {
    createContactMutation,
    updateContactMutation,
    deleteContactMutation,
  }
}
