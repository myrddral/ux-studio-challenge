import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { ZodError } from 'zod'

export function handleActionException(e: unknown) {
  if (e instanceof PrismaClientKnownRequestError) {
    switch (e.code) {
      case 'P2002':
        throw new Error('The contact already exists')
      default:
        console.error(`Prisma error: ${e.message}`)
        throw e
    }
  } else if (e instanceof ZodError) {
    console.error(`Zod error: ${e.message}`)

    throw e
  } else if (e instanceof Error) {
    console.error(`General error: ${e.message}`)

    throw e
  } else {
    console.error('An unknown error occurred')

    throw new Error('An unexpected error occurred')
  }
}
