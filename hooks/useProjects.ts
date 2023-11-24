import { fetchWithTimeout } from '@/lib/async'
import { ApiProjectReturnType } from '@/types/api'
import { ProjectWithCompleteData } from '@/types/models'
import { Project } from '@prisma/client'
import { useEffect, useState } from 'react'

type ProjectList = ProjectWithCompleteData[] | null
type Amount = number
type LoadMoreCallback = (size?: Amount) => void

type UseProjectsReturnType = [ProjectList, Amount, LoadMoreCallback]

/**
 * Hook dynamically fetching projects from the API.
 * Returns the list of projects, the number of loading elements and a function
 * to trigger a new fetch.
 *
 * @param fetchUrl URL of the API, containing needed options
 * @param initialFetchSize Amount of project to initially load
 */
function useProjects(
  fetchUrl: string,
  initialFetchSize: Amount = 12
): UseProjectsReturnType {
  const [projects, setProjects] = useState<ProjectList>(null)
  const [cursor, setCursor] = useState<Project['id']>('')
  const [loading, setLoading] = useState(initialFetchSize)

  const fetchData = async (url: string) => {
    try {
      const result = await fetchWithTimeout(url)
      const data: ApiProjectReturnType = await result.json()

      setCursor(data.cursor)
      setProjects((prev) => (prev ? [...prev, ...data.data] : data.data))
      setLoading(0)
    } catch (error) {
      console.error('Error fetching data: ', error)
      setLoading(0)
    }
  }

  // Fetch the initial amount
  useEffect(() => {
    const url = new URL(fetchUrl)
    url.searchParams.set('size', initialFetchSize.toString())
    fetchData(url.toString())
  }, [])

  /**
   * Callback triggering a new fetch
   * @param size Amount of projects to load
   */
  const loadMore = (size = initialFetchSize) => {
    // Stop if we know there is nothing left to fetch
    if (!cursor) return

    const url = new URL(fetchUrl)
    url.searchParams.set('cursor', cursor)
    url.searchParams.set('size', size.toString())
    fetchData(url.toString())
  }

  return [projects, loading, loadMore]
}

export default useProjects
