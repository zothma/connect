import React from 'react'
import UserImage from '../user/UserImage'
import { User } from '@prisma/client'
import Link from 'next/link'

type UserImageData = React.ComponentProps<typeof UserImage>['user']
type Data = Omit<UserImageData, 'name'> & Pick<User, 'first_name' | 'last_name'>

type Props = {
  owner: Data
  disableActions?: boolean
}

export default function AdvertOwnerBadge({
  owner,
  disableActions = false,
}: Props) {
  return (
    <Link
      href={disableActions ? '#' : '#user'}
      className="relative z-10 active:scale-95 transition-transform self-start bg-white rounded-[30px]">
      <span className="flex h-full gap-3 pt-2 pb-2 pl-2 pr-5">
        <UserImage
          user={{
            image: owner.image,
            name: owner.first_name + ' ' + owner.last_name,
          }}
          height={40}
          width={40}
          className="rounded-full"
        />
        <span className="flex flex-col h-full">
          <span className="text font-bold">
            {owner.first_name} {owner.last_name?.toLocaleUpperCase()}
          </span>
          <span className="text-sm -mt-1">Travaille à ...</span>
        </span>
      </span>
    </Link>
  )
}
