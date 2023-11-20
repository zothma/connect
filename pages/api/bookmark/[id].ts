import { authConfig } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authConfig)

  if (!(session && session.user?.email))
    return res.status(403).json({ message: 'Non connecté' })

  if (req.method === 'POST')
    return await handlePost(req, res, session.user.email)
  if (req.method === 'DELETE')
    return await handleDelete(req, res, session.user.email)

  return res.status(403).json({ message: 'Méthode non prise en charge' })
}

async function handlePost(
  req: NextApiRequest,
  res: NextApiResponse,
  email: string
) {
  await prisma.user.update({
    where: { email },
    data: {
      bookmarks: {
        connect: { id: req.query.id as string },
      },
    },
  })

  return res.status(200).json({})
}

async function handleDelete(
  req: NextApiRequest,
  res: NextApiResponse,
  email: string
) {
  await prisma.user.update({
    where: { email },
    data: {
      bookmarks: {
        disconnect: { id: req.query.id as string },
      },
    },
  })

  return res.status(200).json({})
}
