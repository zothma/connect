import React, { useState } from 'react'
import style from './textarea.module.css'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label: string
}

export default function Textarea({
  id,
  label,
  className,
  onChange,
  ...props
}: Props) {
  const [data, setData] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(event.target.value)

    if (!onChange) return
    onChange(event)
  }

  return (
    <div
      className={`relative border-grey border-[1px] rounded-xl ${style.textarea_block}`}>
      <div
        className={style.grow_wrap}
        data-replicated-value={data}>
        <textarea
          id={id}
          className="px-4 py-2 w-full rounded-xl placeholder:text-transparent resize-none"
          placeholder={label}
          onChange={handleChange}
          rows={8}
          {...props}
        />
        <label
          className="translate-y-0 absolute left-3 top-2 text-grey bg-white px-1 cursor-text transition-all"
          htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  )
}
