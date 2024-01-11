import { components, ContainerProps } from 'react-select'
import SmartSelectLabel from './SmartSelectLabel'
import { useContext, useState } from 'react'
import { SmartSelectContext } from './SmartSelectContext'

export default function SmartSelectContainer(props: ContainerProps) {
  const context = useContext(SmartSelectContext)
  if (!context) throw new Error('SmartSelectContext Provider is missing.')

  const { id, label } = context

  return (
    <div className="relative">
      <components.SelectContainer {...props} />

      <SmartSelectLabel
        isSmall={props.isFocused || props.hasValue}
        isBlack={props.isFocused}
        htmlFor={id}>
        {label}
      </SmartSelectLabel>
    </div>
  )
}
