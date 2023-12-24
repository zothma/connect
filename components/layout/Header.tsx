import Link from 'next/link'
import React from 'react'
import Container from '../common/Container'
import Title from '../common/Title'

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
  const gradient = generateLinearGradient(originColor, destinationColor)

  return (
    <div className="pt-24 pb-16" style={{ background: gradient }}>
      <Container className="flex flex-col gap-6">
        <Title level={1}>{title}</Title>
        <p className="max-w-2xl">{description}</p>
        {generateLink(action)}
      </Container>
    </div>
  )
}
