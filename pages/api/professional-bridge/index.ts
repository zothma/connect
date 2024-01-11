import prisma from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const professionalBridges = await prisma.professionalBridge.findMany({
    where: {
      name: {
        contains: (req.query.search as string) ?? undefined,
        mode: 'insensitive',
      },
    },
  })
  return res.status(200).json({ data: professionalBridges })
}
