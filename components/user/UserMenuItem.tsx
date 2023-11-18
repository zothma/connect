"use client"

import React from "react"
import UserImage from "./UserImage"
import { signOut } from "next-auth/react"

type Props = Omit<React.ComponentPropsWithoutRef<typeof UserImage>, "width" | "height">

export default function UserMenuItem({ className, ...props }: Props) {
  return (
    <button onClick={() => signOut()}>
      <UserImage
        height={30}
        width={30} className={"rounded-full " + className} {...props} />
    </button>
  )
}