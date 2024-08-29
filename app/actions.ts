'use server'
import { contactFormSchema, contactSchema, type Contact } from '@/lib/schemas/contact.schema'

import { prisma } from '@/lib/prisma-client/prisma-client'
import { revalidatePath } from 'next/cache'
import { auth } from '@/lib/auth/auth'

export async function getContacts() {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  try {
    const contacts = await prisma.contact.findMany({
      where: {
        userId,
      },
    })

    return contacts.map((contact) => contactSchema.parse(contact))
  } catch (e) {
    throw new Error('Failed to fetch contacts')
  }
}

export async function getContact(id: string): Promise<Contact> {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  try {
    const contact = await prisma.contact.findUnique({
      where: {
        id: parseInt(id),
        userId,
      },
    })

    if (!contact) throw new Error('Contact not found')

    return contactSchema.parse(contact)
  } catch (e) {
    throw new Error('Failed to fetch contact')
  }
}

export async function createContact(formData: FormData) {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  try {
    const contact = contactFormSchema.parse({
      ...Object.fromEntries(formData.entries()),
      userId,
    })

    const data = {
      ...contact,
      avatar: null,
      userId,
    }

    await prisma.contact.create({
      data,
    })
  } catch (e) {
    console.log(e)
    throw new Error('Failed to create contact')
  }

  revalidatePath('/contacts')
}

export async function deleteContact(formData: FormData) {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  try {
    await prisma.contact.delete({
      where: {
        id: parseInt(formData.get('id') as string),
        userId,
      },
    })
  } catch (e) {
    throw new Error('Failed to delete contact')
  }

  revalidatePath('/contacts')
}

export async function updateContact(formData: FormData) {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  try {
    const contact = contactSchema.parse({
      ...Object.fromEntries(formData.entries()),
      userId,
    })

    await prisma.contact.update({
      where: {
        id: parseInt(formData.get('id') as string),
        userId,
      },
      data: contact,
    })
  } catch (e) {
    throw new Error('Failed to update contact')
  }

  revalidatePath('/contacts')
}
