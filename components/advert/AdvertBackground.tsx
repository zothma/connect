import { gradientToCss } from '@/lib/color'
import React from 'react'

type Props = {
  gradient: Parameters<typeof gradientToCss>[0] | null
  active: boolean
  className?: string
  children: React.ReactNode
}

export default function AdvertBackground({
  gradient,
  active,
  children,
  className,
}: Props) {
  const gradientCss = gradient && gradientToCss(gradient)
  const style: React.CSSProperties = {
    backgroundImage: gradientCss ?? undefined,
  }

  const activeClassName = active ? 'scale-95' : ''

  return (
    <div
      className={`min-h-80 min-w-[330px] transition-transform rounded-[30px] drop-shadow-box ${activeClassName} ${className}`}
      style={style}>
      {children}
    </div>
  )
}
