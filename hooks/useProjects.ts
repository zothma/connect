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

/**
 * Hook en charge de récupérer les projets depuis l'API
 * @param fetchUrl URL pour les appels à l'API
 * @param initialFetchSize Nombre de projets à récupérer au départ
 */
export default function useProjects(
  fetchUrl: string,
  initialFetchSize = 12
): [ProjectWithCompleteData[], number, (size?: number) => void] {
  const [projects, setProjects] = useState([] as ProjectWithCompleteData[])
  const [cursor, setCursor] = useState('')
  const [loading, setLoading] = useState(initialFetchSize)

  useEffect(() => {
    const url = new URL(fetchUrl)
    url.searchParams.set('size', initialFetchSize.toString())

    fetch(url.toString())
      .then((res) => res.json())
      .then((data) => {
        setCursor(data.cursor)
        setProjects(data.data)
        setLoading(0)
      })
  }, [])

  /**
   * Étend la liste des projets en en récupérant d'autres depuis l'API
   * @param size Nombre de projets à ajouter à la liste
   */
  const loadMore = (size = initialFetchSize) => {
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
