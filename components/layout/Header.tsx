'use client'

import Link from 'next/link'
import React from 'react'
import Container from '../common/Container'
import Title from '../common/Title'
import useHeaderVisibility from '@/hooks/useHeaderVisibility'
import useObserver from '@/hooks/useObserver'
import Background from './HeaderBackground'

type LinkProps = React.ComponentPropsWithoutRef<typeof Link>
type ActionProps = Omit<LinkProps, 'children'> & { text: string }

type HeaderProps = {
  title: string
  description: string
  action?: ActionProps
}
type BackgroundProps = React.ComponentPropsWithoutRef<typeof Background>
type Props = HeaderProps & BackgroundProps

function generateLink(action: ActionProps | undefined) {
  if (!action) return <></>

  const { text, ...linkProps } = action
  return <Link {...linkProps}>{text}</Link>
}

export default function Header({
  title,
  description,
  action,
  ...backgroundProps
}: Props) {
  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  }

  const { setIsVisible } = useHeaderVisibility()
  const ref = useObserver<HTMLDivElement>(setIsVisible, observerOptions)

  return (
    <Background {...backgroundProps}>
      <div
        className="pt-11 pb-6 md:pt-28 md:pb-20"
        ref={ref}>
        <Container className="flex flex-col gap-8">
          <Title level={1}>{title}</Title>
          <p className="max-w-2xl text-lg">{description}</p>
          {generateLink(action)}
        </Container>
      </div>
    </Background>
  )
}
