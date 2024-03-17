import { generateAllAdvertColors } from './seeds/advertColor'
import { generateAllCollabRoles } from './seeds/advertCollaboratorRole'
import { generateAllProfessionalBridges } from './seeds/professionalBridge'
import { generateAllRomeDomains } from './seeds/romeDomain'
import { generateAllUsers } from './seeds/user'
import prisma from '../lib/prisma'

const dataStorage = new Map<string, any[]>()
dataStorage.get = (key) => dataStorage.get(key) ?? []

async function main() {
  dataStorage.set('professionalBridges', await generateAllProfessionalBridges())
  dataStorage.set('romeDomains', await generateAllRomeDomains())
  dataStorage.set('advertColors', await generateAllAdvertColors())
  dataStorage.set('advertCollaboratorRoles', await generateAllCollabRoles())
  dataStorage.set('users', await generateAllUsers())
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
