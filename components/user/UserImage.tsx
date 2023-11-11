import { Prisma } from "@prisma/client";
import Image from "next/image";

const user = Prisma.validator<Prisma.UserDefaultArgs>()({
  select: {
    image: true,
    name: true
  }
})

type User = Prisma.UserGetPayload<typeof user>
type Props = {
  user: User,
  width?: number,
  height?: number
}

export default function UserImage({ user, width, height }: Props) {
  if (user.image) {
    return (
      <Image
        src={user.image}
        alt={user.name + ' image'}
        width={width ?? 100}
        height={height ?? 100} />
    )
  } else {
    return <></>
  }
}