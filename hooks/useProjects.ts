import { ProjectWithCompleteData } from '@/types/models'
import { useEffect, useState } from 'react'

/**
 * Hook dynamically fetching projects from the API.
 * Returns the list of projects, the number of loading elements and a function
 * to trigger a new fetch.
 *
 * @param fetchUrl URL of the API, containing needed options
 * @param initialFetchSize Amount of project to initially load
 */
export default function useProjects(
  fetchUrl: string,
  initialFetchSize = 12
): [ProjectWithCompleteData[], number, (size?: number) => void] {
  const [projects, setProjects] = useState([] as ProjectWithCompleteData[])
  const [cursor, setCursor] = useState('')
  const [loading, setLoading] = useState(initialFetchSize)

  // Fetch the initial amount
  useEffect(() => {
    const url = new URL(fetchUrl)
    url.searchParams.set('size', initialFetchSize.toString())

    fetch(url.toString())
      .then((result) => result.json())
      .then((data) => {
        setCursor(data.cursor)
        setProjects(data.data)
        setLoading(0)
      })
  }, [])

  /**
   * Callback triggering a new fetch
   * @param size Amount of projects to load
   */
  const loadMore = (size = initialFetchSize) => {
    // Stop if we know there is nothing left to fetch
    if (cursor == '') return

    const url = new URL(fetchUrl)
    url.searchParams.set('cursor', cursor)
    url.searchParams.set('size', size.toString())

    setLoading(size)
    fetch(url.toString())
      .then((res) => res.json())
      .then((data) => {
        setCursor(data.cursor)
        setProjects([...projects, ...data.data])
        setLoading(0)
      })
  }

  return [projects, loading, loadMore]
}
