import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * classNames
 */
export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
