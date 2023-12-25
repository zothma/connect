import AdvertContainer from '@/components/advert/AdvertContainer'
import HeaderLayout from '@/components/layout/HeaderLayout'
import React from 'react'

type HeaderProps = React.ComponentPropsWithoutRef<typeof HeaderLayout>
type HeaderOptions = HeaderProps['headerOptions']

export default function DiscoverPage() {
  const url = new URL('/api/advert', process.env.BASE_URL)
  const headerOptions: HeaderOptions = {
    title: 'Découvrir',
    description:
      'Parcourez les annonces et profils qui ' +
      'vous correspondent le plus, ou laissez MeetAct ' +
      'vous emporter vers ce qui se fait de mieux dans ' +
      'chaque domaine.',
  }

  return (
    <HeaderLayout headerOptions={headerOptions}>
      <AdvertContainer fetchUrl={url.toString()} />
    </HeaderLayout>
  )
}
