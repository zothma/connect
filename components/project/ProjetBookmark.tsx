import Image from "next/image";
import bookmarkFill from '@/public/icons/bookmark-fill.svg'
import bookmarkLine from '@/public/icons/bookmark-line.svg'

type Props = {
  bookmarked?: boolean,
  onBookmark: (value: boolean) => void
}

export default function ProjectBookmark({ bookmarked = false, onBookmark }: Props) {
  return (
    <button className="relative h-9 w-9 bg-white rounded-full active:scale-90 transition-transform" onClick={() => onBookmark(!bookmarked)}>
      <Image
        src={bookmarked ? bookmarkFill : bookmarkLine}
        alt="Bookmark project"
        height={20}
        width={20}
        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
    </button>
  )
}