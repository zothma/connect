import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { MouseEventHandler } from "react"

type Props = {
  image: string | StaticImport,
  className?: string,
  alt?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function ButtonImage({ image, className, onClick, alt = "Icone" }: Props) {
  return (
    <button
      className={"relative ease-out transition-transform h-9 w-9 bg-white rounded-full active:scale-90" + (className ?? '')}
      onClick={onClick}>
      <Image
        src={image}
        alt={alt}
        height={20}
        width={20}
        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
    </button>
  )
}