import { ContactDialog } from '@/components/contact-dialog'
import { AddIcon } from '@/components/icons/add'
import { BackArrowIcon } from '@/components/icons/back-arrow'
import { SettingsIcon } from '@/components/icons/settings'
import { LightModeSwitch } from '@/components/light-mode-switch'
import { SettingsDialog } from '@/components/settings-dialog'
import { Title } from '@/components/texts'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-[1fr_minmax(0,1fr)_1fr] grid-rows-[repeat(2,96px)_1fr] items-center md:grid-cols-[1fr_768px_1fr]'>
      <div className='grid-child col-start-1 col-end-2 row-start-2 row-end-3 flex h-full items-center justify-end p-6 pr-4'>
        <Link href='/'>
          <Button variant='iconOnly' intent='secondary' icon={<BackArrowIcon />} />
        </Link>
      </div>

      <div className='grid-child col-start-2 col-end-3 row-start-2 row-end-3 flex h-full items-center justify-between p-6'>
        <Title>Contacts</Title>
        <div className='flex items-center gap-x-5'>
          <div className='flex items-center gap-x-2'>
            <div className='flex-center h-10 w-10'>
              <SettingsDialog>
                <Button variant='iconOnly' intent='secondary' icon={<SettingsIcon />} />
              </SettingsDialog>
            </div>
            <div className='flex-center h-10 w-10'>
              <Button
                variant='iconOnly'
                intent='secondary'
                icon={<Image src={'/profile.png'} width={24} height={24} alt='' />}
              />
            </div>
          </div>
          <ContactDialog />
          <Link href='/contacts?action=add'>
            <Button intent={'special'} variant={'iconButton'} icon={<AddIcon />}>
              Add new
            </Button>
          </Link>
        </div>
      </div>

      <div
        className={cn(
          'grid-child col-start-2 col-end-3 row-start-3 row-end-4 flex px-6 py-3',
          'md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4 md:flex md:px-6 md:py-3',
          'min-h-[calc(100dvh-192px)]'
        )}
      >
        {children}
      </div>

      <div className='grid-child col-start-3 col-end-4 row-start-2 row-end-3 flex h-full items-center p-6 pl-4'>
        <LightModeSwitch />
      </div>
    </div>
  )
}
