import React from "react"

type Props = {
  children: React.ReactNode,
  className?: string
}

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={"mx-auto px-7 w-full max-w-7xl h-full " + className}>
      {children}
    </div>
  )
}