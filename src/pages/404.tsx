import { PageError, SeoSection } from '@/components/sections'

function Custom404Page() {
  return (
    <>
      <SeoSection
        title="404 Error"
        description="Oops! Page not found."
        isNoIndex={true}
      />
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
