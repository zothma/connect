import prisma from "@/lib/prisma"
import { Session, getServerSession } from "next-auth"
import UserMenuItem from "./UserMenuItem"

type Props = {
  session?: Session
}

export default async function SessionUserMenuItem({ session }: Props) {
  const currentSession = session ?? await getServerSession()
  if (!currentSession?.user?.email) return <></>

  const user = await prisma.user.findUnique({ where: { email: currentSession.user.email } })
  if (!user) return <></>

  return <UserMenuItem user={user} />
}