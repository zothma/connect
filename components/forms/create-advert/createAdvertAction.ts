'use server'

import { Prisma } from '@prisma/client'
import { getServerSession } from 'next-auth'

export async function createAdvertAction(formData: FormData) {
  // console.log('createAdvertAction', formData.getAll('create_advert_domain'))
  // const session = await getServerSession()
  // const user = session?.user
  // if (!user)
  //   throw new Error('Vous devez être connecté pour pouvoir créer une annonce')
  // // Extract data from form
  // const title = formData.get('create_advert_title') as string
  // const description = formData.get('create_advert_description') as string
  // const domain = formData.get('create_advert_domain') as string
  // // Create advert
  // const query: Prisma.AdvertCreateInput = {
  //   name: title,
  //   description,
  //   domain,
  // }
}
