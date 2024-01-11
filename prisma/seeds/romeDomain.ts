import { readFile } from 'fs'
import prisma from '../../lib/prisma'
import { RomeDomain } from '@prisma/client'

// const DATA = ['Développement Informatique', 'Cybersécurité', 'Management']
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

export function generateAllRomeDomains(): Promise<RomeDomain[]> {
  const stringToArray = (string: string) => {
    return string.split(',')
  }

  return new Promise((resolve, reject) => {
    readFile(`prisma/data/rome/${FILE_NAME}`, 'utf8', async (err, data) => {
      if (err) {
        console.error(err)
        reject(err)
        return []
      }

      const json = JSON.parse(data)
      const domains = json.map((domain: any) => domain.libelle_rome)
      resolve(await generateMultipleRomeDomains(domains))
    })
  })
}
