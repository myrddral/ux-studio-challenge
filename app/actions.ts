'use server'
import { handleActionException } from '@/lib/action-exception-handler'
import { auth } from '@/lib/auth/auth'
import prisma from '@/lib/prisma-client/prisma-client'
import { contactFormSchema, contactSchema } from '@/lib/schemas/contact.schema'

export async function getContacts() {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  try {
    console.log('Getting contacts')
    const contacts = await prisma.contact.findMany({
      where: {
        userId,
      },
      orderBy: {
        name: 'asc',
      },
    })

    return contacts.map((contact) => contactSchema.parse(contact))
  } catch (e) {
    handleActionException(e)
  }
}

export async function createContact(formData: FormData) {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  try {
    const contact = contactFormSchema.parse({
      ...Object.fromEntries(formData.entries()),
    })

    const data = { ...contact, userId }

    await prisma.contact.create({
      data,
    })
  } catch (e) {
    handleActionException(e)
  }
}

export async function updateContact(formData: FormData) {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  try {
    const contact = contactFormSchema.parse({
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
    handleActionException(e)
  }
}

export async function deleteContact(contactId: number) {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  try {
    await prisma.contact.delete({
      where: {
        id: contactId,
        userId,
      },
    })
  } catch (e) {
    handleActionException(e)
  }
}
