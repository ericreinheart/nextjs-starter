import * as React from 'react'

import { cx } from './cx'

const FILLED_BUTTON_CLASSES = cx('')
const OUTLINE_BUTTON_CLASSES = cx('')
const DISABLED_BUTTON_CLASSES = cx('')

const BUTTON_CLASSES = {
  default: cx(''),
  filled: FILLED_BUTTON_CLASSES,
  outline: OUTLINE_BUTTON_CLASSES,
  disabled: DISABLED_BUTTON_CLASSES, // use `disabled:` prefix
  loading: DISABLED_BUTTON_CLASSES,
}

export type ButtonProps = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'disabled'
> & {
  isDisabled?: boolean
  isLoading?: boolean
  variant?: 'filled' | 'outline'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      isDisabled = false,
      isLoading = false,
      variant = 'filled',
      className,
      children,
      ...rest
    } = props

    const classes = cx(
      className,
      BUTTON_CLASSES.default,
      BUTTON_CLASSES[variant],
      BUTTON_CLASSES.disabled,
    )

    return (
      <button
        ref={ref}
        className={classes}
        disabled={isDisabled || isLoading}
        type="button"
        {...rest}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
