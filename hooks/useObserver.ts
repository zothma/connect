import React, { useEffect, useRef } from 'react'

type ReactRef<T> = React.RefObject<T>
type HookCallback = (visible: boolean) => void
type ObserverCallback = IntersectionObserverCallback
type ObserverOptions = IntersectionObserverInit

type ReturnType<T extends HTMLElement> = ReactRef<T>

/**
 * Hook creating an IntersectionObserver before connecting it to
 * a React ref.
 *
 * @param observerOptions Options sent to the IntersectionObserver constructor
 * @param hookCallback Callback called when the visibility changes
 * @returns
 */
export default function useObserver<T extends HTMLElement>(
  hookCallback: HookCallback,
  observerOptions: ObserverOptions
): ReturnType<T> {
  const ref = useRef<T>(null)

  /**
   * Wrapper around the user-defined callback, extracting the visbility
   * state from the IntersectionObserver API
   * @param entries
   */
  const observerCallback: ObserverCallback = (entries) => {
    const [entry] = entries
    hookCallback(entry.isIntersecting)
  }

  const observeRef = (observer: IntersectionObserver, ref: ReactRef<T>) => {
    if (!ref.current) return
    observer.observe(ref.current)
  }

  const unobserveRef = (observer: IntersectionObserver, ref: ReactRef<T>) => {
    if (!ref.current) return
    observer.unobserve(ref.current)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    observeRef(observer, ref)

    return () => unobserveRef(observer, ref)
  }, [ref, observerOptions])

  return ref
}
