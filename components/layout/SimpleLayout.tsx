import React from 'react'
import Container from '../common/Container'

type Props = {
  children: React.ReactNode
}

export default function SimpleLayout({ children }: Props) {
  return (
    <Container className="pt-4 md:pt-20 md:scroll-pt-20">{children}</Container>
  )
}
