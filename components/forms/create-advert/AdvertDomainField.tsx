import { AsyncSmartSelect } from '@/components/common/smart_select/SmartSelect'
import { ApiRomeDomainReturnType } from '@/types/api'

type Props = {
  onChange: (value: { name: string; id: string }) => void
}

export default function AdvertDomainField({ onChange }: Props) {
  return (
    <AsyncSmartSelect
      id="create_advert_domain"
      label="Domaines"
      isMulti={false}
      loadOptions={(intputValue, callback) => {
        fetch('/api/rome-domain?search=' + intputValue)
          .then((res) => res.json())
          .then((data: ApiRomeDomainReturnType) => {
            callback(
              data.data.map((domain) => ({
                label: domain.name,
                value: domain.id,
              }))
            )
          })
      }}
      onChange={(option) => onChange({ name: option.label, id: option.value })}
    />
  )
}
