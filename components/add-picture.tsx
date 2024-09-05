'use client'
import type { AllowedImageExtensions } from '@/lib/site-config'
import type { ChangeEvent, Dispatch, SetStateAction } from 'react'

import { getImageUploadUrl, getImageUrl } from '@/app/s3-actions'
import { resizeImage } from '@/lib/client-utils'
import { allowedImageExtensions } from '@/lib/site-config'
import { nanoid } from 'nanoid'
import { useRef } from 'react'
import { AddIcon } from './icons/add'
import { Button } from './ui/button'

interface AddPictureButtonProps {
  setNewKey: Dispatch<SetStateAction<string | null>>
  setNewImageUrl: Dispatch<SetStateAction<string | null>>
}

export function AddPictureButton({ setNewKey, setNewImageUrl }: AddPictureButtonProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const isAllowedImage = (ext: AllowedImageExtensions[number]) => {
    return allowedImageExtensions.includes(ext)
  }

  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const ext = file.name.split('.').pop() as AllowedImageExtensions[number]

      if (!isAllowedImage(ext)) {
        alert('Only JPEG, JPG, PNG and WEBP files are supported')
        return
      }

      const blob = await resizeImage(file, 176, 176)
      const resizedFile = new File([blob], file.name, { type: file.type })

      const key = nanoid() + `.${ext}`
      const url = await getImageUploadUrl(key)
      const status = await uploadFile(url, resizedFile)

      if (status === 'success') {
        getImageUrl(key).then((url) => {
          if (!url) return
          setNewKey(key)
          setNewImageUrl(url)
        })
      }

      if (status === 'failed') {
        alert('Failed to upload image')
        return
      }
    }
  }

  async function uploadFile(url: string, file: File) {
    const response = await fetch(url, {
      method: 'PUT',
      body: file,
      headers: { 'Content-Length': new Blob([file]).size.toString() },
    })

    if (!response.ok) return 'failed'
    else return 'success'
  }

  const handleAddClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <>
      <input type='file' ref={fileInputRef} className='sr-only' onChange={handleOnChange} />
      <Button intent='primary' variant='iconButton' icon={<AddIcon />} onClick={handleAddClick}>
        Add picture
      </Button>
    </>
  )
}
