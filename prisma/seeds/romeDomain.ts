import prisma from '../../lib/prisma'

const DATA = ['Développement Informatique', 'Cybersécurité', 'Management']

export function generateRomeDomain(name: string) {
  return prisma.romeDomain.upsert({
    where: { name },
    update: {},
    create: { name },
  })
}

export function generateMultipleRomeDomains(names: string[]) {
  return Promise.all(names.map(generateRomeDomain))
}

export function generateAllRomeDomains() {
  return generateMultipleRomeDomains(DATA)
}
