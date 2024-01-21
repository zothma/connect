import React from 'react'
import UserImage from '../user/UserImage'
import { User } from '@prisma/client'
import Link from 'next/link'

type UserImageData = React.ComponentProps<typeof UserImage>['user']
type UserData = Omit<UserImageData, 'name'> &
  Pick<User, 'first_name' | 'last_name'>

type Props = {
  owner: UserData
  collaborators?: UserData[]
  disableActions?: boolean
}

type CollaboratorsImagesProps = {
  collaborators: UserData[]
}

const imageClassName = 'rounded-full outline outline-[3px] outline-white'

function CollaboratorsImages({ collaborators }: CollaboratorsImagesProps) {
  return (
    <>
      {collaborators.map((collaborator, index) => (
        <UserImage
          key={index}
          user={{
            image: collaborator.image,
            name: collaborator.first_name + ' ' + collaborator.last_name,
          }}
          height={30}
          width={30}
          className={`-ml-[14px] ${imageClassName}`}
        />
      ))}
    </>
  )
}

export default function AdvertOwnerBadge({
  owner,
  collaborators = [],
  disableActions = false,
}: Props) {
  return (
    <Link
      href={disableActions ? '#' : '#user'}
      className="relative z-10 active:scale-95 transition-transform self-start bg-white rounded-[30px]">
      <span className="flex h-full gap-3 pt-2 pb-2 pl-2 pr-5">
        <span className="flex flex-row-reverse items-center">
          <CollaboratorsImages collaborators={collaborators} />
          <UserImage
            user={{
              image: owner.image,
              name: owner.first_name + ' ' + owner.last_name,
            }}
            height={40}
            width={40}
            className={imageClassName}
          />
        </span>

        <span className="flex flex-col h-full">
          <span className="text font-bold">
            {owner.first_name} {owner.last_name?.toLocaleUpperCase()}
          </span>
          <span className="text-sm -mt-1">
            {collaborators.length > 1
              ? `et ${collaborators.length} autres personnes`
              : 'Travaille à ...'}
          </span>
        </span>
      </span>
    </Link>
  )
}
