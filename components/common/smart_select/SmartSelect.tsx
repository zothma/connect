import React from 'react'
import ReactSelect, { CSSObjectWithLabel, ThemeConfig } from 'react-select'
import AsyncSelect from 'react-select/async'
import tailwindConfig from '@/tailwind.config'
import SelectContainer from './SmartSelectContainer'
import { SmartSelectContext } from './SmartSelectContext'
import { ClearIndicator, DropdownIndicator } from './SmartSelectIndicators'
import {
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
} from './SmartSelectMulti'
import showNoOptionsMessage from './SmartSelectNoOptions'

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

/**
 * Handles the change event of the SmartSelect component.
 * @param option - The selected option(s).
 */
function globalHandleChange<T extends boolean>(
  option: Value<T>,
  isMulti: boolean = false,
  onChange?: OnChangeCallback<T>
) {
  if (!onChange) return

  if (isMulti) {
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

// Defining the replacement components
const components: SelectComponents = {
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  ClearIndicator,
  DropdownIndicator,
  SelectContainer,
}

export default function SmartSelect<T extends boolean>({
  id,
  label,
  onChange,
  ...props
}: Props<T>) {
  const handleChange = (option: Value<T>) => {
    globalHandleChange(option, props.isMulti, onChange)
  }

  return (
    <SmartSelectContext.Provider value={{ id, label }}>
      <ReactSelect
        name={id}
        inputId={id}
        placeholder={label}
        theme={theme}
        styles={styles}
        components={components}
        noOptionsMessage={showNoOptionsMessage}
        onChange={(value) => handleChange(value as Value<T>)}
        isSearchable
        {...props}
      />
    </SmartSelectContext.Provider>
  )
}

type AsyncProps = Pick<
  React.ComponentProps<typeof AsyncSelect>,
  'loadOptions' | 'defaultOptions'
>

export function AsyncSmartSelect<T extends boolean>({
  id,
  label,
  onChange,
  ...props
}: Omit<Props<T>, 'options'> & AsyncProps) {
  const handleChange = (option: Value<T>) => {
    globalHandleChange(option, props.isMulti, onChange)
  }

  return (
    <SmartSelectContext.Provider value={{ id, label }}>
      <AsyncSelect
        name={id}
        inputId={id}
        placeholder={label}
        theme={theme}
        styles={styles}
        components={components}
        noOptionsMessage={showNoOptionsMessage}
        loadingMessage={() => 'Chargement...'}
        onChange={(value) => handleChange(value as Value<T>)}
        defaultOptions
        isSearchable
        {...props}
      />
    </SmartSelectContext.Provider>
  )
}
