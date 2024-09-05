'use server'
import type { GetObjectCommandInput, PutObjectCommandInput } from '@aws-sdk/client-s3'
import { s3, GetObjectCommand, PutObjectCommand, getSignedUrl } from '@/lib/aws/aws-s3-client'
import { auth } from '@/lib/auth/auth'

/**
 * Retrieves the signed URL for an image from S3.
 *
 * @param key The key of the image to retrieve
 * @returns The signed URL to retrieve the image from S3
 */
export const getImageUrl = async (key: string) => {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  try {
    const getParams: GetObjectCommandInput = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
    }
    const command = new GetObjectCommand(getParams)
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 })
    return url
  } catch (err) {
    console.error('Error getting signed URL:', err)
    throw new Error('Error getting signed URL from S3')
  }
}

/**
 * Retrieves the signed URLs for multiple images from S3.
 *
 * @param keys An array of keys of the images to retrieve
 * @returns An array of signed URLs to retrieve the images from S3
 */
export const getImageUrls = async (keys: (string | null)[]) => {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  try {
    const urls = await Promise.all(
      keys.map(async (key) => {
        if (!key) return null
        const getParams: GetObjectCommandInput = {
          Bucket: process.env.S3_BUCKET_NAME,
          Key: key,
        }
        const command = new GetObjectCommand(getParams)
        return await getSignedUrl(s3, command, { expiresIn: 3600 })
      })
    )
    return urls
  } catch (err) {
    console.error('Error getting signed URLs:', err)
    throw new Error('Error getting signed URLs from S3')
  }
}

/**
 * Retrieves the signed URL for uploading an image to S3.
 *
 * @param key The key of the image to upload
 * @returns The signed URL to upload the image to S3
 */
export const getImageUploadUrl = async (key: string) => {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  const putParams: PutObjectCommandInput = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
  }

  try {
    const command = new PutObjectCommand(putParams)
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 })
    return url
  } catch (err) {
    console.error('Error getting signed URL:', err)
    throw new Error('Error getting signed URL from S3')
  }
}
