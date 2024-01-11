'use client'

import { useEffect } from 'react'
import { useFormStatus } from 'react-dom'

type Props = {
  onStatusChange: (status: boolean) => void
}

/**
 * Wrapper around the formStatus hook that triggers a callback
 * when the form status changes.
 */
export default function FormStatusHandler({ onStatusChange }: Props) {
  const { pending } = useFormStatus()
  useEffect(() => onStatusChange(pending), [pending, onStatusChange])

  return <></>
}
