import prisma from '../../lib/prisma'
import { AdvertCollaboratorRoleName } from '@/types/models'

type Name = AdvertCollaboratorRoleName

const DATA: Name[] = ['EDITOR', 'VIEWER']

export function generateCollabRole(name: Name) {
  return prisma.advertCollaboratorRole.upsert({
    where: {
      name,
    },
    update: {},
    create: {
      name,
    },
  })
}

export function generateMultipleCollabRoles(names: Name[]) {
  return Promise.all(names.map(generateCollabRole))
}

export function generateAllCollabRoles() {
  return generateMultipleCollabRoles(DATA)
}
