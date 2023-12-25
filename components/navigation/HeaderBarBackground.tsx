'use client'

import useHeaderVisibility from '@/hooks/useHeaderVisibility'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function HeaderBarBackground({ children }: Props) {
  const { isVisible: isHeaderVisible } = useHeaderVisibility()
  const transparentClassName = 'md:bg-transparent md:drop-shadow-none'

  return (
    <div
      className={
        'bg-white drop-shadow-box rounded-xl transition-all duration-200 md:rounded-none ' +
        (isHeaderVisible && transparentClassName)
      }>
      {children}
    </div>
  )
}
