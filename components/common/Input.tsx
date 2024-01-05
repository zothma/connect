import React from 'react'
import style from './input.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  icon?: string
}

export default function Input({
  id,
  label,
  icon,
  type,
  className,
  ...props
}: Props) {
  return (
    <div className={'relative ' + style.input_block}>
      <input
        id={id}
        type={type ?? 'text'}
        placeholder={label}
        className={
          'h-11 border-grey border-[1px] placeholder:text-transparent rounded-xl px-4 w-full text-darker ' +
          (className ?? '')
        }
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-3 top-[50%] -translate-y-[50%] text-grey bg-white px-1 cursor-text transition-all">
        {label}
      </label>
    </div>
  )
}
