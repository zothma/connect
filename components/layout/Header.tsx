'use client'

import Link from 'next/link'
import React from 'react'
import Container from '../common/Container'
import Title from '../common/Title'
import useHeaderVisibility from '@/hooks/useHeaderVisibility'
import useObserver from '@/hooks/useObserver'

type LinkProps = React.ComponentPropsWithoutRef<typeof Link>
type ActionProps = Omit<LinkProps, 'children'> & { text: string }

type Props = {
  title: string
  description: string
  action?: ActionProps
  originColor?: string
  destinationColor?: string
}

function generateLink(action: ActionProps | undefined) {
  if (!action) return <></>

  const { text, ...linkProps } = action
  return <Link {...linkProps}>{text}</Link>
}

function generateLinearGradient(originColor: string, destinationColor: string) {
  return `linear-gradient(90deg, ${originColor} 12%, ${destinationColor} 88%)`
}

export default function Header({
  title,
  description,
  action,
  originColor = 'rgb(255,242,232)',
  destinationColor = 'rgb(234,230,255)',
}: Props) {
  const { setIsVisible } = useHeaderVisibility()
  const ref = useObserver<HTMLDivElement>(
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    },
    setIsVisible
  )

  return (
    <div className="relative pt-11 pb-6 md:pt-28 md:pb-20" ref={ref}>
      <Container className="flex flex-col gap-8">
        <Title level={1}>{title}</Title>
        <p className="max-w-2xl text-lg">{description}</p>
        {generateLink(action)}

        {/* Gradient background */}
        <div
          className="w-[70%] h-1 brightness-95 rounded-full md:absolute md:top-0 md:right-0 md:bottom-0 md:left-0 md:h-[unset] md:w-[unset] md:-z-10 md:brightness-100 md:rounded-none"
          style={{
            background: generateLinearGradient(originColor, destinationColor),
          }}></div>
      </Container>
    </div>
  )
}
