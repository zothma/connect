import prisma from "@/lib/prisma"
import { Session, getServerSession } from "next-auth"
import UserMenuItem from "./UserMenuItem"
import React from "react"
import SignOut from "../auth/SignOut"

type LocalProps = {
  session?: Session
}

type Props = LocalProps & Omit<React.ComponentPropsWithoutRef<typeof UserMenuItem>, "user">

export default async function SessionUserMenuItem({ session, ...props }: Props) {
  const currentSession = session ?? await getServerSession()
  if (!currentSession?.user?.email) return <></>

  const user = await prisma.user.findUnique({ where: { email: currentSession.user.email } })
  if (!user) return <SignOut />

  return <UserMenuItem user={user} {...props} />
}