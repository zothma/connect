import { Prisma } from '@prisma/client'
import { useEffect, useState } from 'react'

const projectWithCompleteData = Prisma.validator<Prisma.ProjectDefaultArgs>()({
  include: {
    domain: true,
    type: true,
    owner: true,
  },
})

type ProjectWithCompleteData = Prisma.ProjectGetPayload<
  typeof projectWithCompleteData
>

export default function useBookmarks(): [
  ProjectWithCompleteData[],
  (project: ProjectWithCompleteData, status: boolean) => void
] {
  const [bookmarks, setBookmarks] = useState([] as ProjectWithCompleteData[])

  useEffect(() => {
    fetch('/api/bookmark')
      .then((res) => res.json())
      .then(setBookmarks)
  }, [])

  const addBookmark = (project: ProjectWithCompleteData) => {
    fetch(`/api/bookmark/${project.id}`, { method: 'POST' }).then((res) => {
      if (res.ok) setBookmarks([project, ...bookmarks])
    })
  }

  const removeBookmark = (project: ProjectWithCompleteData) => {
    fetch(`/api/bookmark/${project.id}`, { method: 'DELETE' }).then((res) => {
      if (res.ok) setBookmarks(bookmarks.filter((b) => b.id != project.id))
    })
  }

  const setBookmarkStatus = (
    project: ProjectWithCompleteData,
    status: boolean
  ) => {
    if (status) addBookmark(project)
    else removeBookmark(project)
  }

  return [bookmarks, setBookmarkStatus]
}
