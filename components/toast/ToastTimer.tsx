import useAnimation from "@/hooks/useAnimation";

type Props = {
  color: string,
  onComplete: () => void,
  runAnimation?: boolean,
  duration: number,
}

export default function ToastTimer({ color, onComplete, runAnimation = true, duration }: Props) {
  const timelineOptions: gsap.TimelineVars = { onComplete }
  const animationOptions: gsap.TweenVars = { width: 0, duration }

  const boxRef = useAnimation<HTMLDivElement>(timelineOptions, animationOptions, runAnimation);

  return (
    <div
      className={"absolute h-1 bottom-0 left-0 w-full"}
      style={{ backgroundColor: color }}
      ref={boxRef} />
  )
}