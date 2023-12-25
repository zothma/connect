import { ToastContext } from '@/components/toast/ToastContext'
import { useContext } from 'react'

export default function useToast() {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used inside a ToastProvider')

  return context
}
