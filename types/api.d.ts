import { Project } from '@prisma/client'
import { ProjectWithCompleteData } from './models'

type SimpleMessageReturnType = { message: string }
export type ApiErrorReturnType = SimpleMessageReturnType
export type ApiBookmarkActionReturnType = SimpleMessageReturnType

export type ApiBookmarkReturnType = {
  data: ProjectWithCompleteData[]
}

export type ApiProjectReturnType = {
  cursor: Project['id']
  data: ProjectWithCompleteData[]
}
