"use client"

import useBookmarks from "@/hooks/useBookmarks";
import useProjects from "@/hooks/useProjects";
import ProjectCard from "./ProjectCard";
import Button from "../common/Button";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

type Props = {
  fetchUrl: string
}

export default function ProjectContainer({ fetchUrl }: Props) {
  const [bookmarks, setBookmarkStatus] = useBookmarks()
  const [projects, amountLoading, loadMoreProjects] = useProjects(fetchUrl)

  return (
    <div className="my-5">
      <div className="flex flex-wrap gap-x-10 gap-y-6 justify-stretch">
        {/* Rendu des projets déjà chargés */}
        {projects?.map((project, index) => {
          const bookmarked = bookmarks.map(b => b.id).includes(project.id)
          return (
            <div className="grow shrink min-w-[330px] basis-0" key={index}>
              <ProjectCard
                project={project}
                bookmarked={bookmarked}
                onBookmark={(value) => setBookmarkStatus(project, value)} />
            </div>
          )
        })}

        {/* Affichage des squelettes en l'attente du chargement des projets */}
        {Array(amountLoading).fill(0).map((_, index) => (
          <div className="grow shrink min-w-[330px] basis-0" key={(projects?.length ?? 0) + index}>
            <ProjectCardSkeleton />
          </div>
        ))}
      </div>

      <Button className="bg-gray-200 mx-auto mt-10 hover:bg-gray-300" onClick={() => loadMoreProjects()}>Charger plus</Button>
    </div>
  )
}