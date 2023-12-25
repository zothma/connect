import { raleway } from "@/lib/fonts"
import React from "react"

type Props = {
  children: React.ReactNode,
  level: 1 | 2 | 3
}

export default function Title({ level, children }: Props) {
  const className = "tracking-wider " + raleway.className

  switch (level) {
    case 1:
      return <h1 className={"text-5xl font-bold " + className}>{children}</h1>
    case 2:
      return <h2 className={"text-4xl font-bold " + className}>{children}</h2>
    case 3:
      return <h3 className={"text-2xl font-semibold " + className}>{children}</h3>
  }
}