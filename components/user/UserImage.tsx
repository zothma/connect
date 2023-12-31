import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";

type LocalProps = {
  user: User,
  width?: number,
  height?: number
}

type Props = LocalProps & Omit<React.ComponentPropsWithoutRef<typeof Image>, "src" | "alt" | "height" | "width">

export default function UserImage({ user, width = 100, height = 100, ...props }: Props) {
  if (user.image) {
    return (
      <Image
        src={user.image}
        alt={user.name + ' image'}
        width={width}
        height={height}
        {...props} />
    )
  } else {
    return <></>
  }
}