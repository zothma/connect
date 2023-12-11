import BookmarkFillImage from '@icons/bookmark-fill.svg'
import BookmarkLineImage from '@icons/bookmark-line.svg'
import ButtonImage from "../common/ButtonImage";
import React from "react";

type Props = {
  bookmarked?: boolean,
  onBookmark: (value: boolean) => void
}

export default function ProjectBookmark({ bookmarked = false, onBookmark }: Props) {

  return (
    <ButtonImage
      icon={bookmarked ? BookmarkFillImage : BookmarkLineImage}
      onClick={() => onBookmark(!bookmarked)}
      style={{ height: "40px", width: "40px" }}
      aria-label="Ajouter aux favoris" />
  )
}