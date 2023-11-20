import React from "react"
import styles from "./skeleton.module.css"

type Props = {
  children: React.ReactNode
}

export default function Skeleton({ children }: Props) {
  return (
    <div className={styles.glowing}>
      {children}
    </div>
  )
}