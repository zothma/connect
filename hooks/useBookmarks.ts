import { fetchWithTimeout } from '@/lib/async'
import { ProjectWithCompleteData } from '@/types/models'
import { useEffect, useState } from 'react'

/**
 * Hook allowing to fetch and manipulate (add and remove) bookmarks.
 * Returns the list of bookmarked projects and a callback for manipulating
 * those bookmarks.
 */
export default function useBookmarks(): [
  ProjectWithCompleteData[],
  (project: ProjectWithCompleteData, status: boolean) => void
] {
  const [bookmarks, setBookmarks] = useState([] as ProjectWithCompleteData[])

  useEffect(() => {
    fetchWithTimeout('/api/bookmark')
      .then((res) => res.json())
      .then(setBookmarks)
  }, [])

  const addBookmark = (project: ProjectWithCompleteData) => {
    fetchWithTimeout(`/api/bookmark/${project.id}`, { method: 'POST' }).then(
      (res) => {
        if (res.ok) setBookmarks([project, ...bookmarks])
      }
    )
  }

  const removeBookmark = (project: ProjectWithCompleteData) => {
    fetchWithTimeout(`/api/bookmark/${project.id}`, { method: 'DELETE' }).then(
      (res) => {
        if (res.ok) setBookmarks(bookmarks.filter((b) => b.id != project.id))
      }
    )
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
