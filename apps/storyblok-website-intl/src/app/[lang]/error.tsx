"use client"

import { PageError } from '@/components/sections'

// read more: https://nextjs.org/docs/app/api-reference/file-conventions/error

function Custom500Page(
// props: {
//   error: Error & { digest?: string }
//   reset: () => void
// }
) {
  // const { error, reset } = props

  return (
    <PageError
        buttonLabel="Try again"
        errorCode={500}
        errorText="Well, this is awkward. Please try again later."
        errorTitle="Oops, looks like something went wrong!"
      />
  )
}

export default Custom500Page
