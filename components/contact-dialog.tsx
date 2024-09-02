'use client'
import type { FormEvent, ReactNode } from 'react'

import { useState } from 'react'
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
import { Icon } from './ui/icon'
import { InputWithLabel } from './ui/input-with-label'
import { Subtitle } from './texts'
import { ProfilePic } from './profile-pic'
import { createContact } from '@/app/actions'
import AddPicture from './add-picture'

export function ContactDialog({ children, type }: { children: ReactNode; type: 'add' | 'edit' }) {
  const [open, setOpen] = useState(false)
  const [picture, setPicture] = useState<File>()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    await createContact(formData)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[364px]">
        <DialogHeader>
          <Subtitle>
            <span className="capitalize">{type}</span> contact
          </Subtitle>
          <DialogTitle className="sr-only">
            <span className="capitalize">{type}</span> contact
          </DialogTitle>
          <DialogDescription className="sr-only">Dialog add or edit form</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <ProfilePic width={88} height={88} />
            <AddPicture setPicture={setPicture} />
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
