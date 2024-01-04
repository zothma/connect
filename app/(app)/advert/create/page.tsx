'use client'

import AdvertCard, { DummyAdvertCard } from '@/components/advert/AdvertCard'
import Input from '@/components/common/Input'
import Title from '@/components/common/Title'
import SimpleLayout from '@/components/layout/SimpleLayout'
import React, { useState } from 'react'

type AdvertCardProps = React.ComponentProps<typeof AdvertCard>

export default function CreateAdvertPage() {
  const [data, setData] = useState<{ [key: string]: string }>({})
  const dataSetKey = (key: string, value: string) => {}

  return (
    <SimpleLayout>
      <div className="mt-16 flex flex-col gap-8 items-stretch">
        <Title level={1}>Créer une annonce</Title>
        <p>Annonce simple</p>

        <Input
          id="create_advert_title"
          type="text"
          label="Titre"
          onChange={(event) => setData((previous) => ({ ...previous }))}
        />
        <Input
          id="create_advert_domains"
          type="text"
          label="Domaines"
        />
        <DummyAdvertCard />
      </div>
    </SimpleLayout>
  )
}
