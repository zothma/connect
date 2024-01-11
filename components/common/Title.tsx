import { raleway } from '@/lib/fonts'
import React from 'react'

type Props = {
  children: React.ReactNode
  level: 1 | 2 | 3
  className?: string
}

export default function Title({
  level,
  children,
  className: propsClassName,
}: Props) {
  const className = `tracking-wide text-darker ${raleway.className} ${propsClassName}`

  switch (level) {
    case 1:
      return <h1 className={'text-5xl font-bold ' + className}>{children}</h1>
    case 2:
      return <h2 className={'text-4xl font-bold ' + className}>{children}</h2>
    case 3:
      return (
        <h3 className={'text-2xl font-semibold ' + className}>{children}</h3>
      )
  }
}
