import Image from "next/image"
import React from "react"

type LocalProps = {
  name: string,
  type?: "line" | "fill",
}

type Props = LocalProps & Omit<React.ComponentPropsWithoutRef<typeof Image>, "src" | "alt">

export default function Icon({ name, type = "line", ...props }: Props) {
  return <Image src={`/icons/${name}-${type}.svg`} alt="icon" {...props} />
}