'use client'

import React from 'react'
import UserImage from './UserImage'
import { signOut, useSession } from 'next-auth/react'
import SignOut from '../auth/SignOut'

type Props = Omit<
  React.ComponentProps<typeof UserImage>,
  'width' | 'height' | 'user'
>

export default function UserMenuItem({ className, ...props }: Props) {
  const session = useSession()
  if (!session?.data?.user) return <SignOut />

  return (
    <button
      onClick={() => signOut()}
      className={'h-10 w-10 ' + className}>
      <UserImage
        height={40}
        width={40}
        className="h-full w-full"
        user={session.data.user}
        {...props}
      />
    </button>
  )
}
