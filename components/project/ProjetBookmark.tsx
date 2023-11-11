import Image from "next/image";
import bookmarkFill from '@/public/icons/bookmark-fill.svg'
import bookmarkLine from '@/public/icons/bookmark-line.svg'

type Props = {
  bookmarked?: boolean
}

export default function ProjectBookmark({ bookmarked = false }: Props) {
  return (
    <div className="relative h-9 w-9 bg-white rounded-full">
      <Image
        src={bookmarked ? bookmarkFill : bookmarkLine}
        alt="Bookmark project"
        height={20}
        width={20}
        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
    </div>
  )
}