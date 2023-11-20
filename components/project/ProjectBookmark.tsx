import Image from "next/image";
import bookmarkFill from '@/public/icons/bookmark-fill.svg'
import bookmarkLine from '@/public/icons/bookmark-line.svg'
import ButtonImage from "../common/ButtonImage";

type Props = {
  bookmarked?: boolean,
  onBookmark: (value: boolean) => void
}

export default function ProjectBookmark({ bookmarked = false, onBookmark }: Props) {
  return (
    <ButtonImage image={bookmarked ? bookmarkFill : bookmarkLine} onClick={() => onBookmark(!bookmarked)} />
  )
}