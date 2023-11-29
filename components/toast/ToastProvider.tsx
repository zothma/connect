"use client"

import React, { useState } from "react"
import { ToastContext } from "./ToastContext"
import { ToastData } from "@/types/components"

type Props = {
  children: React.ReactNode
}

export function ToastProvider({ children }: Props) {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const addToast = (message: string) => {
    const toast: ToastData = {
      id: Date.now(),
      message
    }

    setToasts((prev) => [...prev, toast])
  }

  const getToasts = () => toasts

  return (
    <ToastContext.Provider value={{ toast: addToast, getToasts }}>
      {children}
    </ToastContext.Provider>
  )
}