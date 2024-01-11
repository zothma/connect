'use client'

import { AsyncSmartSelect } from '@/components/common/smart_select/SmartSelect'
import { ApiProfessionalBridgeReturnType } from '@/types/api'
import React from 'react'

type Props = {
  onChange: (value: { name: string; id: string }) => void
}

export default function AdvertTypeField(props: Props) {
  return (
    <AsyncSmartSelect
      id="create_advert_type"
      label="Catégorie d'annonce"
      isMulti={false}
      loadOptions={(intputValue, callback) => {
        fetch('/api/professional-bridge?search=' + intputValue)
          .then((res) => res.json())
          .then((data: ApiProfessionalBridgeReturnType) => {
            callback(
              data.data.map((domain) => ({
                label: domain.name,
                value: domain.id,
              }))
            )
          })
      }}
      onChange={(option) =>
        props.onChange({ name: option.label, id: option.value })
      }
    />
  )
}
