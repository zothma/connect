import { Advert, AdvertColor } from '@prisma/client'
import { AdvertWithCompleteData } from './models'

type SimpleMessageReturnType = { message: string }
export type ApiErrorReturnType = SimpleMessageReturnType
export type ApiBookmarkActionReturnType = SimpleMessageReturnType

export type ApiBookmarkReturnType = {
  data: AdvertWithCompleteData[]
}

export type ApiAdvertColorReturnType = {
  data: AdvertColor[]
}

export type ApiAdvertReturnType = {
  cursor: Advert['id']
  data: AdvertWithCompleteData[]
}
