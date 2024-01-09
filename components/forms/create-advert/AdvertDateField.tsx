import Input from '@/components/common/Input'

type Props = {
  onChange: (value: string) => void
}

export default function AdvertDateField({ onChange }: Props) {
  return (
    <Input
      id="create_advert_start_date"
      type="date"
      label="Date de début"
    />
  )
}
