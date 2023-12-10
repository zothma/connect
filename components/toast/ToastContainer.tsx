"use client"

import useToast from "@/hooks/useToast";
import Toast from "./Toast";

export default function ToastContainer() {
  const { getToasts, removeToast } = useToast()
  const toasts = getToasts()

  return (
    <div className="absolute left-3 bottom-16 right-3 z-50 flex flex-col items-stretch gap-3">
      {toasts.map(t => <Toast onDismiss={() => removeToast(t.id)} message={t.message} key={t.id} />)}
    </div>
  )
}