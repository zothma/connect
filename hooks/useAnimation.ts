import { gsap } from 'gsap'
import React, { useLayoutEffect } from 'react'
import useGsapTimeline from './useGsapTimeline'

type TimelineParams = gsap.TimelineVars
type AnimationParams = gsap.TweenVars

/**
 * Hook generating a GSAP animation relying on a timeline to allow pausing it and resetting it.
 *
 * @param timelineParams Options sent to GSAP during the instantiation of the timeline
 * @param animationParams Options sent to GSAP during the instantiation of the animation
 * @param runAnimation Boolean describing the behavior of the timeline.
 * When set to false, the timeline is paused and reset
 *
 * @returns React Ref to add to the target HTML element
 */
export default function useAnimation<T extends HTMLElement>(
  timelineParams: TimelineParams,
  animationParams: AnimationParams,
  runAnimation: boolean
): React.RefObject<T> {
  const [ref, timeline] = useGsapTimeline<T>(timelineParams)

  useLayoutEffect(() => {
    if (!runAnimation) return
    if (!timeline) return

    timeline.to(ref.current, animationParams)
    if (timeline.paused()) timeline.restart()

    return () => {
      timeline.pause(0)
      timeline
        .getTweensOf(ref.current)
        .forEach((tween) => timeline.remove(tween))
    }
  }, [timeline, runAnimation])

  return ref
}
