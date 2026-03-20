import { PageError } from '@/components/sections'

function Custom404Page() {
  return (
    <PageError
        buttonLabel="Back Home"
        errorCode={404}
        errorText="Well, this is awkward. We couldn't find the page, sorry!"
        errorTitle="Looks like you're lost!"
      />
  )
}

export default Custom404Page
