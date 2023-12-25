'use client'

import React, { useState } from 'react'
import { HeaderVisibilityContext } from './HeaderVisibilityContext'

type Props = {
  children: React.ReactNode
}

export default function HeaderVisibilityProvider({ children }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <HeaderVisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </HeaderVisibilityContext.Provider>
  )
}
