import HeaderBar from "@/components/navigation/HeaderBar";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderBar />
      <div className="mx-auto w-[95%] max-w-7xl mb-16">
        {children}
      </div>
    </>
  )
}