import { fetchWithTimeout } from '@/lib/async'
import { ApiAdvertReturnType } from '@/types/api'
import { AdvertWithCompleteData } from '@/types/models'
import { Advert } from '@prisma/client'
import { useEffect, useState } from 'react'
import useToast from './useToast'

type AdvertList = AdvertWithCompleteData[] | null
type Amount = number
type LoadMoreCallback = (size?: Amount) => void

type ReturnType = [AdvertList, Amount, LoadMoreCallback]

/**
 * Hook dynamically fetching adverts from the API.
 * Returns the list of adverts, the number of loading elements and a function
 * to trigger a new fetch.
 *
 * @param fetchUrl URL of the API, containing needed options
 * @param initialFetchSize Amount of adverts to initially load
 */
function useAdverts(
  fetchUrl: string,
  initialFetchSize: Amount = 12
): ReturnType {
  const [adverts, setAdverts] = useState<AdvertList>(null)
  const [cursor, setCursor] = useState<Advert['id']>('')
  const [loading, setLoading] = useState(initialFetchSize)
  const { toast } = useToast()

  const fetchData = async (url: string) => {
    try {
      const result = await fetchWithTimeout(url)
      const data: ApiAdvertReturnType = await result.json()

      setCursor(data.cursor)
      setAdverts((prev) => (prev ? [...prev, ...data.data] : data.data))
      setLoading(0)
    } catch (error) {
      toast(
        'Oups... ' +
          'Une erreur est survenue lors de la récupération des annonces. ' +
          'Merci de réessayer plus tard.'
      )
      console.log(error)
      setLoading(0)
    }
  }

  const fetchInitialData = () => {
    const url = new URL(fetchUrl)
    url.searchParams.set('size', initialFetchSize.toString())
    fetchData(url.toString())
  }

  /**
   * Callback triggering a new fetch
   * @param size Amount of adverts to load
   */
  const loadMore = (size = initialFetchSize) => {
    // Stop if we know there is nothing left to fetch
    if (!cursor) return

    const url = new URL(fetchUrl)
    url.searchParams.set('cursor', cursor)
    url.searchParams.set('size', size.toString())
    fetchData(url.toString())
  }

  useEffect(fetchInitialData, [])
  return [adverts, loading, loadMore]
}

export default useAdverts
