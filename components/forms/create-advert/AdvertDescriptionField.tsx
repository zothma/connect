import Textarea from '@/components/common/Textarea'

type Props = {
  onChange: (value: string) => void
}

export default function AdvertDescriptionField({ onChange }: Props) {
  return (
    <Textarea
      id="create_advert_description"
      label="Courte description"
      rows={2}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}
