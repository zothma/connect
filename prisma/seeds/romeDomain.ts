import { readFile } from 'fs/promises'
import prisma from '../../lib/prisma'

const FILE_NAME = 'arborescence_secteur_activite.json'

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

export async function generateAllRomeDomains() {
  const data = await readFile(`prisma/data/rome/${FILE_NAME}`, 'utf8')
  const json = JSON.parse(data)
  const domains = json.map((domain: any) => domain.libelle_rome)

  return generateMultipleRomeDomains(domains)
}
