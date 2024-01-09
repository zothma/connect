'use client'

import AdvertBackground from './AdvertBackground'
import AdvertBookmark from './AdvertBookmark'
import AdvertDomain from './AdvertDomain'
import AdvertCardSkeleton from './AdvertCardSkeleton'
import AdvertOwnerBadge from './AdvertOwnerBadge'
import AdvertTypeBadge from './AdvertTypeBadge'
import styles from './advert-card.module.css'
import { AdvertWithCompleteData } from '@/types/models'
import { MinimalGradient, useFetchRandomGradient } from '@/lib/color'
import { raleway } from '@/lib/fonts'
import { Advert } from '@prisma/client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import React, { Suspense, useEffect, useState } from 'react'

type BookmarkProps = {
  bookmarked: boolean
  onBookmark: (value: boolean) => void
}

type CardProps = {
  name: Advert['name']
  description: Advert['description']
  type: React.ComponentProps<typeof AdvertTypeBadge>['type']
  owner: React.ComponentProps<typeof AdvertOwnerBadge>['owner']
  gradient: React.ComponentProps<typeof AdvertBackground>['gradient'] | null
  domain: React.ComponentProps<typeof AdvertDomain>['domain']
  disableActions?: boolean
}

function Card(props: CardProps & BookmarkProps) {
  const [active, setActive] = useState(false)

  return (
    <AdvertBackground
      active={active}
      gradient={props.gradient}>
      {/* Global flex block */}
      <div className="h-full w-full flex flex-col gap-4 p-5">
        <div className="relative z-10 w-full flex justify-between">
          <AdvertTypeBadge
            type={props.type}
            disableActions={props.disableActions}
          />
          <AdvertBookmark
            bookmarked={props.bookmarked}
            onBookmark={props.disableActions ? () => {} : props.onBookmark}
          />
        </div>

        <div className="flex flex-col gap-4 grow">
          <p className="text-2xl font-semibold mt-2">
            <Link
              href={props.disableActions ? '#' : '#card'}
              className={styles.enlarged_link + ' ' + raleway.className}
              onMouseDown={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
              onMouseUp={() => setActive(false)}>
              {props.name}
            </Link>
          </p>
          <AdvertDomain domain={props.domain} />
          <p className="truncate-2">{props.description}</p>
        </div>

        <AdvertOwnerBadge owner={props.owner} />
      </div>
    </AdvertBackground>
  )
}

type Props = {
  advert: AdvertWithCompleteData
  disableActions?: boolean
}

export default function AdvertCard({
  advert,
  disableActions = false,
  ...props
}: Props & BookmarkProps) {
  const [active, setActive] = useState(false)

  return (
    <Card
      name={advert.name}
      description={advert.description}
      type={advert.type}
      owner={advert.owner}
      gradient={advert.gradient}
      domain={advert.domain}
      {...props}
    />
  )
}

type DummyProps = { [K in Exclude<keyof CardProps, 'owner'>]?: CardProps[K] }

export function DummyAdvertCard(props: DummyProps) {
  const session = useSession()

  const [gradient, setGradient] = useState<MinimalGradient | null>(null)
  const fetchRandomGradient = useFetchRandomGradient()

  useEffect(() => {
    fetchRandomGradient().then(setGradient)
  }, [])

  if (!session?.data?.user || !gradient) return <AdvertCardSkeleton />

  const user = session.data.user

  return (
    <Card
      name={props.name ?? 'Titre'}
      description={props.description ?? 'Description'}
      domain={props.domain ?? { name: 'Domaines' }}
      type={props.type ?? { name: 'Catégorie' }}
      gradient={gradient}
      owner={{
        first_name: user.first_name ?? 'Prénom',
        last_name: user.last_name ?? 'Nom',
        image: user.image ?? '#',
      }}
      onBookmark={() => {}}
      bookmarked={false}
      disableActions
    />
  )
}
