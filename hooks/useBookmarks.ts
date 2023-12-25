import { ApiBookmarkReturnType } from '@/types/api'
import { AdvertWithCompleteData } from '@/types/models'
import { useEffect, useState } from 'react'
import useFetch from './useFetch'
import useToast from './useToast'

type AdvertList = AdvertWithCompleteData[]
type ApiCallCallback = () => void
type ApiCallMethod = 'POST' | 'DELETE'

/**
 * Hook allowing to fetch and manipulate (add and remove) bookmarks.
 * Returns the list of bookmarked adverts and a callback for manipulating
 * those bookmarks.
 */
export default function useBookmarks(): [
  AdvertWithCompleteData[],
  (advert: AdvertWithCompleteData, status: boolean) => void
] {
  const [bookmarks, setBookmarks] = useState<AdvertList>([])
  const { toast } = useToast()
  const fetch = useFetch()

  /**
   * Fetches bookmarked adverts
   */
  const fetchData = async () => {
    try {
      const result = await fetch('/api/bookmark')
      const data: ApiBookmarkReturnType = await result.json()
      setBookmarks(data.data)
    } catch (error) {
      toast(
        'Oups... ' +
          'Une erreur est survenue lors de la récupération des annonces sauvegardées. ' +
          'Merci de réessayer plus tard.'
      )
    }
  }

  /**
   * Wrapper around the custom fetch to make a bookmark API call
   * @param advert
   * @param method
   * @param callback
   */
  async function makeApiCall(
    advert: AdvertWithCompleteData,
    method: ApiCallMethod,
    callback: ApiCallCallback
  ) {
    try {
      const url = `/api/bookmark/${advert.id}`
      const result = await fetch(url, { method })
      if (result.ok) callback()
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const addBookmark = (advert: AdvertWithCompleteData) => {
    makeApiCall(advert, 'POST', () => {
      setBookmarks((prev) => [...prev, advert])
    })
  }

  const removeBookmark = (advert: AdvertWithCompleteData) => {
    makeApiCall(advert, 'DELETE', () => {
      setBookmarks((prev) => prev.filter((b) => b.id != advert.id))
    })
  }

  const setBookmarkStatus = (
    advert: AdvertWithCompleteData,
    status: boolean
  ) => {
    if (status) addBookmark(advert)
    else removeBookmark(advert)
  }

  return [bookmarks, setBookmarkStatus]
}
