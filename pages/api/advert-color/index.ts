import prisma from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const colors = await prisma.advertColor.findMany()
  return res.status(200).json({ data: colors })
}
