"use client"

import useToast from "@/hooks/useToast";

export default function ToastContainer() {
  const toasts = useToast().getToasts()

  return (
    <div className="flex flex-col">
      {toasts.map(t => <div key={t.id}>{t.message}</div>)}
    </div>
  )
}