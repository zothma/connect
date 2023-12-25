import Image from "next/image"
import { MouseEventHandler } from "react"
import IconSvg from "./IconSvg"

type Props = {
  children: React.ReactNode,
  className?: string,
  icon?: any,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, className, icon, onClick }: Props) {
  return (
    <button
      className={'ease-in-out transition-all flex gap-3 justify-center min-h-[40px] items-center rounded-[10px] bg-darker text-white px-5 text-left active:scale-95 ' + (className ?? '')}
      onClick={onClick}>
      {(icon) ? <IconSvg icon={icon} height={18} /> : <></>}
      {children}
    </button>
  )
}