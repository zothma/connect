"use client"

import useBookmarks from "@/hooks/useBookmarks";
import { Prisma } from "@prisma/client";
import ProjectCard from "./ProjectCard";

const projectWithCompleteData = Prisma.validator<Prisma.ProjectDefaultArgs>()({
  include: {
    domain: true,
    type: true,
    owner: true,
  },
})

type ProjectWithCompleteData = Prisma.ProjectGetPayload<typeof projectWithCompleteData>
type Props = {
  projects: ProjectWithCompleteData[],
}

export default function ProjectContainer({ projects }: Props) {
  // Récupérer les éléments dans les bookmarks
  const [bookmarks, setBookmarkStatus] = useBookmarks()

  return (
    <div className="flex flex-wrap gap-x-10 gap-y-6 justify-stretch">
      {projects.map(project => {
        const bookmarked = bookmarks.map(b => b.id).includes(project.id)
        return (
          <div className="grow shrink min-w-[330px] basis-0" key={project.id}>
            <ProjectCard
              project={project}
              bookmarked={bookmarked}
              onBookmark={(value) => setBookmarkStatus(project, value)} />
          </div>
        )
      })}
    </div>
  )
}