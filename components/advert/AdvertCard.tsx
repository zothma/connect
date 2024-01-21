'use client'

import AdvertBackground from './AdvertBackground'
import AdvertBookmark from './AdvertBookmark'
import AdvertDomain from './AdvertDomain'
import AdvertCardSkeleton from './AdvertCardSkeleton'
import AdvertCollaboratorsBadge from './AdvertCollaboratorsBadge'
import AdvertTypeBadge from './AdvertTypeBadge'
import styles from './advert-card.module.css'
import { AdvertWithCompleteData } from '@/types/models'
import { raleway } from '@/lib/fonts'
import { Advert } from '@prisma/client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

type BookmarkProps = {
  bookmarked: boolean
  onBookmark: (value: boolean) => void
}

type CollaboratorsProps = React.ComponentProps<typeof AdvertCollaboratorsBadge>
type TypeProps = React.ComponentProps<typeof AdvertTypeBadge>
type DomainProps = React.ComponentProps<typeof AdvertDomain>
type BackgroundProps = React.ComponentProps<typeof AdvertBackground>

type CardProps = {
  name: Advert['name']
  description: Advert['description']
  type: TypeProps['type']
  owner: CollaboratorsProps['owner']
  gradient: BackgroundProps['gradient'] | null
  domain: DomainProps['domain']
  collaborators?: CollaboratorsProps['collaborators']
  className?: string
  disableActions?: boolean
}

function Card(props: CardProps & BookmarkProps) {
  const [active, setActive] = useState(false)

  return (
    <AdvertBackground
      active={active}
      gradient={props.gradient}
      className={props.className}>
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

        <AdvertCollaboratorsBadge
          owner={props.owner}
          collaborators={props.collaborators}
        />
      </div>
    </AdvertBackground>
  )
}

type Props = {
  advert: AdvertWithCompleteData
  className?: string
  disableActions?: boolean
}

export default function AdvertCard({
  advert,
  disableActions = false,
  ...props
}: Props & BookmarkProps) {
  console.log(advert)

  return (
    <Card
      name={advert.name}
      description={advert.description}
      type={advert.type}
      owner={advert.owner}
      gradient={advert.gradient}
      domain={advert.domain}
      collaborators={advert.collaborators?.map((c) => c.user) ?? undefined}
      {...props}
    />
  )
}

type DummyProps = { [K in Exclude<keyof CardProps, 'owner'>]?: CardProps[K] }

export function DummyAdvertCard(props: DummyProps) {
  const session = useSession()
  if (!session?.data?.user) return <AdvertCardSkeleton />
  if (!props.gradient) return <AdvertCardSkeleton />

  const user = session.data.user

  return (
    <Card
      name={props.name ?? 'Titre'}
      description={props.description ?? 'Description'}
      domain={props.domain ?? { name: 'Domaines' }}
      type={props.type ?? { name: 'Catégorie' }}
      gradient={props.gradient}
      owner={{
        first_name: user.first_name ?? 'Prénom',
        last_name: user.last_name ?? 'Nom',
        image: user.image ?? '#',
      }}
      collaborators={props.collaborators}
      onBookmark={() => {}}
      bookmarked={false}
      className={props.className}
      disableActions
    />
  )
}
