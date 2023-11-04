"use client"

import FacebookSignIn from "@/components/auth/FacebookSignIn";
import GoogleSignIn from "@/components/auth/GoogleSignIn";
import LinkedInSignIn from "@/components/auth/LinkedInSignIn";
import { signOut, useSession } from "next-auth/react";

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
        <GoogleSignIn /> <br />
        <LinkedInSignIn /> <br />
        <FacebookSignIn />
      </>
    )
  }
}