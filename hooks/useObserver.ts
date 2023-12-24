import React, { useEffect, useRef } from 'react'

type ReactRef<T> = React.RefObject<T>
type ReturnType<T extends HTMLElement> = ReactRef<T>

/**
 * Hook creating an IntersectionObserver before connecting it to
 * a React ref.
 *
 * @param observerOptions Options sent to the observer
 * @param callback Callback called when the visibility changes
 * @returns The React ref that has to be connected to a React component
 */
export default function useObserver<T extends HTMLElement>(
  observerOptions: IntersectionObserverInit,
  callback: (visible: boolean) => void
): ReturnType<T> {
  const ref = useRef<T>(null)

  const observerCallback: IntersectionObserverCallback = (entries) => {
    const [entry] = entries
    callback(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [ref, observerOptions])

  return ref
}
