'use client'

import { createContext } from 'react'

type ContextType =
  | {
      id: string
      label: string
    }
  | undefined

export const SmartSelectContext = createContext<ContextType>(undefined)
