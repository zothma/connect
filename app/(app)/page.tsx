import ButtonLink from '@/components/common/ButtonLink'
import SimpleLayout from '@/components/layout/SimpleLayout'

export default async function Home() {
  return (
    <SimpleLayout>
      <ButtonLink
        className="w-fit block md:hidden"
        href="/advert/create">
        Créer une annonce
      </ButtonLink>
    </SimpleLayout>
  )
}
