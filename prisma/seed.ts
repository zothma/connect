import { LoremIpsum } from 'lorem-ipsum'
import prisma from '../lib/prisma'

function arrayRandom<Type>(array: Array<Type>): Type {
  return array[Math.floor(Math.random() * array.length)]
}

function arrayRange(size: number): Array<number> {
  return Array.from(Array(size).keys())
}

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    min: 4,
    max: 8,
  },
  wordsPerSentence: {
    min: 4,
    max: 16,
  },
})

async function main() {
  // Création des passerelles professionnelles (Alternance, Stage...)
  const professionalBridgeNames = [
    'Alternance',
    'Stage',
    'Junior Entreprise',
    'Projet',
    'Entrepreneuriat',
  ]
  const professionalBridges = await Promise.all(
    professionalBridgeNames.map((name) =>
      prisma.professionalBridge.upsert({
        where: { name },
        update: {},
        create: {
          name,
          description: `Description de ${name}`,
        },
      })
    )
  )
  console.log(professionalBridges)

  // Création des domaines d'emploi
  const romeDomainNames = [
    'Développement Informatique',
    'Cybersécurité',
    'Management',
  ]
  const romeDomains = await Promise.all(
    romeDomainNames.map((name) =>
      prisma.romeDomain.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  )
  console.log(romeDomains)

  // Création des utilisateurs et de leurs projets
  const projectColors = [
    'hsl(56, 85%, 90%)',
    'hsl(27, 92%, 90%)',
    'hsl(356, 100%, 90%)',
    'hsl(311, 64%, 90%)',
    'hsl(263, 64%, 90%)',
    'hsl(215, 77%, 90%)',
    'hsl(195, 82%, 90%)',
    'hsl(185, 84%, 90%)',
    // 'hsl(167, 82%, 90%)',
    'hsl(126, 89%, 87%)',
  ]

  const userNames = [
    'Jane COOPER',
    'Jacob JONES',
    'Kristin WATSON',
    'Bessie COOPER',
    'Rober FOX',
    'Jennie WILSON',
  ]

  const users = await Promise.all(
    userNames.map((name) => {
      const [firstName, lastName] = name.split(' ')
      const fullName = `${firstName} ${lastName}`
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com`
      const image = encodeURI(`https://api.multiavatar.com/${fullName}.svg`)

      return prisma.user.upsert({
        where: { email },
        update: {},
        create: {
          email,
          name: fullName,
          first_name: firstName,
          last_name: lastName,
          image,
          projects: {
            create: arrayRange(20).map((i) => ({
              name: `Projet ${firstName[0]}.${lastName} ${i}`,
              description: lorem.generateSentences(5),
              color: arrayRandom(projectColors),
              domainId: arrayRandom(romeDomains).id,
              typeId: arrayRandom(professionalBridges).id,
            })),
          },
        },
      })
    })
  )
  console.log(users)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
