'use client'

import { createContext } from 'react'

type ContextType =
  | {
      isVisible: boolean
      setIsVisible: (status: boolean) => void
    }
  | undefined

export const HeaderVisibilityContext = createContext<ContextType>(undefined)
