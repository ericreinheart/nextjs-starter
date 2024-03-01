'use client'

import * as React from 'react'
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { ChevronsUpDown } from 'lucide-react'

import { cx } from '@/utils'

type FiatSelectorProps = React.ComponentPropsWithoutRef<'div'>

type Currency = {
  id: number
  name: string
  unavailable: boolean
}

const FIAT_CURRENCIES = [
  { id: 1, name: 'USD', unavailable: false },
  { id: 2, name: 'EUR', unavailable: false },
  { id: 3, name: 'JPY', unavailable: false },
  { id: 4, name: 'GBP', unavailable: true },
  { id: 5, name: 'CNY', unavailable: false },
]
/**
 * FiatSelector component
 */

export const FiatSelector = React.forwardRef<HTMLDivElement, FiatSelectorProps>(
  (props, ref) => {
    const { className, ...rest } = props
    const [selectedFiat, setSelectedFiat] = useState(FIAT_CURRENCIES[0])

    function onChangeHandler(currency: Currency) {
      setSelectedFiat(currency)
    }

    return (
      <Listbox ref={ref} value={selectedFiat} onChange={onChangeHandler}>
        <div className="relative">
          <Listbox.Button
            className={cx(
              'flex flex-row items-center gap-x-2 hover:text-orange',
            )}
          >
            {selectedFiat.name}
            <ChevronsUpDown />
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-black">
            {FIAT_CURRENCIES.map((currency) => (
              <Listbox.Option
                key={currency.id}
                value={currency}
                disabled={currency.unavailable}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 hover:text-orange ${
                    active ? '' : ''
                  }`
                }
              >
                {currency.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    )
  },
)

FiatSelector.displayName = 'FiatSelector'
