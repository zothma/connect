import { slugify } from '@/lib/string'
import { ProfessionalBridge } from '@prisma/client'
import { Route } from 'next'
import Link from 'next/link'

type Data = Pick<ProfessionalBridge, 'name'>
type Props = {
  type: Data
  disableActions?: boolean
}

export default function AdvertTypeBadge({
  type,
  disableActions = false,
}: Props) {
  const professionalBridgeUrl = ('/discover/' + slugify(type.name)) as Route

  return (
    <Link
      href={disableActions ? '#' : professionalBridgeUrl}
      className="block active:scale-95 transition-transform">
      <span className="block bg-white rounded-full px-5 py-2 font-bold">
        {type.name}
      </span>
    </Link>
  )
}
