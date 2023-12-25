import prisma from '../../lib/prisma'
import { User } from '@prisma/client'
import { generateAdvert } from './advert'
import { getGeneratedData } from '../seed'

const DATA = [
  'Jane COOPER',
  'Jacob JONES',
  'Kristin WATSON',
  'Bessie COOPER',
  'Rober FOX',
  'Jennie WILSON',
]

function arrayRandom<Type>(array: Array<Type>): Type {
  return array[Math.floor(Math.random() * array.length)]
}

function generateOwnAdverts(owner: User, amount: number) {
  const promises = []

  for (let i = 0; i < amount; i++) {
    const domain = arrayRandom(getGeneratedData('romeDomains'))
    const type = arrayRandom(getGeneratedData('professionalBridges'))
    const color = arrayRandom(getGeneratedData('advertColors'))

    promises.push(generateAdvert(owner, domain, type, color))
  }

  return Promise.all(promises)
}

export async function generateUser(username: string) {
  const [firstName, lastName] = username.split(' ')
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com`
  const image = encodeURI(`https://api.multiavatar.com/${username}.svg`)

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      name: username,
      first_name: firstName,
      last_name: lastName,
      image,
    },
  })

  await generateOwnAdverts(user, 20)
  return user
}

export async function generateMultipleUsers(usernames: string[]) {
  return Promise.all(usernames.map(generateUser))
}

export async function generateAllUsers() {
  return generateMultipleUsers(DATA)
}
