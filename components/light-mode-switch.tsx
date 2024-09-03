'use client'
import { useTheme } from 'next-themes'
import { LightModeIcon } from './icons/light-mode'
import { Button } from './ui/button'

export function LightModeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()
  const handleClick = () => {
    setTheme(() => (resolvedTheme === 'dark' ? 'light' : 'dark'))
  }

  return <Button variant='iconOnly' intent='secondary' icon={<LightModeIcon />} onClick={handleClick} />
}
