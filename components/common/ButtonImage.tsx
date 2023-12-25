import { StaticImport } from "next/dist/shared/lib/get-img-props"
import React, { MouseEventHandler } from "react"
import IconSvg from "./IconSvg"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string | StaticImport,
  iconHeight?: number,
  iconWidth?: number
  className?: string,
}

export default function ButtonImage({ icon, iconHeight = 20, iconWidth = 20, className, ...props }: Props) {
  return (
    <button
      className={"relative ease-out transition-transform h-9 w-9 bg-white rounded-full active:scale-90 " + (className ?? '')}
      {...props}>
      <IconSvg icon={icon} height={iconHeight} width={iconWidth} className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
    </button>
  )
}