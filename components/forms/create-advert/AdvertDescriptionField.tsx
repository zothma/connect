import Textarea from '@/components/common/Textarea'

type Props = {
  onChange: (value: string) => void
}

export default function AdvertDescriptionField({ onChange }: Props) {
  return (
    <Textarea
      id="create_advert_description"
      label="Description"
      rows={8}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}
