import type { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useRef } from 'react'
import { Button } from './ui/button'
import { Icon } from './ui/icon'

interface AddPictureButtonProps {
  setImageUrl: Dispatch<SetStateAction<string>>
}

export function AddPictureButton({ setImageUrl }: AddPictureButtonProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // implement S3 upload
      console.log(file)
    }
  }

  const handleAddClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleOnChange} />
      <Button intent="primary" variant="iconButton" icon={<Icon icon="add" />} onClick={handleAddClick}>
        Add picture
      </Button>
    </>
  )
}
