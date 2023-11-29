'use client'

import { ToastData } from '@/types/components'
import { createContext } from 'react'

type ToastFunction = (message: string) => void
type ContextType =
  | {
      toast: ToastFunction
      getToasts: () => ToastData[]
    }
  | undefined

export const ToastContext = createContext<ContextType>(undefined)
