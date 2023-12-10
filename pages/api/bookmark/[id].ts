import { authConfig } from '@/lib/auth'
import prisma from '@/lib/prisma'
import {
  ApiBookmarkActionReturnType as ApiReturnType,
  ApiErrorReturnType,
} from '@/types/api'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

type Response = NextApiResponse<ApiErrorReturnType | ApiReturnType>

export default async function handler(req: NextApiRequest, res: Response) {
  const session = await getServerSession(req, res, authConfig)

  if (!(session && session.user?.email))
    return res.status(401).json({ message: 'Unauthorized' })

  if (req.method === 'POST')
    return await handlePost(req, res, session.user.email)
  if (req.method === 'DELETE')
    return await handleDelete(req, res, session.user.email)

  return res.status(405).json({ message: 'Method Not Allowed' })
}

async function updateDatabse(
  action: 'connect' | 'disconnect',
  email: string,
  id: string
) {
  await prisma.user.update({
    where: { email },
    data: {
      bookmarks: {
        [action]: { id },
      },
    },
  })
}

async function handlePost(req: NextApiRequest, res: Response, email: string) {
  await updateDatabse('connect', email, req.query.id as string)
  return res.status(200).json({ message: 'Successfully created bookmark' })
}

async function handleDelete(req: NextApiRequest, res: Response, email: string) {
  await updateDatabse('disconnect', email, req.query.id as string)
  return res.status(200).json({ message: 'Successfully deleted bookmark' })
}
