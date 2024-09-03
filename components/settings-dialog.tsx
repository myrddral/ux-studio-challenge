import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from './ui/button'
import { Subtitle } from './texts'

interface SettingsDialogProps {
  children: React.ReactNode
}

export function SettingsDialog({ children }: SettingsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[364px]'>
        <DialogHeader>
          <Subtitle>
            <span className='capitalize'>settings</span>
          </Subtitle>
          <DialogTitle className='sr-only'>settings</DialogTitle>
          <DialogDescription className='sr-only'>Dialog add or edit form</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-6'></div>
        <DialogFooter className='pt-6'>
          <DialogClose asChild>
            <Button type='button' intent='secondary'>
              Cancel
            </Button>
          </DialogClose>
          <Button type='submit'>Done</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
