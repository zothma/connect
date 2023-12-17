import React from "react"
import styles from "./skeleton.module.css"

type Props = {
  children: React.ReactNode,
  className?: string
}

export default function Skeleton({ children, className = "" }: Props) {
  return (
    <div className={"drop-shadow-box bg-lightgrey " + className + " " + styles.glowing}>
      {children}
    </div>
  )
}