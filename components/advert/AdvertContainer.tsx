'use client'

import useBookmarks from '@/hooks/useBookmarks'
import useAdverts from '@/hooks/useAdverts'
import AdvertCard from './AdvertCard'
import Button from '../common/Button'
import AdvertCardSkeleton from './AdvertCardSkeleton'

type Props = {
  fetchUrl: string
}

export default function AdvertContainer({ fetchUrl }: Props) {
  const [bookmarks, setBookmarkStatus] = useBookmarks()
  const [adverts, amountLoading, loadMoreAdverts] = useAdverts(fetchUrl)

  return (
    <div className="my-5">
      <div className="flex flex-wrap gap-x-12 gap-y-8 justify-stretch">
        {/* Rendering already loaded adverts */}
        {adverts?.map((advert, index) => {
          const bookmarked = bookmarks.map((b) => b.id).includes(advert.id)
          return (
            <AdvertCard
              advert={advert}
              bookmarked={bookmarked}
              onBookmark={(value) => setBookmarkStatus(advert, value)}
              className="grow shrink min-w-[330px] basis-0"
              key={index}
            />
          )
        })}

        {/* Loading adverts skeleton */}
        {Array(amountLoading)
          .fill(0)
          .map((_, index) => (
            <div
              className="grow shrink min-w-[330px] basis-0"
              key={(adverts?.length ?? 0) + index}>
              <AdvertCardSkeleton />
            </div>
          ))}
      </div>

      <Button
        className="bg-gray-200 mx-auto mt-10 hover:bg-gray-300 block"
        onClick={() => loadMoreAdverts()}>
        Charger plus
      </Button>
    </div>
  )
}
