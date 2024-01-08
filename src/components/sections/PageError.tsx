'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

import { Button, Container, Grid, Section } from '@/components/ui'

type PageErrorProps = {
  errorCode: number
  errorTitle: string
  errorText: string
  buttonLabel: string
}

export function PageError(props: PageErrorProps) {
  const { errorCode, errorTitle, errorText, buttonLabel } = props

  const router = useRouter()

  const handleClick = () => {
    if (errorCode === 404) {
      return router.push('/')
    }

    router.refresh()
  }

  return (
    <Section>
      <Container>
        <Grid>
          <div className="col-span-6 md:col-span-12">
            <h1>{errorCode}</h1>

            <h2>{errorTitle}</h2>
            <p>{errorText}</p>

            <Button onClick={handleClick}>{buttonLabel}</Button>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}
