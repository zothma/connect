import { signIn } from "next-auth/react";
import ExternalSignIn from "./SimpleThirdPartySignIn";
import { SupportedOAuthProvider } from "@/types/auth";
import React from "react";

type Props = {
  type: SupportedOAuthProvider,
  name: string,
  icon: any,
  className?: string
}

export default function OAuthSignIn({ type, name, icon, className }: Props) {
  return <ExternalSignIn name={name} onClick={() => signIn(type)} icon={icon} className={className} />
}