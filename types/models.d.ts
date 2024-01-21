import { Prisma } from '@prisma/client'

const advertData = Prisma.validator<Prisma.AdvertDefaultArgs>()({
  include: {
    domain: true,
    type: true,
    owner: true,
    gradient: {
      include: {
        color: true,
      },
    },
  },
})

const advertGradientCoorData =
  Prisma.validator<Prisma.AdvertGradientDefaultArgs>()({
    select: {
      originX: true,
      originY: true,
    },
  })
const advertGradientData = Prisma.validator<Prisma.AdvertGradientDefaultArgs>()(
  {
    include: {
      color: true,
    },
  }
)

export type AdvertWithCompleteData = Prisma.AdvertGetPayload<typeof advertData>
export type AdvertGradientCoordinates = Prisma.AdvertGradientGetPayload<
  typeof advertGradientCoorData
>
export type AdvertGradientWithColor = Prisma.AdvertGradientGetPayload<
  typeof advertGradientData
>
export type AdvertCollaboratorRoleNames = 'EDITOR' | 'VIEWER'
