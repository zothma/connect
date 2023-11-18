"use client"

import React from "react"
import UserImage from "./UserImage"
import { signOut } from "next-auth/react"

type Props = Omit<React.ComponentPropsWithoutRef<typeof UserImage>, "width" | "height">

export default function UserMenuItem({ className, ...props }: Props) {
  return (
    <button onClick={() => signOut()} className={"h-10 w-10 " + className}>
      <UserImage
        height={40}
        width={40} className="rounded-full h-full w-full" {...props} />
    </button>
  )
}