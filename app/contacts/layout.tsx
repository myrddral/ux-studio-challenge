import { Title } from '@/components/texts'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'

export default function ContactsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative grid max-h-[900px] max-w-[1440px] grid-cols-[1fr_768px_1fr] grid-rows-[repeat(2,96px)_1fr] items-center gap-0">
      <div className="grid-child col-start-2 col-end-3 row-start-2 row-end-3 -m-[1px] flex h-full items-center justify-between p-6">
        <Title>Contacts</Title>
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-2">
            <div className="flex-center h-10 w-10">
              <Icon icon="settings" />
            </div>
            <div className="flex-center h-10 w-10">
              <Icon icon="profile" />
            </div>
          </div>
          <Button intent={'special'} variant={'iconButton'} icon={<Icon icon="add" />}>
            Add new
          </Button>
        </div>
      </div>

      <div className="grid-child col-start-2 col-end-3 row-start-3 row-end-4 flex h-full px-6 py-3">
        {children}
      </div>

      <div className="grid-child col-start-1 col-end-2 row-start-2 row-end-3 flex h-full items-center justify-end p-6">
        <Icon icon="back-arrow" />
      </div>

      <div className="grid-child col-start-3 col-end-4 row-start-2 row-end-3 flex h-full items-center p-6">
        <Icon icon="light-mode" />
      </div>
    </div>
  )
}
