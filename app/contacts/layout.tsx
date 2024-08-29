import { ContactDialog } from '@/components/contact-dialog'
import { Title } from '@/components/texts'
import { Icon } from '@/components/ui/icon'
import { cn } from '@/lib/utils'

export default function ContactsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_minmax(0,1fr)_1fr] grid-rows-[repeat(2,96px)_1fr] items-center gap-0 md:grid-cols-[1fr_768px_1fr]">
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
          <ContactDialog />
        </div>
      </div>

      <div
        className={cn(
          'grid-child col-start-2 col-end-3 row-start-3 row-end-4 -m-[1px] flex px-6 py-3',
          'md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4 md:-m-[1px] md:flex md:px-6 md:py-3',
          'min-h-[calc(100dvh-192px)]'
        )}
      >
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
