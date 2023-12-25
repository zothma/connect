import { HeaderVisibilityContext } from '@/components/layout/HeaderVisibilityContext'
import { useContext } from 'react'

export default function useHeaderVisibility() {
  const context = useContext(HeaderVisibilityContext)
  if (!context)
    throw new Error(
      'useHeaderVisibility must be used inside a HeaderVisibilityProivder'
    )

  return context
}
