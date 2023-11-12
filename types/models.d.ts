import { Prisma } from '@prisma/client'

const data = Prisma.validator<Prisma.ProjectDefaultArgs>()({
  include: {
    domain: true,
    type: true,
    owner: true,
  },
})

export type ProjectWithCompleteData = Prisma.ProjectGetPayload<typeof data>
