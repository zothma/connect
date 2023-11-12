"use client"

import useBookmarks from "@/hooks/useBookmarks";
import { Prisma } from "@prisma/client";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import Button from "../common/Button";

const projectWithCompleteData = Prisma.validator<Prisma.ProjectDefaultArgs>()({
  include: {
    domain: true,
    type: true,
    owner: true,
  },
})

type ProjectWithCompleteData = Prisma.ProjectGetPayload<typeof projectWithCompleteData>
type Props = {
  fetchUrl: string
}

export default function ProjectContainer({ fetchUrl }: Props) {
  // Récupérer les éléments dans les bookmarks
  const [bookmarks, setBookmarkStatus] = useBookmarks()
  const [projects, setProjects] = useState([] as ProjectWithCompleteData[])
  const [cursor, setCursor] = useState("")

  useEffect(() => {
    fetch(fetchUrl).then(res => res.json()).then(data => {
      setCursor(data.cursor)
      setProjects(data.data)
    })
  }, [])

  const loadMore = () => {
    if (cursor == '')
      return;

    const url = new URL(fetchUrl)
    url.searchParams.set('cursor', cursor)

    fetch(url.toString()).then(res => res.json()).then(data => {
      setCursor(data.cursor)
      setProjects([...projects, ...data.data])
    })
  }

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

      <Button className="bg-gray-200 mx-auto mt-10 hover:bg-gray-300" onClick={() => loadMore()}>Charger plus</Button>
    </div>
  )
}