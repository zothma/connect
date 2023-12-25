import { slugify } from '@/lib/string'
import { ProfessionalBridge } from '@prisma/client'
import { Route } from 'next'
import Link from 'next/link'

type Props = {
  type: ProfessionalBridge
}

export default function AdvertTypeBadge({ type }: Props) {
  return (
    <Link
      href={('/discover/' + slugify(type.name)) as Route}
      className="block active:scale-95 transition-transform">
      <span className="block bg-white rounded-full px-5 py-2 font-bold">
        {type.name}
      </span>
    </Link>
  )
}
