import Input from '@/components/common/Input'

type Props = {
  onChange: (value: string) => void
}

export default function AdvertStartDateField({ onChange }: Props) {
  return (
    <Input
      id="create_advert_start_date"
      type="date"
      label="Date de début"
      onChange={(event) => onChange(event.target.value)}
    />
  )
}
