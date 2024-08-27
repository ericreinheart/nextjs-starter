// eslint-disable-next-line @typescript-eslint/no-explicit-any -- @see https://github.com/lukeed/clsx/blob/master/clsx.d.ts || https://github.com/lukeed/clsx/blob/master/src/lite.js
type ClassDictionary = Record<string, any>
type ClassArray = ClassValue[]
type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | bigint
  | null
  | boolean
  | undefined

export function cx(...inputs: ClassValue[]) {
  let i = 0,
    tmp,
    str = ''

  const len = inputs.length

  for (; i < len; i++) {
    if ((tmp = inputs[i])) {
      if (typeof tmp === 'string') {
        str += (str && ' ') + tmp
      }
    }
  }

  return str
}
