import * as React from 'react'

import { Footer, Header, ThirdPartyScripts } from '@/components/core'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </div>

      {/* third party scripts */}
      <ThirdPartyScripts />
    </>
  )
}
