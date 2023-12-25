import React from 'react'
import Container from '../common/Container'

type WrapperProps = {
  originColor?: string
  destinationColor?: string
  children: React.ReactNode
}

type BackgroundProps = {
  background: React.CSSProperties['background']
  className?: string
}

function SingleLineBackground({ background, className = '' }: BackgroundProps) {
  return (
    <Container className="mb-14 mt-4">
      <div
        className={'w-[70%] h-1 brightness-95 rounded-full ' + className}
        style={{ background }}
      />
    </Container>
  )
}

function RectangleBackground({ background, className = '' }: BackgroundProps) {
  return (
    <div
      className={'absolute top-0 right-0 bottom-0 left-0 -z-10 ' + className}
      style={{ background }}
    />
  )
}

export default function HeaderBackground({
  originColor = 'rgb(255,242,232)',
  destinationColor = 'rgb(234,230,255)',
  children,
}: WrapperProps) {
  const linearGradient = `linear-gradient(90deg, ${originColor} 12%, ${destinationColor} 88%)`

  return (
    <div className="relative">
      {children}

      <SingleLineBackground
        background={linearGradient}
        className="md:hidden"
      />
      <RectangleBackground
        background={linearGradient}
        className="hidden md:block"
      />
    </div>
  )
}
