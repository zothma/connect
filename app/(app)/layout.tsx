import HeaderBar from "@/components/navigation/HeaderBar";
import ToastContainer from "@/components/toast/ToastContainer";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-[100dvh] overflow-scroll scroll-smooth pb-16 md:pb-0 md:pt-16 md:scroll-pt-16">
        <HeaderBar />
        <div className="mx-auto w-[95%] max-w-7xl h-full">
          <ToastContainer />
          {children}
        </div>
      </div>
    </>
  )
}