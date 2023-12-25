import { Advert } from '@prisma/client'
import { AdvertWithCompleteData } from './models'

type SimpleMessageReturnType = { message: string }
export type ApiErrorReturnType = SimpleMessageReturnType
export type ApiBookmarkActionReturnType = SimpleMessageReturnType

export type ApiBookmarkReturnType = {
  data: AdvertWithCompleteData[]
}

export type ApiAdvertReturnType = {
  cursor: Advert['id']
  data: AdvertWithCompleteData[]
}
