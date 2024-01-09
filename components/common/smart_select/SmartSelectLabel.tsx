import React from 'react'

type Props = {
  children: React.ReactNode
  isSmall?: boolean
  isBlack?: boolean
  htmlFor?: string
}

export default function SmartSelectLabel({
  children,
  htmlFor,
  isSmall = false,
  isBlack = false,
}: Props) {
  const sizeClassName = isSmall ? 'top-[0] text-xs font-bold' : 'top-[50%]'
  const colorClassName = isBlack ? 'text-dark' : 'text-grey'
  const className = `absolute left-3 -translate-y-[50%] bg-white px-1 cursor-text transition-all ${colorClassName} ${sizeClassName}`

  return (
    <label
      className={className}
      htmlFor={htmlFor}>
      {children}
    </label>
  )
}
