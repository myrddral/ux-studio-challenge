import { createContact, deleteContact, updateContact } from '@/app/actions'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useMutations() {
  const q = useQueryClient()
  const invalidateContactList = () => q.invalidateQueries({ queryKey: ['get-contacts'] })
  const handleError = (e: unknown) => alert(e)

  const createContactMutation = useMutation({
    mutationKey: ['create-contact'],
    mutationFn: createContact,
    onSuccess: invalidateContactList,
    onError: handleError,
  })

  const updateContactMutation = useMutation({
    mutationKey: ['update-contact'],
    mutationFn: updateContact,
    onSuccess: invalidateContactList,
    onError: handleError,
  })

  const deleteContactMutation = useMutation({
    mutationKey: ['delete-contact'],
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
