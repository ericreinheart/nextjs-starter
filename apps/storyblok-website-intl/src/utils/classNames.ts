import { type ClassValue, clsx } from 'clsx'

/**
 * classNames
 */
export function cx(...inputs: ClassValue[]) {
  return clsx(inputs)
}
