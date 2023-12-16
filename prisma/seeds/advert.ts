import prisma from '../../lib/prisma'
import { generateRandomGradientCoordinates } from '../../lib/color'
import {
  AdvertColor,
  ProfessionalBridge,
  RomeDomain,
  User,
} from '@prisma/client'
import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 4,
    max: 8,
  },
  wordsPerSentence: {
    min: 4,
    max: 16,
  },
})

function connect(object: { id: any }) {
  return {
    connect: {
      id: object.id,
    },
  }
}

export function generateAdvert(
  owner: User,
  domain: RomeDomain,
  type: ProfessionalBridge,
  color: AdvertColor
) {
  return prisma.advert.create({
    data: {
      name: `Projet ${owner.name} `,
      description: lorem.generateSentences(5),
      owner: connect(owner),
      domain: connect(domain),
      type: connect(type),
      gradient: {
        create: {
          ...generateRandomGradientCoordinates(),
          colorId: color.id,
        },
      },
    },
  })
}
