import { z } from 'zod'

export const contactSchema = z.object({
  id: z.number().int().positive(),
  email: z.string().email().min(1),
  name: z.string().min(1),
  phone: z.string().min(1),
  avatar: z.string().nullable(),
  userId: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const contactFormSchema = contactSchema.pick({
  email: true,
  name: true,
  phone: true,
  avatar: true,
})

export type Contact = z.infer<typeof contactSchema>
export type FormContact = z.infer<typeof contactFormSchema>
