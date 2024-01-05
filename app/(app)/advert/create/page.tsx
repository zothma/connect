import Title from '@/components/common/Title'
import CreateAdvertForm from '@/components/forms/CreateAdvertForm'
import SimpleLayout from '@/components/layout/SimpleLayout'

export default function CreateAdvertPage() {
  return (
    <SimpleLayout>
      <Title
        level={1}
        className="mt-16 mb-10">
        Créer une annonce
      </Title>

      <div className="flex gap-24">
        <CreateAdvertForm />
      </div>
    </SimpleLayout>
  )
}
