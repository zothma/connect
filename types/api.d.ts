import {
  Advert,
  AdvertColor,
  ProfessionalBridge,
  RomeDomain,
} from '@prisma/client'
import { AdvertWithCompleteData } from './models'

type SimpleMessageReturnType = { message: string }
export type ApiErrorReturnType = SimpleMessageReturnType
export type ApiBookmarkActionReturnType = SimpleMessageReturnType

type SimpleApiReturnType<T> = {
  data: T[]
}

export type ApiBookmarkReturnType = SimpleApiReturnType<AdvertWithCompleteData>
export type ApiAdvertColorReturnType = SimpleApiReturnType<AdvertColor>
export type ApiRomeDomainReturnType = SimpleApiReturnType<RomeDomain>
export type ApiProfessionalBridgeReturnType =
  SimpleApiReturnType<ProfessionalBridge>

export type ApiAdvertReturnType = {
  cursor: Advert['id']
  data: AdvertWithCompleteData[]
}
