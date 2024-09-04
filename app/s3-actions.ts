'use server'
import { s3, GetObjectCommand, getSignedUrl } from '@/lib/aws/aws-s3-client'

//TODO: check if its worth doing batch updates with several keys of contactlist
export const getImageUrl = async (key: string) => {
  const getParams = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
  }

  try {
    const command = new GetObjectCommand(getParams)
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 })
    return url
  } catch (err) {
    console.error('Error getting signed URL:', err)
    throw new Error('Error getting signed URL from S3')
  }
}

export const getImageUrls = async (keys: (string | null)[]) => {
  const getParams = {
    Bucket: process.env.S3_BUCKET_NAME,
  }

  try {
    const urls = await Promise.all(
      keys.map(async (key) => {
        if (!key) return null
        const command = new GetObjectCommand({ ...getParams, Key: key as string })
        return await getSignedUrl(s3, command, { expiresIn: 3600 })
      })
    )
    return urls
  } catch (err) {
    console.error('Error getting signed URLs:', err)
    throw new Error('Error getting signed URLs from S3')
  }
}
