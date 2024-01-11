'use server'

import { generateRandomGradient } from '@/lib/color'
import prisma from '@/lib/prisma'
import { Advert, Prisma } from '@prisma/client'
import { getServerSession } from 'next-auth'

type SuccessResponse = { success: true; advertId: Advert['id'] }
type ErrorResponse = { success: false; error: string }
type Response = SuccessResponse | ErrorResponse

export async function createAdvertAction(
  prevState: any,
  formData: FormData
): Promise<Response> {
  const session = await getServerSession()
  const user = session?.user
  if (!user?.email)
    throw new Error('Vous devez être connecté pour pouvoir créer une annonce')

  // Extract data from form
  const title = formData.get('create_advert_title') as string
  const description = formData.get('create_advert_description') as string
  const domainId = formData.get('create_advert_domain') as string
  const typeId = formData.get('create_advert_type') as string

  // Create advert
  const queryData: Prisma.AdvertCreateInput = {
    name: title,
    description,
    owner: { connect: { email: user.email } },
    domain: { connect: { id: parseInt(domainId) } },
    type: { connect: { id: parseInt(typeId) } },
  }
  const advertCreatePromise = prisma.advert.create({ data: queryData })

  // Create advert gradient
  const advertGradientPromise = prisma.advertColor
    .findMany()
    .then(async (colors) => {
      const gradient = generateRandomGradient(colors)
      const queryData: Prisma.AdvertGradientCreateInput = {
        advert: { connect: { id: (await advertCreatePromise).id } },
        color: { connect: { id: gradient.color.id } },
        originX: gradient.originX,
        originY: gradient.originY,
      }

      await prisma.advertGradient.create({ data: queryData })
    })

  try {
    await Promise.all([advertCreatePromise, advertGradientPromise])
  } catch (error) {
    return {
      success: false,
      error: "Une erreur s'est produite durant la création du formulaire",
    }
  }

  return { success: true, advertId: (await advertCreatePromise).id }
}
