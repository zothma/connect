import { signIn } from "next-auth/react";
import ExternalSignIn from "./ExternalSignIn";
import { SupportedOAuthProvider } from "@/types/lib/auth";

type Props = {
  type: SupportedOAuthProvider,
  name: string
}

export default function OAuthSignIn({ type, name }: Props) {
  return <ExternalSignIn name={name} onClick={() => signIn(type)} />
}