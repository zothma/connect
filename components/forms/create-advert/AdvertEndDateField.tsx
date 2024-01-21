import Input from '@/components/common/Input'

type Props = {
  onChange: (value: string) => void
}

export default function AdvertEndDateField({ onChange }: Props) {
  return (
    <Input
      id="create_advert_end_date"
      type="date"
      label="Date de fin"
      onChange={(event) => onChange(event.target.value)}
    />
  )
}
