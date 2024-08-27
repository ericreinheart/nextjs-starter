import { PageError } from '@/components/sections'

function Custom404Page() {
  return (
    <>
      <PageError
        errorCode={404}
        errorTitle="Looks like you're lost!"
        errorText="Well, this is awkward. We couldn't find the page, sorry!"
        buttonLabel="Back Home"
      />
    </>
  )
}

export default Custom404Page
