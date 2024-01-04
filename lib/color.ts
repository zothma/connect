import {
  AdvertGradientCoordinates,
  AdvertGradientWithColor,
} from '@/types/models'
import { AdvertColor } from '@prisma/client'
import prisma from './prisma'
import useFetch from '@/hooks/useFetch'
import { Route } from 'next'
import { ApiAdvertColorReturnType } from '@/types/api'

type MinimalGradientParams = 'color' | 'originX' | 'originY'
type MinimalGradient = Pick<AdvertGradientWithColor, MinimalGradientParams>

/**
 * Returns a number between min and max
 * @returns
 */
function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Generates 2 random coordinates X and Y for the center of the
 * radial gradient
 */
export function generateRandomGradientCoordinates(): AdvertGradientCoordinates {
  return {
    originX: randomBetween(0, 100),
    originY: randomBetween(0, 100),
  }
}

export function generateFetchRandomGradient(): () => Promise<MinimalGradient> {
  const fetch = useFetch()
  const url: Route = '/api/advert-color'

  return async () => {
    const response = await fetch(url)
    const colors: ApiAdvertColorReturnType = await response.json()

    const randomIndex = randomBetween(0, colors.data.length - 1)
    const randomCoordinates = generateRandomGradientCoordinates()

    return {
      color: colors.data[randomIndex],
      originX: randomCoordinates.originX,
      originY: randomCoordinates.originY,
    }
  }
}

/**
 * Turns an AdvertColor into a CSS-friendly HSL string
 * @param color
 */
export function advertColorToHsl(color: AdvertColor) {
  return `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`
}

/**
 * Turns a Gradient into a CSS-friendly radial gradient
 * @param gradient
 */
export function gradientToCss(gradient: MinimalGradient) {
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

export type { MinimalGradient }
