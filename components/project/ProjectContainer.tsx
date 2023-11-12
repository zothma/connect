"use client"

import useBookmarks from "@/hooks/useBookmarks";
import useProjects from "@/hooks/useProjects";
import ProjectCard from "./ProjectCard";
import Button from "../common/Button";

type Props = {
  fetchUrl: string
}

export default function ProjectContainer({ fetchUrl }: Props) {
  const [bookmarks, setBookmarkStatus] = useBookmarks()
  const [projects, loadMoreProjects] = useProjects(fetchUrl)

  return (
    <div className="my-5">
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

      <Button className="bg-gray-200 mx-auto mt-10 hover:bg-gray-300" onClick={() => loadMoreProjects(6)}>Charger plus</Button>
    </div>
  )
}