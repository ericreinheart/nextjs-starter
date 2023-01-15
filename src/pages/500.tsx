import { PageError, SeoSection } from '@/components/sections'

function Custom500Page() {
  return (
    <>
      <SeoSection
        title="500 Error"
        description="Oops! Server Error."
        isNoIndex={true}
      />
      <PageError
        errorCode={500}
        errorTitle="Oops, looks like something went wrong!"
        errorText="Well, this is awkward. Please try again later."
        buttonLabel="Try again"
      />
    </>
  )
}

export default Custom500Page
