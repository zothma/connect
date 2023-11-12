import SignOut from "@/components/auth/SignOut";
import ProjectContainer from "@/components/project/ProjectContainer";
import prisma from "@/lib/prisma";
import { URL } from "url";

export default async function Home() {
  const url = new URL("/api/project?cursor", process.env.BASE_URL)
  return (
    <ProjectContainer fetchUrl={url.toString()} />
    // <SignOut />
  )
}