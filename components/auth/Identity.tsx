"use client"

import { useSession } from "next-auth/react"

export default function Identity() {
  const { data: session } = useSession()

  if (session) {
    return (
      <span>
        Connecté(e) en tant que <strong>{session.user?.email ?? <em>Aucun e-mail fourni</em>}</strong>
      </span>
    )
  } else {
    return <></>
  }
}