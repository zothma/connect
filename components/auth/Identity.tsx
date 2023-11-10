"use client"

import { useSession } from "next-auth/react"

export default function Identity() {
  const { data: session } = useSession()

  if (session) {
    return (
      <span>
        Connecté(e) en tant que <strong>{session.user?.first_name} {session.user?.last_name?.toUpperCase()}</strong>
      </span>
    )
  } else {
    return <></>
  }
}