import React from "react"
import Header from "./Header"
import Container from "../common/Container"

type HeaderOptions = React.ComponentPropsWithoutRef<typeof Header>

type Props = {
  children: React.ReactNode
  headerOptions: HeaderOptions
}

export default function HeaderLayout({ children, headerOptions }: Props) {
  return (
    <>
      <Header {...headerOptions} />
      <Container>
        {children}
      </Container>
    </>
  )
}