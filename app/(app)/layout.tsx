import HeaderBar from '@/components/navigation/HeaderBar'
import ToastContainer from '@/components/toast/ToastContainer'
import React from 'react'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-[100dvh] overflow-scroll scroll-smooth pb-16 md:pb-0">
        <HeaderBar />
        <ToastContainer />
        {children}
      </div>
    </>
  )
}
