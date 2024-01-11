import { RomeDomain } from '@prisma/client'

type Data = Pick<RomeDomain, 'name'>

type Props = { domain: Data }

export default function AdvertDomain({ domain }: Props) {
  return <p className="text-lg">{domain.name}</p>
}
