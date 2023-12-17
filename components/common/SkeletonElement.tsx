import { HTMLAttributes } from "react"

type Props = {
  height: number,
  width: number,
  className?: string
}

export default function SkeletonElement({ height, width, className = "" }: Props) {
  const style: HTMLAttributes<HTMLDivElement>["style"] = {
    height: `${height}px`,
    width: `${width}px`
  }

  return (
    <div className={"bg-grey rounded-full max-w-full " + className} style={style} />
  )
}