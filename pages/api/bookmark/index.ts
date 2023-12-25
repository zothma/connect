import { authConfig } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authConfig)

  if (session && session.user?.email) {
    const bookmarks = await prisma.advert.findMany({
      where: {
        bookmarkedBy: {
          some: {
            email: session.user.email,
          },
        },
      },
      include: {
        domain: true,
        type: true,
        owner: true,
      },
    })

    return res.status(200).json({ data: bookmarks })
  } else {
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
