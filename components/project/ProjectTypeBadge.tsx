import { Prisma } from "@prisma/client";

const professionalBridge = Prisma.validator<Prisma.ProfessionalBridgeDefaultArgs>()({})

type ProfessionalBridge = Prisma.ProfessionalBridgeGetPayload<typeof professionalBridge>
type Props = {
  type: ProfessionalBridge
}

export default function ProjectTypeBadge({ type }: Props) {
  return (
    <div className="bg-white rounded-full px-5 py-2 font-bold">
      {type.name}
    </div>
  )
}