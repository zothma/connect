import { fetchWithTimeout } from '@/lib/async'
import { ProjectWithCompleteData } from '@/types/models'
import { useEffect, useState } from 'react'

type ProjectList = ProjectWithCompleteData[]
type ApiCallCallback = () => void
type ApiCallMethod = 'POST' | 'DELETE'

/**
 * Wrapper around the custom fetch to make a bookmark API call
 * @param project
 * @param method
 * @param callback
 */
async function makeApiCall(
  project: ProjectWithCompleteData,
  method: ApiCallMethod,
  callback: ApiCallCallback
) {
  try {
    const url = `/api/bookmark/${project.id}`
    const result = await fetchWithTimeout(url, { method })
    if (result.ok) callback()
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}

/**
 * Hook allowing to fetch and manipulate (add and remove) bookmarks.
 * Returns the list of bookmarked projects and a callback for manipulating
 * those bookmarks.
 */
export default function useBookmarks(): [
  ProjectWithCompleteData[],
  (project: ProjectWithCompleteData, status: boolean) => void
] {
  const [bookmarks, setBookmarks] = useState<ProjectList>([])

  /**
   * Fetches bookmarked projects
   */
  const fetchData = async () => {
    try {
      const result = await fetchWithTimeout('/api/bookmark')
      const data = await result.json()
      setBookmarks(data)
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const addBookmark = (project: ProjectWithCompleteData) => {
    makeApiCall(project, 'POST', () => {
      setBookmarks((prev) => [...prev, project])
    })
  }

  const removeBookmark = (project: ProjectWithCompleteData) => {
    makeApiCall(project, 'DELETE', () => {
      setBookmarks((prev) => prev.filter((b) => b.id != project.id))
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
