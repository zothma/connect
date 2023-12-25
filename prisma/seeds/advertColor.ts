import prisma from '../../lib/prisma'

type HSLColor = {
  h: number
  s: number
  l: number
}

const DATA: HSLColor[] = [
  { h: 60, s: 5, l: 88 },
  { h: 60, s: 3, l: 82 },
  { h: 22, s: 34, l: 83 },
  { h: 25, s: 76, l: 87 },
  { h: 43, s: 82, l: 89 },
  { h: 167, s: 33, l: 84 },
  { h: 207, s: 61, l: 86 },
  { h: 264, s: 54, l: 87 },
  { h: 327, s: 63, l: 86 },
  { h: 356, s: 81, l: 88 },
]

export function generateAdvertColor(color: HSLColor) {
  return prisma.advertColor.upsert({
    where: {
      hsl_unique_key: {
        hue: color.h,
        saturation: color.s,
        lightness: color.l,
      },
    },
    update: {},
    create: {
      hue: color.h,
      saturation: color.s,
      lightness: color.l,
    },
  })
}

export function generateMultipleAdvertColors(colors: HSLColor[]) {
  return Promise.all(colors.map(generateAdvertColor))
}

export function generateAllAdvertColors() {
  return generateMultipleAdvertColors(DATA)
}
