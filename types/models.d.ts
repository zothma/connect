import { Prisma } from '@prisma/client'

const data = Prisma.validator<Prisma.AdvertDefaultArgs>()({
  include: {
    domain: true,
    type: true,
    owner: true,
  },
})

export type AdvertWithCompleteData = Prisma.AdvertGetPayload<typeof data>
