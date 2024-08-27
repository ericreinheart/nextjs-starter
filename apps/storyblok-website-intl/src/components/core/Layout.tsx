import * as React from 'react'

import { Header } from './Header'
import { Footer } from './Footer'
import { ThirdPartyScripts } from './ThirdPartyScripts'

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
