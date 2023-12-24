import React from "react"
import Container from "../common/Container"

type Props = {
  children: React.ReactNode,
}

export default function SimpleLayout({ children }: Props) {
  return (
    <Container className="md:pt-16 md:scroll-pt-16">
      {children}
    </Container>
  )
}