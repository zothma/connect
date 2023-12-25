import AdvertContainer from '@/components/advert/AdvertContainer'
import HeaderLayout from '@/components/layout/HeaderLayout'
import prisma from '@/lib/prisma'
import { slugify } from '@/lib/string'
import { notFound } from 'next/navigation'

type HeaderProps = React.ComponentPropsWithoutRef<typeof HeaderLayout>
type HeaderOptions = HeaderProps['headerOptions']
type Params = { bridgeSlug: string }
type Props = { params: Params }

export default async function BridgePage({ params }: Props) {
  const { bridgeSlug } = params

  // Ensure professional bridge is existing
  const bridges = await prisma.professionalBridge.findMany()
  const currentBridge = bridges.filter((b) => slugify(b.name) == bridgeSlug)
  if (currentBridge.length != 1) return notFound()

  // Prepare the adverts
  const url = new URL('/api/advert', process.env.BASE_URL)
  const headerOptions: HeaderOptions = {
    title: currentBridge[0].name,
    description: currentBridge[0].description,
    link: {
      text: 'En savoir plus',
      href: '#',
    },
  }

  return (
    <HeaderLayout headerOptions={headerOptions}>
      <AdvertContainer fetchUrl={url.toString()} />
    </HeaderLayout>
  )
}
