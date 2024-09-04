import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeQueryParams(params: string[]) {
  const url = new URL(window.location.href)
  params.forEach((key) => {
    url.searchParams.delete(key)
  })
  window.history.replaceState({}, '', url.toString())
}
