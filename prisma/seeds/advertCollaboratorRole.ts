import prisma from '../../lib/prisma'
import { AdvertCollaboratorRoleNames } from '@/types/models'

const DATA: AdvertCollaboratorRoleNames[] = ['EDITOR', 'VIEWER']

export function generateCollaboratorRole(name: AdvertCollaboratorRoleNames) {
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

export function generateMultipleCollaboratorRoles(
  names: AdvertCollaboratorRoleNames[]
) {
  return Promise.all(names.map(generateCollaboratorRole))
}

export function generateAllCollaboratorRoles() {
  return generateMultipleCollaboratorRoles(DATA)
}
