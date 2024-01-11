'use client'

import { ToastData, ToastType } from '@/types/components'
import { createContext } from 'react'

type ToastFunction = (message: string, type?: ToastType) => void
type ContextType =
  | {
      toast: ToastFunction
      getToasts: () => ToastData[]
      removeToast: (id: ToastData['id']) => void
    }
  | undefined

export const ToastContext = createContext<ContextType>(undefined)
