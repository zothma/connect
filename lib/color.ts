import {
  AdvertGradientCoordinates,
  AdvertGradientWithColor,
} from '@/types/models'
import { AdvertColor } from '@prisma/client'

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function generateRandomGradientCoordinates(): AdvertGradientCoordinates {
  return {
    originX: randomBetween(0, 100),
    originY: randomBetween(0, 100),
  }
}

export function advertColorToHsl(color: AdvertColor) {
  return `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`
}

export function gradientToCss(gradient: AdvertGradientWithColor) {
  const originCoordinates = `${gradient.originX}% ${gradient.originY}%`
  const coordinates = `${originCoordinates}`

  const colorOrigin = advertColorToHsl({
    ...gradient.color,
    lightness: gradient.color.lightness - 2,
  })
  const colorDestination = advertColorToHsl({
    ...gradient.color,
    lightness: gradient.color.lightness + 5,
  })

  return `radial-gradient(ellipse at ${coordinates}, ${colorOrigin}, ${colorDestination})`
}
