import Textarea from '@/components/common/Textarea'

type Props = {
  onChange: (value: string) => void
}

export default function AdvertBodyField({ onChange }: Props) {
  return (
    <Textarea
      id="create_advert_body"
      label="Corps de l'annonce"
      rows={8}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}
