import SignOut from "@/components/auth/SignOut";
import ProjectContainer from "@/components/project/ProjectContainer";
import prisma from "@/lib/prisma";

export default async function Home() {
  const projects = await prisma.project.findMany({
    skip: 0,
    take: 12,
    include: {
      domain: true,
      type: true,
      owner: true,
    },
  })

  return (
    <ProjectContainer projects={projects} />
    // <SignOut />
  )
}