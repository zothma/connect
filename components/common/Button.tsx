import Image from "next/image"
import { MouseEventHandler } from "react"

type Props = {
  children: React.ReactNode,
  className?: string,
  icon?: any,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, className, icon, onClick }: Props) {
  return (
    <button
      className={'ease-in-out transition-colors flex gap-3 justify-center min-h-[44px] items-center rounded-xl px-5 py-1 text-left ' + (className ?? '')}
      onClick={onClick}
    >
      {(icon) ? <Image src={icon} alt="Icon" width={18} height={18} /> : <></>}
      {children}
    </button>
  )
}