"use client"

import FacebookSignIn from "@/components/auth/FacebookSignIn";
import GoogleSignIn from "@/components/auth/GoogleSignIn";
import LinkedInSignIn from "@/components/auth/LinkedInSignIn";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SignInPage() {
  const { data: session } = useSession()

  if (session) {
    redirect('/')
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