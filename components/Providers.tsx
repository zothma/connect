'use client'

import { SessionProvider } from 'next-auth/react'
import { ToastProvider } from './toast/ToastProvider'
import HeaderVisibilityProvider from './layout/HeaderVisibilityProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ToastProvider>
        <HeaderVisibilityProvider>{children}</HeaderVisibilityProvider>
      </ToastProvider>
    </SessionProvider>
  )
}
