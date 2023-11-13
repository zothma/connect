import { Prisma } from "@prisma/client";
import Link from "next/link";

const professionalBridge = Prisma.validator<Prisma.ProfessionalBridgeDefaultArgs>()({})

type ProfessionalBridge = Prisma.ProfessionalBridgeGetPayload<typeof professionalBridge>
type Props = {
  type: ProfessionalBridge
}

export default function ProjectTypeBadge({ type }: Props) {
  return (
    <Link href="#passerelle" className="block active:scale-95 transition-transform">
      <span className="block bg-white rounded-full px-5 py-2 font-bold">
        {type.name}
      </span>
    </Link>
  )
}