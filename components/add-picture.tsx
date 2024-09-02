import type { Dispatch, SetStateAction } from 'react'
import { useRef } from 'react'
import { Button } from './ui/button'
import { Icon } from './ui/icon'

const AddPicture = ({ setPicture }: { setPicture: Dispatch<SetStateAction<File | undefined>> }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleAddClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) {
            console.log(file)
          }
        }}
      />
      <Button intent="primary" variant="iconButton" icon={<Icon icon="add" />} onClick={handleAddClick}>
        Add picture
      </Button>
    </>
  )
}

export default AddPicture
