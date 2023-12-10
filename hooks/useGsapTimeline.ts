import { gsap } from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

type TimelineParams = gsap.TimelineVars

type ReactRef<T> = React.RefObject<T>
type GsapTimeline = gsap.core.Timeline
type ReturnType<T extends HTMLElement> = [ReactRef<T>, GsapTimeline | undefined]

export default function useGsapTimeline<T extends HTMLElement>(
  timelineParams: TimelineParams
): ReturnType<T> {
  const ref = useRef<T>(null)
  const [timeline, setTimeline] = useState<GsapTimeline>()

  const removeAllAnimations = (timeline: GsapTimeline) => {
    timeline.getTweensOf(ref.current).forEach((tween) => timeline.remove(tween))
  }

  // Ensures the timeline is created only once
  useEffect(() => {
    const timeline = gsap.timeline({ paused: true, ...timelineParams })
    setTimeline(timeline)

    return () => removeAllAnimations(timeline)
  }, [])

  return [ref, timeline]
}
