import prisma from '../lib/prisma'

function arrayRandom<Type>(array: Array<Type>): Type {
  return array[Math.floor(Math.random() * array.length)]
}

function arrayRange(size: number): Array<number> {
  return Array.from(Array(size).keys())
}

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
    '#FBF8CC',
    '#FDE4CF',
    '#FFCFD2',
    '#F1C0E8',
    '#CFBAF0',
    '#A3C4F3',
    '#90DBF4',
    '#8EECF5',
    '#98F5E1',
    '#B9FBC0',
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
      const image = encodeURI(`https://api.multiavatar.com/${fullName}`)

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
              name: `Projet ${lastName} ${i}`,
              description: `Description ${i}`,
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
