'use server'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { contactFormSchema, contactSchema } from '@/lib/schemas/contact.schema'
import prisma from '@/lib/prisma-client/prisma-client'
import { auth } from '@/lib/auth/auth'

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
    if (e instanceof PrismaClientKnownRequestError) {
      console.log(`Prisma error: ${e.message}`)
    }
    throw new Error('Failed to fetch contacts')
  }
}

export async function createContact(formData: FormData) {
  const { userId } = auth()

  if (!userId) throw new Error('Unauthorized')

  try {
    const contact = contactFormSchema.parse({
      ...Object.fromEntries(formData.entries()),
    })

    const data = {
      ...contact,
      userId,
    }

    await prisma.contact.create({
      data,
    })
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      console.log(`Prisma error: ${e.message}`)

      if (e.code === 'P2002') {
        throw new Error('The contact already exists')
      }
    }
    throw new Error('Failed to create contact')
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
    if (e instanceof PrismaClientKnownRequestError) {
      console.log(`Prisma error: ${e.message}`)
    }
    console.log(e)
    throw new Error('Failed to update contact')
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
    if (e instanceof PrismaClientKnownRequestError) {
      console.log(`Prisma error: ${e.message}`)
    }
    throw new Error('Failed to delete contact')
  }
}
