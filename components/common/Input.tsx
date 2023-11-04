import { HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes } from "react"

type Props = {
  placeholder?: string,
  icon?: string,
  type?: HTMLInputTypeAttribute,
  className?: string
}

export default function Input({ placeholder, icon, type, className }: Props) {
  return (
    <input
      type={type ?? 'text'}
      placeholder={placeholder}
      className={'h-11 border-black border-[1px] rounded-xl px-3 ' + (className ?? '')}
    />
  )
}