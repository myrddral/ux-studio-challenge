'use client'
import type { Contact } from '@/lib/schemas/contact.schema'
import type { ChangeEvent, FormEvent, PropsWithChildren } from 'react'

//prettier-ignore
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { AddPictureButton } from './add-picture'
import { ProfilePic } from './profile-pic'
import { Subtitle } from './texts'
import { InputWithLabel } from './ui/input-with-label'
import { removeQueryParams } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useMutations } from '@/hooks/mutations'

const defaultValues = {
  email: '',
  name: '',
  phone: '',
  avatar: '',
}

type ActionType = 'add' | 'edit'

/**
 * Dialog for adding or editing a contact
 * @param children The element (usually a button) which triggers the dialog (optional)
 * @returns The trigger element visibly rendered in the DOM and the dialog itself
 */
export function ContactDialog({ children }: PropsWithChildren) {
  const [formValues, setFormValues] = useState<Contact>(defaultValues as Contact)
  const { createContactMutation, updateContactMutation } = useMutations()
  const [imageUrl, setImageUrl] = useState('')
  const params = useSearchParams()
  const action = params.get('action') as ActionType
  const contactId = params.get('id') as string
  const [open, setOpen] = useState(false)

  const { data: contacts = [] } = useQuery({
    queryKey: ['get-contacts-server-action'],
    enabled: action === 'edit' && contactId?.length > 0,
  }) as { data: Contact[] }

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (open) {
        if (action === 'edit') {
          if (contactId && contacts.length > 0) {
            const contact = contacts.find((contact) => contact.id === parseInt(contactId))
            if (contact) setFormValues(contact)
          }
        }
      }

      if (!open) {
        removeQueryParams(['action', 'id'])
        setFormValues(defaultValues as Contact)
      }

      setOpen(open)
    },
    [action, contactId, contacts]
  )

  // open dialog if action is set in the URL
  // use handleOpenChange, otherwise the contact won't be set in edit mode
  useEffect(() => {
    if (action && ['add', 'edit'].includes(action)) handleOpenChange(true)
  }, [action, handleOpenChange])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (action === 'add') {
      const formData = new FormData(e.currentTarget)
      formData.append('avatar', imageUrl)
      createContactMutation.mutate(formData)
    } else {
      const formData = new FormData(e.currentTarget)
      formData.append('id', contactId)
      // formData.append('avatar', imageUrl)
      updateContactMutation.mutate(formData)
    }
    handleOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[364px]'>
        <DialogHeader>
          <Subtitle>
            <span className='capitalize'>{action}</span> contact
          </Subtitle>
          <DialogTitle className='sr-only'>
            <span className='capitalize'>{action}</span> contact
          </DialogTitle>
          <DialogDescription className='sr-only'>Dialog add or edit form</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-4'>
            <ProfilePic width={88} height={88} url={''} />
            <AddPictureButton setImageUrl={setImageUrl} />
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <InputWithLabel
              type='text'
              label='Name'
              name='name'
              defaultValue={formValues.name}
              onChange={handleInputChange}
              placeholder={action === 'add' ? 'Jamie Wright' : undefined}
              required
              minLength={3}
              maxLength={255}
            />
            <InputWithLabel
              type='tel'
              label='Phone number'
              name='phone'
              defaultValue={formValues.phone}
              onChange={handleInputChange}
              placeholder={action === 'add' ? '+36 1 234 5678' : undefined}
              required
              minLength={11}
              maxLength={11}
            />
            <InputWithLabel
              type='email'
              label='Email address'
              name='email'
              defaultValue={formValues.email}
              onChange={handleInputChange}
              placeholder={action === 'add' ? 'jamie.wright@mail.com' : undefined}
              required
              minLength={7}
              maxLength={255}
            />
            <DialogFooter className='pt-6'>
              <DialogClose asChild>
                <Button type='button' intent='secondary'>
                  Cancel
                </Button>
              </DialogClose>
              <Button type='submit'>Done</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
