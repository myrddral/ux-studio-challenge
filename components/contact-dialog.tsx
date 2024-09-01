'use client'
import type { ReactNode } from 'react'

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

export function ContactDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[364px]">
        <DialogHeader>
          <Subtitle>Add contact</Subtitle>
          <DialogTitle className="sr-only">Add contact</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <ProfilePic width={88} height={88} />
            <Button intent={'primary'} variant={'iconButton'} icon={<Icon icon="add" />}>
              Add picture
            </Button>
          </div>
          <form action={createContact} className="flex flex-col gap-6">
            <InputWithLabel label="Name" name="name" placeholder="Jamie Wright" />
            <InputWithLabel label="Phone number" name="phone" placeholder="+01 234 5678" />
            <InputWithLabel label="Email address" name="email" placeholder="jamie.wright@mail.com" />
            <DialogFooter className="pt-6">
              <DialogClose asChild>
                <Button type="button" intent={'secondary'}>
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
