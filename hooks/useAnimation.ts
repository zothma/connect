import { gsap } from 'gsap'
import React, { useLayoutEffect } from 'react'
import useGsapTimeline from './useGsapTimeline'

type TimelineParams = gsap.TimelineVars
type AnimationParams = gsap.TweenVars

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
