import { generateAllProfessionalBridges } from './seeds/professionalBridge'
import { generateAllRomeDomains } from './seeds/romeDomain'
import { generateAllAdvertColors } from './seeds/advertColor'
import prisma from '../lib/prisma'
import { generateAllUsers } from './seeds/user'

const dataStorage: { [key: string]: any[] } = {}

export function getGeneratedData(key: string) {
  return dataStorage[key] ?? []
}

async function main() {
  dataStorage.professionalBridges = await generateAllProfessionalBridges()
  dataStorage.romeDomains = await generateAllRomeDomains()
  dataStorage.advertColors = await generateAllAdvertColors()
  dataStorage.users = await generateAllUsers()
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
