import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

export default function ButtonContent({ className, children }: Props) {
  const animationStyle = 'ease-in-out transition-all active:scale-95'
  const alignmentStyle = 'flex gap-3 justify-center items-center px-5 text-left'
  const otherStyle = 'min-h-[40px] rounded-[10px] bg-darker text-white'
  const style = [
    animationStyle,
    alignmentStyle,
    otherStyle,
    className ?? '',
  ].join(' ')

  return <span className={style}>{children}</span>
}
