import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result_size = req.query.size ? parseInt(req.query.size as string) : 12

  const query: Prisma.AdvertFindManyArgs = {
    take: result_size,
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
    orderBy: {
      id: 'asc',
    },
  }

  if (req.query.cursor) {
    query.cursor = { id: req.query.cursor as string }
    query.skip = 1
  }

  const adverts = await prisma.advert.findMany(query)

  return res.status(200).json({
    cursor: adverts.length > 0 ? adverts[result_size - 1].id : '',
    data: adverts,
  })
}
