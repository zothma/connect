"use client"

import { SessionProvider } from "next-auth/react"
import { ToastProvider } from "./toast/ToastProvider"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </SessionProvider>
  )
}