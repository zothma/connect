import React from 'react'

type Props = {
  children: React.ReactNode
  isSmall?: boolean
  htmlFor?: string
}

export default function SmartSelectLabel({
  children,
  htmlFor,
  isSmall = false,
}: Props) {
  const sizeClassName = isSmall ? 'top-[0] text-xs font-bold' : 'top-[50%]'
  const className = `absolute left-3 -translate-y-[50%] text-grey bg-white px-1 cursor-text transition-all ${sizeClassName}`

  return (
    <label
      className={className}
      htmlFor={htmlFor}>
      {children}
    </label>
  )
}
