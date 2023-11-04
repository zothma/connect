"use client"

import { signOut, useSession } from "next-auth/react";

export default function SignOut() {
  const { data: session } = useSession()

  if (session) {
    return <button onClick={() => signOut()}>Se déconnecter</button>
  } else {
    return <></>
  }
}