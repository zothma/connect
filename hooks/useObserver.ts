import React, { useEffect, useRef } from 'react'

type ReactRef<T> = React.RefObject<T>
type HookCallback = (visible: boolean) => void
type ObserverCallback = IntersectionObserverCallback
type ObserverOptions = IntersectionObserverInit

type ReturnType<T extends HTMLElement> = ReactRef<T>

class ReactObserver<T extends HTMLElement> extends IntersectionObserver {
  public constructor(callback: ObserverCallback, options: ObserverOptions) {
    super(callback, options)
  }

  public observeRef(ref: ReactRef<T>): void {
    if (!ref.current) return
    this.observe(ref.current)
  }

  public unobserveRef(ref: ReactRef<T>): void {
    if (!ref.current) return
    this.unobserve(ref.current)
  }
}

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

  useEffect(() => {
    const observer = new ReactObserver(observerCallback, observerOptions)
    observer.observeRef(ref)

    return () => observer.unobserveRef(ref)
  }, [ref, observerOptions])

  return ref
}
