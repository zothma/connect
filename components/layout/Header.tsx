'use client'

import React from 'react'
import Container from '../common/Container'
import Title from '../common/Title'
import useHeaderVisibility from '@/hooks/useHeaderVisibility'
import useObserver from '@/hooks/useObserver'
import Background, { HeaderBackgroundGradient } from './HeaderBackground'
import Button from '../common/Button'
import ButtonLink from '../common/ButtonLink'

type ButtonProps = React.ComponentPropsWithoutRef<typeof Button>
type ButtonLinkProps = React.ComponentPropsWithoutRef<typeof ButtonLink>
type ActionProps = Omit<ButtonProps, 'children'> & { text: string }
type LinkProps = Omit<ButtonLinkProps, 'children'> & { text: string }

type HeaderProps = {
  title: string
  description: string
  action?: ActionProps
  link?: LinkProps
}
type BackgroundProps = HeaderBackgroundGradient
type Props = HeaderProps & BackgroundProps

function generateButton(action: ActionProps | undefined) {
  if (!action) return <></>

  const { text, ...buttonProps } = action
  // return <Link {...linkProps}>{text}</Link>
  return <Button {...buttonProps}>{text}</Button>
}

function generateLink(link: LinkProps | undefined) {
  if (!link) return <></>

  const { text, ...buttonProps } = link
  return <ButtonLink {...buttonProps}>{text}</ButtonLink>
}

export default function Header({
  title,
  description,
  action,
  link,
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
        <Container className="flex flex-col gap-8 items-start">
          <Title level={1}>{title}</Title>
          <p className="max-w-2xl text-lg">{description}</p>
          {generateButton(action)}
          {generateLink(link)}
        </Container>
      </div>
    </Background>
  )
}
