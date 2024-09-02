'use client'
import type { FormEvent, ReactNode } from 'react'

import { createContact } from '@/app/actions'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DialogClose } from '@radix-ui/react-dialog'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AddPictureButton } from './add-picture'
import { ProfilePic } from './profile-pic'
import { Subtitle } from './texts'
import { InputWithLabel } from './ui/input-with-label'

interface ContactDialogProps {
  children: ReactNode
  type: 'add' | 'edit'
}

export function ContactDialog({ children, type }: ContactDialogProps) {
  const params = useSearchParams()
  const [dialogType, setDialogType] = useState(type)
  const [open, setOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    const actionType = params.get('action')
    if (actionType && ['add', 'edit'].includes(actionType)) {
      setDialogType(actionType as ContactDialogProps['type'])
      setOpen(true)
    }
  }, [params])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    formData.append('avatar', imageUrl)
    await createContact(formData)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[364px]">
        <DialogHeader>
          <Subtitle>
            <span className="capitalize">{dialogType}</span> contact
          </Subtitle>
          <DialogTitle className="sr-only">
            <span className="capitalize">{dialogType}</span> contact
          </DialogTitle>
          <DialogDescription className="sr-only">Dialog add or edit form</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <ProfilePic width={88} height={88} url={''} />
            <AddPictureButton setImageUrl={setImageUrl} />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <InputWithLabel
              type="text"
              label="Name"
              name="name"
              placeholder="Jamie Wright"
              required
              minLength={3}
              maxLength={255}
            />
            <InputWithLabel
              type="tel"
              label="Phone number"
              name="phone"
              placeholder="+01 234 5678"
              required
              minLength={11}
              maxLength={11}
            />
            <InputWithLabel
              type="email"
              label="Email address"
              name="email"
              placeholder="jamie.wright@mail.com"
              required
              minLength={3}
              maxLength={255}
            />
            <DialogFooter className="pt-6">
              <DialogClose asChild>
                <Button type="button" intent="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Done</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
