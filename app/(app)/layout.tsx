import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[95%] max-w-7xl">
      {children}
    </div>
  )
}