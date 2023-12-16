import prisma from '../../lib/prisma'

const DATA = [
  'Alternance',
  'Stage',
  'Junior Entreprise',
  'Projet',
  'Entrepreneuriat',
]

export function generateProfessionalBridge(name: string) {
  return prisma.professionalBridge.upsert({
    where: { name },
    update: {},
    create: {
      name,
      description: `Description de ${name}`,
    },
  })
}

export function generateMultipleProfessionalBridges(names: string[]) {
  return Promise.all(names.map(generateProfessionalBridge))
}

export function generateAllProfessionalBridges() {
  return generateMultipleProfessionalBridges(DATA)
}
