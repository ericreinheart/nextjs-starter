/**
 * removes the home slug (of the startpage) from the cached url
 */
export function sanitizeUrl(url: string) {
  return url.replace('home', '')
}
