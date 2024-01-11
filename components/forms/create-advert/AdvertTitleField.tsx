import Input from '@/components/common/Input'

type Props = {
  onChange: (value: string) => void
}

export default function AdvertTitleField({ onChange }: Props) {
  return (
    <Input
      id="create_advert_title"
      type="text"
      label="Titre"
      onChange={(event) => onChange(event.target.value)}
    />
  )
}
