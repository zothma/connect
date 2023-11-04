"use client"

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInPage() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Connecté en tant que {session.user?.email ?? <em>Email non fourni</em>}.<br />
        <button onClick={() => signOut()}>Se déconnecter</button>
      </>
    )
  } else {
    return (
      <>
        Non connecté. <br />
        <button onClick={() => signIn("google")}>Se connecter avec Google</button>
      </>
    )
  }
}