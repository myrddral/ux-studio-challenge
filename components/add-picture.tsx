'use client'
import type { ChangeEvent, Dispatch, SetStateAction } from 'react'

import { useRef } from 'react'
import { Button } from './ui/button'
import { AddIcon } from './icons/add'
import { getImageUrls, getUploadUrl } from '@/app/s3-actions'
import { nanoid } from 'nanoid'

interface AddPictureButtonProps {
  setImageUrl: Dispatch<SetStateAction<string | null>>
}

export function AddPictureButton({ setImageUrl }: AddPictureButtonProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const extension = file.name.split('.').pop() as string
      if (['jpeg', 'jpg', 'png', 'webp'].indexOf(extension) === -1) {
        alert('Only JPEG, JPG, PNG and WEBP files are supported')
        return
      }
      const key = nanoid() + `.${extension}`
      const url = await getUploadUrl(key)
      const res = await uploadFile(url, file)

      if (res) {
        getImageUrls([key]).then((urls) => {
          if (!urls.length) return
          setImageUrl(urls[0])
        })
      }
      console.log(key)
      console.log(file)
      console.log(res)
    }
  }

  async function uploadFile(url: string, file: File) {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch(url, {
      method: 'PUT',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Failed to upload file')
    }

    return true
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
