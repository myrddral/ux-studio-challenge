'use client'

import { Subtitle } from '../texts'
import { AddIcon } from '../icons/add'
import { BackArrowIcon } from '../icons/back-arrow'
import { CallIcon } from '../icons/call'
import { ChangeIcon } from '../icons/change'
import { DeleteIcon } from '../icons/delete'
import { FavouriteIcon } from '../icons/favourite'
import { LightModeIcon } from '../icons/light-mode'
import { MuteIcon } from '../icons/mute'
import { SearchIcon } from '../icons/search'
import { SettingsIcon } from '../icons/settings'

export function IconsPreview() {
  return (
    <section className='flex w-full flex-col gap-4 py-6'>
      <Subtitle className='underline decoration-dashed decoration-1 underline-offset-2'>Icons</Subtitle>
      <div className='flex flex-wrap gap-4'>
        <AddIcon />
        <BackArrowIcon />
        <CallIcon />
        <ChangeIcon />
        <DeleteIcon />
        <FavouriteIcon />
        <LightModeIcon />
        <MuteIcon />
        <SearchIcon />
        <SettingsIcon />
      </div>
    </section>
  )
}
