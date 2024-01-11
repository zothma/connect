import IconSvg from '@/components/common/IconSvg'
import React from 'react'

export type ToastType = 'ERROR' | 'WARNING' | 'INFO' | 'SUCCESS'
export type ToastData = {
  id: number
  message: String
  type?: ToastType
}

export type SelectOption = {
  value: string
  label: string
  icon?: React.ComponentProps<typeof IconSvg>['icon']
  selectedIcon?: React.ComponentProps<typeof IconSvg>['icon']
}
