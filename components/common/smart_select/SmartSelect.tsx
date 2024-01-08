import ReactSelect, { CSSObjectWithLabel, ThemeConfig } from 'react-select'
import tailwindConfig from '@/tailwind.config'
import React, { useState } from 'react'
import SmartSelectLabel from './SmartSelectLabel'
import {
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
} from './SmartSelectMulti'
import showNoOptionsMessage from './SmartSelectNoOptions'
import { ClearIndicator, DropdownIndicator } from './SmartSelectIndicators'

type Option = { label: string; value: string }
type SelectStyles = React.ComponentProps<typeof ReactSelect>['styles']
type SelectStylesFn = (base: CSSObjectWithLabel) => CSSObjectWithLabel
type SelectComponents = React.ComponentProps<typeof ReactSelect>['components']

type Value<T extends boolean> = T extends true ? Option[] : Option

/**
 * Props for the SmartSelect component.
 */
type OnChangeCallback<T extends boolean> = (value: Value<T>) => void

type Props<T extends boolean> = {
  id: string
  label: string
  options: Option[]
  isMulti: T
  onChange?: OnChangeCallback<T>
}

/**
 * Extends the styles of a React Select component.
 *
 * @param extension - The CSS properties to apply.
 * @returns A function that extends the base styles with the provided extension.
 */
function extendStyles(extension: CSSObjectWithLabel): SelectStylesFn {
  return (base) => ({ ...base, ...extension })
}

function valueIsEmpty(value: Option | Option[], isMulti: boolean = false) {
  if (isMulti) return (value as any[]).length === 0
  return value === null || value === undefined
}

export default function SmartSelect<T extends boolean>({
  id,
  label,
  onChange,
  ...props
}: Props<T>) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  /**
   * Handles the change event of the SmartSelect component.
   * @param option - The selected option(s).
   */
  const handleChange = (option: Value<T>) => {
    setHasValue(!valueIsEmpty(option, props?.isMulti))
    if (!onChange) return

    if (props.isMulti) {
      const _onChange = onChange as OnChangeCallback<true>
      const _option = option as Option[]
      _onChange(_option)
    } else {
      const _onChange = onChange as OnChangeCallback<false>
      const _option = option as Option
      _onChange(_option)
    }
  }

  // Defining the global theme
  const tailwindColors = tailwindConfig.theme.colors
  const theme: ThemeConfig = (base) => ({
    ...base,
    borderRadius: 10,
    colors: {
      ...base.colors,
      primary25: tailwindColors.lightgrey,
      primary50: tailwindColors.grey,
      primary75: tailwindColors.dark,
      primary: tailwindColors.darker,
      neutral20: tailwindColors.grey,
      neutral30: tailwindColors.darker,
      neutral40: tailwindColors.darker,
      neutral50: tailwindColors.grey,
    },
  })

  // Defining the specific styles
  const styles: SelectStyles = {
    control: extendStyles({
      paddingTop: '0.625rem',
      paddingLeft: '0.75rem',
      paddingRight: '0.5rem',
      paddingBottom: '0.5rem',
      cursor: 'text',
    }),
    valueContainer: extendStyles({
      padding: '0',
      gap: '10px',
    }),
    input: extendStyles({ margin: '0' }),
    indicatorsContainer: extendStyles({ gap: '8px' }),
    indicatorSeparator: extendStyles({ margin: '2px 0' }),
    placeholder: extendStyles({ display: 'none' }),
  }

  // Replacing components
  const components: SelectComponents = {
    MultiValueContainer: MultiValueContainer,
    MultiValueLabel: MultiValueLabel,
    MultiValueRemove: MultiValueRemove,
    ClearIndicator: ClearIndicator,
    DropdownIndicator: DropdownIndicator,
  }

  return (
    <div className="relative">
      <ReactSelect
        name={id}
        inputId={id}
        placeholder={label}
        theme={theme}
        styles={styles}
        components={components}
        noOptionsMessage={showNoOptionsMessage}
        onChange={(value) => handleChange(value as Value<T>)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isSearchable
        {...props}
      />

      <SmartSelectLabel
        isSmall={isFocused || hasValue}
        htmlFor={id}>
        {label}
      </SmartSelectLabel>
    </div>
  )
}
