import IconSvg from '@/components/common/IconSvg'
import React from 'react'

export type ToastData = {
  id: number
  message: String
}

export type SelectOption = {
  value: string
  label: string
  icon?: React.ComponentProps<typeof IconSvg>['icon']
  selectedIcon?: React.ComponentProps<typeof IconSvg>['icon']
}
