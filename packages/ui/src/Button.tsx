import * as React from 'react'
import { Button as AriakitButton } from '@ariakit/react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cx } from './cx'

const buttonVariants = cva('', {
  variants: {
    variant: {
      filled: '',
      outline: '',
    },
  },
  defaultVariants: {
    variant: 'filled',
  },
})

export type ButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof AriakitButton>,
  'disabled'
> &
  VariantProps<typeof buttonVariants> & {
    isDisabled?: boolean
    isLoading?: boolean
  }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      isDisabled = false,
      isLoading = false,
      variant,
      className,
      children,
      ...rest
    } = props

    return (
      <AriakitButton
        ref={ref}
        className={cx(buttonVariants({ variant }), className)}
        disabled={isDisabled || isLoading}
        {...rest}
      >
        {children}
      </AriakitButton>
    )
  },
)

Button.displayName = 'Button'
