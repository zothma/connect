import Identity from "@/components/auth/Identity";
import SignOut from "@/components/auth/SignOut";
import ProjectCard from "@/components/project/ProjectCard";
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
    <div className="flex flex-wrap gap-x-10 gap-y-6 justify-stretch">
      {projects.map(project => (
        <div className="grow shrink min-w-[330px] basis-0">
          <ProjectCard project={project} key={project.id} />
        </div>
      ))}
    </div>
  )
}