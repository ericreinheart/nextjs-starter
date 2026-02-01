const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

export function getVersion() {
  return isProduction ? 'published' : 'draft'
}
