import { DummyAdvertCard } from '@/components/advert/AdvertCard'
import useFetch from '@/hooks/useFetch'
import { MinimalGradient, generateRandomGradient } from '@/lib/color'
import { ApiAdvertColorReturnType } from '@/types/api'
import { Route } from 'next'
import { useEffect, useState } from 'react'

type AdvertCardProps = React.ComponentProps<typeof DummyAdvertCard>

const fetchRoute: Route = '/api/advert-color'

export default function CreateAdvertPreview(props: AdvertCardProps) {
  const [gradient, setGradient] = useState<MinimalGradient | null>(null)
  const fetch = useFetch()

  useEffect(() => {
    fetch(fetchRoute)
      .then((res) => res.json())
      .then((data: ApiAdvertColorReturnType) => {
        setGradient(generateRandomGradient(data.data))
      })
  }, [])

  return (
    <div className="w-[500px] shrink-0">
      <DummyAdvertCard
        {...props}
        gradient={gradient}
      />
    </div>
  )
}
